import React from 'react'

function Hero() {
    return (
        <div className='container mb-5 border-bottom'>
            <div className='row text-center p-5 mt-5 mb-3 text-muted'>
                <h1 className='fs-3'>Zerodha Products</h1>
                <h3 className='fs-5'>Sleek, modern, and intuitive trading platforms</h3>
                <p className='mt-3'>Check out our <a href="https://zerodha.com/investments" style={{textDecoration:"none"}}>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a> </p>
            </div>
        </div>
    );
}

export default Hero;