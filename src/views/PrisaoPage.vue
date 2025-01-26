<template>
  <TitleComponent>
    Realizar Prisão
    <template v-slot:subtitle>Preencha os campos, selecione os artigos e clique em enviar.</template>
  </TitleComponent>

  <section class="mt-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="flex flex-col">
        <label>Informe o ID do Preso</label>
        <input
          class="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Informe o ID do Preso" />
      </div>
      <div class="flex flex-col">
        <label>Informe o Nome do Preso</label>
        <input
          class="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Informe o Nome do Preso" />
      </div>
    </div>
  </section>

  <section class="mt-8" v-for="(category, index) in categories" :key="index">
    <h3 class="text-lg font-bold text-gray-500">{{ category.label }}</h3>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
      <CrimeCard v-for="(crime, index) in category.crimes" :key="index" :crime="crime">
      </CrimeCard>
    </div>
  </section>

  <section class="mt-8">
    <h3 class="text-lg font-bold text-gray-500">ATENUANTES</h3>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
      <AtenuanteCard v-for="(atenuante, index) in atenuantes" :key="index" :atenuante="atenuante">
      </AtenuanteCard>
    </div>
  </section>
</template>

<script lang="ts">
import TitleComponent from '@/components/layout/TitleComponent.vue';
import AtenuanteCard from '@/components/prisao/AtenuanteCard.vue';
import CrimeCard from '@/components/prisao/CrimeCard.vue';
import { atenuantes } from '@/data/atenuantes';
import { crimesContraAdministracaoPublica, crimesContraDireitosFundamentais, crimesContraLiberdadePessoal, crimesContraOrdemPublica, crimesContraPatrimonio, crimesContraVida, crimesDeTransito } from '@/data/crimes';
import { useStore } from '@/store';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PrisaoPage',
  components: {
    TitleComponent,
    CrimeCard,
    AtenuanteCard,
  },
  computed: {
    selectedCrimes() {
      const store = useStore();
      return store.state.crimes;
    },
    selectedAtenuantes() {
      const store = useStore();
      return store.state.atenuantes;
    }
  },
  data() {
    return {
      categories: [
        {
          label: 'CRIMES CONTRA A VIDA',
          crimes: crimesContraVida,
        },
        {
          label: 'CRIMES CONTRA DIREITOS FUNDAMENTAIS',
          crimes: crimesContraDireitosFundamentais,
        },
        {
          label: 'CRIMES CONTRA A LIBERDADE PESSOAL',
          crimes: crimesContraLiberdadePessoal,
        },
        {
          label: 'CRIMES CONTRA A ADMINISTRAÇÃO PÚBLICA',
          crimes: crimesContraAdministracaoPublica
        },
        {
          label: 'CRIMES CONTRA PATRIMÔNIO',
          crimes: crimesContraPatrimonio,
        },
        {
          label: 'CRIMES CONTRA A ORDEM PÚBLICA',
          crimes: crimesContraOrdemPublica,
        },
        {
          label: 'CRIMES DE TRÂNSITO',
          crimes: crimesDeTransito,
        },
      ],
      atenuantes: atenuantes,
    }
  },
});
</script>