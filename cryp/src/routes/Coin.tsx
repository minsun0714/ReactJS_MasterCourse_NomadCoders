import React from "react";
import { useParams } from "react-router";

interface RouteParams {
  coinId: string;
}

function Coin() {
  const { coinId } = useParams<RouteParams>();
  console.log(coinId);
  return <div>Coin: {coinId}는 짱짱 코인</div>;
}
export default Coin;
