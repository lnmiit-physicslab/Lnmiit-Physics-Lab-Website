import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
function App() {
  return (
    <div className="app relative">
      <div id='doubt' className="w-full h-full flex-col justify-center content-center flex-wrap gap-4 absolute z-10">
        <div className='w-[100vw] h-[7vh]'><NavBar/></div>
        <div><img src="src/components/Titlelogo.png" alt="img" className="w-68 h-40 m-auto select-none"></img></div>
        <div className='text-center select-none'>
          <p className='text-4xl'>UG Physics Laboratory</p>
          <p className='text-2xl'>LNMIIT , Jaipur</p>
        </div>
        <div><Footer/></div>
      </div>
      <div className='absolute z-0'>
        <img src='src/resources/images/background.png'></img>
        <img src='src/resources/images/background.png'></img>
      </div>
      
    </div>
  )
}
export default App
