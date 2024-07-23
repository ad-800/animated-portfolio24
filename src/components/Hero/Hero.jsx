import './hero.scss'
import { motion } from 'framer-motion'

const Hero = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      }
    }
  }

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: '-220%',
      transition: {
        duration: 20,
        repeatType: "mirror",
        repeat: Infinity,
      },
    },
  }

  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div
          className='text-container'
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Adalyne Cummins</motion.h2>
          <motion.h1 variants={textVariants}>Software Engineer</motion.h1>
          <motion.div className='buttons' variants={textVariants}>
            <motion.button variants={textVariants}>See the Latest Works</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img src='scroll.png' alt='' variants={textVariants} animate='scrollButton'/>
        </motion.div>
      </div>
      <motion.div
        className='sliding-text-container'
        variants={sliderVariants}
        initial="initial"
        animate='animate'
      >
        Creator and Designer
      </motion.div>
      <div className='image-container'>
        <img src='hero.png' alt=''/>
      </div>
    </div>
  )
}

export default Hero
