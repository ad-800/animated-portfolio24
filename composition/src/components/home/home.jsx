import './home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
// import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className='home'>
      <div className='navbar'>
        <div className='social'>
          <FontAwesomeIcon icon={faLinkedin} className='brand'/>
          <FontAwesomeIcon icon={faGithub} className='brand' />
          <FontAwesomeIcon icon={faMedium} className='brand' />
        </div>
      </div>
      <div className='triangle'></div>
      <div className="circle"></div>
      <div className='name'>
        <div>
          <h1 className='first'>Adalyne</h1>
          <h1>&nbsp;Cummins</h1>
        </div>
        <h2 className='subtitle'>Dev & Designer</h2>
      </div>
      <div className="about">
        <p>
          Hello, I'm Addy. I am a software engineer based out of Philly, PA.
          I love making things, collaborating with creative people, and climbing
          rocks. I am a teacher and writer turned programmer looking to continue
          learning and crafting new products.
        </p>
      </div>
    </div>
  )
}

export default Home
