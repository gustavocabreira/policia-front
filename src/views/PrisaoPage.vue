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
          class="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Informe o ID do Preso" />
      </div>
      <div class="flex flex-col">
        <label>Informe o Nome do Preso</label>
        <input
          class="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Informe o Nome do Preso" />
      </div>
    </div>
  </section>

  <section class="mt-8">
    <h3 class="text-lg font-bold text-gray-500">CRIMES CONTRA A VIDA</h3>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
      <CrimeCard v-for="(crime, index) in crimesContraVida" :key="index" :crime="crime">
      </CrimeCard>
    </div>
  </section>

  <section class="mt-8">
    <h3 class="text-lg font-bold text-gray-500">CRIMES CONTRA DIREITOS FUNDAMENTAIS</h3>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
      <CrimeCard v-for="(crime, index) in crimesContraDireitosFundamentais" :key="index" :crime="crime">
        <template v-slot:title>{{ crime.label }}</template>
      </CrimeCard>
    </div>
  </section>

  <section class="mt-8">
    <h3 class="text-lg font-bold text-gray-500">CRIMES CONTRA A LIBERDADE PESSOAL</h3>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
      <CrimeCard v-for="(crime, index) in crimesContraLiberdadePessoal" :key="index" :crime="crime">
        <template v-slot:title>{{ crime.label }}</template>
      </CrimeCard>
    </div>
  </section>

  <section class="mt-8">
    <h3 class="text-lg font-bold text-gray-500">CRIMES CONTRA A ADMINISTRAÇÃO PÚBLICA</h3>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
      <CrimeCard v-for="(crime, index) in crimesContraAdministracaoPublica" :key="index" :crime="crime">
        <template v-slot:title>{{ crime.label }}</template>
      </CrimeCard>
    </div>
  </section>

  <section class="mt-8">
    <h3 class="text-lg font-bold text-gray-500">CRIMES CONTRA PATRIMÔNIO</h3>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
      <CrimeCard v-for="(crime, index) in crimesContraPatrimonio" :key="index" :crime="crime">
        <template v-slot:title>{{ crime.label }}</template>
      </CrimeCard>
    </div>
  </section>

  <section class="mt-8">
    <h3 class="text-lg font-bold text-gray-500">CRIMES CONTRA A ORDEM PÚBLICA</h3>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
      <CrimeCard v-for="(crime, index) in crimesContraOrdemPublica" :key="index" :crime="crime">
        <template v-slot:title>{{ crime.label }}</template>
        <template v-if="crime.subtitle" v-slot:subtitle>{{ crime.subtitle }}</template>
      </CrimeCard>
    </div>
  </section>

  <section class="mt-8">
    <h3 class="text-lg font-bold text-gray-500">CRIMES DE TRÂNSITO</h3>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
      <CrimeCard v-for="(crime, index) in crimesDeTransito" :key="index" :crime="crime">
        <template v-slot:title>{{ crime.label }}</template>
      </CrimeCard>
    </div>
  </section>
</template>

<script lang="ts">
import TitleComponent from '@/components/layout/TitleComponent.vue';
import CrimeCard from '@/components/prisao/CrimeCard.vue';
import { crimesContraAdministracaoPublica, crimesContraDireitosFundamentais, crimesContraLiberdadePessoal, crimesContraOrdemPublica, crimesContraPatrimonio, crimesContraVida, crimesDeTransito } from '@/data/crimes';
import { useStore } from '@/store';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PrisaoPage',
  components: {
    TitleComponent,
    CrimeCard,
  },
  computed: {
    selectedCrimes() {
      const store = useStore();
      return store.state.crimes;
    }
  },
  data() {
    return {
      crimesContraVida: crimesContraVida,
      crimesContraDireitosFundamentais: crimesContraDireitosFundamentais,
      crimesContraLiberdadePessoal: crimesContraLiberdadePessoal,
      crimesContraAdministracaoPublica: crimesContraAdministracaoPublica,
      crimesContraPatrimonio: crimesContraPatrimonio,
      crimesContraOrdemPublica: crimesContraOrdemPublica,
      crimesDeTransito: crimesDeTransito,
    }
  },
});
</script>