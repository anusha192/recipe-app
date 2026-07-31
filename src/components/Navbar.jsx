import React from 'react'
import { Search , ZapIcon, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <nav className=' sticky top-0 z-50 bg-gray-950/90  backdrop-blur-md shadow-2xl shadow-black/50 border-b border-blue-900/50  '>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
        <div className='flex justify-between items-center h-16 '>
         <Link to ={'/'} className='flex items-center text-2xl font-black text-white hover:text-blue-400 transition duration-300'>
          <Zap className='w-7 h-7 mr-2 text-yellow-400 fill-yellow-400' />
          <span className='text-blue-400'>Pro</span>Chief
 
 </Link>
 <form className="flex-1 max-w-lg mx-4 hidden sm:flex">
  <input
    type="text"
    placeholder="Search dishes, ingredients, or cuisine..."
    className="w-full px-5 py-2 bg-gray-800 text-white border border-gray-700 rounded-l-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-inner"
  />

  <button
    type="submit"
    className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 rounded-r-full hover:from-blue-600 hover:to-cyan-600 transition duration-300 shadow-lg hover:shadow-orange-500/50"
  >
    <Search className="w-5 h-5" />
  </button>
</form>
        </div>
    </div>
    
    
    </nav>
    </>
  )
}

export default Navbar
