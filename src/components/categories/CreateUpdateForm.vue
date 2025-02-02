<template>
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
</template>

<script lang="ts" setup>
import { ref, defineProps, watch } from 'vue';
import { useStore } from '@/store';
import { useRouter } from 'vue-router';
import useNotifier from '@/hooks/notifier';
import { CREATE_CATEGORY, UPDATE_CATEGORY } from '@/store/action-types';
import { NotificationType } from '@/interfaces/INotification';
import ICategory from '@/interfaces/ICategory';

const props = defineProps<{
  category?: ICategory;
}>();

const store = useStore();
const router = useRouter();
const { notify } = useNotifier();

const form = ref({ name: '' });

watch(
  () => props.category,
  (newCategory) => {
    if (newCategory) {
      form.value.name = newCategory.name || '';
    }
  },
  { immediate: true }
);

const storeCategory = async () => {
  try {
    await store.dispatch(CREATE_CATEGORY, form.value);
    notify(NotificationType.SUCCESS, 'Success!', 'Category created successfully');
    router.push({ name: 'CategoriesIndexPage' });
  } catch (error) {
    notify(NotificationType.DANGER, 'Oops!', 'Something went wrong!');
  }
};

const updateCategory = async () => {
  if (!props.category) {
    notify(NotificationType.DANGER, 'Oops!', 'Category not found');
    return;
  }

  const payload = { id: props.category.id, ...form.value };
  try {
    await store.dispatch(UPDATE_CATEGORY, payload);
    notify(NotificationType.SUCCESS, 'Success!', 'Category updated successfully');
    router.push({ name: 'CategoriesIndexPage' });
  } catch (error) {
    notify(NotificationType.DANGER, 'Oops!', 'Something went wrong!');
  }
};

const save = async () => {
  if (props.category) {
    await updateCategory();
  } else {
    await storeCategory();
  }
};
</script>
