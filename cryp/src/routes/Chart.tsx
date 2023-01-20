import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinHistory } from "./api";

const Pcolor = styled.div`
  color: black;
`;

interface RouteParams {
  coinId: string;
}

function Chart({ coinId }: RouteParams) {
  const { isLoading, data } = useQuery(["olhcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return <Pcolor>Chart</Pcolor>;
}
export default Chart;
