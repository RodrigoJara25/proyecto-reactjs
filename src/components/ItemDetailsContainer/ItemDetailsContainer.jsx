import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailsContainer.css'

import { db } from "../../config/firebase";
import { doc, getDoc } from "firebase/firestore";

function ItemDetailsContainer() {
    
    const [productDetails, setProductDetails] = useState({});
    const {itemId} = useParams();

    useEffect(()=>{

        // vuelvo a llamar a la base de datos para traerme el producto (con el id de firestore como param de la url)
        const docRef = doc(db, "items", itemId);
        getDoc(docRef)
        .then(response => {
            const data = response.data();
            const productAdapted = {...data};   // aca ya usamos el propio id del producto
            setProductDetails(productAdapted)
        })
        .catch(error=>{
            console.error(error)
        })

    }, [itemId])

    return (
        <div className="divItemDetailsContainer">
            <ItemDetail product={productDetails}/>
        </div>
    )
}

export default ItemDetailsContainer;