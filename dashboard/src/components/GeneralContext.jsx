import React,
{
useState
}
from "react";

import BuyActionWindow
from "./BuyActionWindow";

import SellActionWindow
from "./SellActionWindow";


// Create Context

const GeneralContext =

React.createContext({

openBuyWindow:
(uid)=>{},

closeBuyWindow:
()=>{},

openSellWindow:
(uid)=>{},

closeSellWindow:
()=>{}

});



// Provider

export const
GeneralContextProvider =

(props)=>{

// BUY STATES

const [

isBuyWindowOpen,

setIsBuyWindowOpen

]

=

useState(
false
);


// SELL STATES

const [

isSellWindowOpen,

setIsSellWindowOpen

]

=

useState(
false
);


// Selected Stock

const [

selectedStockUID,

setSelectedStockUID

]

=

useState(
""
);



// BUY FUNCTIONS

const handleOpenBuyWindow =

(uid)=>{

setSelectedStockUID(
uid
);

setIsBuyWindowOpen(
true
);

};


const handleCloseBuyWindow =

()=>{

setIsBuyWindowOpen(
false
);

setSelectedStockUID(
""
);

};




// SELL FUNCTIONS

const handleOpenSellWindow =

(uid)=>{

setSelectedStockUID(
uid
);

setIsSellWindowOpen(
true
);

};


const handleCloseSellWindow =

()=>{

setIsSellWindowOpen(
false
);

setSelectedStockUID(
""
);

};




return(

<GeneralContext.Provider

value={{

openBuyWindow:
handleOpenBuyWindow,

closeBuyWindow:
handleCloseBuyWindow,

openSellWindow:
handleOpenSellWindow,

closeSellWindow:
handleCloseSellWindow

}}

>

{props.children}



{

isBuyWindowOpen

&&

<BuyActionWindow

uid={
selectedStockUID
}

/>

}



{

isSellWindowOpen

&&

<SellActionWindow

uid={
selectedStockUID
}

/>

}


</GeneralContext.Provider>

);

};


export default
GeneralContext;