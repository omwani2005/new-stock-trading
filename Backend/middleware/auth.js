const jwt =
require(
"jsonwebtoken"
);

module.exports=
(
req,
res,
next
)=>{

try{

const auth=
req.headers.authorization;

if(!auth){

return res
.status(401)
.json({
message:
"No Token"
});

}

const token=
auth.split(" ")[1];

const decoded=
jwt.verify(
token,
process.env.JWT_SECRET
);

req.userId=
decoded.id;

req.user=
decoded;

next();

}

catch{

res
.status(403)
.json({
message:
"Invalid Token"
});

}

};
