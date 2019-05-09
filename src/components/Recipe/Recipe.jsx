import React from 'react';

const tempImageUrl = "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.8zY_Dutbil2mj5XhTYShfgHaEo%26pid%3DApi&f=1";

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

        <ul className="RecipeIngredientList">

          <li className="RecipeListItem">
            <div className="RecipeItemBg">
              <div className="RecipeItemContent">
              <div className="RecipeItemContentInner">
                <span><i className="fa fa-lemon"></i>&nbsp;Ingredient</span>
                </div>
              </div>
            </div>
          </li>


        </ul>
      </div>

      <div className="RecipeInstruction">
        <p>This is how you cook it</p>
      </div>

      <div className="RecipeFooter">
        <p>Credits and kudos to....</p>
      </div>

    </div>
  )
}

export default Recipe
