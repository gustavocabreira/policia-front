<template>
  <main class="bg-white w-full h-screen flex items-center justify-center">
    <section class="w-1/3 h-1/3 flex items-center gap-4 justify-center">
      <i class="fa-solid fa-triangle-exclamation text-6xl text-blue-800"></i>
      <div>
        <h1 class="text-2xl font-bold">Página não encontrada!</h1>
        <p class="text-sm">Volte para o <router-link class="text-blue-800 hover:text-blue-500 transition duration-150 ease-in-out" :to="{ name: 'LoginPage' }">início</router-link>.</p>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'NotFound',
});
</script>