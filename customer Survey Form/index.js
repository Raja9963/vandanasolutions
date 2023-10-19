function myFun(){
  let fname=document.getElementById("fname").value;
  let lname=document.getElementById("lname").value;
  let email=document.getElementById("email").value;
  let date=document.getElementById("birth").value;
  let country=document.getElementById("country").value;
  var selectedValue=document.querySelector('input[name="rad"]:checked');
  let raj;
  if(selectedValue != null){
    raj=selectedValue.value;    
  }
  let profession=document.getElementById("prof").value;
  let num=document.getElementById("num").value;

  alert(`First Name : ${fname} \n Last Name : ${lname} \n Email : ${email} \n Date Of Birth : ${date} \n Country : ${country} \n Gender : ${raj} \n Profession : ${profession} \n Number : ${num}`);
  
}