import React from 'react'
import Recipeslider from './Recipeslider'
import Trandingrecipe from './Trandingrecipe'
import CategorySelection from './CategorySelection'
import { API_URL } from './usefetch'
const Homeview = () => {
  return (
    <>
    <main className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-6 py-4'>
      <Recipeslider title = 'Staff Curated picks 'fetchUrl={`${API_URL}search.php?f=c`} />
       <Trandingrecipe   title = 'Quick And Easy Meals 'fetchUrl={`${API_URL}search.php?f=c`} />
       <CategorySelection/>
    </main>
    </>
  )
}

export default Homeview