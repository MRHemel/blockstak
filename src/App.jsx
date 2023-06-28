
import './App.css'
import Banner from './components/Banner'
import Collection from './components/Collection'
import Criteria from './components/Criteria'
import Features from './components/Features'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {


  return (
    <div className='max-w-screen-xl		mx-auto overflow-x-hidden'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Criteria></Criteria>
      <Collection></Collection>
      <Features></Features>
      <Footer></Footer>
    </div>
  )
}

export default App
