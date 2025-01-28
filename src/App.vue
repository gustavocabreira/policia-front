<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import client from './helpers/client';

export default defineComponent({
  name: 'App',
  created() {
    document.title = 'Polícia - RevoadaRJ';
  },
  async mounted() {
    await client.get('user');
  }
});
</script>


<style src="./assets/styles/app.css" />