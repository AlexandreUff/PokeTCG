import { IFilter } from "../types/filter-types";
import { APIService } from "./api-service";

export class FiltersService {
  static async get(filterName: string): Promise<IFilter | undefined> {
    const result = await APIService.get("/" + filterName);

    if (result) return result;
    return;
  }
}
