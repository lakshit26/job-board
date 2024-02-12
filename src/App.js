import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import UploadJob from './components/UploadJob'
import FindJobs from './components/FindJobs'
import Companies from './components/Companies'
import Header from './components/Header'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs/>} />
          <Route path='/upload-job' element={<UploadJob/>} />
          <Route path='/find-jobs' element={<FindJobs/>} />
          <Route path='/companies' element={<Companies/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
