const products = [
  {
    id: 1,
    nombre: "Selección de Argentina",
    categoria: "selección",
    pais: "Argentina",
    liga: "Seleccion Nacional",
    temporada: "2024",
    tipo: "local",
    fabricante: "Adidas",
    imagen: "https://assets.adidas.com/images/w_600,f_auto,q_auto/05596cc5f7724da8946f5362652319d0_9366/Camiseta_Local_Seleccion_Argentina_24_Blanco_IP8409_21_model.jpg",
  },
  {
    id: 2,
    nombre: "Selección de Brasil",
    categoria: "selección",
    pais: "Brasil",
    liga: "Seleccion Nacional",
    temporada: "2024",
    tipo: "local",
    fabricante: "Nike",
    imagen: "https://www.nike.com.pe/on/demandware.static/-/Sites-catalog-equinox/default/dwa89cefa7/images/hi-res/196969877491_1_20240430-mrtPeru.jpg",
  },
  {
    id: 3,
    nombre: "Selección de Francia",
    categoria: "selección",
    pais: "Francia",
    liga: "Seleccion Nacional",
    temporada: "2024",
    tipo: "local",
    fabricante: "Nike",
    imagen: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/86087b33-bcf3-44c7-ad14-7f6d42aff283/FFF+MNK+DFADV+MATCH+JSYSS+HM.png",
  },
  {
    id: 4,
    nombre: "Selección de Alemania",
    categoria: "selección",
    pais: "Alemania",
    liga: "Seleccion Nacional",
    temporada: "2024",
    tipo: "local",
    fabricante: "Adidas",
    imagen: "https://perufc.com/wp-content/uploads/2024/05/1036-1.jpg",
  },
  {
    id: 5,
    nombre: "Selección de España",
    categoria: "selección",
    pais: "España",
    liga: "Seleccion Nacional",
    temporada: "2024",
    tipo: "local",
    fabricante: "Adidas",
    imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/eb28d02c163841b0b5de4d2fbbd7c296_9366/Camiseta_Local_Espana_24_Ninos_Rojo_IP9351_01_laydown.jpg",
  },
  {
    id: 6,
    nombre: "Real Madrid",
    categoria: "club",
    pais: "España",
    liga: "LaLiga",
    temporada: "2023-2024",
    tipo: "local",
    fabricante: "Adidas",
    imagen: "https://assets.adidas.com/images/w_600,f_auto,q_auto/78b62417f1e042aeb25e3353d278de3b_9366/Camiseta_local_Real_Madrid_24-25_Authentic_Blanco_IX8095_HM1.jpg",
  },
  {
    id: 7,
    nombre: "FC Barcelona",
    categoria: "club",
    pais: "España",
    liga: "LaLiga",
    temporada: "2023-2024",
    tipo: "local",
    fabricante: "Nike",
    imagen: "https://store.fcbarcelona.com/cdn/shop/files/25100BWC_1_8fe152c1-6f92-4367-a095-a2931a7b1788.jpg?v=1733397701&width=1946",
  },
  {
    id: 8,
    nombre: "Manchester United",
    categoria: "club",
    pais: "Inglaterra",
    liga: "Premier League",
    temporada: "2023-2024",
    tipo: "local",
    fabricante: "Adidas",
    imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bb34e2d7ef774076b2384c4aecc3c090_9366/Camiseta_Local_Manchester_United_24-25_Rojo_IU1397_HM1.jpg",
  },
  {
    id: 9,
    nombre: "Bayern Múnich",
    categoria: "club",
    pais: "Alemania",
    liga: "Bundesliga",
    temporada: "2023-2024",
    tipo: "local",
    fabricante: "Adidas",
    imagen: "https://assets.adidas.com/images/w_600,f_auto,q_auto/d80ce170b8ca4456a62bbc45f56eae09_9366/Camiseta_Local_FC_Bayern_24-25_Rojo_IT8511_HM30.jpg",
  },
  {
    id: 10,
    nombre: "Juventus",
    categoria: "club",
    pais: "Italia",
    liga: "Serie A",
    temporada: "2023-2024",
    tipo: "local",
    fabricante: "Adidas",
    imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2b119c8986e84f93bb12f461e3c5f39c_9366/Camiseta_Local_Juventus_24-25_Blanco_IS8002_HM1.jpg",
  },
  {
    id: 11,
    nombre: "Universitario de Deportes",
    categoria: "clubL1",
    pais: "Perú",
    liga: "Liga 1",
    temporada: "2023",
    tipo: "local",
    fabricante: "Marathon",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUAnaA0ydgfyNLbxLcO6oZ2reeug57fFoNw&s",
  },
  {
    id: 12,
    nombre: "Alianza Lima",
    categoria: "clubL1",
    pais: "Perú",
    liga: "Liga 1",
    temporada: "2023",
    tipo: "local",
    fabricante: "Nike",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8eZn3h9C0K26UcuWYQsW5gY7GmA20Xulcog&s",
  },
  {
    id: 13,
    nombre: "Sporting Cristal",
    categoria: "clubL1",
    pais: "Perú",
    liga: "Liga 1",
    temporada: "2023",
    tipo: "local",
    fabricante: "Adidas",
    imagen: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,e_sharpen:95,w_2000,h_2000/global/763975/01/mod01/fnd/PER/fmt/png/Camiseta-Sporting-Cristal-local-para-hombre",
  },
  {
    id: 14,
    nombre: "FBC Melgar",
    categoria: "clubL1",
    pais: "Perú",
    liga: "Liga 1",
    temporada: "2023",
    tipo: "local",
    fabricante: "Walon",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJzOF6j_g0pktwP9LJuRgLQSpHobw6nOOn3A&s",
  },
  {
    id: 15,
    nombre: "Cienciano",
    categoria: "clubL1",
    pais: "Perú",
    liga: "Liga 1",
    temporada: "2023",
    tipo: "local",
    fabricante: "Marathon",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_758067-MPE78998369712_092024-O.webp",
  },
];

// Funciones asincronicas

// Esta funcion simula llamara a una API, que va a responder luego de 500ms
// Devuele como respuesta el array "products"
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products), 500)
        // La promesa devuelve un array con todos los productos
    });
};

// Cuando el url lleve params, entonces vamos a usar esta funcion para filtrar solo 
// un unico elemento
export const getProductsById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(
                products.find((prod) => prod.id === productId)  
                // La promesa devuelve un producto con el productId mandado
            )
        }, 500);
    });
};

// Caudno el url lleve params, pero de categoria
// Vamos a mostrar todos lo que tengan esa categoria
export const getProducstByCategory = (categoryId) => {
    return new Promise ((resolve)=>{
        setTimeout(() => {
            resolve(
                products.filter((prod) => prod.categoria === categoryId)
                // La promesa devuelve un array de productos filtrado por categoryId
            )
        }, 500);
    });
};