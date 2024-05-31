import { useParams, Link, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../api";

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Container = styled.div`
  color: #487eb0;
  padding: 30px 10px;
  max-width: 500px;
  margin: 60px auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: #192a56;
`;

const Title = styled.h1`
  font-size: 40px;
`;

const CoinList = styled.ul`
;
`;

const Coin = styled.li`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  background-color: #dcdde1;
  padding: 20px;
  color: black;
  border-radius: 17px;
  a {
    transition: color 0.3s ease-in-out;
    font-size: 20px;
    align-items: center;
    display: flex;
  }
  &:hover {
    a {
      color: red;
    }
  }
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 30px;

  display: flex;
`;

function Coins() {
  // const [coins, setCoins] = useState<CoinInterface[]>([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch("https://api.coinpaprika.com/v1/coins");
  //     const json = await response.json();
  //     setCoins(json.slice(0, 100));
  //     setLoading(false);
  //   })();
  // }, []);
  const { isLoading, data } = useQuery<CoinInterface[]>({
    queryKey: ["allCoins"],
    queryFn: fetchCoins,
    select: (data) => data.slice(0, 100),
  });
  return (
    <Container>
      <Header>
        <Title>코인 목록</Title>
      </Header>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <CoinList>
            {data?.map((coin) => (
              <Coin key={coin.id}>
                <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                  <Img
                    src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                  />
                  {coin.name}
                </Link>
              </Coin>
            ))}
          </CoinList>
        </>
      )}
    </Container>
  );
}

export default Coins;
