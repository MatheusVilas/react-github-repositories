export interface RepositoryModel {
  owner: {
    login: string;
  };
  name: string;
  stargazers: {
    totalCount: number;
  };
  forks: {
    totalCount: number;
  };
}
