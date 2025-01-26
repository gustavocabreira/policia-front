<template>
  <main class="bg-gray-100 w-full min-h-screen">
    <NavbarComponent />
    <section class="container w-9/12 mx-auto mt-8">
      <router-view></router-view>
    </section>
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