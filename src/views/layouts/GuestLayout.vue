<template>
  <main class="bg-gray-300 w-full h-screen flex">
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GuestLayout',
});
</script>

<style lang="scss"></style>