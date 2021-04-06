import React from "react";

import { ApolloProvider } from "@apollo/client";

import client from "./client";

const Apollo: React.FC = ({ children }) => {
  return <ApolloProvider {...{ client }}>{children}</ApolloProvider>;
};

export default Apollo;
