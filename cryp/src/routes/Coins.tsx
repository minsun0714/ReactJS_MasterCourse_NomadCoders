import { Link } from "react-router-dom";
import styled from "styled-components";
import React, { useEffect, useState } from "react";

const Img = styled.img`
  height: 30px;
  margin-right: 20px;
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

const CoinsList = styled.ul`
  color: ${(props) => props.theme.accentColor};
`;

const Coin = styled.li`
  color: ${(props) => props.theme.textColor};
  background-color: whitesmoke;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
  display: flex;
  justify-content: left;
  align-items: center;
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

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);
  console.log(coins);
  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      {loading ? (
        <Loading>Loading..</Loading>
      ) : (
        <CoinsList>
          {coins.map((coin) => (
            <Link
              to={{
                pathname: `/${coin.id}`,
                state: { name: coin.name },
              }}
              key={coin.id}
            >
              <Coin>
                <Img
                  src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                ></Img>
                {coin.name} &rarr;
              </Coin>
            </Link>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}
export default Coins;
