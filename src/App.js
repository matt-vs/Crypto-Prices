import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Buttons from './Buttons';
import CoinList from './CoinList';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
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
  }, [])

  const handleChange = e => setSearch(e.target.value);
  const pageUp = () => setPage(page + 1);
  const pageDown = () => setPage(page - 1);

  const coinsPerPage = 10;
  const lastCoin = page * coinsPerPage;
  const firstCoin = lastCoin - coinsPerPage;
  const pageCoins = coins.slice(firstCoin, lastCoin);
  const searchCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="coin-app">
      <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input type='text' className='coin-input' placeholder='Search' onChange={handleChange} />
        </form>
      </div>

      <Buttons page={page} coinsPerPage={coinsPerPage} coins={coins} pageUp={pageUp} pageDown={pageDown} />

      {search.length ? <CoinList coins={searchCoins} /> : <CoinList coins={pageCoins} />}

      <Buttons page={page} coinsPerPage={coinsPerPage} coins={coins} pageUp={pageUp} pageDown={pageDown} />

    </div >
  );
}

export default App;
