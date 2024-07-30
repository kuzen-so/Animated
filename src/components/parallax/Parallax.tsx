import "./parallax.scss"
import {useRef} from "react"
import {motion,useScroll,useTransform} from "framer-motion"

const Parallax = ({ type }: { type: "services" | "portfolio" }) => {
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start","end start"]
    })


    const yBg = useTransform(scrollYProgress,[0,1],["0%", "100%"])
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])

  return (
    <div className="parallax"
    ref={ref}
        style={{
        background: 
            type ==="services" 
            ? "linear-gradient(180deg, #111132,#0c0c1d)" 
            : "linear-gradient(180deg, #111132,#505064)"
        }}
    >
        <motion.h1 style={{y:yText}}>{type==="services" ? "what We Do?" : "What We Did?"}</motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div className="planets"
        style={{y:yBg}}
        ></motion.div>
        <motion.div className="starts"
         style={{x:yBg}}
        ></motion.div>
    </div>
  )
}

export default Parallax