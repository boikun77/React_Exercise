import { useParams, Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #596275;
  padding: 30px 10px;
  max-width: 800px;
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

const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 30px;
  display: flex;
`;

const InfoSection = styled.div`
  background-color: #0a3d62;
  color: gray;
  padding: 30px 10px;
  max-width: 800px;
  margin: 60px auto;
  border-radius: 10px;
  p {
    color: whitesmoke;
  }
`;

interface RouterState {
  name: string;
}

function Coin() {
  const [info, setInfo] = useState({});
  const [price, setPrice] = useState({});
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams();
  const location = useLocation();
  const state = location.state as RouterState;
  const { name } = state;
  console.log(location);
  useEffect(() => {
    (async () => {
      const coinInfo = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceInfo = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(coinInfo);
      setPrice(priceInfo);
      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>코인: {name}</Title>
      </Header>

      {loading ? (
        "Loading..."
      ) : (
        <>
          <InfoSection>
            <p>this is it</p>
          </InfoSection>

          <InfoSection>
            <p>this is it</p>
          </InfoSection>
        </>
      )}
    </Container>
  );
}
export default Coin;
