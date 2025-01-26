<template>
  <TitleComponent>
    Bem-vindo ao Dashboard!
    <template v-slot:subtitle>Confira o seu desempenho durante sua carreira.</template>
  </TitleComponent>

  <CardRowComponent />
</template>

<script lang="ts">
import CardRowComponent from '@/components/dashboard/CardRowComponent.vue';
import TitleComponent from '@/components/layout/TitleComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DashboardPage',
  components: {
    TitleComponent,
    CardRowComponent,
  }
});
</script>