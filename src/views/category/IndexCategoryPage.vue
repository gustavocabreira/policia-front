<template>
  <section class="flex items-center justify-between">
    <div>
      <TitleComponent>
        Category List
        <template v-slot:subtitle>Create a new category and link crimes to it.</template>
      </TitleComponent>
    </div>

    <router-link :to="{ name: 'CreateCategoryPage' }"
      class="mb-2 flex rounded bg-blue-800 px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg mt-4 cursor-pointer">Create new category</router-link>
  </section>

  <section class="mt-8">
    <TableComponent :columns="historyColumns" :data="history">
    </TableComponent>
  </section>
</template>

<script lang="ts">
import TableComponent from '@/components/common/TableComponent.vue';
import TitleComponent from '@/components/layout/TitleComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexCategoryPage',
  components: {
    TitleComponent,
    TableComponent,
  },
  data() {
    return {
      historyColumns: [
        {
          key: 'name',
          label: 'Name',
        },
        {
          key: 'order',
          label: 'Order',
        },
      ],
      history: [
        {
          name: 'Realizou prisão',
          order: 1,
        },
        {
          name: 'Realizou curso',
          order: 2,
        },
        {
          name: 'Realizou curso',
          order: 3,
        },
        {
          name: 'Realizou curso',
          order: 4,
        },
        {
          name: 'Realizou curso',
          order: 5,
        },
        {
          name: 'Iniciou carreira',
          order: 6,
        },
      ],
    }
  }
})
</script>