import { defineStore } from 'pinia';
import { computed, onMounted, ref } from 'vue';
import type { ICategory, IRecipe, ISearch } from '@/models';
import { getCategories, getRecipe, getRecipes } from '@/services';
import { useModalStore } from '@/stores/modal';
import { formatIngredients } from '@/helpers';

export const useDrinksStore = defineStore('drinks', () => {
  const modalStore = useModalStore();
  const categories = ref<ICategory[]>([] as ICategory[]);
  const search = ref<ISearch>({ name: '', category: '' });
  const recipes = ref<IRecipe[]>([] as IRecipe[]);
  const recipe = ref<IRecipe>({} as IRecipe);
  const hasRecipes = computed(() => recipes.value.length > 0);
  const ingredients = computed(() => formatIngredients(recipe.value));

  const searchRecipes = async () => {
    recipes.value = await getRecipes(search.value);
  };

  const detailRecipe = async (id: string) => {
    recipe.value = await getRecipe(id);
    modalStore.toggleModal();
  };

  onMounted(async () => {
    categories.value = await getCategories();
  });

  return {
    categories,
    search,
    recipes,
    recipe,
    hasRecipes,
    ingredients,
    searchRecipes,
    detailRecipe,
  };
});
