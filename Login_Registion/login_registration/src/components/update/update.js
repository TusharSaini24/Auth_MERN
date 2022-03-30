import React , { useState }from 'react'
import "./update.css"
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const Update = () => {

    const history = useHistory();


    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setUser({
            ...user,
            [name]:value
        })
    }

    const update =()=>{
        const {name,email,password,reEnterPassword} = user;
        if(name && email && password&& (password === reEnterPassword))
        {
            axios.post("http://localhost:9002/update" , user)
            .then(res=>{
                alert(res.data.message)
                history.push("/");
            })
        }
        else{
            alert("Invalid input");
        }
    }

  return (
    <div className='update'>
        {/* {console.log(user)} */}
        <h1>Update</h1>
        
        <input type="text" name='name' value={user.name} placeholder="Enter your Name " onChange={handleChange} ></input>
        <input type="text" name='email' value={user.email} placeholder="Enter your Email " onChange={handleChange} ></input>
        <input type="password" name='password' value={user.password} placeholder="Enter your Password " onChange={handleChange} ></input>
        <input type="password" name='reEnterPassword' value={user.reEnterPassword} placeholder="Re-Enter your Password " onChange={handleChange} ></input>
        <div className='button' onClick={update}> Update</div>
    </div>
  )
}

export default Update