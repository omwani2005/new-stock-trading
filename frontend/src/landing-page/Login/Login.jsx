import React, { useState } from "react";
import api from "../../api";
import "./Login.css";

function Login() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");

const handleLogin = async () => {

try {

const res = await api.post(
"/auth/login",
{
email,
password
}
);

const token =
res.data.token;

localStorage.setItem(
"token",
token
);

window.location.href =
`http://localhost:5174/?token=${token}`;

}

catch (err) {

setMessage(
err.response?.data?.message ||
"Invalid Credentials"
);

}

};

return (

<div className="login-container">

<div className="login-box">

<h1>Login</h1>

<input
type="email"
placeholder="Enter Email"
value={email}
onChange={(e)=>
setEmail(
e.target.value
)}
/>

<input
type="password"
placeholder="Enter Password"
value={password}
onChange={(e)=>
setPassword(
e.target.value
)}
/>

<button
onClick={handleLogin}

>

Login </button>

<p>{message}</p>

</div>

</div>

);

}

export default Login;
