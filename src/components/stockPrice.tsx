"use client";
import { memo, useEffect, useState } from "react";
import { LoadingBox, StockPriceBox } from "../style/style";
import Head from "next/head";
import Image from "next/image";

interface StockPriceData {
  symbol: string | null;
  price: number | null;
  direction: string | null;
  change: number | null;
}

const StockPrice = () => {
  const [loading, setLoading] = useState(true);
  const [stock, setStock] = useState<StockPriceData>({
    price: 0,
    symbol: null,
    change: null,
    direction: null,
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    const eventSource = new EventSource(
      `${process.env.NEXT_PUBLIC_API_URL}/stock/005930`
    );

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setStock(data);
    };

    return () => eventSource.close();
  }, []);

  if (loading) {
    return <LoadingBox>Loading...📈</LoadingBox>;
  }

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
            width={420}
            height={220}
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
    </StockPriceBox>
  );
};

export default memo(StockPrice);
