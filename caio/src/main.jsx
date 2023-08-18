import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header/Header.jsx'
import App from './App.jsx'
import Footer from './components/Footer/Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <App />
    <Footer />
  </>,
)
