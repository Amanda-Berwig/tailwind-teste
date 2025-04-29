// extras.js

export const extras = {
  Clothes: {
    featured: [
      {
        name: "Novidades em roupas",
        href: "/produtos/clothes/novidades",
        imageSrc: "https://via.placeholder.com/300x200?text=Roupas",
        imageAlt: "Novidades em roupas",
      },
    ],
    sections: [
      {
        id: "roupas",
        name: "Roupas",
        items: [
          { name: "Camisetas", href: "/produtos/clothes/camisetas" },
          { name: "Casacos", href: "/produtos/clothes/casacos" },
          { name: "Calças", href: "/produtos/clothes/calcas" },
        ],
      },
    ],
  },

  Electronics: {
    featured: [
      {
        name: "Tecnologia em alta",
        href: "/produtos/electronics/novidades",
        imageSrc: "https://via.placeholder.com/300x200?text=Eletrônicos",
        imageAlt: "Tecnologia em alta",
      },
    ],
    sections: [
      {
        id: "eletronicos",
        name: "Eletrônicos",
        items: [
          { name: "Celulares", href: "/produtos/electronics/celulares" },
          { name: "Notebooks", href: "/produtos/electronics/notebooks" },
          { name: "Acessórios", href: "/produtos/electronics/acessorios" },
        ],
      },
    ],
  },

  Furniture: {
    featured: [
      {
        name: "Decore sua casa",
        href: "/produtos/furniture/novidades",
        imageSrc: "https://via.placeholder.com/300x200?text=Móveis",
        imageAlt: "Móveis modernos",
      },
    ],
    sections: [
      {
        id: "moveis",
        name: "Móveis",
        items: [
          { name: "Sofás", href: "/produtos/furniture/sofas" },
          { name: "Mesas", href: "/produtos/furniture/mesas" },
          { name: "Cadeiras", href: "/produtos/furniture/cadeiras" },
        ],
      },
    ],
  },

  Shoes: {
    featured: [
      {
        name: "Estilo nos pés",
        href: "/produtos/shoes/novidades",
        imageSrc: "https://via.placeholder.com/300x200?text=Calçados",
        imageAlt: "Tênis e sapatos",
      },
    ],
    sections: [
      {
        id: "calcados",
        name: "Calçados",
        items: [
          { name: "Tênis", href: "/produtos/shoes/tenis" },
          { name: "Botas", href: "/produtos/shoes/botas" },
          { name: "Sandálias", href: "/produtos/shoes/sandalhas" },
        ],
      },
    ],
  },

  Miscellaneous: {
    featured: [
      {
        name: "Achadinhos diversos",
        href: "/produtos/miscellaneous/novidades",
        imageSrc: "https://via.placeholder.com/300x200?text=Outros",
        imageAlt: "Produtos diversos",
      },
    ],
    sections: [
      {
        id: "diversos",
        name: "Diversos",
        items: [
          { name: "Acessórios", href: "/produtos/miscellaneous/acessorios" },
          { name: "Outros", href: "/produtos/miscellaneous/outros" },
        ],
      },
    ],
  },
};
console.log(extras);
