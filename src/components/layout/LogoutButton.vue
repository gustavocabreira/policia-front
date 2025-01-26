<template>
  <button href="#"
    class="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-blue-600 hover:border-blue-600"
    @click="logout()">Sair</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LogoutButton',
  methods: {
    logout() {
      this.$router.push({
        name: 'LoginPage',
      });
    },
  },
});
</script>