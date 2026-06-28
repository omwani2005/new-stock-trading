import React,{
useEffect,
useState
}

from "react";

import api from "../api";

import "./Order.css";

const Orders=()=>{

const[
orders,
setOrders
]

=

useState([]);

useEffect(()=>{

fetchOrders();

},[]);

const fetchOrders=
async()=>{

try{

const token=

localStorage.getItem(
"token"
);

const res=

await api.get(

"/allOrders",

{

headers:{

Authorization:
`Bearer ${token}`

}

}

);

setOrders(
res.data
);

}

catch(err){

console.log(
err
);

}

};

return(

<div className="orders">

<h1
className="title"
>

Orders Page

</h1>

{

orders.length>0

?

orders.map(
(order)=>(

<div
className="order-card"
key={order._id}
>

<p>
{order.name}
</p>

<p>
Qty:
{order.qty}
</p>

<p>
₹{order.price}
</p>

<p>

{

new Date(
order.createdAt
)

.toLocaleDateString()

}

</p>

<p
className={

order.mode==="BUY"

?

"buy"

:

"sell"

}

>

{order.mode}

</p>

</div>

))

:

<div>

<p>

No Orders Found

</p>

</div>

}

</div>

);

};

export default Orders;
