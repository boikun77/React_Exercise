import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoin(json);
        setLoading(false);
      });
  });

  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coin.map((elem) => (
          <li>
            {elem.name}({elem.symbol}):{elem.quotes.USD.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
