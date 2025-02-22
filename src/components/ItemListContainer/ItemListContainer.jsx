import { getProducts, getProducstByCategory } from "../../asyncProducts";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";

import './ItemListContainer.css'

function ItemListContainer({greeting}){

    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();

    // Primero: se ejecuta cuando el componente se monta
    // Segunda: se ejecuta cuando haya un cambio en la variable "categoryid"
    // pero cada vez que haya una modificacion en "categoryId", volvemos a renderizar para solo mostrar esa categoria
    useEffect(() => {

        // asyncFunct va a toimar el valor de una funcion, dependiendo si es que eixsten params o no en el url
        const asyncFunct = categoryId ? getProducstByCategory : getProducts;

        // si es getProducstByCategory, entonces va a recibir como argumnento categoryId
        // si es getProducts, entonces va a ignroar el parametro pasado como argumento
        asyncFunct(categoryId)
            .then((resp)=>{
                setProducts(resp);  // aca asigna a "products" la repsuesta de la promesa (un array)
            })
            .catch((err) => {
                console.log(err);
            })

    }, [categoryId])

    return (
        <div className="divItemListContainer">
            <h1>{greeting}</h1>
            <ItemList products={ products }/>
        </div>
    )
}

export default ItemListContainer;