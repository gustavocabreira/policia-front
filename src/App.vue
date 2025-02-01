<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import client from './helpers/client';
import { useStore } from './store';
import { SET_USER } from './store/mutation-types';

export default defineComponent({
  name: 'App',
  created() {
    document.title = 'Polícia - RevoadaRJ';
  },
  mounted() {

    const store = useStore()
    client.get('user').then((response) => {
      store.commit(SET_USER, response.data);
    })
      .catch((err) => {
        this.$router.push({ name: 'LoginPage' })
      })
  }
});
</script>


<style src="./assets/styles/app.css" />