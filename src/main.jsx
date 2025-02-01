// Este es el archivo donde se monta el componente principal: APP

// Paso 1: Importar las librerias
import React from "react";
import ReactDOM from "react-dom/client"

// Imprtar componentes
import App from "./App"     // lo que no tiene extension, se asume que es .jsx en React

// Paso 2: Obtener una referencia al div con id root
const element = document.getElementById("root")

// Paso 3: Le decimos a react que tome el control del elemento
const root = ReactDOM.createRoot(element)        // dentro de ese nodo "div" creamos una raiz de React

// Paso 4: Mostramos el componente en pantalla
root.render(<App/>);
