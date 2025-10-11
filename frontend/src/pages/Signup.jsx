import React, { useState,useContext } from 'react'
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
const Signup = () => {
  const [state, setState] = useState('signin');
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const {url,setToken} = useContext(StoreContext);
  const navigate = useNavigate();
  const onLogin = async(e)=>{
    e.preventDefault();
    const response = await axios.post(url+'/user/login' , {email,password});
    if(response.data?.success){
        setToken(response.data.token);
        localStorage.setItem('token',response.data.token);
        toast.success('Welcome back');
        navigate('/');
    }else {
      toast.error(response.data?.message);
    }

  }
    const onRegister = async(e)=>{
    e.preventDefault();
    const response = await axios.post(url+'/user/register' , {email,name,password});
    if(response.data?.success){
        setToken(response.data.token);
        localStorage.setItem('token',response.data.token);
        toast.success('Log in now');
        setState('signin');
        navigate('/');
        
    }
    else {
      toast.error(response.data?.message);
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
        <input
          type="text"
          name="email"
          placeholder="Enter email here"
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
        />

        {state === 'signup' && (
          <input
            type="text"
            name="username"
            placeholder="Enter username here"
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e)=>setName(e.target.value)}
            value={name}
          />
        )}

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          onClick={(e)=>{
            if(state==='signin'){
              onLogin(e);
            }
            else onRegister(e);
          }}
        >
          {state}
        </button>

        {state === 'signup' && (
          <p className="mt-4 text-sm text-gray-600">
            Already have an account?{' '}
            <span
              onClick={() => setState('signin')}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Sign in here
            </span>
          </p>
        )}

        {state === 'signin' && (
          <p className="mt-4 text-sm text-gray-600">
            Don’t have an account?{' '}
            <span
              onClick={() => setState('signup')}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Register here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Signup;
