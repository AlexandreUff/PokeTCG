import { APIRequest } from "../types/poke-api-request-types";
import { APIService } from "./api-service";

export class CardService {
  static async getAll(filter: string = ""): Promise<APIRequest | undefined> {
    const result = await APIService.get("/cards?pageSize=20&page=1" + filter);

    return result;
  }
}
