<template>
  <TitleComponent>
    Bem-vindo ao Dashboard!
    <template v-slot:subtitle>Confira o seu desempenho durante sua carreira.</template>
  </TitleComponent>

  <CardRowComponent class="mt-8" />

  <section class="mt-8">
    <h3 class="font-bold text-xl text-gray-500">Histórico</h3>
    <p class="text-sm text-gray-400">Seu histórico de ação na polícia.</p>

    <TableComponent :columns="historyColumns" :data="history" />
  </section>
</template>

<script lang="ts">
import TableComponent from '@/components/common/TableComponent.vue';
import CardRowComponent from '@/components/dashboard/CardRowComponent.vue';
import TitleComponent from '@/components/layout/TitleComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DashboardPage',
  components: {
    TitleComponent,
    CardRowComponent,
    TableComponent,
  },
  data() {
    return {
      historyColumns: [
        {
          key: 'name',
          label: 'Tipo de Ação',
        },
        {
          key: 'created_at',
          label: 'Data',
        }
      ],
      history: [
        {
          name: 'Realizou prisão',
          created_at: '2025-01-26 05:12:00',
        },
        {
          name: 'Realizou curso',
          created_at: '2025-01-26 05:00:00',
        },
        {
          name: 'Realizou curso',
          created_at: '2025-01-26 04:40:00',
        },
        {
          name: 'Realizou curso',
          created_at: '2025-01-26 04:20:00',
        },
        {
          name: 'Realizou curso',
          created_at: '2025-01-26 04:00:00',
        },
        {
          name: 'Iniciou carreira',
          created_at: '2025-01-25 23:12:33',
        },
      ],
    }
  }
});
</script>