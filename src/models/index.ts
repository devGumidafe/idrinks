export interface ICategory {
    strCategory: string;
}

export interface IDrink {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
}

export interface ISearch {
    name: string;
    category: string;
}

export interface IRecipe {
    dateModified: string;
    idDrink: string;
    strAlcoholic: string;
    strCategory: string;
    strCreativeCommonsConfirmed: string;
    strDrink: string;
    strDrinkAlternate: string | null;
    strDrinkThumb: string;
    strGlass: string;
    strIBA: string;
    strImageAttribution: string;
    strImageSource: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string | null;
    strIngredient6: string | null;
    strIngredient7: string | null;
    strIngredient8: string | null;
    strIngredient9: string | null;
    strIngredient10: string | null;
    strIngredient11: string | null;
    strIngredient12: string | null;
    strIngredient13: string | null;
    strIngredient14: string | null;
    strIngredient15: string | null;
    strMeasure1: string | null;
    strMeasure2: string | null;
    strMeasure3: string | null;
    strMeasure4: string | null;
    strMeasure5: string | null;
    strMeasure6: string | null;
    strMeasure7: string | null;
    strMeasure8: string | null;
    strMeasure9: string | null;
    strMeasure10: string | null;
    strMeasure11: string | null;
    strMeasure12: string | null;
    strMeasure13: string | null;
    strMeasure14: string | null;
    strMeasure15: string | null;
    strInstructions: string;
    strTags: string;
    strVideo: string;
}
