import { CircularProgress, Container } from "@material-ui/core";
import React from "react";

const Loader: React.FC = () => {
  return (
    <Container>
      <CircularProgress />
    </Container>
  );
};

export default Loader;
