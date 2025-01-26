<template>
  <div
    class="border rounded px-3 py-3 cursor-pointer hover:bg-blue-100 transition ease-in-out duration-150 flex flex-col"
    @click="selectAtenuante" :class="{ 'bg-blue-100': isSelected, 'bg-white': !isSelected, 'text-blue-600': isSelected }">
    <p>{{ atenuante.label }}</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import IAtenuante from '@/interfaces/IAtenuante';
import { useStore } from '@/store';
import { SELECT_ATENUANTE } from '@/store/mutation-types';

export default defineComponent({
  name: 'AtenuanteCard',
  props: {
    atenuante: {
      type: Object as PropType<IAtenuante>,
      required: true,
    },
  },
  setup(props) {
    const store = useStore()

    const selectAtenuante = (): void => {
      store.commit(SELECT_ATENUANTE, props.atenuante);
    }

    return {
      isSelected: computed(() => store.state.atenuantes.some((el: IAtenuante) => el.label === props.atenuante.label)),
      store,
      selectAtenuante,
    }
  },
});
</script>