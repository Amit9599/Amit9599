import React,{useState} from "react";
import "../index.css"

function LogInPage() {
  var[user,setuser]=useState({
    userName:"",
    pas:""
  })

  function getData(f){
    console.log(f)
    var name= f.target.name
    var value= f.target.value
    setuser((oldData)=>{
      return{
          ...oldData,
          [name]:value
      }
  })
}
function postData(){
  alert(`User Name=${user.userName}\n Password=${user.pas}`)
}
  return(
    <>
    <div className='main'>
      <form onSubmit={postData} className="myform">
       User Name:<input name='userName' type="email" placeholder="user name is email id" onChange={getData}/><br/>
       Password:<input name='pas' type="password" placeholder="password" onChange={getData}/><br/>
       <button type="submit"> log in</button>
      </form>
    </div>
    </>
  )
}
    
    export default LogInPage