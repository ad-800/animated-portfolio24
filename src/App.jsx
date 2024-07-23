import './app.scss'
import NavBar from './components/NavBar';
import Hero from './components/Hero/Hero.jsx';
import Test from './components/test.jsx'

const App = () => {
  return <div>
    <section id='Home'>
      <NavBar />
      < Hero />
    </section>
    <section id='Services'>Parallax</section>
    <section>Services</section>
    <section id='Portfolio'>Parallax</section>
    <section>Portfolio_1</section>
    <section>Portfolio_2</section>
    <section>Portfolio_3</section>
    <section id='Contact'>Contact</section>
    {/* <Test /> */}
  </div>;
};

export default App;
