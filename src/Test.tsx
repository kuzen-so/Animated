import {motion} from 'framer-motion'

const Test = () => {


  
  return (
    <div>
      <div className="course">
        <motion.div className="box"
        // animate={{opacity:1,scale:1}} 
        initial={{opacity:0.5, scale:0.5}}
        transition={{duration:2 }}
        whileInView={{opacity:1, scale:2}}
        drag
        >
          
        
         </motion.div>
      </div>

    </div>
  )
}

export default Test