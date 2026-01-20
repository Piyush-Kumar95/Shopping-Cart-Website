
import { Children, createContext,useContext,useState } from "react";

const cartContext = createContext()

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])

    const addToCart = (product) =>{
         setCart((prev) =>{
            const existing = prev.find((item) =>item.id === product.id )
            if(existing){

            return prev.map((item) => item.id === product.id ? {...item, qty: item.qty +1 } : item )

            }
            return [...prev , {...product, qty: 1}]
         })
    }

    const removeCart = (id) =>{
        setCart((prev) => prev.filter((item) => item.id !== id))

    }

    const updateQty= (id,qty) =>{
        setCart((prev) => 
        
        prev.map((item) => (item.id === id ? {...item, qty} : item))
        )

    }

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
    return (
        <cartContext.Provider value={{cart,setCart, addToCart, removeCart , updateQty, total}}>
          {children} 
         </cartContext.Provider>
    )

}

 export const useCart = () => useContext(cartContext);

