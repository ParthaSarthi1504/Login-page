import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const HomePage = () =>{
    const [isLoading,setLoader] = useState(true);
    const [loggedUser, setLoggedUsere] = useState(null);
    let location = useLocation();
    let navigation = useNavigate();
    
    useEffect(()=>{
        // const getData = async()=>{
        //     let response = await fetch('https://login-app-3954a-default-rtdb.firebaseio.com/userData.json');
        //     let ObjData = await response.json();
        //     if(response.ok){
        //         let lastItemKey = Object.keys(ObjData).pop();
        //         setLoggedUsere(ObjData[lastItemKey].username)
        //         setLoader(false);
        //     }
        // }
        // getData();
        let userDetails = location.state;
        setLoader(false);
        setLoggedUsere(userDetails.username);
    },[location.state])

    const onLogout = ()=>{
        navigation('/'); 
    }

    const loadingView = ()=>{
        return <p className='text-[20px] text-slate-400'>Loading...</p>
    }

    const successView = ()=>(
            <>
                <nav className='w-[100%] h-[70px] shadow-sm shadow-slate-400 pl-10 pr-10 flex justify-between items-center'>
                    <span className='text-[20px] font-extrabold'>LoginPortal</span>
                    <button className='h-[35px] bg-blue-300 text-white font-bold rounded-md px-20' onClick={onLogout}>Logout</button>
                </nav>
                <div className='w-[100%] h-screen flex justify-center items-center'>
                    <div className='shadow-md h-[200px] w-[400px] py-10 rounded-md flex flex-col justify-center items-center'>
                        <h1 className='text-[40px] font-extrabold'>Home Page</h1>
                        <div className='h-screen'>
                            <p className='text-[30px]'>Hi <span className='font-bold text-green-400'>{loggedUser}</span> Welcome</p>
                        </div>
                    </div>
                </div>
            </>
        )

    return(  
        <div className="h-screen w-[100%]">
            {
                isLoading? loadingView(): successView()
            }
        </div>
    )
}

export default HomePage;