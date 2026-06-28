import React from 'react'

function Brokerage() {
    return (

        <div className='container'>

            <div className='row p-5 mt-5 text-center '>

                <div className='col-8 p-4'>
                    <a href="" style={{ textDecoration: "none" }}>
                        <h3 className='fs-5'>Brokerage Calculator </h3></a>
                    <ul style={{textAlign:"left",lineHeight:"1.9"}} className='text-muted fs-6'>
                        <li>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</li>
                        <li>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</li>
                        <li>For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).</li>
                        <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className='col-4 p-4'>
                    <a href="" style={{ textDecoration: "none" }}> <h3 className='fs-5'>List Of Charges</h3></a>
                </div>

            </div>

        </div>

    );
}

export default Brokerage;