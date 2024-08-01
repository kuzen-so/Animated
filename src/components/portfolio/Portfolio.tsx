import "./Portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

interface Item {
    id: number;
    title: string;
    img: string;
    desc: string;
}

const items: Item[] = [
    {
        id: 1,
        title: "项目1",
        img: "https://cdn.pixabay.com/photo/2024/06/21/08/21/hut-8843868_1280.jpg",
        desc: "项目1描述"
    },
    {
        id: 2,
        title: "项目2",
        img: "https://cdn.pixabay.com/photo/2023/09/25/12/49/trees-8274904_1280.jpg",
        desc: "项目2描述"
    },
    {
        id: 3,
        title: "项目3",
        img: "https://cdn.pixabay.com/photo/2024/05/05/17/14/coniferous-8741517_1280.jpg",
        desc: "项目3描述"
    },
    {
        id: 4,
        title: "项目4",
        img: "https://cdn.pixabay.com/photo/2023/11/01/11/24/path-8357201_1280.jpg",
        desc: "项目4描述"
    }
]

const Single: React.FC<{ item: Item }> = ({ item }) => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])
    
    return (
        <section ref={ref}>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt={item.title} />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    })
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

    return (
        <div className="Portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio
