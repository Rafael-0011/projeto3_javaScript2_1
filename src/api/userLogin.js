export async function userLogin(name, pass) {
  try {
    const res = await fetch(`${process.env.URL}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: name,
        password: pass,
        expiresInMins: 30,
      }),
    });

    if (res.status != 200) {
      throw new Error(`Erro na requisição: ${res.statusText}`);
    }

    const userDados = await res.json();

    if (!userDados.accessToken) {
      throw new Error("AccessToken não encontrado na resposta.");
    }
    return userDados.accessToken;
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
}
