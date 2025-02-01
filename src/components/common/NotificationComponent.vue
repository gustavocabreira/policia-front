<template>
  <div class="notifications">
    <article v-for="notification in notifications" :key="notification.id"
      class="notification absolute text-white top-24 right-24 p-4 rounded shadow-lg"
      :class="[context[notification.type]]">
      <div class="message-header">
        {{ notification.title }}
      </div>
      <div class="message-body">
        {{ notification.content }}
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { NotificationType } from '@/interfaces/INotification';
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'NotificationComponent',
  data() {
    return {
      context: {
        [NotificationType.SUCCESS]: 'bg-green-400',
        [NotificationType.WARNING]: 'bg-yellow-400',
        [NotificationType.DANGER]: 'bg-red-400',
      },
    };
  },
  setup() {
    const store = useStore()

    return {
      notifications: computed(() => store.state.notifications),
    }
  }
});
</script>

<style scoped>
.notification {
  width: 300px;
}
</style>