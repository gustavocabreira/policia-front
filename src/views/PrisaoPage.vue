<template>
  <TitleComponent>
    Make Arrest
    <template v-slot:subtitle>Fill in the fields, select the articles, and click submit.</template>
  </TitleComponent>

  <section class="mt-8" v-for="(category, index) in categories" :key="index">
    <h3 class="text-lg font-bold text-gray-500">{{ category.name }}</h3>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
      <CrimeCard v-for="(crime, index) in category.crimes" :key="index" :crime="crime" />
    </div>
  </section>

  <section class="mt-8">
    <h3 class="text-lg font-bold text-gray-500">MITIGATING FACTORS</h3>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
      <AtenuanteCard v-for="(mitigatingFactor, index) in mitigatingFactors" :key="index"
        :mitigatingFactor="mitigatingFactor" />
    </div>
  </section>

  <section class="mt-8">
    <h3 class="text-lg font-bold text-gray-500">SUMMARY</h3>
    <section class="mt-2">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="flex flex-col">
          <label>Enter the Prisoner's ID</label>
          <input
            class="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Enter the Prisoner's ID" />
        </div>
        <div class="flex flex-col">
          <label>Enter the Prisoner's Name</label>
          <input
            class="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Enter the Prisoner's Name" />
        </div>
        <div class="flex flex-col">
          <label>Enter the Lawyer's ID</label>
          <input
            class="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Enter the Lawyer's ID" />
        </div>
      </div>
    </section>
  </section>

  <section v-if="selectedCrimes.length" class="mt-8">
    <h3 class="text-lg font-bold text-gray-500">SELECTED CRIMES</h3>
    <div class="border bg-white px-4 py-4" v-html="selectedCrimes.map(el => el.name).join('<br/>')" />
  </section>

  <section v-if="selectedMitigatingFactors.length" class="mt-8">
    <h3 class="text-lg font-bold text-gray-500">SELECTED MITIGATING FACTORS</h3>
    <div class="border bg-white px-4 py-4" v-html="selectedMitigatingFactors.map(el => el.label).join('<br/>')" />
  </section>

  <section class="mt-8">
    <SelectPolicial />

    <div class="grid grid-cols-1 md:grid-cols-3 mt-8 mb-8 gap-4">
      <CardComponent>
        <template v-slot:icon><i class="fas fa-calendar"></i></template>
        <template v-slot:value>{{ totalSentence }}</template>
        <template v-slot:title>Total Sentence</template>
      </CardComponent>
      <CardComponent>
        <template v-slot:icon><i class="fas fa-calendar"></i></template>
        <template v-slot:value>{{ totalFine }}</template>
        <template v-slot:title>Total Fine</template>
      </CardComponent>
      <CardComponent>
        <template v-slot:icon><i class="fas fa-calendar"></i></template>
        <template v-slot:value>{{ totalBail }}</template>
        <template v-slot:title>Total Bail</template>
      </CardComponent>
    </div>

    <button type="button" data-twe-ripple-init data-twe-ripple-color="light"
      class="mb-2 flex rounded bg-blue-800 px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg mt-4 cursor-pointer">
      Submit Arrest
    </button>
  </section>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { useStore } from '@/store';
import CardComponent from '@/components/dashboard/CardComponent.vue';
import TitleComponent from '@/components/layout/TitleComponent.vue';
import AtenuanteCard from '@/components/prisao/AtenuanteCard.vue';
import CrimeCard from '@/components/prisao/CrimeCard.vue';
import SelectPolicial from '@/components/prisao/SelectPolicial.vue';
import { mitigatingFactors } from '@/data/mitigatingFactors';
import ICrime from '@/interfaces/ICrime';
import { INDEX_CATEGORY } from '@/store/action-types';
import { NotificationType } from '@/interfaces/INotification';
import useNotifier from '@/hooks/notifier';

const { notify } = useNotifier();

const fetchCategories = async () => {
  try {
    await store.dispatch(INDEX_CATEGORY);
  } catch (error) {
    notify(NotificationType.DANGER, 'Error', 'Failed to fetch categories.');
  }
};

onMounted(async () => {
  await fetchCategories();
})

const categories = computed(() => store.state.category.categories);

const store = useStore();

const selectedCrimes = computed(() => store.state.selectedCrimes);
const selectedMitigatingFactors = computed(() => store.state.selectedMitigatingFactors);

const totalSentence = computed(() => {
  let sentence = selectedCrimes.value.reduce((sentence: number, crime: ICrime) => sentence + crime.sentence, 0);
  return sentence > 100 ? 100 : sentence;
});

const totalFine = computed(() => {
  let fine = selectedCrimes.value.reduce((fine: number, crime: ICrime) => fine + (crime.fine ?? 0), 0);
  return fine > 600000 ? 600000 : fine;
});

const totalBail = computed(() => {
  let hasUnbailableCrime = selectedCrimes.value.find((el) => el.name.includes('**'));
  if (hasUnbailableCrime) return 'Non-bailable';

  let bail = selectedCrimes.value.reduce((bail: number, crime: ICrime) => bail + (crime.bail ?? 0), 0);
  return bail > 600000 ? 600000 : bail;
});

</script>
