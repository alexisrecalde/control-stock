import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AppProps } from './context/DataContext.tsx'
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
    <AppProps>
        <Router>
            <App />
        </Router>
    </AppProps>
</React.StrictMode>,
)
