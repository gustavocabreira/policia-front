<template>
  <TableComponent :columns="columns" :data="category.crimes"/>
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
  { key: 'actions', label: 'Actions' },
]);

</script>