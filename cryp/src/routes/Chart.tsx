import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinHistory } from "./api";
import ApexChart from "react-apexcharts";

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
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type='line'
          series={[
            {
              name: "high",
              data: data?.map((price) => price.high) ?? [],
            },
            {
              name: "close",
              data: data?.map((price) => price.close) ?? [],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            stroke: {
              curve: "smooth",
              width: 5,
            },
            xaxis: {
              labels: {
                show: false,
              },
              type: "datetime",
              categories: data?.map(
                (price) => new Date(Number(price.time_close))
              ),
            },
            yaxis: {
              show: false,
            },
            grid: {
              show: true,
            },
            tooltip: {
              x: {
                show: false,
              },
              y: {
                formatter: (v) => {
                  return "$" + v.toFixed(2);
                },
              },
            },
          }}
        />
      )}
    </div>
  );
}
export default Chart;
