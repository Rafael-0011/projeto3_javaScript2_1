import { obterDados } from "../api/obterDados";
import { jwtDecode } from "jwt-decode";

function img(img) {
  const imgElement = document.getElementById("img");
  imgElement.src = img;
}

function addElement(classTag, id) {
  const tagElement = document.getElementById(id);
  tagElement.textContent = classTag;
}

export async function dadosUser() {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Token não encontrado.");
    }
    const decoded = jwtDecode(token);
    const dadosUser = await obterDados(decoded.id);
    img(dadosUser.image);
    addElement(dadosUser.id, "id");
    addElement(dadosUser.username, "username");
    addElement(dadosUser.firstName, "firstName");
    addElement(dadosUser.lastName, "lastName");
    addElement(dadosUser.address.address, "address");
    addElement(dadosUser.gender, "gender");
    addElement(dadosUser.hair.color, "hair");
    addElement(dadosUser.eyeColor, "eyeColor");
    addElement(dadosUser.height, "height");
    addElement(dadosUser.weight, "weight");
  } catch (error) {
    console.log(error);
  }
}
dadosUser();
