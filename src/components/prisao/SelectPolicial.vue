<template>
  <h3 class="text-lg font-bold text-gray-500">SELECT THE POLICE OFFICERS INVOLVED IN THE ARREST</h3>

  <div
    class="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow flex gap-4 items-center">

    <div class="bg-blue-100 px-2 py-2 rounded flex items-center" v-for="(officer, index) in selectedOfficers"
      :key="index">
      <span>{{ `${officer.global_name} | ${officer.id}` }}</span>
      <button class="ml-2 font-bold text-md hover:text-gray-400" @click="removeOfficer(officer)">
        <i class="fas fa-times"></i>
      </button>
    </div>

    <input v-model="officerSearchQuery" type="text" class="officers-input" placeholder="Search officers..." />
  </div>

  <div v-if="filteredOfficers.length"
    class="w-full bg-white text-slate-700 text-sm border border-slate-200 rounded px-3 py-3 shadow-sm max-h-36 overflow-auto">
    <p v-for="(officer, index) in filteredOfficers" :key="index"
      class="px-2 py-2 hover:bg-gray-100 transition-all duration-150 ease-in-out cursor-pointer"
      @click="selectOfficer(officer)">
      {{ `${officer.global_name} | ${officer.id}` }}
    </p>
  </div>

  <div v-else-if="officerSearchQuery"
    class="w-full bg-white text-slate-700 text-sm border border-slate-200 rounded px-3 py-3 shadow-sm max-h-36 overflow-auto">
    <p class="px-2 py-2 text-gray-500">No officers found.</p>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue';
import { useStore } from '@/store';
import { NotificationType } from '@/interfaces/INotification';
import ICop from '@/interfaces/ICop';
import { GET_COP } from '@/store/action-types';
import useNotifier from '@/hooks/notifier';

const store = useStore();
const { notify } = useNotifier();

const officerSearchQuery = ref('');
const selectedOfficers = ref<ICop[]>([]);
const officersList = ref<ICop[]>([]);
const filteredOfficers = ref<ICop[]>([]);

const fetchCops = async () => {
  try {
    await store.dispatch(GET_COP);
    officersList.value = store.state.cop.cops;
  } catch (error) {
    notify(NotificationType.DANGER, 'Error', 'Failed to fetch officers.');
    officersList.value = [];
  }
};

const selectOfficer = (officer: ICop) => {
  const isSelected = selectedOfficers.value.some(el => el.id === officer.id);

  if (isSelected) {
    selectedOfficers.value = selectedOfficers.value.filter(el => el.id !== officer.id);
  } else {
    selectedOfficers.value.push(officer);
  }

  officerSearchQuery.value = '';
};

const removeOfficer = (officer: ICop) => {
  selectedOfficers.value = selectedOfficers.value.filter(el => el.id !== officer.id);
};

watch(officerSearchQuery, (query) => {
  if (!query.trim() || !Array.isArray(officersList.value)) {
    filteredOfficers.value = [];
    return;
  }
  filteredOfficers.value = officersList.value.filter(el =>
    el.global_name.toLowerCase().includes(query.toLowerCase()) || el.id.toString().includes(query)
  );
});

onMounted(fetchCops);
</script>
