import React, { useEffect } from "react";
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

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface PriceInfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<PriceInfoData>();
  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setLoading(false);
      setInfo(infoData);
      setPriceInfo(priceData);
      console.log(infoData);
      console.log(priceData);
    })();
  }, []);

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
