import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useNotificationStore = defineStore('notification', () => {
  const showNotification = ref(false);
  const errorNotification = ref(false);
  const textNotification = ref('');

  const setNotification = (text: string, error = false) => {
    textNotification.value = text;
    errorNotification.value = error;
    showNotification.value = true;
  };

  const offNotification = () => {
    setTimeout(() => {
      showNotification.value = false;
      textNotification.value = '';
      errorNotification.value = false;
    }, 5000);
  };

  watch(showNotification, (value) => {
    if (value) {
      offNotification();
    }
  });

  return {
    showNotification,
    textNotification,
    errorNotification,
    setNotification,
  };
});
