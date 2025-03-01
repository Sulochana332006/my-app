import react from 'react';
const Login=()=> {
  var userData=[
    {username:"sulochana",passcode:123,cart:[]},
    {username:"sulochana",passcode:123,cart:[]},
    {username:"sulochana",passcode:123,cart:[]},
    {username:"sulochana",passcode:123,cart:[]},
  ];
  // const signup=()=>{
  //   var userName=document.getElementById("userName").value;
  //   var userPasscode=document.getElementById("Passcode").value;
  //   var activeuserDetail= userData.filter((data) =>{
  //     return userName==data.userName;
  //   });
  //   console.log(activeuserDetail);
  //   if (activeuserDetail.length >0){
  //     if(activeuserDetail[0].Passcode==userPasscode){
  //       localStorage.setItem("userName",activeuserDetail[0].userName);
  //       window.location.replace("/Home");
  //     }else{
  //       console.log("Wrong Passcode");
  //     }
  //   }
  // }
  
  var activeuser=localStorage.getItem("userName");
  
  function navigate(){
    window.location.replace("/Home");
  }
return (
 
  <div class="parent">
    <div class="child">
    
      <label>username</label>
      <input type="text" id="userName"/>
      <label>Pasword</label>
      <input type="Number" id="passcode"/>
      <button onClick={navigate}className='hi'>Login</button>

    </div>
  </div>
)
}
export default Login
