import type { ISearch } from '@/models';
import axios from 'axios';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

const api = axios.create({
    baseURL: BASE_URL,
});

export const getCategories = async () => {
    const { data } = await api.get('/list.php?c=list');
    return data.drinks;
}

export const getRecipes = async (search: ISearch) => {
    const { data } = await api.get(`/filter.php?c=${search.category}&i=${search.name}`);
    return data.drinks;
}

export const getRecipe = async (id: string) => {
    const { data } = await api.get(`/lookup.php?i=${id}`);
    return data.drinks[0];
}



