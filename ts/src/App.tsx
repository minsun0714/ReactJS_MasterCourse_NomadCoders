import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: ${(prop) => prop.theme.textColor};
`;

function App() {
  return <Title>hi</Title>;
}

export default App;
