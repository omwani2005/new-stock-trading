import React from 'react'

function Universe() {
    return (

        <div className='container text-center'>
            <div className='row text-center'>
                <h1 className='fs-4 text-center p-4 mt-3 '>The Zerodha Universe</h1>
                <p className='fs-5'>Extend your trading and investment experience even further with our partner platforms</p>

                <div className='row p-5'>
                    <div className='col-4'>
                        <img src="media/images/zerodhaFundhouse.png" alt="" style={{ width: "60%" }} />

                        <p className='text-muted text-center p-3' style={{ fontSize: "12px" }}>Our asset management venture <br />
                            that is creating simple and transparent index <br />
                            funds to help you save for your goals.
                        </p>
                    </div>
                    <div className='col-4'>
                        <img src="media/images/sensibullLogo.svg" alt="" style={{ width: "70%" }} />

                        <p className='text-muted text-center p-3' style={{ fontSize: "12px" }}>Options trading platform that lets you <br />
                            create strategies, analyze positions, and examine
                            data points like open interest, FII/DII, and more.

                        </p>
                    </div>
                    <div className='col-4'>
                        <img src="media/images/tijori.svg" alt="" style={{ width: "50%" }} />

                        <p className='text-muted text-center p-3' style={{ fontSize: "12px" }}>Investment research platform <br />
                            that offers detailed insights on stocks,<br />
                            sectors, supply chains, and more.

                        </p>
                    </div>
                </div>

                <div className='row '>

                    <div className='col-4'>
                        <img src="media/images/streakLogo.png" alt="" style={{ width: "60%" }} />

                        <p className='text-muted text-center p-3' style={{ fontSize: "12px" }}>Systematic trading platform <br />
                            that allows you to create and backtest <br />
                            strategies without coding.
                        </p>
                    </div>
                    <div className='col-4'>
                        <img src="media/images/smallcaseLogo.png" alt="" style={{ width: "70%" }} />

                        <p className='text-muted text-center p-3' style={{ fontSize: "12px" }}>
                            Thematic investing platform <br />
                            that helps you invest in diversified <br />
                            baskets of stocks on ETF's

                        </p>
                    </div>
                    <div className='col-4'>
                        <img src="media/images/dittoLogo.png" alt="" style={{ width: "50%" }} />

                        <p className='text-muted text-center p-3' style={{ fontSize: "12px" }}>
                            Personalized advice on life <br />
                            and health insurance. No spam <br />
                            and no mis-selling.

                        </p>
                    </div>
                </div>

                <div>
                    <button className='btn btn-primary mt-4 mb-5' >Sign up for free</button>
                </div>

            </div>
        </div>

    );
}

export default Universe;