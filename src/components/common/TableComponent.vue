<template>
  <div
    class="relative flex flex-col w-full h-full overflow-auto text-gray-700 bg-white shadow rounded bg-clip-border mt-4">
    <table class="w-full text-left table-auto min-w-max">
      <thead>
        <tr>
          <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50" v-for="(column) in columns" :key="column.key">
            <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
              {{ column.label }}
            </p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in data" :key="rowIndex">
          <td class="p-4 border-b border-blue-gray-50" v-for="column in columns" :key="column.key">
            <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              {{ row[column.key] }}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    columns: {
      type: Array as PropType<Array<{ key: string; label: string }>>,
      required: true,
    },
    data: {
      type: Array as PropType<Array<Record<string, any>>>,
      required: true,
    },
  },
  name: 'TableComponent',
});
</script>