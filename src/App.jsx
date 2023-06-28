
import './App.css'
import Banner from './components/Banner'
import Collection from './components/Collection'
import Criteria from './components/Criteria'
import Features from './components/Features'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'

function App() {


  return (
    <div className='max-w-screen-xl		mx-auto overflow-x-hidden'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Criteria></Criteria>
      <Collection></Collection>
      <Features></Features>
      <SignUp></SignUp>
      <Footer></Footer>
    </div>
  )
}

export default App
