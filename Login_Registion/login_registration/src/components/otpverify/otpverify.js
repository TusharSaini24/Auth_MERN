import React , { useState , useEffect}from 'react'
import "./otpverify.css"
import axios from 'axios'
import { useHistory , useLocation } from 'react-router-dom'


const Register = () => {

    const history = useHistory();
    const location = useLocation();

    
    const [otp , setOtp] = useState("");
    const [email,setEmail] = useState("");

    useEffect(() => {
        // console.log(location.pathname); // result: '/secondpage'
        // console.log(location.search); // result: '?query=abc'
        // console.log(location.state.detail); // result: 'some_value'
        setEmail(location.state.detail);
     }, [location]);

   
    

const handleChange = (e)=>{
    setOtp(e.target.value);
}

const submit = ()=>{
   const uotp = {
       otp : otp,
       email : email
   };
   axios.post("http://localhost:9002/verifyotp",uotp)
   .then(res=>{
    alert(res.data.message);
    if(res.data.ans)
    {
        history.push("/login");
    }
    else
    {
        history.push("/register");
    }
})

   

}
  return (
    <div className='otp'>
        <h1>OTP Verification</h1>
        
        <input type="text"  value={otp} placeholder="Enter otp" onChange={handleChange} ></input>
       
        <div className='button' onClick={submit}> Submit</div>
       
    </div>
  )
}

export default Register