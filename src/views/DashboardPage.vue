<template>
  <TitleComponent>
    Bem-vindo ao Dashboard! Rodou deploy automático!
    <template v-slot:subtitle>Confira o seu desempenho durante sua carreira.</template>
  </TitleComponent>

  <CardRowComponent class="mt-8" />

  <section class="mt-8">
    <TableComponent :columns="historyColumns" :data="history">
      <template v-slot:title>Histórico</template>
      <template v-slot:subtitle>Seu histórico de ação na polícia.</template>
    </TableComponent>
  </section>
</template>

<script lang="ts">
import TableComponent from '@/components/common/TableComponent.vue';
import CardRowComponent from '@/components/dashboard/CardRowComponent.vue';
import TitleComponent from '@/components/layout/TitleComponent.vue';
import formatDate from '@/helpers/formatDate';
import axios from 'axios';
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
          created_at: formatDate('2025-01-26 05:12:00', true),
        },
        {
          name: 'Realizou curso',
          created_at: formatDate('2025-01-26 05:00:00', true),
        },
        {
          name: 'Realizou curso',
          created_at: formatDate('2025-01-26 04:40:00', true),
        },
        {
          name: 'Realizou curso',
          created_at: formatDate('2025-01-26 04:20:00', true),
        },
        {
          name: 'Realizou curso',
          created_at: formatDate('2025-01-26 04:00:00', true),
        },
        {
          name: 'Iniciou carreira',
          created_at: formatDate('2025-01-25 23:12:33', true),
        },
      ],
    }
  },
  async mounted() {
    const client = axios.create({
      baseURL: 'http://localhost',
      withCredentials: true,
      withXSRFToken: true,
    });

    // await client.get('sanctum/csrf-cookie')
    // await client.post('login', {
    //   email: 'gustavo.softdev@gmail.com',
    //   password: 'password'
    // });
  }
});
</script>