<template>
  <TitleComponent>
    {{ category ? 'Edit' : 'Create' }} Category
    <template v-slot:subtitle>Fill in the fields and click save.</template>
  </TitleComponent>

  <section class="mt-8">
    <form @submit.prevent="save" class="bg-white px-4 py-4 shadow rounded flex flex-col gap-4">
      <div class="flex flex-col space-y-2">
        <label for="inputField" class="text-sm font-medium text-gray-700">Name</label>
        <input id="inputField" type="text"
          class="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter text here..." v-model="form.name" />
      </div>
      <div>
        <button type="submit"
          class="mb-2 flex rounded bg-blue-800 px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg mt-4 cursor-pointer">Save</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import TitleComponent from '@/components/layout/TitleComponent.vue';
import { useStore } from '@/store';
import { CREATE_CATEGORY, SHOW_CATEGORY, UPDATE_CATEGORY } from '@/store/action-types';
import { defineComponent } from 'vue';
import useNotifier from '@/hooks/notifier';
import { NotificationType } from '@/interfaces/INotification';
import ICategory from '@/interfaces/ICategory';

export default defineComponent({
  name: 'CreateCategoryPage',
  components: {
    TitleComponent,
  },
  data() {
    return {
      form: {
        name: '',
      },
      category: null as ICategory | null,
    };
  },
  methods: {
    async save() {
      if (this.category) {
        await this.updateCategory();
      } else {
        await this.storeCategory();
      }
    },

    async getCategory() {
      try {
        const response = await this.store.dispatch(SHOW_CATEGORY, this.$route.params.id);
        this.category = response.data;
        if (this.category) {
          this.form.name = this.category.name;
        }
      } catch (error) {
        this.notify(NotificationType.DANGER, 'Oops!', 'Failed to fetch category');
      }
    },

    async storeCategory() {
      try {
        await this.store.dispatch(CREATE_CATEGORY, this.form);
        this.notify(NotificationType.SUCCESS, 'Success!', 'Category created successfully');
        this.$router.push({ name: 'CategoriesIndexPage' });
      } catch (error) {
        this.notify(NotificationType.DANGER, 'Oops!', 'Something went wrong!');
      }
    },

    async updateCategory() {
      if (!this.category) {
        this.notify(NotificationType.DANGER, 'Oops!', 'Category not found');
        return;
      }

      const payload = { id: this.category.id, ...this.form };
      try {
        await this.store.dispatch(UPDATE_CATEGORY, payload);
        this.notify(NotificationType.SUCCESS, 'Success!', 'Category updated successfully');
        this.$router.push({ name: 'CategoriesIndexPage' });
      } catch (error) {
        this.notify(NotificationType.DANGER, 'Oops!', 'Something went wrong!');
      }
    },
  },
  mounted() {
    if (this.$route.params.id) {
      this.getCategory();
    }
  },
  setup() {
    const store = useStore();
    const { notify } = useNotifier();

    return {
      store,
      notify,
    };
  },
});
</script>
