import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { useSelector } from 'react-redux'

function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className='shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-200 italic'>Harmony</span>
            <span className='text-slate-400 italic'>Homes</span>
            <span className='text-slate-300 italic'>Hub</span>
        </h1>
        </Link>
        <form onSubmit={handleSubmit} className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <button><FaSearch className='text-slate-600' /></button>
        </form>
        <ul className='flex gap-4'>
          <Link to='/'><li className='hidden sm:inline text-white font-semibold hover:shadow-md hover:text-slate-400'>Home</li></Link>
          <Link to='/about'><li className='hidden sm:inline text-white font-semibold hover:shadow-md hover:text-slate-400'>About</li></Link>
          <Link to='/profile'>{currentUser ? (<img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile' />) : (<li className='text-white font-semibold hover:shadow-md hover:text-slate-400'>Sign In</li>)}
          </Link>
        </ul>
        </div>
    </header>
  )
}

export default Header