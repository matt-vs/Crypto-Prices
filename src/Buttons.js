import React from 'react';
import './Buttons.css';

const Buttons = ({ page, coins, coinsPerPage, pageUp, pageDown }) => {

    return (
        <div className='buttons'>
            <button
                className={page > 1 ? 'button active' : 'disabled'}
                onClick={pageDown}
                disabled={page > 1 ? false : true}
            >Prev
            </button>
            <button
                className={page < (Math.ceil(coins.length / coinsPerPage)) ? 'button active' : 'disabled'}
                onClick={pageUp}
                disabled={page < (Math.ceil(coins.length / coinsPerPage)) ? false : true}
            >Next
            </button>
        </div>
    )
}

export default Buttons;
