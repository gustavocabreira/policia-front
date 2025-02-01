<template>
  <LoginForm />
  <section class="bg-blue-800 w-full">
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from '@/components/auth/LoginForm.vue';
import client from '@/helpers/client';
import { useStore } from '@/store';
import { SET_USER } from '@/store/mutation-types';
import { useRouter } from 'vue-router';


export default defineComponent({
  name: 'LoginPage',
  components: {
    LoginForm,
  },
  setup() {
    const store = useStore()
    const router = useRouter()


    client.get('user')
      .then((response) => {
        store.commit(SET_USER, response.data);
        router.push({ name: 'DashboardPage' });
        return;
      })
      .catch((err) => {
        //
      })
  }
});
</script>