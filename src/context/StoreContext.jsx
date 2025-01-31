import axios from "axios";
import {createContext, useEffect} from "react";

export const StoreContext=createContext(null);
import {useState} from "react";
import { Await } from "react-router-dom";
const StoreContextProvider=(props)=>{
    const [total,setTotal]=useState(0);
    const url="https://project-1-backend-3ey1.onrender.com";
    const [loggedin,setLoggedin]=useState(true);
    const [food_list,setFoodList]=useState([]);
    const [cartItems,setCartItems]=useState({});
    const [userId,setUserId]=useState("");
    const addToCart = async (itemId) => {
        console.log("Adding item to cart:", itemId);
        setCartItems((prev) => {
            const newCartItems = { ...prev };
            newCartItems[itemId] = (newCartItems[itemId] || 0) + 1;
            return newCartItems;
        });

        const token = localStorage.getItem("token");
        if (token) {
            try {
                const res = await axios.get(url + "/profile", {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });
                
                console.log("item:  "+itemId)
                
                console.log(res.data)
                await axios.post(`${url}/api/cart/add`, 
                    {
                        itemId: itemId,
                        userId: res.data.userId
                    },
                    {
                        headers: {
                            "Content-Type": "application/json"  // Explicitly specify JSON format
                        }
                    }
                );
            } catch (error) {
                console.error("Error adding to cart:", error);
            }
        }
    };
    const fetchFoodList=async()=>{
        const response=await axios.get(url+"/api/food/list")
        console.log(response.data.data[0]._id);
        setFoodList(response.data.data);
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>{
            const newCartItems={...prev};
            if(newCartItems[itemId]>0){
                newCartItems[itemId]-=1;
            }
            else{
                delete newCartItems[itemId];
            }
            return newCartItems;
        })
    }

    const getTotatCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            console.log(item);
        }
    }
    useEffect(()=>{
        async function loadData(){
            await fetchFoodList();
        }
        loadData();
    },[])
    const contextValue={
      food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotatCartAmount,
        url,
        loggedin,
        setLoggedin,
        total,
        setTotal
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;