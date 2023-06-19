<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useFavoritesStore } from '@/stores/favorites';
import Recipe from '@/components/Recipe.vue';

const favoritesStore = useFavoritesStore();
const {clearFavorites} = favoritesStore;
const { favorites, hasFavorites } = storeToRefs(favoritesStore);
</script>

<template>
  <div class="flex flex-col gap-5 md:flex-row">
    <h1 class="text-6xl font-extrabold">Favoritos</h1>
   
    <button v-if="hasFavorites" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="clearFavorites">
      Limpiar favoritos
    </button>

  </div>
  <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <p v-if="!hasFavorites" class="text-2xl font-bold">No tienes favoritos</p>
    <Recipe
      v-else
      v-for="favorite in favorites"
      :key="favorite.idDrink"
      :recipe="favorite"
    />
  </div>
</template>

<style scoped></style>
