import { APIRequest } from "../types/poke-api-request-types";

export class APIService {
  static baseURL = "https://api.pokemontcg.io/v2"; // "/cards"

  static async get(params: string = ""): Promise<APIRequest | undefined> {
    const API_KEY = import.meta.env.VITE_X_API;

    try {
      let response;
      await fetch(`${this.baseURL}${params}`, {
        method: "GET",
        headers: {
          "X-Api-Key": API_KEY,
        },
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

  //   static async getByName(pokemonName: string) {
  //     try {
  //       let response;
  //       await fetch(`${this.baseURL}/${pokemonName}`, {
  //         method: "GET",
  //       })
  //         .then((response) => {
  //           return response.json();
  //         })
  //         .then((data) => {
  //           response = data;
  //         });

  //       return response;
  //     } catch (error) {
  //       console.log("Erro ao buscar dado(s) por nome do servidor.", error);
  //     }
  //   }
}
