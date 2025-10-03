import { createContext, useState } from "react";
import { menu_list,food_list } from "../assets/menulist.js";
export const StoreContext = createContext(null);

export const StoreContextProvider = (props)=>{

    const [cartItems,setCartItems]=useState({});

    const addToCart = (itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev , [itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev , [itemId]:prev[itemId]-1}))
    }


    const contextValue={
        food_list,
        cartItems,
        addToCart,
        removeFromCart
    }

    return(
        <StoreContext.Provider value={contextValue} >
        {props.children}
        </StoreContext.Provider>
    )
}


