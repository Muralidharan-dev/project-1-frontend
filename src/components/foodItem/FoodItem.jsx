import { useContext, useState } from "react";
import { assests } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = (props) => {
  const food_list = props.food_list;
  const Menu=props.selectMenu;
  const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);
  
  return (
    <>
      <h2 className="dish">Top Dishes Near By</h2>
    <div className="food-items">
  
      {food_list.map((item, index) => {
        if(props.selectMenu=="all"||props.selectMenu==item.category){
      
         const itemCount = cartItems[item._id] || 0;
         console.log(url);
        return (
          <div className="food-item" key={index}>
            <div>
              <img
                src={url+"/images/"+item.image}
                className="food-item-image"
                onClick={() => addToCart(item._id)}
                alt={item.name}
             
              />
            </div>
            {itemCount !== 0 ? (
           
              <div className="arithmetic">
                <img
                  src={assests.add_icon_green}
                  onClick={() =>addToCart(item._id)
                  }
                  alt="Add"
                />
                {cartItems[item._id]}
                <img
                  src={assests.remove_icon_red}
                  onClick={() =>removeFromCart(item._id)}
                  alt="Remove"
                />
              </div>
            ) : (
              <img
                className="add"
                src={assests.add_icon_white}
                onClick={() =>addToCart(item._id)}
                alt="Add"
              />
            )}
            
            <div className="food-item-info">
              <div>
                <p className="words">{item.name}</p>
              </div>
              <p className="words">{item.description}</p>
              <p className="item-price">${item.price}</p>
            </div>
          </div>
        );
      }
      })}
    </div>
    </>
  );
};

export default FoodItem;
