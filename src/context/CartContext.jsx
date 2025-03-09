import { createContext, useState } from "react"

// Crea el contexto
export const CartContext = createContext();

// Crea el Provider
export function CartContextProvider({children}) {

    const [cartList, setCartList] = useState([]);

    const addToCart = (item, cantidad) => {
        let index = cartList.findIndex((itemCart) => item.id === itemCart.id);
        if (index !== -1) {
            // Se crea una copia del array original para respetar la inmutabilidad del estado en React
            const listaActualizada = [...cartList];
            listaActualizada[index].cantidad += cantidad;
            setCartList(listaActualizada);
        } else {
            setCartList([...cartList, {...item, cantidad}]);
        }
    };

    const removeList = () => {
        setCartList([]);
    };

    const deleteItem = (item) => {
        let index = item.id;
        const listaActualizada = cartList.filter(producto => producto.id !== index);
        setCartList(listaActualizada);
    };

    const totalProductos = () => {
        return cartList.reduce((acumulador, item) => acumulador + item.cantidad, 0)
    }
    
    return (
        <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem, totalProductos, removeList}}>
            {children}
        </CartContext.Provider>
    );
};