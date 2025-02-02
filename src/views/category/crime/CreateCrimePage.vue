<template>
  <TitleComponent>
    {{ crime ? 'Edit' : 'Create' }} Crime
    <template v-slot:subtitle>Fill in the fields and click save.</template>
  </TitleComponent>

  <section class="mt-8">
    <CreateUpdateForm/>
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
import CreateUpdateForm from '@/components/categories/crimes/CreateUpdateForm.vue';

const store = useStore();
const crime = ref();
const route = useRoute();
const router = useRouter();
const { notify } = useNotifier();

const category = ref<ICategory | any>({ name: '' });
</script>