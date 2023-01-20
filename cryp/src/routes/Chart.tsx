import ApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinHistory } from "./api";

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
          type='candlestick'
          series={[
            {
              name: "price",
              data: [
                {
                  x: data?.[0].time_close.substring(0, 10),
                  y: [
                    data?.[0].open,
                    data?.[0].high,
                    data?.[0].low,
                    data?.[0].close,
                  ],
                },
                {
                  x: data?.[1].time_close.substring(0, 10),
                  y: [
                    data?.[1].open,
                    data?.[1].high,
                    data?.[1].low,
                    data?.[1].close,
                  ],
                },
              ] as any[],
            },
          ]}
          options={{
            theme: { mode: "dark" },
            chart: {
              toolbar: { show: false },
              background: "transparent",
            },
            grid: { show: true },
            xaxis: {
              labels: { show: true },
            },
            yaxis: { show: true, decimalsInFloat: 2 },
            // fill: {
            //   type: "gradient",
            //   gradient: { gradientToColors: ["#55E6C1"], stops: [0, 1000] },
            // },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
