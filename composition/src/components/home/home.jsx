import './home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'

const Home = () => {
  const variants = {
    initial: {
      y: -500,
      x: 500,
      opacity: 0
    },
    animate: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 5,
        type: "spring",
        stiffness: 100,
        delay: 1,
      }
    },
    initialTriangle: {
      y: 500,
      x: -500,
      opacity: 0
    },
    animateTriangle: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 5,
        type: "spring",
        stiffness: 100,
        delay: 1,
      }
    }
  }

  return (
    <div className='home'>
      <div className='navbar'>
        <div className='social'>
          <FontAwesomeIcon icon={faLinkedin} className='brand'/>
          <FontAwesomeIcon icon={faGithub} className='brand' />
          <FontAwesomeIcon icon={faMedium} className='brand' />
        </div>
      </div>
      <motion.div
        className='triangle'
        variants={variants}
        initial='initialTriangle'
        animate='animateTriangle'
      >
      </motion.div>
      <motion.div
        className="circle"
        variants={variants}
        initial='initial'
        animate='animate'
      ></motion.div>
      <div className='name'>
        <div>
          <h1 className='first'>Adalyne</h1>
          <h1>&nbsp;Cummins</h1>
        </div>
        <h2 className='subtitle'>Dev & Designer</h2>
      </div>
      <div className="about">
        <p style={{ marginBottom: '5px' }}>Hello, I'm Addy.</p>
        <p>
          I am a software engineer based out of Philly, PA.
          I love making &nbsp;things, collaborating with creative &nbsp;&nbsp;people,
          and climbing rocks. I am a &nbsp;&nbsp;teacher and writer turned programmer
          looking to continue learning and &nbsp;&nbsp;crafting new products.
        </p>
      </div>
    </div>
  )
}

export default Home
