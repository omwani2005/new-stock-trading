import React from "react";

import { Link } from "react-router-dom";

function Navbar(){

const logout = ()=>{

localStorage.removeItem(
"token"
);

window.location.href =
"/login";

};

return(

<nav

className=
"navbar navbar-expand-lg border-bottom"

style={{

backgroundColor:"#FFF"

}}

>

<div
className="container p-2"
>

<Link

className="navbar-brand"

to="/"

>

<img

src="media/images/logo.svg"

alt="Logo"

style={{

width:"25%"

}}

/>

</Link>

<button

className="navbar-toggler"

type="button"

data-bs-toggle="collapse"

data-bs-target="#navbarSupportedContent"

>

<span

className="navbar-toggler-icon"

>

</span>

</button>

<div

className="collapse navbar-collapse"

id="navbarSupportedContent"

>

<ul

className="navbar-nav ms-auto align-items-center gap-3"

>

<li className="nav-item">

<Link

className="nav-link"

to="/about"

>

About

</Link>

</li>

<li className="nav-item">

<Link

className="nav-link"

to="/products"

>

Products

</Link>

</li>

<li className="nav-item">

<Link

className="nav-link"

to="/pricing"

>

Pricing

</Link>

</li>

<li className="nav-item">

<Link

className="nav-link"

to="/support"

>

Support

</Link>

</li>

<li
className="nav-item d-flex gap-2"
>

{

localStorage.getItem(
"token"
)

?

<>

<a
href=
"https://new-stock-trading-sfu2.vercel.app"
className=
"btn btn-primary"
>
Dashboard
</a>

<button

type="button"

className=
"btn btn-danger"

onClick={logout}

>

Logout

</button>

</>

:

<>

<Link

to="/login"

className=
"btn btn-success"

>

Login

</Link>

<Link

to="/signup"

className=
"btn btn-primary"

>

Signup

</Link>

</>

}

</li>

</ul>

</div>

</div>

</nav>

);

}

export default Navbar;
