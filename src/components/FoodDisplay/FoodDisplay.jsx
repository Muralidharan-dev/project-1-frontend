import { useContext, useState } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../foodItem/FoodItem'
const FoodDisplay = ({selectMenu }) => {
    const {food_list}=useContext(StoreContext)
  return (
    <>
    <div className='food-display' id='food-display'>

      <div className='food-display-list'>
      <FoodItem food_list={food_list} selectMenu={selectMenu}/>
      </div>
    </div> 
    </>
  )
}

export default FoodDisplay
