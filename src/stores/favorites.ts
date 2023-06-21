import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useNotificationStore } from '@/stores/notification';
import type { IRecipe } from '@/models';

export const useFavoritesStore = defineStore('favorites', () => {
    const notificationStore = useNotificationStore();
    const { setNotification } = notificationStore;

    const favorites = ref<IRecipe[]>([] as IRecipe[]);
    const hasFavorites = computed(() => favorites.value.length > 0);

    const isFavorite = (recipe: IRecipe) => {
      return (
        favorites.value.findIndex(
          (item: IRecipe) => item.idDrink === recipe.idDrink
        ) !== -1
      );
    };

    const toggleFavorite = (recipe: IRecipe) => {
      const index = favorites.value.findIndex(
        (item: IRecipe) => item.idDrink === recipe.idDrink
      );
      if (index === -1) {
        favorites.value.push(recipe);
        setNotification(`Agregado a favoritos ${recipe.strDrink}`, false);
      } else {
        favorites.value.splice(index, 1);
        setNotification(`Eliminado de favoritos ${recipe.strDrink}`, true);
      }
    };

    const clearFavorites = () => {
      favorites.value = [];
    };

    return {
      favorites,
      hasFavorites,
      isFavorite,
      toggleFavorite,
      clearFavorites,
    };
  },
  { persist: true }
);
