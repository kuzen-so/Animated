import {motion} from 'framer-motion'

const Test = () => {
  return (
    <div>
      <div className="course">
        <motion.div className="box"
        animate={{opacity:1,scale:1, x:200,}} 
        transition={{duration:2, }}
        whileTap={{opacity:1, scale:2}}
        >
          
        
         </motion.div>
      </div>

    </div>
  )
}

export default Test