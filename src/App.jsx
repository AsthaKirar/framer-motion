import React from 'react'
import {motion} from 'framer-motion'
const App = () => {
  return (
    <motion.div 
    initial={{
      top:0,
      left:0
    }}
    animate={{
      x:500,
      y:500,
      rotate:360
    }}
    whileHover={{
      backgroundColor:'blue'
    }}
    whileTap={{
      scale:0.95
    }}
    whileDrag={{
      borderRadius:'50%'
    }}
    dragConstraints={{
      left:0,
      top:0

    }}
    dragDirectionLock='true'

     id='box'>
      

    </motion.div>
  )
}

export default App