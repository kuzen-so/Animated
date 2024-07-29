import "./hero.scss"
import {animate, motion, stagger} from "framer-motion"

const textVariants = {
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity,
        }
    }
}


const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            {/* 主页文字 */}
            <motion.div className="textContainer"
            variants={textVariants}
            initial="initial"
            animate="animate"
            >
                <motion.h2  variants={textVariants}>KUZEN SCHOLAR</motion.h2>
                <motion.h1  variants={textVariants}>Web developer </motion.h1>
                <motion.h1  variants={textVariants}>UI desiginer</motion.h1>
                {/* 主页按钮 */}
                <motion.div variants={textVariants} className="buttons">
                    <motion.button>最新作品</motion.button>
                    <motion.button>联系我</motion.button>
                </motion.div>
                <motion.img   variants={textVariants} animate="scrollButton" src="/Scroll.png" alt="" />
             </motion.div>
             {/* 背景文字 */}
             <motion.div  variants={textVariants} className="slidingTextContainer">
                Writer Content Creator Influencer
             </motion.div>
             {/* 主页照片 */}
            <div className="imageContainer">
            <img src="/hero.png" alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default Hero