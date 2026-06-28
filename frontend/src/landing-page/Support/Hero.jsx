import React from 'react'

function Hero() {
    return (
      
      <section className='container-fluid ' id='supportHero'>

        <div className='p-3 mt-5 ' id='supportWrapper'>
          <h4 >Support Portal</h4>
          <a href="" style={{textDecoration:"none"}} id='supportTrack'>Track Tickets</a>
        </div>

         <div className=' row p-5  mb-5 ms-5   ' >

            <div className='col-6  '>
              <h5>Search for an answer or browse help topics <br />
              to create a ticket</h5>
              <input type="text" placeholder='Eg. how do I active F&O , where is my next Order' style={{width:"60%" , height:"40%" , borderRadius:"8px"}}/>
              <br />
              <br />
              <a href="">  Track account opening </a> 
              <a href=""> Track Segment activation </a>
              <a href=""> Intraday margins </a> <br />
              <a href=""> kite user manual </a>
              <br />
              <br />
            </div>
            <div className='col-6 mb-5 mt-5'>
              <h5>Featured</h5>
             <ol>
              <li><a href=""> Latest Intraday leverages and Square-off timings</a><br /></li>
              <br />
              <li>  <a href=""> Surveillance measure on scrips - May 2026</a></li>
             </ol>
     
            </div>
          
        </div>

      </section>

      
      
      );
}

export default Hero;