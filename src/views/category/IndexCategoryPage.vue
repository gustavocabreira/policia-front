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
      <template v-slot:actions="{ row }">
        <router-link :to="{ name: 'EditCategoryPage', params: { id: row.id } }">
          <button
            class="flex rounded bg-blue-800 px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg cursor-pointer">
            <i class="fas fa-pencil"></i>
          </button>
        </router-link>
        <button @click="deleteCategory(row.id)"
          class="flex rounded bg-blue-800 px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg cursor-pointer">
          <i class="fa-solid fa-trash"></i>
        </button>
      </template>
    </TableComponent>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref, onMounted } from 'vue';
import TableComponent from '@/components/common/TableComponent.vue';
import TitleComponent from '@/components/layout/TitleComponent.vue';
import { useStore } from '@/store';
import { DELETE_CATEGORY, INDEX_CATEGORY } from '@/store/action-types';
import useNotifier from '@/hooks/notifier';
import { NotificationType } from '@/interfaces/INotification';

export default defineComponent({
  name: 'IndexCategoryPage',
  components: {
    TitleComponent,
    TableComponent,
  },
  setup() {
    const store = useStore();
    const { notify } = useNotifier();

    const columns = ref([
      { key: 'name', label: 'Name' },
      { key: 'order', label: 'Order' },
      { key: 'actions', label: 'Actions' },
    ]);

    const fetchCategories = async () => {
      try {
        await store.dispatch(INDEX_CATEGORY);
      } catch (error) {
        notify(NotificationType.DANGER, 'Error', 'Failed to fetch categories.');
      }
    };

    onMounted(fetchCategories);

    const categories = computed(() => store.state.category.categories);

    const deleteCategory = async (categoryId: number) => {
      try {
        await store.dispatch(DELETE_CATEGORY, categoryId);
        await fetchCategories();
        notify(NotificationType.SUCCESS, 'Success!', 'Category deleted successfully!');
      } catch (error) {
        notify(NotificationType.DANGER, 'Error', 'Failed to delete category.');
      }
    };

    return {
      columns,
      categories,
      deleteCategory,
    };
  },
});
</script>
