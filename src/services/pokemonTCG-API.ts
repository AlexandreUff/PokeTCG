import { APIRequest } from "../types/poke-api-request-types";

export class PokeAPIService {
  static baseURL = "https://api.pokemontcg.io/v2/cards"; // "/cards"

  static async getAll(filter: string = ""): Promise<APIRequest | undefined> {
    try {
      let response;
      await fetch(
        `${this.baseURL}${filter ? "?" + filter : "?pageSize=20&page=1"}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": "0dd35657-ace9-49d8-ab25-7b2d8e8c570d",
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          response = data;
        });

      return response;
    } catch (error) {
      console.log("Erro ao buscar dado(s) do servidor.", error);
    }
  }

  static async getByName(pokemonName: string) {
    try {
      let response;
      await fetch(`${this.baseURL}/${pokemonName}`, {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          response = data;
        });

      return response;
    } catch (error) {
      console.log("Erro ao buscar dado(s) por nome do servidor.", error);
    }
  }
}
