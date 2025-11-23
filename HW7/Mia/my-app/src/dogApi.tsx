import axios from "axios";

const BASE_URL = "https://dog.ceo/api";

export function dogApiFactory() {
  return {
    async getRandomDog() {
      const response = await axios.get(`${BASE_URL}/breeds/image/random`);
      return response.data; // { message: "url", status: "success" }
    },
  };
}
