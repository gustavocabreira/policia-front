<template>
  <h1 class="font-bold text-3xl text-gray-600"><slot></slot></h1>
  <p class="text-sm text-gray-400"><slot name="subtitle"></slot></p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TitleComponent',
});
</script>