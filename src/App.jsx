import './App.css'
import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import EditNode from "./components/EditNode"
import MainPage from "./components/MainPage"
import Markdown from "./components/Markdown"


function App() {
  const [markDown, setMarkDown] = useState('')
  return (
    <div className="App">
      <div className="links">
        <Link className="edit" to='editnode'>Edit</Link>
        <Link className="mark" to='markdown'>MarkDown</Link>
      </div>

      <Routes>
        <Route path="/" element={ <MainPage/> }/>
        <Route path="editnode" element={ <EditNode markDown={markDown} setMarkDown={setMarkDown}/> }/>
        <Route path="markdown" element={ <Markdown  markDown={markDown}/> }/>
      </Routes>
    </div>
  )
}

export default App
