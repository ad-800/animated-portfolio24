import './navbar.scss'
import { motion } from 'framer-motion'
import SideBar from './SideBar/SideBar'

const NavBar = () => {
  return (
    <div className='navbar'>
      <SideBar />
      <div className='wrapper'>
        <motion.span
          inital={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Adalyne Cummins
        </motion.span>
        <div className='social'>
          <a href='#'><img src='/linkedin.png' alt='linkedIn'/></a>
          <a href='#'><img src='/github.png' alt='github'/></a>
          <a href='#'><img src='/medium.png' className='img--medium' alt='medium'/></a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
