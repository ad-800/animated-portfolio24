import './app.scss'
import NavBar from './components/NavBar/NavBar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Parallax from './components/Parallax/Parallax.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Services from './components/Services/services.jsx';
import Contact from './components/Contact/contact.jsx';
import Cursor from './components/Cursor/Cursor.jsx';
import Test from './components/test.jsx'

const App = () => {
  return <div>
    <Cursor/>
    <section id='Home'>
      <NavBar/>
      <Hero/>
    </section>
    <section id='Services'>
      <Parallax type='services'/>
    </section>
    <section>
      <Services/>
    </section>
    <section id='Portfolio'>
      <Parallax type='portfolio'/>
    </section>
    <Portfolio/>
    <section id='Contact'>
      <Contact />
    </section>
    {/* <Test /> */}
  </div>;
};

export default App;
