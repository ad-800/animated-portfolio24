import { motion } from 'framer-motion'

const Links = () => {
  const items = [
    'Home',
    'Services',
    'Portfolio',
    'Contact',
    'About'
  ]

  return (
    <div className='links'>
      {items.map(item => (
        <a
          key={item}
          href={`#${item}`}
          >
            {item}
        </a>
      ))}
    </div>
  )
}

export default Links
