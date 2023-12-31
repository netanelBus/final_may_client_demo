import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const apiHost = import.meta.env.VITE_API_HOST;

fetch(`${apiHost}/test`)
.then(res => res.text())
.then(data => console.log(data));


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
