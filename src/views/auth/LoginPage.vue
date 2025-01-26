<template>
  <LoginForm />
  <section class="bg-blue-800 w-full">
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from '@/components/auth/LoginForm.vue';

export default defineComponent({
  name: 'LoginPage',
  components: {
    LoginForm,
  }
});
</script>