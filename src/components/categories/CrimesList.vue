<template>
  <TableComponent :columns="columns" :data="category.crimes">
    <template v-slot:is_bailable="{ row }">
      <div class="relative inline-flex w-full">
        <button v-if="row.is_bailable"
          class="w-full rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button">
          Bailable
        </button>
        <button v-else
          class="w-full rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button">
          Non bailable
        </button>
      </div>
    </template>

    <template v-slot:actions="{ row }">
      <router-link :to="{ name: 'EditCrimePage', params: { id: row.category_id, crimeId: row.id } }">
        <button
          class="flex rounded bg-blue-800 px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg cursor-pointer">
          <i class="fas fa-pencil"></i>
        </button>
      </router-link>
      <button @click="deleteCrime(row)"
        class="flex rounded bg-blue-800 px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg cursor-pointer">
        <i class="fa-solid fa-trash"></i>
      </button>
    </template>
  </TableComponent>
</template>

<script lang="ts" setup>
import ICategory from '@/interfaces/ICategory';
import { defineProps, defineEmits, ref } from 'vue';
import TableComponent from '@/components/common/TableComponent.vue';
import { NotificationType } from '@/interfaces/INotification';
import useNotifier from '@/hooks/notifier';
import ICrime from '@/interfaces/ICrime';
import { useStore } from '@/store';
import { DELETE_CRIME } from '@/store/action-types';

const store = useStore();
const { notify } = useNotifier();

const props = defineProps<{
  category: ICategory;
}>();

const emit = defineEmits<{
  (event: 'deletedCrime'): void;
}>();

const columns = ref([
  { key: 'is_bailable', label: 'Is Bailable', align: 'center' },
  { key: 'name', label: 'Name' },
  { key: 'description', label: 'Description' },
  { key: 'sentence', label: 'Sentence', align: 'right' },
  { key: 'fine', label: 'Fine', align: 'right' },
  { key: 'bail', label: 'Bail', align: 'right' },
  { key: 'actions', label: 'Actions', align: 'center' },
]);

const deleteCrime = async (crime: ICrime) => {
  try {
    await store.dispatch(DELETE_CRIME, crime);
    notify(NotificationType.SUCCESS, 'Success!', 'Crime deleted successfuly.');
    emit('deletedCrime')
  } catch (error) {
    notify(NotificationType.DANGER, 'Error', 'Failed to delete crime.');
  }
}

</script>