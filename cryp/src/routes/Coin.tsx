import React from "react";
import { useParams, useLocation } from "react-router";
import styled from "styled-components";
import { useState } from "react";

const Title = styled.h1`
  color: black;
  font-size: 48px;
`;

const Loading = styled.h1`
  margin-top: 50px;
  font-size: 50px;
  color: ${(props) => props.theme.accentColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  color: ${(props) => props.theme.bgColor};
  padding: 20px 20px;
  margin: auto;
  max-width: 480px;
`;

const Header = styled.header`
  color: ${(props) => props.theme.bgColor};
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

interface RouteParams {
  coinId: string;
}

interface RouteState {
  name: string;
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  console.log(state?.name ?? "Loading");
  return (
    <Container>
      <Header>
        <Title>{state?.name ?? "Loading"}</Title>
      </Header>
      {loading ? <Loading>Loading..</Loading> : null}
    </Container>
  );
}
export default Coin;
