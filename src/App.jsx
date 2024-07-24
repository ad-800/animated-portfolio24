import './app.scss'
import NavBar from './components/NavBar';
import Hero from './components/Hero/Hero.jsx';
import Parallax from './components/Parallax/Parallax.jsx';
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
    <section>Portfolio_1</section>
    <section>Portfolio_2</section>
    <section>Portfolio_3</section>
    <section id='Contact'>Contact</section>
    {/* <Test /> */}
  </div>;
};

export default App;
