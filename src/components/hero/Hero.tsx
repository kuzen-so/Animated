import "./hero.scss"
import { motion } from "framer-motion"

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    //   repeatType: "reversez"
    }
  }
}

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
    //   repeatType: "mirror" as const,
      duration: 20,
    },
  },
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div 
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>KUZEN SCHOLAR</motion.h2>
          <motion.h1 variants={textVariants}>Web Developer</motion.h1>
          <motion.h1 variants={textVariants}>UI Designer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>最新作品</motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>联系我</motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/Scroll.png" alt="Scroll down" />
        </motion.div>
        <motion.div 
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Writer Content Creator Influencer
        </motion.div>
        <motion.div 
          className="imageContainer"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/hero.png" alt="Hero" />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero