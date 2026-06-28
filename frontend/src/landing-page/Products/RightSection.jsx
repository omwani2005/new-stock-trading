import React from 'react'

function RightSection({ productName, imageURL, productDescription, learnMore }) {
    return (
        <div className='container mt-5'>
            <div className='row'>

                <div className='col-6 mt-5 p-5'>


                    <div className='col-6 p-5'>
                        <h1 className='text-muted '>{productName}</h1>
                        <p className='text-muted mt-3 '>{productDescription}</p>
                        <div>
                            <a href={learnMore} className='m-3' style={{ textDecoration: "none" }} >Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        </div>


                    </div>

                </div>

                <div className='col-6 p-3'>
                    <img src={imageURL} alt="Image"  />
                </div>



            </div>
        </div>

    );
}

export default RightSection;