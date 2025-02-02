<template>
  <TableComponent :columns="columns" :data="category.crimes">

    <template v-slot:actions="{ row }">
      <router-link :to="{ name: 'EditCategoryPage', params: { id: row.id } }">
        <button
          class="flex rounded bg-blue-800 px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg cursor-pointer">
          <i class="fas fa-pencil"></i>
        </button>
      </router-link>
      <button
        class="flex rounded bg-blue-800 px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg cursor-pointer">
        <i class="fa-solid fa-trash"></i>
      </button>
    </template>
  </TableComponent>
</template>

<script lang="ts" setup>
import ICategory from '@/interfaces/ICategory';
import { defineProps, ref } from 'vue';
import TableComponent from '@/components/common/TableComponent.vue';

const props = defineProps<{
  category: ICategory;
}>();

const columns = ref([
  { key: 'name', label: 'Name' },
  { key: 'description', label: 'Description' },
  { key: 'sentence', label: 'Sentence', align: 'right' },
  { key: 'fine', label: 'Fine', align: 'right' },
  { key: 'bail', label: 'Bail', align: 'right' },
  { key: 'actions', label: 'Actions', align: 'center' },
]);

</script>