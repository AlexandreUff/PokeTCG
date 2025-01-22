import { APIService } from "./api-service";

export class FiltersService {
  static async get(filterName: string): Promise<any> {
    //unkown provisório
    const result = await APIService.get("/" + filterName);

    return result;
  }
}
