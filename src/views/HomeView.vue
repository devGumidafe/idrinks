<script setup lang="ts">
import { useDrinksStore } from '@/stores/drinks';
import { storeToRefs } from 'pinia';
import Recipe from '@/components/Recipe.vue';

const drinksStore = useDrinksStore();
const { recipes, hasRecipes } = storeToRefs(drinksStore);
</script>

<template>
  <h1 class="text-6xl font-extrabold">Recetas</h1>

  <div
    class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-10 my-10 gap-10"
  >
    <p v-if="!hasRecipes" class="text-2xl font-bold">No hay recetas</p>
    <Recipe
      v-else
      v-for="recipe in recipes"
      :key="recipe.idDrink"
      :recipe="recipe"
    />
  </div>
</template>

<style scoped></style>
