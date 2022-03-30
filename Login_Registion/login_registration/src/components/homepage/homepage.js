import "./homepage.css"
import React from 'react'
import { useHistory } from "react-router-dom"

const Homepage = () => {
    const history = useHistory();

  return (
    <div className="homepage" >
        <h1>Homepage</h1>
        <div className='button' onClick={()=>{history.push('/login')}}>Logout</div>
        <div className="button" onClick={()=>{history.push('/update')}}>Update</div>
        </div>
  )
}

export default Homepage