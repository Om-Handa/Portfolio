import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import App from './App'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter basename="/Portfolio">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
