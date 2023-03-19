import Navbar from './components/Navbar'
import Category from './components/Category'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'


function App() {

  return (
    <div>
    <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Detail />} />
      </Routes>
    <Category/>
      
    </div>
  )
}

export default App
