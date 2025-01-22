import { APIRequest } from "../types/poke-api-request-types";
import { APIService } from "./api-service";

export class CardService {
  static async getAll(
    filter: string = "",
    pageNumber: number = 1
  ): Promise<APIRequest | undefined> {
    const result = await APIService.get(
      `/cards?pageSize=20&page=${pageNumber}` + filter
    );

    return result;
  }
}
