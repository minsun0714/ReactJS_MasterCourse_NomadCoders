import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";

const Container = styled.div`
  color: ${(props) => props.theme.bgColor};
  padding: 20px 20px;
`;

const Header = styled.header`
  color: ${(props) => props.theme.bgColor};
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul`
  color: ${(props) => props.theme.accentColor};
`;

const Coin = styled.li`
  color: ${(props) => props.theme.textColor};
  background-color: whitesmoke;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
  &:hover {
    color: ${(props) => props.theme.accentColor};
    background-color: white;
    transition: color 0.2s ease-in;
  }
`;

const Title = styled.h1`
  color: black;
  font-size: 48px;
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
        <Title>Coins</Title>
      </Header>
      <CoinsList>
        {coins.map((coin) => (
          <Link to={`/${coin.id}`}>
            <Coin key={coin.id}>{coin.name} &rarr;</Coin>
          </Link>
        ))}
      </CoinsList>
    </Container>
  );
}
export default Coins;
