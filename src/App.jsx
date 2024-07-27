import './app.scss'
import NavBar from './components/NavBar/NavBar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Parallax from './components/Parallax/Parallax.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Test from './components/test.jsx'
import Services from './components/Services/services.jsx';

const App = () => {
  return <div>
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
    <section id='Contact'>Contact</section>
    {/* <Test /> */}
  </div>;
};

export default App;
