import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './component/about/About';
import Academics from './component/academics/Academics';
import Experience from './component/experiences/Experience';
import DownloadButton from './component/download/DownloadResume';
import Projects from './component/projects/Projects';
import Skills from './component/skills/Skills';
import Contact from './component/contact-me/Contact';
import Nav_Side from './component/nav-side/Nav_Side';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
       <Route path="/" element={<App />} />
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/about" element={<About />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/experiences" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/download" element={<DownloadButton />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/navside' element={<Nav_Side/>}/>
    </Routes>
  </BrowserRouter>
);
