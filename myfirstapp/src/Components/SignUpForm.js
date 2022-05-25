import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import "../index.css"
 function SignUpForm() {
    var[user,setuser]=useState({
        fname:"",
        lname:"",
        email:"",
        phn:"",        
        pass:"",
        cpass:""
    })
function getData(e){
    console.log(e)
    var name = e.target.name
    var value = e.target.value
    setuser((oldData)=>{
        return{
            ...oldData,
            [name]:value
        }
    })
}
function postData(){
    alert(`First Name=${user.fname}\nLast Name=${user.lname}\n Email id=${user.email}\n Phone Number=${user.phn}\n Password=${user.pass}`)
}

  return (
    <>
    <div className='main'>
      <form onSubmit={postData} className='myform'>
       First Name:<input name='fname' type="text" placeholder="Enter your first name" onChange={getData}/><br/>
       Last Name:<input name='lname' type="text" placeholder="Enter your last name" onChange={getData}/><br/>
       Email id:<input name='email' type="email" placeholder="Enter your email id" onChange={getData} /><br/>
       Phone Number:<input name='phn' type="tel" placeholder="Enter your phone number" onChange={getData}/><br/>
       Password:<input name='pass' type="password" placeholder="password" onChange={getData}/><br/>
       Confirm password:<input name='cpass' type="password" placeholder="Confirm password" onChange={getData}/><br/>
       <button type="submit" >Sign Up</button>
       <button><Link to="/Login">LogIn</Link></button>
      </form>
    </div>
    </>
  )
}
export default SignUpForm