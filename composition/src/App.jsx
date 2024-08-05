import './app.scss'
import Cursor from './components/cursor/cursor'
import Home from './components/home/home'
import Portfolio from './components/portfolio/portfolio'

const App = () => {
  return (
    <>
      <Cursor/>
      <section id='Home'><Home/></section>
      {/* <Portfolio/> */}
    </>
  )
}

export default App
