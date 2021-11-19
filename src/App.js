import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';



function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);


  useEffect(() => {
    const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`;
    const fetchData = async () => {
      try {
        const { data } = await axios.get(URL);
        setCoins(data);
        console.log(data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [page])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="coin-app">
      <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input type='text' className='coin-input' placeholder='Search' onChange={handleChange} />
        </form>
      </div>
      <div className='buttons'>
        {page > 1 ? <button className='button' onClick={() => setPage(page - 1)}>Prev</button> : ''}
        <button className='button' onClick={() => setPage(page + 1)}>Next</button>
      </div>

      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        )
      })}
    </div>
  );
}

export default App;
