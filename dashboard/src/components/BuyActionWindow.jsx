import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import api from "../api";
import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {

const [stockQuantity,setStockQuantity]=
useState(1);

const [stockPrice,setStockPrice]=
useState(0);

const { closeBuyWindow } =
useContext(
GeneralContext
);

const handleBuyClick =
async()=>{

try{

const token =

localStorage.getItem(
"token"
);

console.log(
"TOKEN:",
token
);

await api.post(

"/newOrder",

{

name:uid,

qty:stockQuantity,

price:stockPrice,

mode:"BUY"

},

{

headers:{

Authorization:
`Bearer ${token}`

}

}

);

window.location.reload();

closeBuyWindow();

}

catch(err){

console.log(
err.response?.data
);

}

};

const handleCancelClick=
()=>{

closeBuyWindow();

};

return(

<div
className="container"
id="buy-window"
draggable="true"
>

<div
className="regular-order"
>

<div
className="inputs"
>

<fieldset>

<legend>
Qty.
</legend>

<input

type="number"

value={
stockQuantity
}

onChange={(e)=>

setStockQuantity(
e.target.value
)

}

/>

</fieldset>

<fieldset>

<legend>
Price
</legend>

<input

type="number"

step="0.05"

value={
stockPrice
}

onChange={(e)=>

setStockPrice(
e.target.value
)

}

/>

</fieldset>

</div>

</div>

<div
className="buttons"
>

<span>

Margin required ₹140.65

</span>

<div>

<button

className="btn btn-blue"

onClick={
handleBuyClick
}

>

Buy

</button>

<button

className="btn btn-grey"

onClick={
handleCancelClick
}

>

Cancel

</button>

</div>

</div>

</div>

);

};

export default BuyActionWindow;
