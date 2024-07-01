import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth';

function SignUp() {
  const [formData,setFormData] = useState({});
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id] : e.target.value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const res = await fetch('/api/auth/signup',
      {
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formData),
      })
      const data = await res.json();
      if(data.success === false){
        console.log(data);
        setLoading(false)
        setError(data.message)
        return
      }
      setLoading(false)
      setError(null)
      navigate('/sign-in')
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }   
  }
  
  return (
  <div class="min-h-screen flex justify-center items-center w-full">
    <div class="w-1/2 border rounded p-5 shadow-lg">
      <div class="flex flex-wrap items-center">
        <div class="w-full lg:w-1/2">
          <img class="w-full h-96" src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg" alt="" />
        </div>
        <div class="w-full lg:w-1/2">
          <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input type="text" placeholder='username' className='border p-3 rounded-lg ms-2' id='username' onChange={handleChange}/>
          <input type="email" placeholder='email' className='border p-3 rounded-lg ms-2' id='email' onChange={handleChange}/>
          <input type="password" placeholder='password' className='border p-3 rounded-lg ms-2' id='password' onChange={handleChange}/>
          <button disabled={loading} className='bg-blue-600 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80 disabled:bg-slate-700 ms-2'>{loading ? 'Loading...' : 'Sign Up'}</button>
          <OAuth/>
          </form>
          <div className='flex gap-2 mt-5 ms-2'>
            <p>Have an account?</p>
            <Link to={'/sign-in'}>
            <span className='text-red-700 font-semibold'>Sign in</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
    {error && <p className='text-red-500 mt-5'>{error}</p>}
  </div>
  )
}

export default SignUp