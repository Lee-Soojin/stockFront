"use client";
import { useEffect, useState } from "react";
import { StockPriceBox } from "../style/style";
import Head from "next/head";
import Image from "next/image";

interface StockPriceData {
  symbol: string | null;
  price: number | null;
  direction: string | null;
  change: number | null;
}

const StockPrice = () => {
  const [stock, setStock] = useState<StockPriceData>({
    price: 0,
    symbol: null,
    change: null,
    direction: null,
  });

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:8080/stock/005930");

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setStock(data);
    };

    return () => eventSource.close();
  }, []);

  return (
    <StockPriceBox $direction={stock.direction === "상승"}>
      <Head>
        <title>삼성전자 실시간 주가</title>
        <meta name="description" content="삼성전자 실시간 주가" />
      </Head>
      <div>
        <h1>삼성전자 실시간 주가</h1>
        <div>
          <Image
            src={
              stock.direction === "상승"
                ? "/images/jaedragon1.png"
                : "/images/jaedragon2.png"
            }
            alt="삼성전자"
            sizes="341px"
            fill
          />
        </div>
        <p className="price">{(stock.price || 0).toLocaleString()}</p>
        <div className="change">
          전일대비
          <p>
            <span>{stock.direction === "상승" ? "▲" : "▼"}</span>
            {stock.change || 0}
          </p>
        </div>
      </div>

      <div></div>
    </StockPriceBox>
  );
};

export default StockPrice;
