import React from 'react'

function Hero() {
    return (

        <div className='container'>

            <div className='row border-bottom p-5 mt-5 text-center mb-5'>
                <h1 className=' fs-2 '>Charges</h1>
                <h4 className=' text-muted'>List of all charges and taxes</h4>

                <div className='row p-5 mt-5  '>

                    <div className='col-4'>
                        <img src="media/images/pricing0.svg" alt="" style={{ width: "80%" }} />
                        <h3 className='fs-4'>Free equity delivery</h3>
                        <p className='text-muted p-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>

                    </div>
                    <div className='col-4'>
                        <img src="media/images/intradayTrades.svg" alt="" style={{ width: "80%" }} />
                        <h3 className='fs-4'>Intraday and F&O trades</h3>
                        <p className='text-muted p-3'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                    <div className='col-4 '>
                        <img src="media/images/pricing0.svg" alt="" style={{ width: "80%" }} />
                        <h3 className='fs-4' >Free direct MF
                        </h3>
                        <p className='text-muted p-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>

                    <div className='mt-5 p-5'>
                        <h1 className='mt-5 '>Open a Zerodha account </h1>

                        <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>

                        <button style={{ width: "20%", margin: " 0 auto" }} className='btn btn-primary p-2 fs-5 mb-5'>Sign up for free</button>
                    </div>



                </div>

            </div>






        </div>









    );
}

export default Hero;