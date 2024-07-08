import { motion } from 'framer-motion'

const ToggleButton = ({ handleClick }) => {
  return (
    <button onClick={() => handleClick(prev => !prev)}>
      Button
    </button>
  )
}

export default ToggleButton
