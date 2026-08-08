import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homeview from './components/Homeview';
import Recipedetails from './components/Recipedetails';
import Searchview from './components/Searchview';
import Cuasine from './components/Cuasine';

const App = () => {
  return (
    <Router>
      
      

      <div className="min-h-screen bg-gray-950 font-sans text-gray-100">
        <Navbar />
        <Cuasine/>
        <Routes>
          <Route path="/" element={<Homeview />} />
          {/* <Route path="/cuisine/:type" element={<Cuasine />} /> */}
          <Route path="/recipe/:id" element={<Recipedetails />} />
          <Route path="/search/:query" element={<Searchview />} />
          <Route path="/cuisine/:type" element={<Cuasine />} />
        </Routes>
      </div>
    </Router>
  );
};







export default App;