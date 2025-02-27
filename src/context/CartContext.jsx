import { createContext, useState } from "react"

export const CartContext = createContext();

export function CartContextProvider({children}) {

    const [cartList, setCartList] = useState([]);

    const addToCart = (item, cantidad) => {
        setCartList([...cartList, {
            nombre: item.nombre,
            precio: item.precio,
            cantidad: cantidad
        }]);
    };

    const removeList = () => {

    };

    const deleteItem = () => {

    };

    const totalProductos = () => {
        return cartList.reduce((acumulador, item) => acumulador + item.cantidad, 0)
    }
    
    return (
        <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem, totalProductos}}>
            {children}
        </CartContext.Provider>
    );
};