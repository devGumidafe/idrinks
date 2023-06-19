<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import { computed } from 'vue';
import { useDrinksStore } from '@/stores/drinks';
import { storeToRefs } from 'pinia';
import { useNotificationStore } from '@/stores/notification';

const drinksStore = useDrinksStore();
const { categories, search } = storeToRefs(drinksStore);
const { searchRecipes } = drinksStore;

const notificationStore = useNotificationStore();
const { setNotification } = notificationStore;

const route = useRoute();
const isHome = computed(() => route.name === 'home');

const handleSubmit = () => {
  if (Object.values(search.value).includes('')) {
    setNotification('Todos los campos son obligatorios', true);
    return;
  }

  searchRecipes();
};
</script>

<template>
  <header class="bg-slate-800" :class="{ 'home-img': isHome }">
    <div class="mx-auto container px-5 py-10">
      <div class="flex justify-between items-center">
        <div>
          <RouterLink :to="{ name: 'home' }">
            <img class="w-32" src="/img/logo.svg" alt="Logo iDrink" />
          </RouterLink>
        </div>

        <nav class="flex gap-4 text-white font-bold uppercase">
          <RouterLink :to="{ name: 'home' }" active-class="text-orange-500">
            Inicio
          </RouterLink>
          <RouterLink
            :to="{ name: 'favorites' }"
            active-class="text-orange-500"
          >
            Favoritos
          </RouterLink>
        </nav>
      </div>

      <form
        v-if="isHome"
        @submit.prevent="handleSubmit"
        class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
      >
        <div class="space-y-4">
          <label
            class="block text-white uppercase font-extrabold text-lg"
            for="name"
            >Nombre o Ingredientes</label
          >
          <input
            class="p-3 w-full rounded-lg focus:outline-none"
            placeholder="Nombre o Ingredientes"
            id="name"
            type="text"
            v-model="search.name"
          />
        </div>

        <div class="space-y-4">
          <label
            class="block text-white uppercase font-extrabold text-lg"
            for="category"
            >Categoria</label
          >
          <select
            class="p-3 w-full rounded-lg focus:outline-none"
            id="category"
            v-model="search.category"
          >
            <option value="" disabled selected>-- Seleccione --</option>
            <option
              v-for="category in categories"
              :key="category.strCategory"
              :value="category.strCategory"
            >
              {{ category.strCategory }}
            </option>
          </select>
        </div>

        <button
          class="bg-white text-orange-400 uppercase font-bold text-lg rounded-lg py-3 px-6 w-full hover:text-white hover:bg-orange-600 transition ease-in-out duration-300"
          type="submit"
        >
          Buscar Recetas
        </button>
      </form>
    </div>
  </header>
</template>

<style scoped>
.home-img {
  background-image: url('/img/bg.jpg');
  background-size: cover;
  background-position: center;
}
</style>
