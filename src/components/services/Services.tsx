import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Services.scss";

const variants = {
  initial: { x: -500, y: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: { duration: 1, staggerChildren: 0.1 }
  }
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const BoxContent = ({ title, content }) => (
    <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
      <h2>{title}</h2>
      <p>{content}</p>
      <button>Go</button>
    </motion.div>
  );

  return (
    <motion.div
      className="Services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : "initial"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="People.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <BoxContent
          title="Branding"
          content="我教你超人。人是某种必须被超越的东西。你们为超越人做了什么？至今为止，一切生物都创造了比它们本身更高的东西；而你们想成为这伟大洪流的退缩，宁愿再滚回动物界吗？超人是地球的意义。你们的意志应该说：超人将是地球的意义！"
        />
        <BoxContent
          title="Branding"
          content="艺术的目的是给予生活一种装饰，使其在我们眼中显得可以忍受。对于我们这些眼睛深陷的现代人来说，我们需要从艺术中获得的最主要的东西，是使生活显得有意义的谎言。正因为如此，我们对艺术的需求，比以往任何时代都更加迫切。"
        />
        <BoxContent
          title="Branding"
          content="人们不会从历史中学到任何东西，这是历史的最大教训。生命是一种永恒的轮回，一种无尽的重复。每一代人都必须重新面对相同的挑战，解决相同的问题。这就是为什么，我们必须不断地超越自己，追求卓越，寻求新的意义。"
        />
        <BoxContent
          title="Branding"
          content="生命的本质是什么？是意志。意志的本质是什么？是权力的追求。所有生命形式，无论是最低等的植物，还是最高等的人类，都是在追求更多的权力。权力意志不仅仅是生命的驱动力，更是生命的定义。"
        />
      </motion.div>
    </motion.div>
  );
};

export default Services;