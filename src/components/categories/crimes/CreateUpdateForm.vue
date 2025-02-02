<template>
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
</template>

<script lang="ts" setup>
import ICrime from '@/interfaces/ICrime';
import { useStore } from '@/store';
import { useRoute, useRouter } from 'vue-router';
import useNotifier from '@/hooks/notifier';
import { onMounted, defineProps, ref } from 'vue';
import ICategory from '@/interfaces/ICategory';
import { CREATE_CRIME, SHOW_CATEGORY, SHOW_CRIME, UPDATE_CRIME } from '@/store/action-types';
import { NotificationType } from '@/interfaces/INotification';

const props = defineProps<{
  crime?: ICrime;
}>();

const category = ref<ICategory | any>({ name: '' });

const store = useStore();
const router = useRouter();
const route = useRoute();
const { notify } = useNotifier();

const form = ref({
  name: '',
  description: '',
  sentence: '',
  fine: '',
  bail: '',
  category_id: '',
});

const getCrime = async () => {
  if (!route.params.crimeId) {
    return;
  }

  try {
    const response = await store.dispatch(SHOW_CRIME, {
      category_id: route.params.id,
      id: route.params.crimeId,
    });
    form.value = response.data;
    category.value = response.data.category;
  } catch (error) {
    notify(NotificationType.DANGER, 'Oops!', 'Failed to fetch crime');
  }
};

onMounted(() => {
  getCrime();
})


const save = async () => {
  if (!route.params.crimeId) {
    await storeCrime();
  } else {
    await updateCrime();
  }
};

const storeCrime = async () => {
  try {
    await store.dispatch(CREATE_CRIME, form.value);
    notify(NotificationType.SUCCESS, 'Success!', 'Crime created successfully');
    router.push({ name: 'EditCategoryPage', params: { id: route.params.id } });
  } catch (error) {
    notify(NotificationType.DANGER, 'Oops!', 'Something went wrong!');
  }
}

const updateCrime = async () => {
  try {
    await store.dispatch(UPDATE_CRIME, form.value);
    notify(NotificationType.SUCCESS, 'Success!', 'Crime updated successfully');
    router.push({ name: 'EditCategoryPage', params: { id: route.params.id } });
  } catch (error) {
    notify(NotificationType.DANGER, 'Oops!', 'Something went wrong!');
  }
}

</script>