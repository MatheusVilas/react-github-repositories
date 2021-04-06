import React, { useEffect, useState } from "react";

import Header from "../../components/header";
import Table, { TableItem } from "../../components/table";
import Container from "@material-ui/core/Container";

import { useQuery } from "@apollo/client";
import { RepositoryModel } from "../../../domain/models/repository";
import Loader from "../../components/loader";
import { RemoteSearchRepository } from "../../../data/usecases/remote-search-repository";

type Pagination = {
  endCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

type RepositoriesReturn = {
  search: {
    pageInfo: Pagination;
    repositoryCount: number;
    edges: {
      node: RepositoryModel;
    }[];
  };
};

const Home: React.FC = () => {
  const { data, refetch, loading } = useQuery<RepositoriesReturn>(
    RemoteSearchRepository,
    {
      notifyOnNetworkStatusChange: true,
      variables: {
        query: "topic: reactjs",
      },
    }
  );

  const [items, setItems] = useState<TableItem[]>([]);
  const [itemsTotal, setItemsTotal] = useState<number>(0);

  useEffect(() => {
    const newItems: TableItem[] =
      data?.search.edges.map((edge) => ({
        forksCount: edge.node.forks.totalCount,
        name: edge.node.name,
        starsCount: edge.node.stargazers.totalCount,
        owner: edge.node.owner.login,
      })) || [];

    setItems(newItems);
    setItemsTotal(data?.search.repositoryCount || 0);
  }, [data]);

  return (
    <main>
      <Header
        handleOnChange={(search) => {
          refetch({
            query: search,
          });
        }}
      />
      <Container style={{ marginTop: 50, marginBottom: 50 }} maxWidth="lg">
        {loading ? <Loader /> : <Table {...{ items, itemsTotal }} />}
      </Container>
    </main>
  );
};

export default Home;
