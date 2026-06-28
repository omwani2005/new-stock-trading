import React from 'react'

function Awards() {
    return (
        <div className='container mt-5'>

            <div className='row'>

                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' alt='Award' />
                </div>

                <div className='col-6 p-5 mt-5'>
                    <h1>Largest Stock Broker in India</h1>

                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in :</p>

                    <ul>
                        <div className='row'>
                            <div className='col-6'>
                                <li>Futures & Options</li>
                                <li>Commodity derevatives</li>
                                <li>Currency derevatives</li>
                            </div>
                            <div className='col-6'>
                                <li>Stocks & IPO's</li>
                                <li>Direct Mutual Funds</li>
                                <li>Bonds & Goverment Securities</li>
                            </div>
                        </div>
                    </ul>

                    <img src="media/images/pressLogos.png" alt="Press Logo" style={{width:"95%"}} />
                </div>

            </div>


        </div>
    );
}

export default Awards;