
//Define o formato que todo item deve seguir
export type Produto = {

  nome: string;
  preco: number;
  categoria: "comidas" | "bebidas";
  imagem: string; // Caminho para a foto
};


export const menuItems: Produto[] = [
  //BEBIDAS
  {
    nome: "Iced Matcha Latte",
    preco: 18.90,
    categoria: "bebidas",
    imagem:  ""// Imagens vão ser adicionadas depois
  },
  {
    nome: "Caramel Macchiato",
    preco: 16.90,
    categoria: "bebidas",
    imagem: ""
  },
  {
    nome: "Cappuccino Italiano",
    preco: 12.00,
    categoria: "bebidas",
    imagem: ""
  },
  {
    nome: "Smoothie Glow",
    preco: 21.90,
    categoria: "bebidas",
    imagem: ""
  },
  {
    nome: "Chai Latte Spice",
    preco: 17.50,
    categoria: "bebidas",
    imagem: ""
  },

  //COMIDAS 
  {
    nome: "Avocado Toast",
    preco: 24.90,
    categoria: "comidas",
    imagem: ""
  },
  {
    nome: "Croissant de Amêndoas",
    preco: 19.50,
    categoria: "comidas",
    imagem: ""
  },
  {
    nome: "Toast Caprese",
    preco: 22.00,
    categoria: "comidas",
    imagem: ""
  },
  {
    nome: "Pão de Queijo da Serra (Cesta)",
    preco: 14.00,
    categoria: "comidas",
    imagem: ""
  },
  {
    nome: "Cheesecake de Frutas Vermelhas",
    preco: 21.00,
    categoria: "comidas",
    imagem: ""
  },
  {
    nome: "Red Velvet Clean",
    preco: 18.90,
    categoria: "comidas",
    imagem: ""
  },
];