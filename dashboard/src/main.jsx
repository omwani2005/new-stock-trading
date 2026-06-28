import React from "react";
import ReactDOM from "react-dom/client";
import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";

import "./index.css";
import Home from "./components/Home";

const params =
new URLSearchParams(
window.location.search
);

const tokenFromUrl =
params.get(
"token"
);

// Save token in dashboard storage
if(tokenFromUrl){

localStorage.setItem(
"token",
tokenFromUrl
);

window.history.replaceState(
{},
"",
"/"
);

}

const token =
localStorage.getItem(
"token"
);

// Redirect only if token missing
if(!token){

window.location.href =
"https://new-stock-trading.vercel.app/login";

}else{

ReactDOM.createRoot(
document.getElementById(
"root"
)
).render(

<React.StrictMode>

<BrowserRouter>

<Routes>

<Route
path="/*"
element={<Home/>}
/>

</Routes>

</BrowserRouter>

</React.StrictMode>

);

}
