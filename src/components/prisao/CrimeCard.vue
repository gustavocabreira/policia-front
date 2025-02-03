<template>
  <div
    class="border rounded px-3 py-3 cursor-pointer hover:bg-blue-100 transition ease-in-out duration-150 flex flex-col justify-between"
    @click="selectCrime" :class="{ 'bg-blue-100': isSelected, 'bg-white': !isSelected, 'text-blue-600': isSelected }">
    <div>
      <p>{{ crime.name }}</p>
      <p v-if="crime.description" class="text-xs text-gray-400">{{ crime.description }}</p>
    </div>
    
    <p v-if="!crime.is_bailable" class="text-xs text-gray-400 font-bold mt-2">Non bailable</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import ICrime from '@/interfaces/ICrime';
import { useStore } from '@/store';
import { SELECT_CRIME } from '@/store/mutation-types';

export default defineComponent({
  name: 'CrimeCard',
  props: {
    crime: {
      type: Object as PropType<ICrime>,
      required: true,
    },
  },
  setup(props) {
    const store = useStore()

    const selectCrime = (): void => {
      store.commit(SELECT_CRIME, props.crime);
    }

    return {
      isSelected: computed(() => store.state.selectedCrimes.some((el: ICrime) => el.name === props.crime.name)),
      store,
      selectCrime,
    }
  },
});
</script>