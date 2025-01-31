import React, { useContext } from "react";
import "./PlaceOrder.css"; // Import CSS
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
const { total,setTotal} = useContext(StoreContext);
    return (
        <>
            <div className="heading">
                <h2>Delivery Information</h2>
            </div>

            <form className="form">
                <div className="name">
                    <input type="text" placeholder="First Name" className="input" />
                    <input type="text" placeholder="Last Name" className="input" />
                </div>
                <input type="email" placeholder="Email" className="input" />
                <input type="tel" placeholder="Phone Number" className="input" />
                <input type="text" placeholder="Address" className="input" />
                <input type="text" placeholder="City" className="input" />
            </form>

            <div className="cart-total">
                <p>Subtotal: <span>${total}</span></p>
                <p>Delivery: <span>${3}</span></p>
                <p>Total: <span>${3+total}</span></p>
                <Link to="/myorder"><button >Proceed to pay</button></Link>
            </div>
        </>
    );
};

export default PlaceOrder;
