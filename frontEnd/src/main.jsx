import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route } from 'react-router-dom'

import Index from './Views/Index'
import Home from './Views/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Home/>
    </BrowserRouter>
)
