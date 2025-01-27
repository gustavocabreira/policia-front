<template>
  <h3 class="text-lg font-bold text-gray-500">SELECT THE POLICE OFFICERS INVOLVED IN THE ARREST</h3>
  <div
    class="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow flex gap-4 items-center">
    <div class="bg-blue-100 px-2 py-2 rounded" v-for="(officer, index) in selectedOfficers" :key="index">
      <span>
        {{ `${officer.name} | ${officer.id}` }}
      </span>
      <button class="ml-2 font-bold text-md hover:text-gray-400" @click="removeOfficer(officer)"><i
          class="fas fa-times"></i></button>
    </div>

    <input v-model="officerSearchQuery" type="text" class="officers-input" />
  </div>
  <div v-if="filteredOfficers.length"
    class="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow max-h-36 overflow-auto">
    <p v-for="(officer, index) in filteredOfficers" :key="index"
      class="px-2 py-2 hover:bg-gray-100 transition-all duration-150 ease-in-out cursor-pointer"
      @click="selectOfficer(officer)">{{ `${officer.name} | ${officer.id}` }}
    </p>
  </div>
  <div v-else-if="officerSearchQuery && !filteredOfficers.length"
    class="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow max-h-36 overflow-auto">
    <p class="px-2 py-2 hover:bg-gray-100 transition-all duration-150 ease-in-out cursor-pointer">No officers
      found.
    </p>
  </div>
</template>

<script lang="ts">
import IOfficer from '@/interfaces/IOfficer';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SelectOfficer',
  data() {
    return {
      officersList: [
        {
          id: 8,
          name: '[CMD GERAL] Renan',
        },
        {
          id: 123,
          name: '[SUB CMD GERAL] Tonin',
        },
      ],
      officerSearchQuery: null,
      selectedOfficer: null,
      filteredOfficers: [] as Array<IOfficer>,
      selectedOfficers: [] as Array<IOfficer>,
    }
  },

  watch: {
    officerSearchQuery(query) {
      if (!query || query.length < 1) {
        this.filteredOfficers = [];
        return;
      }

      this.filteredOfficers = this.officersList.filter(el => el.name.toLowerCase().includes(query.toLowerCase()) || el.id.toString().includes(query));
    },
  },

  methods: {
    selectOfficer(officer: IOfficer) {
      const existingOfficer = this.selectedOfficers.find(el => el.id === officer.id);

      if (existingOfficer) {
        this.selectedOfficers = this.selectedOfficers.filter(el => el.id !== officer.id);
      } else {
        this.selectedOfficers.push(officer);
      }

      this.officerSearchQuery = null;
    },
    removeOfficer(officer: IOfficer) {
      this.selectedOfficers = this.selectedOfficers.filter(el => el.id !== officer.id);
    },
  },
});
</script>

<style scoped>
.officers-input {
  all: unset;
}
</style>