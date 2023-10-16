import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () =>{
    const [username,setUsername] = useState('');
    const [password,setpassword] = useState('');
    const [errMsg,setErrMsg] = useState('');
    const navigation = useNavigate();
   
    const addUserDetails = async(e)=>{
        e.preventDefault();
        let response = await fetch('https://login-app-3954a-default-rtdb.firebaseio.com/userData.json')
        let dataObj = await response.json();
        console.log(dataObj)
        let flag = false;
        for (let key in dataObj){
            if (dataObj[key].username === username && dataObj[key].password  === password){
                setErrMsg('');
                navigation('/home',{state: dataObj[key]});
            }else if(dataObj[key].username === username && dataObj[key].password  !== password){
                flag = true;
                setErrMsg('Password is Invalid');
                break;
            }
        }
        if (flag === false){
            setErrMsg('Username is not Exist');
        }
    }

    return(
        <div className="h-screen flex justify-center items-center">
            <form className="flex flex-col shadow-md p-20 rounded-lg" onSubmit={addUserDetails}>
                <label className="text-[18px] font-semibold text-gray-400 ">Username</label>
                <input type="text" placeholder="username" value= {username} onChange={(e)=>setUsername(e.target.value)} className="w-[400px] h-[40px] border-b-2 border-slate-300  m-8 p-3 text-[18px] outline-none focus:border-blue-400 focus:text-blue-500 " name="username" required/>
                <label className="text-[18px] font-semibold text-gray-400">Password</label>
                <input type="password" placeholder="password" value= {password} onChange={(e)=>setpassword(e.target.value)} className="w-[400px] h-[40px] border-b-2 border-slate-300 m-8 p-3 text-[18px] outline-none focus:border-blue-400 focus:text-blue-500" name="password" required/>
                <p className="text-[15px] text-red-500 ">{errMsg}</p>
                <button className="h-[35px] bg-blue-300 text-white font-bold rounded-md mt-10 mx-auto px-20" >SIGN IN</button>
                <Link to={'/signup'} className=" text-center mt-5 hover:underline hover:border-blue-400">
                    <span className="text-[15px] text-blue-400 ">Sign up now</span>
                </Link>
            </form>
        </div>
    )
}

export default LoginPage;