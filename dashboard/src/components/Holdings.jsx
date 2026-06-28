import React, { useState, useEffect } from "react";

import api from "../api";

import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {

const [allHoldings,setAllHoldings]=
useState([]);

useEffect(()=>{

fetchHoldings();

},[]);

const fetchHoldings =
async()=>{

try{

const token =

localStorage.getItem(
"token"
);

const res =

await api.get(

"/allHoldings",

{

headers:{

Authorization:
`Bearer ${token}`

}

}

);

setAllHoldings(
res.data
);

}

catch(err){

console.log(
"Holdings Error",
err
);

}

};

const labels =

allHoldings.map(
(stock)=>
stock.name
);

const data={

labels,

datasets:[

{

label:
"Stock Price",

data:

allHoldings.map(
(stock)=>
stock.price
),

backgroundColor:
"rgba(255,99,132,0.5)"

}

]

};

return(

<>

<h3 className="title">

Holdings
(
{allHoldings.length}
)

</h3>

<div className="order-table">

<table>

<thead>

<tr>

<th>Instrument</th>

<th>Qty</th>

<th>Avg</th>

<th>LTP</th>

<th>Current Value</th>

<th>P&L</th>

<th>Net</th>

<th>Day</th>

</tr>

</thead>

<tbody>

{

allHoldings.length===0

?

<tr>

<td
colSpan="8"
>

No Holdings Found

</td>

</tr>

:

allHoldings.map(
(stock,index)=>{

const curValue =
stock.qty*
stock.price;

const pnl =

curValue-

(
stock.qty*
stock.avg
);

return(

<tr key={index}>

<td>{stock.name}</td>

<td>{stock.qty}</td>

<td>₹{stock.avg}</td>

<td>₹{stock.price}</td>

<td>₹{curValue}</td>

<td>
₹{pnl}
</td>

<td>
{stock.net}
</td>

<td>
{stock.day}
</td>

</tr>

);

}

)

}

</tbody>

</table>

</div>

<VerticalGraph
data={data}
/>

</>

);

};

export default Holdings;
