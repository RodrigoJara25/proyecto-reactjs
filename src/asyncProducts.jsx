const products = [
  {
    id: 1,
    nombre: "Selección de Argentina",
    categoria: "selección",
    pais: "Argentina",
    liga: "N/A",
    temporada: "2024",
    tipo: "local",
    fabricante: "Adidas",
    imagen: "https://ejemplo.com/argentina-local.jpg",
  },
  {
    id: 2,
    nombre: "Selección de Brasil",
    categoria: "selección",
    pais: "Brasil",
    liga: "N/A",
    temporada: "2024",
    tipo: "local",
    fabricante: "Nike",
    imagen: "https://ejemplo.com/brasil-local.jpg",
  },
  {
    id: 3,
    nombre: "Selección de Francia",
    categoria: "selección",
    pais: "Francia",
    liga: "N/A",
    temporada: "2024",
    tipo: "local",
    fabricante: "Nike",
    imagen: "https://ejemplo.com/francia-local.jpg",
  },
  {
    id: 4,
    nombre: "Selección de Alemania",
    categoria: "selección",
    pais: "Alemania",
    liga: "N/A",
    temporada: "2024",
    tipo: "local",
    fabricante: "Adidas",
    imagen: "https://ejemplo.com/alemania-local.jpg",
  },
  {
    id: 5,
    nombre: "Selección de España",
    categoria: "selección",
    pais: "España",
    liga: "N/A",
    temporada: "2024",
    tipo: "local",
    fabricante: "Adidas",
    imagen: "https://ejemplo.com/espana-local.jpg",
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
    imagen: "https://ejemplo.com/real-madrid-local.jpg",
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
    imagen: "https://ejemplo.com/barcelona-local.jpg",
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
    imagen: "https://ejemplo.com/manchester-united-local.jpg",
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
    imagen: "https://ejemplo.com/bayern-munich-local.jpg",
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
    imagen: "https://ejemplo.com/juventus-local.jpg",
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
    imagen: "https://ejemplo.com/universitario-local.jpg",
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
    imagen: "https://ejemplo.com/alianza-lima-local.jpg",
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
    imagen: "https://ejemplo.com/sporting-cristal-local.jpg",
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
    imagen: "https://ejemplo.com/melgar-local.jpg",
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
    imagen: "https://ejemplo.com/cienciano-local.jpg",
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