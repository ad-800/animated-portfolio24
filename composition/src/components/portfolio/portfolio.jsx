import './portfolio.scss'
import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { items } from './constants';

const Portfolio = () => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [ "end end", "start start" ]
  })
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  })

  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Featured Works</h1>
        <motion.div className='progress-bar' style={{ scaleX }}></motion.div>
      </div>
      {items.map(item => (
        <Single key={item.id} item={item}/>
      ))}
    </div>
  )
}

const Single = ({ item }) => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
  })

  const y = useTransform(scrollYProgress, [ 0, 1 ], [ -300, 300 ])

  return (
    <section>
      <div className="container">
        <div className="wrapper" id={item.id}>
          <div className="image-container" ref={ref}>
            <img src={item.image} alt="" />
          </div>
          <motion.div className="text-container" style={{ y }}>
            <h2>{item.title}</h2>
            <h3>{item.subtitle}</h3>
            <p>{item.description}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
