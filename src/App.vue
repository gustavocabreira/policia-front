<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import client from './helpers/http';

export default defineComponent({
  name: 'App',
  created() {
    document.title = 'Polícia - RevoadaRJ';
  }
});
</script>


<style src="./assets/styles/app.css" />