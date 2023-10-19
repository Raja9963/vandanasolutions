var b=[];
var c="";

var d=0;

function myFun(clicked){
  var a=clicked;
  b.push(a);
  c=b.join("");
  document.getElementById("dis").innerHTML=c;
  console.log(c);
}

function myRes(){
  d=eval(c);
  b=[];
  b.push(d);
  document.getElementById("dis").innerHTML=eval(d);
}

function myReset(){
  document.getElementById("dis").innerHTML="0";
  d=0;
   b=[];
  c="";
}
