import { CardAPIRequest } from "../types/card-api-request-types";
import { APIService } from "./api-service";

export class CardService {
  static async getAll(
    filter: string = "",
    pageNumber: number = 1
  ): Promise<CardAPIRequest | undefined> {
    const result = await APIService.get(
      `/cards?pageSize=20&page=${pageNumber}` + filter
    );

    if (result) return result;

    return;
  }
}
