import styled from "styled-components";
import React from "react";

const Container = styled.div`
  color: ${(props) => props.theme.bgColor};
`;

const Header = styled.header`
  color: ${(props) => props.theme.bgColor};
`;

const CoinsList = styled.ul`
  color: ${(props) => props.theme.accentColor};
`;

const Coin = styled.li`
  color: ${(props) => props.theme.accentColor};
`;

const Title = styled.h1`
  color: black;
`;

const coins = [
  {
    id: "btc-bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "eth-ethereum",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "hex-hex",
    name: "HEX",
    symbol: "HEX",
    rank: 3,
    is_new: false,
    is_active: true,
    type: "token",
  },
];

function Coins() {
  return (
    <Container>
      <Header>
        <Title>Coins~!~!~!</Title>
      </Header>
      <CoinsList>
        <Coin>Coin1</Coin>
        <Coin>Coin2</Coin>
        <Coin>Coin3</Coin>
      </CoinsList>
    </Container>
  );
}
export default Coins;
