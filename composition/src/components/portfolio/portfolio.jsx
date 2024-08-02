import './portfolio.scss'
import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

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

  const items = [
    {
      id: 1,
      title: 'Project One',
      image: 'https://images.pexels.com/photos/24460824/pexels-photo-24460824/free-photo-of-esb-among-lower-skyscrapers.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam.'
    },
    {
      id: 2,
      title: 'Project Two',
      image: 'https://images.pexels.com/photos/24460824/pexels-photo-24460824/free-photo-of-esb-among-lower-skyscrapers.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam.'
    },
    {
      id: 3,
      title: 'Project Three',
      image: 'https://images.pexels.com/photos/24460824/pexels-photo-24460824/free-photo-of-esb-among-lower-skyscrapers.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam.'
    },
    {
      id: 4,
      title: 'Project Four',
      image: 'https://images.pexels.com/photos/24460824/pexels-photo-24460824/free-photo-of-esb-among-lower-skyscrapers.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam.'
    },
  ]

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
        <div className="wrapper">
          <div className="image-container" ref={ref}>
            <img src={item.image} alt="" />
          </div>
          <motion.div className="text-container" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
