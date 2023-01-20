import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinHistory } from "./api";

const Pcolor = styled.div`
  color: black;
`;

interface IOlhcv {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface RouteParams {
  coinId: string;
}

function Chart({ coinId }: RouteParams) {
  const { isLoading, data } = useQuery<IOlhcv[]>(["olhcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return <Pcolor>Chart</Pcolor>;
}
export default Chart;
