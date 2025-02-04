import {motion} from 'framer-motion'
// 定义链接
const variants = {
  open:{
    transition: {
      staggerChildren:0.2,
  }},
  closed:{
    transition:{
      staggerChildren:0.05,
      staggerDirection:1
    }
  }
}

const itemVariants = {
  open:{
    y:0,
    opacity:1,
  },
    
  closed:{
    y:50,
    opacity:0,
  }
}

// 定义链接
const Links = () => {
    const items = ["主页","博客","项目","留言", "关于"];
  return (
    <motion.div className="links" 
    variants={variants}
    >
    {items.map((item)=>(<motion.a href={`#${item}`} key={item} 
      variants={itemVariants}
      whileHover={{scale:1.2}}
      whileTap={{scale:0.9}}
    >{item}</motion.a>))}</motion.div>
  )
}

export default Links