<template>
  <section class="bg-gray-50 py-4 px-4 rounded-md shadow-md w-1/3 h-full flex items-center justify-center">
    <div>
      <h1 class="text-3xl font-bold">Bem-vindo de volta!</h1>
      <h6 class="text-gray-400 text-sm">Clique em login com o Discord para entrar.</h6>
      <a type="button" data-twe-ripple-init data-twe-ripple-color="light" style="width: 202px"
        class="mb-2 flex rounded bg-blue-800 px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg mt-4 cursor-pointer">
        <span class="mr-2">
          <i class="fa-brands fa-discord"></i>
        </span>
        Entrar com Discord
      </a>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginForm',
})
</script>