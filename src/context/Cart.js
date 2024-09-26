import { createContext,useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({children}) {

    const [cart ,setCart] = useState({});


    const addToCart = (product) => {
        setCart( (prevCart)=>{
            /*
            whenever we want to update the current state based on prev state we pass a funstion to setstate method with prevstate as paramater
             */
            const newCart = {...prevCart};
            if(!newCart[product.id]){
                newCart[product.id] = {
                    id : product.id,
                    quantity : 1
                }
            }
            else{
                const newprod = {...prevCart[product.id]};
                newprod.quantity += 1;
                newCart[product.id] = newprod;
            }
            return newCart;

        })
    }

    const removeFromCart = (product) => {
        setCart( (prevCart)=>{
            
            const newCart = {...prevCart};
            if(!newCart[product.id]){
                return newCart;
            }
            else if (prevCart[product.id].quantity === 1) {
                delete newCart[product.id];
              }
            else{
                const newprod = {...prevCart[product.id]};
                newprod.quantity -= 1;
                newCart[product.id] = newprod;
            }
            return newCart;

        })
    }

    return (<CartContext.Provider value={{cart , addToCart ,removeFromCart}}>
        {children}
    </CartContext.Provider>)
}

export default CartContextProvider;