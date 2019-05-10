import React from 'react';
import { getTiltClass } from '../../utils/display-utils';

const tempImageUrl = "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.8zY_Dutbil2mj5XhTYShfgHaEo%26pid%3DApi&f=1";


const RecipeListIem =() => (
  <div className="RecipeListItem">
    <div className="RecipeListItemContent">
        <span><i className="fa fa-lemon"></i>&nbsp;Ingredient</span>
    </div>
  </div>
);

const Recipe = () => {
  return (
    <div className="Recipe">
      <h1 className="RecipeTitle">Recipe Title</h1>

      <div className="RecipeImageBox">
        <img src={tempImageUrl} alt="recipe-image" className="RecipeImage" />
      </div>

      <div className="RecipeIngredients">

        <div className="RecipeMeta">
          <div><strong>Ingredients</strong></div>
          <div><small>(Serves 4 - medium helpings)</small></div>
        </div>

        <div className="RecipeIngredientList">
            <div className="__scroll">
              <RecipeListIem  />
              <RecipeListIem  />
              <RecipeListIem  />
              <RecipeListIem  />
              <RecipeListIem  />
              <RecipeListIem  />
              <RecipeListIem  />
              <RecipeListIem  />
              <RecipeListIem  />
              <RecipeListIem  />
              <RecipeListIem  />
              <RecipeListIem  />
              <RecipeListIem  />
              <RecipeListIem  />
              <RecipeListIem  />
              <RecipeListIem  />
              <RecipeListIem  />
              <RecipeListIem  />
            </div>
        </div>

      </div>

      <div className="RecipePreparation">
        <div className="RecipeInstruction">
          <h1>Preparation</h1>
          <p>This is how you cook it</p>
        </div>
      </div>
    </div>
  )
}

export default Recipe
