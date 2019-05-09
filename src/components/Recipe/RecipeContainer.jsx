import React from 'react'
import Recipe from './Recipe';
import RecipeButton from '../RecipeButton/RecipeButton';

import './Recipe.css';

const RecipeContainer = () => {
  return (
    <div className="RecipeContainer">
        <div className="RecipeContainerControls">
          <RecipeButton />
        </div>
       <Recipe />
    </div>
  )
}

export default RecipeContainer
