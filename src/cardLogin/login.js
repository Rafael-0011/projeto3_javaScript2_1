import { userLogin } from "../api/userLogin.js";

export async function login() {
  const userName = document.getElementById("userName");
  const passWord = document.getElementById("passWord");
  const submit = document.getElementById("submit");

  submit.addEventListener("click", async (event) => {
    event.preventDefault();
    const user = userName.value;
    const pass = passWord.value;

    if (!user || !pass) {
      alert("Username ou senha não podem estar vazios.");
      return;
    }
    console.log(user);
    console.log(pass);

    const dados = await userLogin(user, pass);

    if (dados) {
      localStorage.setItem("token", dados);
      console.log("Token armazenado:", dados);
      window.location.href = "card.html";
    } else {
      alert("nome ou senha errado");

    }
  });
}

login();

//username: "sophiab",
//password: "sophiabpass",

//username: "emilys",
//password: "emilyspass",

//username: "michaelw",
//password: "michaelwpass",
