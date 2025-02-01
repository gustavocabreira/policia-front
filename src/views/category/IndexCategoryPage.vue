<template>
  <section class="flex items-center justify-between">
    <div>
      <TitleComponent>
        Category List
        <template v-slot:subtitle>Create a new category and link crimes to it.</template>
      </TitleComponent>
    </div>

    <router-link :to="{ name: 'CreateCategoryPage' }"
      class="mb-2 flex rounded bg-blue-800 px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg mt-4 cursor-pointer">Create
      new category</router-link>
  </section>

  <section class="mt-8">
    <TableComponent :columns="columns" :data="categories">
    </TableComponent>
  </section>
</template>

<script lang="ts">
import TableComponent from '@/components/common/TableComponent.vue';
import TitleComponent from '@/components/layout/TitleComponent.vue';
import { useStore } from '@/store';
import { INDEX_CATEGORY } from '@/store/action-types';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexCategoryPage',
  components: {
    TitleComponent,
    TableComponent,
  },
  data() {
    return {
      columns: [
        {
          key: 'name',
          label: 'Name',
        },
        {
          key: 'order',
          label: 'Order',
        },
      ],
    }
  },
  setup() {
    const store = useStore()
    store.dispatch(INDEX_CATEGORY);

    return {
      store,
      categories: computed(() => store.state.category.categories),
    }
  }
})
</script>