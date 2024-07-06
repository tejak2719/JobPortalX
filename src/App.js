import React from 'react';
import Header from './components/Header';
// Import the styles.css file
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FindJobs from './pages/FindJobs';
import Footer from './components/Footer';
import PostJobs from './pages/PostJobs';
import Resources from './pages/Resources';
import Home from './pages/Home'; 
import './App.css'


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Header />
      <Home/>
      <Routes>
      <Route path='/findjobs' element={<FindJobs/>}></Route>
      <Route path='/postjobs' element={<PostJobs/>}></Route>
      <Route path='/Resources' element={<Resources/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
      
    </div>
  );
}

export default App;