<template>
  <div class="shadow bg-white rounded px-4 py-4 flex items-center gap-4 hover:shadow-md transition duration-150 ease-in-out cursor-pointer">
    <span class="text-3xl text-blue-600"><slot name="icon"></slot></span>
    <div class="flex flex-col">
      <p class="font-bold text-2xl text-gray-600"><slot name="value"></slot></p>
      <p class="text-sm text-gray-400"><slot name="title"></slot></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'CardComponent',
});
</script>