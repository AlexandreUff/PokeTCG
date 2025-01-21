import { ICard } from "./card-types";

export interface APIRequest {
  count: number;
  data: ICard /* Alterar esta tipagem depois */;
  page: number;
  pageSize: number;
  totalCount: number;
}
