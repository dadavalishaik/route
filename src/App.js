import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import Chatui from './Pages/Chatui';
import Apisettings from './Pages/Apisettings';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chatui" element={<Chatui/>}/>
          <Route path="/apisettings" element={<Apisettings/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App 


















































