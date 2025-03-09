import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";

import './ItemListContainer.css'

// firestore
import { db } from "../../config/firebase";
import { collection, getDocs, where, query } from "firebase/firestore";

function ItemListContainer({greeting}){

    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();

    // Primero: se ejecuta cuando el componente se monta
    // Segunda: se ejecuta cuando haya un cambio en la variable "categoryid"
    // pero cada vez que haya una modificacion en "categoryId", volvemos a renderizar para solo mostrar esa categoria
    useEffect(() => {

        // Traigo los productos de la base de datos
        const collectionRef = categoryId ? query(collection(db, 'items'), where('categoria', '==', categoryId)) : collection(db, 'items');
        // el getDocs devuelve una promesa, por lo que tengo que esperar a que se resuelva
        getDocs(collectionRef)
        .then(response=>{   // response es un objeto que tiene un array de documentos
            const productAdapted = response.docs.map(doc => {   // doc es un objeto que tiene un id y un data
                const data = doc.data()
                console.log(doc.id);
                return {...data, id: doc.id}    // aca sobrescribo el id gerado manualmente por el id que me da firestore (para el url)
            })
            setProducts(productAdapted)
            
        })
        .catch(error => {
            console.error(error);
        })
        

    }, [categoryId])

    const titulo = () => {
        if (categoryId === "club") {
            return "LOS MEJORES DE EUROPA"
        } else if(categoryId === "clubL1") {
            return "APOYA A TU EQUIPO"
        } else{
            return "CAMPEONES DEL MUNDO"
        }
    }

    return (
        <div className="divItemListContainer">
            <h1>{greeting ? greeting : titulo()}</h1>
            <ItemList products={ products }/>
        </div>
    )
}

export default ItemListContainer;