import { ICard } from "./card-types";

export interface CardAPIRequest {
  count: number;
  data: ICard[];
  page: number;
  pageSize: number;
  totalCount: number;
}
