import React, { useState, useContext } from "react";

import api from "../api";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {

const { closeSellWindow } =
useContext(GeneralContext);

const [
stockQuantity,
setStockQuantity
] =
useState(1);

const [
stockPrice,
setStockPrice
] =
useState(0);

const handleSellClick =
async () => {

try {

const token =
localStorage.getItem(
"token"
);

await api.post(

"/newOrder",

{

name: uid,

qty: Number(
stockQuantity
),

price: Number(
stockPrice
),

mode: "SELL"

},

{

headers: {

Authorization:
`Bearer ${token}`

}

}

);

window.location.reload();

closeSellWindow();

}

catch (error) {

console.log(
error.response?.data
);

alert(

error.response?.data?.message ||

"Sell Failed"

);

}

};

const handleCancelClick =
() => {

closeSellWindow();

};

return (

<div
className="container"
id="sell-window"
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

min="1"

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

min="0"

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

Available to sell

</span>

<div>

<button

className="btn btn-blue"

onClick={
handleSellClick
}

>

Sell

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

export default SellActionWindow;