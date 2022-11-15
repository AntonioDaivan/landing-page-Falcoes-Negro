import Globals from "./globals/globals"
import './App.css'
import { Navbar } from "./components/Navbar"
import { BrowserRouter } from "react-router-dom"
import Router from "./Routes/Router"
import { Footer } from "./components/Footer/Footer"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Globals />
        <Navbar />
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App