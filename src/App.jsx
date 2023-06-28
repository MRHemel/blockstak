
import './App.css'
import Banner from './components/Banner'
import Collection from './components/Collection'
import Criteria from './components/Criteria'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {


  return (
    <div className='max-w-screen-xl		mx-auto overflow-x-hidden'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Criteria></Criteria>
      <Collection></Collection>
      <Footer></Footer>
    </div>
  )
}

export default App
