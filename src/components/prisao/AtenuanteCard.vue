<template>
  <div
    class="border rounded px-3 py-3 cursor-pointer hover:bg-blue-100 transition ease-in-out duration-150 flex flex-col"
    @click="selectAtenuante" :class="{ 'bg-blue-100': isSelected, 'bg-white': !isSelected, 'text-blue-600': isSelected }">
    <p>{{ mitigatingFactor.label }}</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { useStore } from '@/store';
import { SELECT_ATENUANTE } from '@/store/mutation-types';
import IMitigatingFactor from '@/interfaces/IMitigatingFactor';

export default defineComponent({
  name: 'AtenuanteCard',
  props: {
    mitigatingFactor: {
      type: Object as PropType<IMitigatingFactor>,
      required: true,
    },
  },
  setup(props) {
    const store = useStore()

    const selectAtenuante = (): void => {
      store.commit(SELECT_ATENUANTE, props.mitigatingFactor);
    }

    return {
      isSelected: computed(() => store.state.selectedMitigatingFactors.some((el: IMitigatingFactor) => el.label === props.mitigatingFactor.label)),
      store,
      selectAtenuante,
    }
  },
});
</script>