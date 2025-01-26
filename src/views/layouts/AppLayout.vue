<template>
  <main class="bg-gray-300 w-full min-h-screen">
    <NavbarComponent/>
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import NavbarComponent from '@/components/layout/NavbarComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppLayout',
  components: {
    NavbarComponent,
  }
});
</script>