<template>
  <TitleComponent>
    {{ category ? 'Edit' : 'Create' }} Category
    <template v-slot:subtitle>Fill in the fields and click save.</template>
  </TitleComponent>

  <section class="mt-8">
    <CreateUpdateForm :category="category" />
  </section>

  <section v-if="category" class="mt-8">

    <section class="flex items-center justify-between">
      <div>
        <TitleComponent>
          Crimes
          <template v-slot:subtitle>Fill in the fields and click save.</template>
        </TitleComponent>
      </div>
      <router-link :to="{ name: 'CreateCrimePage', params: { id: category.id } }"
        class="mb-2 flex rounded bg-blue-800 px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg mt-4 cursor-pointer">Create
        new crime</router-link>
    </section>

    <section class="mt-8">
      <CrimesList :category="category" />
    </section>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from '@/store';
import { SHOW_CATEGORY } from '@/store/action-types';
import useNotifier from '@/hooks/notifier';
import { NotificationType } from '@/interfaces/INotification';
import TitleComponent from '@/components/layout/TitleComponent.vue';
import CreateUpdateForm from '@/components/categories/CreateUpdateForm.vue';
import CrimesList from '@/components/categories/CrimesList.vue';
import ICategory from '@/interfaces/ICategory';

const store = useStore();
const route = useRoute();
const { notify } = useNotifier();

const category = ref<ICategory | null>(null);

const getCategory = async () => {
  if (!route.params.id) {
    return;
  }

  try {
    const response = await store.dispatch(SHOW_CATEGORY, route.params.id);
    category.value = response.data;
  } catch (error) {
    notify(NotificationType.DANGER, 'Oops!', 'Failed to fetch category');
  }
};

onMounted(() => {
  getCategory();
});
</script>
