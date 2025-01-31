import { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

function Cart() {
    const { cartItems, food_list, removeFromCart ,url} = useContext(StoreContext);
    const navigate = useNavigate();
    const [total, setTotal] = useState(0);
    
    useEffect(() => {
       
        const newTotal = food_list.reduce((sum, item) => {
            if (cartItems[item._id] > 0) {
                return sum + item.price * cartItems[item._id];
            }
            return sum;
        }, 0);
        setTotal(newTotal);
    }, [cartItems, food_list]);

    return (
        <>
            <div className="cart">
                <div className="cart-items">
                    <div className="cart-items-title">
                        <p>Image</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>
                    <hr />
                    {food_list.map((item) => {
                        if (cartItems[item._id] > 0) {
                            return (
                                <>
                                    <div className="cart-items-in-cart" key={item._id}>
                                        <img src={url+"/images/"+item.image} alt={item.name} />
                                        <p>{item.name}</p>
                                        <p>${item.price}</p>
                                        <p>{cartItems[item._id]}</p>
                                        <p>${item.price * cartItems[item._id]}</p>
                                        <button onClick={() => removeFromCart(item._id)}>
                                            Remove
                                        </button>
                                    </div>
                                    <hr />
                                </>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
            <div className="proceed">
                <h2>Cart Totals</h2>
                <div>
                    <p>Subtotal</p> <p>${total}</p>
                </div>
                <div>
                    <p>Total</p> <p>${total}</p>
                </div>
                <button onClick={() => navigate('/order')}>CHECKOUT</button>
            </div>
        </>
    );
}

export default Cart;
