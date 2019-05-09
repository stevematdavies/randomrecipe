import React from 'react'

import './RecipeButton.css';

const RecipeButton = () => {
  return (
    <div className="RecipeButton">
        <div className="RecipeButtonLabel">
        <span><i className="fa fa-search"></i>
        &nbsp;Get Random Recipe</span>
        </div>
    </div>
  )
}

export default RecipeButton
