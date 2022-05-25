import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <>
        <ul className='home'>
            <Link to="/">Home</Link>
            <Link to="/Login">LogIn</Link>
            <Link to="/Signup">SignUp</Link>
        </ul>
    </>
  )
}
