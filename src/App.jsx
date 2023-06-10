import { Navbar } from './components/Navbar'
import './assets/css/style.css'
import { Menu } from './components/Menu'
import Footer from './components/Footer'
import { Spinner } from './components/Spinner'

function App() {

  return (
    <>
      <div className="container-xxl bg-white p-0">
        <Spinner/>
        <Navbar/>
        <Menu/>
        <Footer/>
      </div>
    </>
  )
}

export default App
