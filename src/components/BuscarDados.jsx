const buscarDados = async () => {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products", {
      method: "GET",
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return []; // retorna array vazio em caso de erro
  }
};

export default buscarDados;
