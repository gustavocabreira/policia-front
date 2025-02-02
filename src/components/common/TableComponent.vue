<template>
  <h3 class="font-bold text-xl text-gray-500">
    <slot name="title"></slot>
  </h3>
  <p class="text-sm text-gray-400">
    <slot name="subtitle"></slot>
  </p>
  <div
    class="relative flex flex-col w-full h-full overflow-auto text-gray-700 bg-white shadow rounded bg-clip-border mt-4">
    <table class="w-full text-left table-auto min-w-max">
      <thead>
        <tr>
          <th :align="column.align" class="p-4 border-b border-blue-gray-100 bg-blue-gray-50"
            v-for="(column) in columns" :key="column.key">
            <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
              {{ column.label }}
            </p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in data" :key="rowIndex" class="hover:shadow transition duration-150 ease-in-out">
          <td :align="column.align" class="p-4 border-b border-blue-gray-50"
            v-for="column in columns.filter(el => el.key != 'actions')" :key="column.key">
            <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              {{ row[column.key] }}
            </p>
          </td>
          <td align="center" v-if="columns.some(el => el.key == 'actions')"
            class="p-4 border-b border-blue-gray-50 flex items-center justify-center gap-4">
            <slot name="actions" :row="row"></slot>
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
      type: Array as PropType<Array<Record<number, string | number | boolean>>>,
      required: true,
    },
  },
  name: 'TableComponent',
  computed: {
    displayActionsColumn(): boolean {
      return this.columns && this.columns.some(column => column.key == 'actions')
    }
  }
});
</script>