import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../../asyncProducts";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailsContainer.css'

function ItemDetailsContainer({}) {
    
    const [productDetails, setProductDetails] = useState({});
    const {itemId} = useParams();

    useEffect(()=>{
        getProductsById(parseInt(itemId))   // RECORDAR: cuando recibo un param por url, este siempre esta en string
            .then((resp)=>{
                console.log(itemId);
                setProductDetails(resp);  // aca asigna a "productDetails" la repsuesta de la promesa (un producto)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [itemId])

    return (
        <div className="divItemDetailsContainer">
            <ItemDetail product={productDetails}/>
        </div>
    )
}

export default ItemDetailsContainer;