export const formatIngredients = (recipe: any) => {
    const ingredients = [];
    for (let i = 1; i < 16; i++) {
      const ingredientName = recipe[`strIngredient${i}`];
      const ingredientQuantity = recipe[`strMeasure${i}`];
      if (ingredientName) {
        ingredients.push(`${ingredientName} - ${ingredientQuantity}`);
      }
    }
    return ingredients;
  };