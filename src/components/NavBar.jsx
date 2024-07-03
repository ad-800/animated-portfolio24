import './navbar.scss'

const NavBar = () => {
  return (
    <div className='navbar'>
      {/* Sidebar */}
      <div className='wrapper'>
        <span>Adalyne Cummins</span>
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
