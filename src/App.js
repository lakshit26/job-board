import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import AboutUs from './components/AboutUs/AboutUs'
import UploadJob from './components/UploadJob/UploadJob'
import Companies from './components/Companies/Companies'
import Header from './components/Header/Header'
import JobApply from './components/JobApply/JobApply'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply-job' element={<JobApply />} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/upload-job' element={<UploadJob/>} />
        <Route path='/companies' element={<Companies/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
