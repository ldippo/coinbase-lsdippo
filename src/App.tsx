import React from "react";
import "./App.css";

import LineChart from "./LineChart";
const dates = [
  "2021-01-01",
  "2021-01-02",
  "2021-01-03",
  "2021-01-04",
  "2021-01-05",
  "2021-01-06",
  "2021-01-07",
  "2021-01-08",
  "2021-01-09",
  "2021-01-10",
  "2021-01-11",
  "2021-01-12",
  "2021-01-13",
];
function App() {
  const getPrices = React.useCallback(
    async (date: string) =>
      await fetch(
        `https://api.coinbase.com/v2/prices/BTC-USD/spot?date=${date}`
      ).then((r) => r.json()),
    []
  );

  const getPriceData = React.useCallback(async () => {
    return await Promise.all(dates.map(getPrices));
  }, [getPrices]);
  const [priceData, setPriceData] = React.useState<any>([]);
  React.useEffect(() => {
    getPriceData().then(setPriceData);
  }, [getPriceData]);
  const priceChartData = React.useMemo(
    () =>
      priceData.map(({ data }: any, idx: number) => ({
        x: idx,
        y: data.amount,
      })),
    [priceData]
  );
  console.log({ priceChartData, priceData });
  return (
    <div className="App">
      BTCPRICE
      {priceChartData.length && <LineChart data={priceChartData} />}
    </div>
  );
}

export default App;
