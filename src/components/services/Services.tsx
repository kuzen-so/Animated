import "./Services.scss"
import {motion} from "framer-motion"

const Services = () => {
  return (
    <motion.div className="Services">
        <motion.div className="textContainer">
            <p>
            I focus on he lping your brand grow
            <br /> and move forward
            </p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer">
            <div className="title">
                <img src="People.webp" alt="" />
                <h1>
                    <b>Unique</b> Ideas
                </h1>
            </div>
                <div className="title">
                <h1>
                <b>For Your</b> Business.
                </h1>
                <button>WHAT WE DO?</button>

            </div>

        </motion.div>
        <motion.div className="listContainer">
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum do lor sit amet consectetur adipisicing elit. Nostrum
                    Libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                    animi! Ad nam pariatur assumenda quae mollitia 1ibero repellat
                    explicabo maiores?
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum do lor sit amet consectetur adipisicing elit. Nostrum
                    Libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                    animi! Ad nam pariatur assumenda quae mollitia 1ibero repellat
                    explicabo maiores?
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum do lor sit amet consectetur adipisicing elit. Nostrum
                    Libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                    animi! Ad nam pariatur assumenda quae mollitia 1ibero repellat
                    explicabo maiores?
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum do lor sit amet consectetur adipisicing elit. Nostrum
                    Libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                    animi! Ad nam pariatur assumenda quae mollitia 1ibero repellat
                    explicabo maiores?
                </p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services