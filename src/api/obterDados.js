export async function obterDados(id) {
  try {
    const res = await fetch(`${process.env.URL}/user/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (res.status != 200) {
      throw new Error(`Erro na requisição: ${res.statusText}`);
    }

    const userDados = await res.json();

    //console.log(userDados);

    return userDados;
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
}
