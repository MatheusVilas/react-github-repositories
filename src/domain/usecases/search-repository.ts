import { RepositoryModel } from "../models/repository";

export interface RepositorySearchParam {
  query?: string;
}

export interface SearchRepository {
  search: (param: RepositorySearchParam) => Promise<RepositoryModel>;
}
