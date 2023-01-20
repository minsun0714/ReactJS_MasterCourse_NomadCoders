import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinTickers } from "./api";

const OverviewMktCap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 7px;
`;

const OverviewAthDatePrice = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 10px 0px;
  gap: 3px;
  height: 10px;
  margin-bottom: 52px;
`;

const Overview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
const OverviewItem = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
    color: ${(props) => props.theme.accentColor};
  }
`;

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

interface RouteParams {
  coinId: string;
}

function Price({ coinId }: RouteParams) {
  const { isLoading, data } = useQuery<PriceInfoData>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 5000,
    }
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <>
          <OverviewMktCap>
            <OverviewItem>
              <span>market_cap:</span>
              <span>{"$" + data?.quotes.USD.market_cap}</span>
            </OverviewItem>
          </OverviewMktCap>
          <OverviewAthDatePrice>
            <Overview>
              <OverviewItem>
                <span>ath_date:</span>
                <span>{data?.quotes.USD.ath_date.slice(0, 10)}</span>
              </OverviewItem>
            </Overview>

            <Overview>
              <OverviewItem>
                <span>ath_price:</span>
                <span>{"$" + data?.quotes.USD.ath_price}</span>
              </OverviewItem>
            </Overview>
          </OverviewAthDatePrice>
          <OverviewAthDatePrice>
            <Overview>
              <OverviewItem>
                <span>percent_from_price_ath:</span>
                <span>{data?.quotes.USD.percent_from_price_ath + "%"}</span>
              </OverviewItem>
            </Overview>

            <Overview>
              <OverviewItem>
                <span>percent_change_24h:</span>
                <span>{data?.quotes.USD.percent_change_24h + "%"}</span>
              </OverviewItem>
            </Overview>
          </OverviewAthDatePrice>

          <OverviewAthDatePrice>
            <Overview>
              <OverviewItem>
                <span>percent_change_30m:</span>
                <span>{data?.quotes.USD.percent_change_30m + "%"}</span>
              </OverviewItem>
            </Overview>

            <Overview>
              <OverviewItem>
                <span>percent_change_1y:</span>
                <span>{data?.quotes.USD.percent_change_1y + "%"}</span>
              </OverviewItem>
            </Overview>
          </OverviewAthDatePrice>
        </>
      )}
    </div>
  );
}
export default Price;
