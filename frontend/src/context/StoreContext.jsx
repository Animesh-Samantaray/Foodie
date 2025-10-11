import { createContext, useState } from "react";
import { menu_list,food_list } from "../assets/menulist.js";
export const StoreContext = createContext(null);

export const StoreContextProvider = (props)=>{
 const [token,setToken] = useState('');
    const [val , setVal] = useState(0);
    const [cartItems,setCartItems]=useState({});
    const url='http://localhost:4000/api'
    const addToCart = (itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev , [itemId]:1}));      
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }

        for(let obj of food_list){
            if(obj._id===itemId){
                setVal((prev)=>prev+(obj.price))
            }
        }
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev , [itemId]:prev[itemId]-1}));
        for(let obj of food_list){
            if(obj._id===itemId){
                setVal((prev)=>prev-(obj.price))
            }
        }
    }


    const contextValue={
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        val,
        url,
        token,
        setToken
    }

    return(
        <StoreContext.Provider value={contextValue} >
        {props.children}
        </StoreContext.Provider>
    )
}


