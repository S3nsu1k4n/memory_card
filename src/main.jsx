import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './components/header.jsx'
import Score from './components/Score.jsx'
import Board from './components/Board.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Score />
    <Board />
  </React.StrictMode>,
)
