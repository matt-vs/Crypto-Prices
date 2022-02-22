import React from 'react';
import './Buttons.css';

const Buttons = ({ page, pageUp, pageDown }) => {

    return (
        <div className='buttons'>
            <button
                className={page > 1 ? 'button active' : 'disabled'}
                onClick={pageDown}
                disabled={page > 1 ? false : true}
            >Prev
            </button>
            <button
                className={'button active'}
                onClick={pageUp}

            >Next
            </button>
        </div>
    )
}

export default Buttons;
