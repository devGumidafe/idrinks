import { IRecipe } from '../models/index';
<script setup lang="ts">
import type { IRecipe } from '@/models';
import { useDrinksStore } from '@/stores/drinks';
import { useFavoritesStore } from '@/stores/favorites';
import { HeartIcon } from '@heroicons/vue/24/outline';
import { HeartIcon as HeartFilled } from '@heroicons/vue/24/solid';
import { computed } from 'vue';

type Props = {
  recipe: IRecipe;
};

const props = defineProps<Props>();

const drinksStore = useDrinksStore();
const { detailRecipe } = drinksStore;

const favoritesStore = useFavoritesStore();
const { toggleFavorite, isFavorite } = favoritesStore;

const favorite = computed(() => isFavorite(props.recipe));
</script>

<template>
  <div class="border rounded-lg shadow-lg">
    <div class="overflow-hidden">
      <img
        class="rounded-t-lg hover:scale-125 hover:rotate-2 transition duration-300 ease-in-out"
        :src="recipe.strDrinkThumb"
        :alt="recipe.strDrink"
      />
    </div>

    <div class="p-5 space-y-4">
      <div class="flex justify-between items-center gap-10">
        <h2 class="text-2xl truncate font-bold">{{ recipe.strDrink }}</h2>
        <HeartIcon
          v-if="!favorite"
          class="h-6 w-10 text-orange-500 cursor-pointer"
          @click="toggleFavorite(recipe)"
        />

        <HeartFilled
          v-else
          class="h-6 w-10 text-orange-500 cursor-pointer"
          @click="toggleFavorite(recipe)"
        />
      </div>
      <button
        type="button"
        class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full"
        @click="detailRecipe(recipe.idDrink)"
      >
        Ver receta
      </button>
    </div>
  </div>
</template>

<style scoped></style>
