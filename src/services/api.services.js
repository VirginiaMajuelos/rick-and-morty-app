import axios from "axios";

class ApiServices {
  constructor() {
    this.app = axios.create({
      baseURL: "https://rickandmortyapi.com/api/character",
    });
  }

  getAllCharacter = () => this.app.get("/");
  //   getDetails = (id) => this.app.get(`/details/${id}`);
}

export default ApiServices;
