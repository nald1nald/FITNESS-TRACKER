import React from 'react';
import {GiCheckMark} from 'react-icons/gi';

function Ingredients() {
  return (
    <div className="container">
    <h1 className='recipeHeading'>What would you like to have!</h1>bb
    <div className='recipe_banner'>
            <div className="left-col">
                <span className='badge'>Italian</span>
                <h1>White Pizza</h1>
                <p><strong>Recipe by:</strong><small>Food52</small></p>
                <h3>Ingredients</h3>
                <div className='ingredients'>
                    <ul>
                        <li><GiCheckMark size="18px" color="#6fcb9f" />&nbsp;<span>Fresh ground pepper</span></li>
                    </ul>
                </div>
            </div>
            <div className="right-col">
                <div className="image-wrapper">
                <img src="https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1378&q=80" alt="" />
                </div>
            </div>
    </div>
</div>
  )
}

export default Ingredients
