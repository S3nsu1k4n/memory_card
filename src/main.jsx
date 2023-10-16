import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Board from './components/Board.jsx'
import './index.css'

import API from './api.js'
const api = new API(128);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Board api={api}/>
  </React.StrictMode>,
)
