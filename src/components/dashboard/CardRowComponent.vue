<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-1 gap-4">
    <CardComponent>
      <template v-slot:icon><i class="fa-solid fa-link"></i></template>
      <template v-slot:value>35</template>
      <template v-slot:title>Prisões</template>
    </CardComponent>
    <CardComponent>
      <template v-slot:icon><i class="fa-solid fa-bomb"></i></template>
      <template v-slot:value>05</template>
      <template v-slot:title>Ações Realizadas</template>
    </CardComponent>
    <CardComponent>
      <template v-slot:icon><i class="fa-regular fa-envelope"></i></template>
      <template v-slot:value>0</template>
      <template v-slot:title>Notificações</template>
    </CardComponent>
    <CardComponent>
      <template v-slot:icon><i class="fa-regular fa-calendar"></i></template>
      <template v-slot:value>15</template>
      <template v-slot:title>Dias na polícia</template>
    </CardComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardComponent from './CardComponent.vue';

export default defineComponent({
  name: 'CardRowComponent',
  components: {
    CardComponent,
  }
});
</script>