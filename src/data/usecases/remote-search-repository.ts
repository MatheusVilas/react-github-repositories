import gql from "graphql-tag";

export const RemoteSearchRepository = gql`
  query searchRepositories($query: String!) {
    search(type: REPOSITORY, query: $query, first: 35) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
      }
      repositoryCount
      edges {
        node {
          ... on Repository {
            name
            owner {
              login
            }
            stargazers {
              totalCount
            }
            forks {
              totalCount
            }
          }
        }
      }
    }
  }
`;
