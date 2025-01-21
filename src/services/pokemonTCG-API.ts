//import { APIRequest } from "../types/poke-api-types";

export class PokeAPIService {
  static baseURL = "https://api.pokemontcg.io/v2/cards"; // "/cards"

  static async getAll(
    filter: string = ""
  ): Promise</* APIRequest */ unknown | undefined> {
    try {
      let response;
      await fetch(`${this.baseURL}${filter ? "?" + filter : ""}`, {
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
