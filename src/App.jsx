import Globals from "./globals/globals"
import Navbar from "./components/Navbar/Navbar"
import Router from "./Routes/Routes"
import { BrowserRouter } from "react-router-dom"
import './App.css'
// import Footer from "./components/Footer/Footer"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Globals />
        <Navbar />
        <Router />
      </div>
    </BrowserRouter>
  )
}

export default App
