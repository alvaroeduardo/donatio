import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Index from './Views/Index/index.jsx'
import Home from './Views/Home/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
    </Router>
)
