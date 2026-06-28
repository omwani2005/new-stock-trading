Signup.jsx

import React,{useState} from "react";

import api from "../../api";

function Signup(){

const [username,setUsername]=
useState("");

const [email,setEmail]=
useState("");

const [password,setPassword]=
useState("");

const [message,setMessage]=
useState("");

const handleSignup = async()=>{

try{

const res =

await api.post(

"/auth/register",

{

username,
email,
password

}

);

localStorage.setItem(

"token",

res.data.token

);

setMessage(

"Account Created"

);

window.location.href =

"http://localhost:5174";

}

catch(err){

setMessage(

err.response?.data?.message ||

"Signup Failed"

);

console.log(err);

}

};

return(

<div

style={

{

display:"flex",

flexDirection:"column",

gap:"10px",

width:"300px",

margin:"100px auto"

}

}

>

<h1>

Sign Up

</h1>

<input

type="text"

placeholder="Enter Username"

value={username}

onChange={(e)=>

setUsername(
e.target.value
)

}

/>

<input

type="email"

placeholder="Enter Email"

value={email}

onChange={(e)=>

setEmail(
e.target.value
)

}

/>

<input

type="password"

placeholder="Enter Password"

value={password}

onChange={(e)=>

setPassword(
e.target.value
)

}

/>

<button

onClick={handleSignup}

>

Create Account

</button>

<p>

{message}

</p>

</div>

);

}

export default Signup;
