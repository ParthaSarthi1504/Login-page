import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { v4 as uniqueId } from "uuid";

const Register = ()=>{
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('')
    const [password,setpassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [errMsg,setErrMsg] = useState('');
    const navigation = useNavigate();
   
    const signingUp = async(e)=>{
        e.preventDefault();
        if (password === confirmPassword){
            let userDetails = {
                id: uniqueId(),
                username,
                email,
                password
            }
            let options = {
                method: "POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userDetails)
            }
            let response = await fetch('https://login-app-3954a-default-rtdb.firebaseio.com/userData.json',options);
            console.log(response);
            navigation('/');
        }else{
            setErrMsg('Password and confirm password is Mismatched');
        }
    }

    return(
        <div className="h-screen flex justify-center items-center">
            <form className="flex flex-col shadow-md  p-20 rounded-lg" onSubmit={signingUp}>
                <label className="text-[18px] font-semibold text-gray-400 ">Username</label>
                <input type="text" placeholder="username" value= {username} onChange={(e)=>setUsername(e.target.value)} className="w-[400px] h-[40px] border-b-2 border-slate-300  m-8 p-3 text-[18px] outline-none focus:border-blue-400 focus:text-blue-500" name="username" required/>
                <label className="text-[18px] font-semibold text-gray-400 ">Email</label>
                <input type="text" placeholder="abcd@gmail.com" value= {email} onChange={(e)=>setEmail(e.target.value)} className="w-[400px] h-[40px] border-b-2 border-slate-300  m-8 p-3 text-[18px] outline-none focus:border-blue-400 focus:text-blue-500" name="username" required/>
                <label className="text-[18px] font-semibold text-gray-400">Password</label>
                <input type="password" placeholder="password" value= {password} onChange={(e)=>setpassword(e.target.value)} className="w-[400px] h-[40px] border-b-2 border-slate-300 m-8 p-3 text-[18px] outline-none focus:border-blue-400 focus:text-blue-500" name="password" required/>
                <label className="text-[18px] font-semibold text-gray-400">Confirm Password</label>
                <input type="password" placeholder="password" value= {confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} className="w-[400px] h-[40px] border-b-2 border-slate-300 m-8 p-3 text-[18px] outline-none focus:border-blue-400 focus:text-blue-500" name="password" required/>
                <p className="text-[15px] text-red-500 ">{errMsg}</p>
                <button className="h-[35px] bg-blue-300 text-white font-bold rounded-md mt-10 mx-auto px-20">SIGN UP</button>     
            </form>
        </div>
    )
}

export default Register;