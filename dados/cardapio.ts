
//Define o formato que todo item deve seguir
//Tratando o preço como número para facilitar operações futuras como ordenar por preço.
export type Produto = {

  nome: string;
  preco: number;
  categoria: "comidas" | "bebidas";
  imagem: string; // Caminho para a foto
  descricao: string;
};


export const menuItems: Produto[] = [
  //BEBIDAS
  {
    nome: "Iced Matcha Latte",
    preco: 18.90,
    categoria: "bebidas",
    imagem:  "/bebidas/iced.jpg",
    descricao: "Chá verde cerimonial, leite vaporizado e um toque de baunilha com gelo.",
  },
  {
    nome: "Caramel Macchiato",
    preco: 16.90,
    categoria: "bebidas",
    imagem: "/bebidas/caramel.jpg",
    descricao: "Espresso, leite cremoso e uma dose generosa de caramelo artesanal."
  },
  {
    nome: "Cappuccino Italiano",
    preco: 12.00,
    categoria: "bebidas",
    imagem: "/bebidas/cappuccino.jpg",
    descricao: "O clássico inconfundível. 1/3 espresso, 1/3 leite, 1/3 espuma densa."
  },
  {
    nome: "Smoothie Glow",
    preco: 21.90,
    categoria: "bebidas",
    imagem: "/bebidas/smoothie.jpg",
    descricao: "Morango, banana, colágeno e água de coco. Beleza de dentro para fora."
  },
  {
    nome: "Chai Latte Spice",
    preco: 17.50,
    categoria: "bebidas",
    imagem: "/bebidas/chai.jpg",
    descricao: "Mix de especiarias indianas, chá preto e leite. Conforto em uma xícara."
  },

  //COMIDAS 
  {
    nome: "Avocado Toast",
    preco: 24.90,
    categoria: "comidas",
    imagem: "/comidas/avocado.jpg",
    descricao: "Pão de fermentação natural, creme de abacate temperado, tomatinhos confit e sementes."
  },
  {
    nome: "Croissant de Amêndoas",
    preco: 19.50,
    categoria: "comidas",
    imagem: "/comidas/croissant.jpg",
    descricao: "Massa folhada francesa recheada e coberta com creme de amêndoas laminadas."
  },
  {
    nome: "Toast Caprese",
    preco: 22.00,
    categoria: "comidas",
    imagem: "/comidas/toast.jpg",
    descricao: "Muçarela de búfala, pesto fresco da casa e tomate no pão rústico."
  },
  {
    nome: "Pão de Queijo da Serra (Cesta)",
    preco: 14.00,
    categoria: "comidas",
    imagem: "/comidas/paodequeijo.jpg",
    descricao: "6 unidades de pão de queijo feitos com queijo da Serra da Canastra curado."
  },
  {
    nome: "Cheesecake de Frutas Vermelhas",
    preco: 21.00,
    categoria: "comidas",
    imagem: "/comidas/cheesecake.jpg",
    descricao: "Base crocante de biscoito, creme de queijo denso e geleia artesanal no topo."
  },
  {
    nome: "Red Velvet Clean",
    preco: 18.90,
    categoria: "comidas",
    imagem: "/dia.jpg",
    descricao: "A combinação perfeita entre suavidade e sabor. Massa aveludada com toque da casa."
  },
];