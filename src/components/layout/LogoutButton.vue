<template>
  <button href="#"
    class="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-blue-600 hover:border-blue-600"
    @click="logout()">Sair</button>
</template>

<script lang="ts">
import client from '@/helpers/client';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LogoutButton',
  methods: {
    async logout() {
      await client.post('logout')
      this.$router.push({
        name: 'LoginPage',
      });
    },
  },
});
</script>