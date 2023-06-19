import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useModalStore = defineStore('modal', () => {
  const modal = ref<boolean>(false);

  const toggleModal = () => {
    modal.value = !modal.value;
  };

  return {
    modal,
    toggleModal,
  };
});
