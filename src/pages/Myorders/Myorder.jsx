import React from 'react'
import "./myorders.css"
const Myorder = () => {
  const url="https://project-1-backend-3ey1.onrender.com";
  let token=localStorage.getItem("token");
  if(token){
    const doing=async()=>{
      if (token) {
        try {
            const res = await axios.get(url + "/profile", {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });
            
            const userId=res.data.userId;
            

        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    }
    }
  }
    return (
        <div className="order-container">
          <div className="order-item">
            <div className="order-icon">📦</div>
            <div className="order-details">
              <p className="order-name">Greek salad x 2, Peri Peri Rolls x 3</p>
              <p className="order-price">$65.00</p>
            </div>
            <div className="order-status">
              <span className="dot"></span> Food Processing
            </div>
          </div>
        </div>
      );
};

export default Myorder;
