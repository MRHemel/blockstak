
import './App.css'
import Banner from './components/Banner'
import Criteria from './components/Criteria'
import Navbar from './components/Navbar'

function App() {


  return (
    <div className='max-w-screen-xl		mx-auto'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Criteria></Criteria>
    </div>
  )
}

export default App
