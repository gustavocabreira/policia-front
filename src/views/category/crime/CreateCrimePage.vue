<template>
  <TitleComponent>
    {{ crime ? 'Edit' : 'Create' }} Crime
    <template v-slot:subtitle>Fill in the fields and click save.</template>
  </TitleComponent>

  <section class="mt-8">
    <form @submit.prevent="save" class="bg-white px-4 py-4 shadow rounded flex flex-col gap-4">
      <div class="flex flex-col space-y-2">
        <label for="inputField" class="text-sm font-medium text-gray-700">Category</label>
        <input id="inputField" type="text" disabled
          class="w-full rounded border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter text here..." v-model="category.name" />
      </div>
      <div class="flex flex-col space-y-2">
        <label for="inputField" class="text-sm font-medium text-gray-700">Name</label>
        <input id="inputField" type="text"
          class="w-full rounded border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter text here..." v-model="form.name" />
      </div>
      <div class="flex flex-col space-y-2">
        <label for="inputField" class="text-sm font-medium text-gray-700">Description</label>
        <input id="inputField" type="text"
          class="w-full rounded border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter text here..." v-model="form.description" />
      </div>
      <div class="md:flex items-center justify-between">
        <div class="flex flex-col space-y-2">
          <label for="inputField" class="text-sm font-medium text-gray-700">Sentence</label>
          <input id="inputField" type="text"
            class="w-full rounded border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter text here..." v-model="form.sentence" />
        </div>
        <div class="flex flex-col space-y-2">
          <label for="inputField" class="text-sm font-medium text-gray-700">Fine</label>
          <input id="inputField" type="text"
            class="w-full rounded border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter text here..." v-model="form.fine" />
        </div>
        <div class="flex flex-col space-y-2">
          <label for="inputField" class="text-sm font-medium text-gray-700">Bail</label>
          <input id="inputField" type="text"
            class="w-full rounded border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter text here..." v-model="form.bail" />
        </div>
      </div>
      <div>
        <button type="submit"
          class="mb-2 flex rounded bg-blue-800 px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg mt-4 cursor-pointer">Save</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import TitleComponent from '@/components/layout/TitleComponent.vue';
import { useRoute, useRouter } from 'vue-router';
import { CREATE_CRIME, SHOW_CATEGORY } from '@/store/action-types';
import { NotificationType } from '@/interfaces/INotification';
import useNotifier from '@/hooks/notifier';
import ICategory from '@/interfaces/ICategory';
import { useStore } from '@/store';

const store = useStore();
const crime = ref();
const route = useRoute();
const router = useRouter();
const { notify } = useNotifier();

const category = ref<ICategory | any>({ name: '' });

const form = ref({
  name: '',
  description: '',
  sentence: '',
  fine: '',
  bail: '',
  category_id: '',
});

const getCategory = async () => {
  if (!route.params.id) {
    return;
  }

  try {
    const response = await store.dispatch(SHOW_CATEGORY, route.params.id);
    category.value = response.data;
    form.value.category_id = response.data.id;
  } catch (error) {
    console.log(error)
    notify(NotificationType.DANGER, 'Oops!', 'Failed to fetch category');
  }
};

onMounted(() => {
  getCategory();
});

const save = async () => {
  await storeCrime();
};

const storeCrime = async () => {
  try {
    await store.dispatch(CREATE_CRIME, form.value);
    notify(NotificationType.SUCCESS, 'Success!', 'Crime created successfully');
    router.push({ name: 'CategoriesIndexPage' });
  } catch (error) {
    notify(NotificationType.DANGER, 'Oops!', 'Something went wrong!');
  }
}
</script>