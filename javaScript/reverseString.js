//Reverse the given input 

const a= "This is a sunny day";
var b= a.split("");
var c=[];
var d=b.length;
var e=--d;
for(var i=e;i>=0;i--){
  c.push(b[i]);
}

var f=[];
f.push(c.join(""));

var y=f.toString();
var g=y.split(" ");
var h=g.length;
var x=[];
for(var i=--h;i>=0;i--){
  x.push(g[i])
}

var result=x.join(" ");

console.log(result);



