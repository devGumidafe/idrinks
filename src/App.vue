<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Modal from '@/components/Modal.vue';
import Notification from '@/components/Notification.vue';

</script>

<template>
 <Header />
  
 <main class="container mx-auto mt-10 px-5">
  <RouterView />
  </main>

  <Modal />
  <Notification />
</template>

<style scoped>

</style>
