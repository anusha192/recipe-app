import React from 'react'
import { Globe } from 'lucide-react'

const Cuasine = () => {
  const featureArea=[
    "American",
    "Birtish",
    "Canadian",
    "Chinese",
    "Indian",
    "Italian",
    "Mexican",
    "Russian",
    "Thai",
  ];
  return (
   <>
   <div className='bg-gray-900/80 border-b border-y-gray-800 shadoe-inner shadoe-black/20'>
   <div className='max-w-8xl mx-auto lg:px-8 overflow-x-auto scrollbar-hide '></div>
     <div className='flex space-x-4 py-3 items-center'>
      <div className='flex items-center text-lg font-bold text-yellow-400 pr-3 whitespace-nowrap'>
        <Globe  className='w-5 h-5 mr-2'/>Global Cuisines:
      </div>
      {featureArea.map((area)=><button key={area} className=' cursor-pointer text-gray-200 text-sm whitespace-nowrap font-medium hover:text-white transition duration-200 py-1.5 px-4 rounder-full bg-gray-700 hover:bg-blue-600 hover:shadow-lg hover: shadow-blue-800/50  transform hover:scale-[1.05]  '>{area}</button>)}
     </div>
   </div>
   </>
  )
}

export default Cuasine