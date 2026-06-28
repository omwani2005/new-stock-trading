import React from 'react'

function LeftSection({ imageURL, produntName, productDescription, tryDemo, learnMore, playStore, appStore }) {
    return (

        <div className='container mt-4'>
            <div className='row'>
                <div className='col-6 p-3'>
                    <img src={imageURL} alt="Image" />
                </div>
                <div className='col-6 p-5'>
                    <h1 className='text-muted fs-3'>{produntName}</h1>
                    <p className='text-muted mt-3 '>{productDescription}</p>
                    <div>
                        <a href={tryDemo} className='m-3' style={{ textDecoration: "none" }}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href={learnMore} className='m-3' style={{ textDecoration: "none" }} >Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='mt-3 p-2'>
                        <a href={playStore}><img src="media/images/googlePlayBadge.svg" alt="play store" /></a>
                        <a href={appStore}><img src="media/images/appstoreBadge.svg" alt="app store" /></a>
                    </div>

                </div>
            </div>
        </div>





    );
}

export default LeftSection;