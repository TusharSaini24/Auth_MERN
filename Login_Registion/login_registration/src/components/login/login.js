import React ,{useState} from 'react'
import "./login.css"
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Login = ({setLoginUser}) => {

    const history = useHistory();

    const [user,setUser] = useState({
       
        email:"",
        password:""
    })

    const handleChange = (e)=>{
        // console.log(e.target);
        const {name , value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
        console.log(name);
    }

    const login = ()=>{
        axios.post('http://localhost:9002/login',user)
        .then(res=>{
            alert(res.data.message);
            setLoginUser(res.data.user);
            history.push('/')
        })
    }
  return (
    <div className='login'>
        {console.log(user)}
        <h1>Login</h1>
        <input type="text" name="email" placeholder="Enter your Email " value={user.email} onChange={handleChange} ></input>
        <input type="password" name="password" placeholder="Enter your Password " value={user.password} onChange={handleChange} ></input>
        <div className='button' onClick={login}> Login</div>
        
        <div>or</div>
        <div className='button' onClick={()=>{history.push('/register')}} >Register</div>
    </div>
  )
}

export default Login