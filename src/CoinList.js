import React from 'react';
import Coin from './Coin';

const CoinList = ({ coins }) => {

    return (
        <div>
            {coins.map(coin => {
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
    )
}

export default CoinList;