import './home.scss'
// import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className='home'>
      <div className='navbar'>
        <div className='social'>
          <a href='#'><img src='/linkedin.png' alt='linkedIn'/></a>
          <a href='#'><img src='/github.png' alt='github'/></a>
        </div>
      </div>
      <div className='triangle'></div>
      <div className='name'>
        <div>
          <h1 className='first'>Adalyne</h1>
          <h1>&nbsp;Cummins</h1>
        </div>
        <h2 className='subtitle'>Dev & Designer</h2>
      </div>
      <div className="about">
        
      </div>
    </div>
  )
}

export default Home
