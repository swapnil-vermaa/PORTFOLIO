import Sidebar from "../sidebar/Sidebar.jsx";
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span
            initial={{opacity:0, scale:0.5}}
            animate={{opacity:1, scale:1}}
            transition={{duration:0.5}}
            >SWAPNIL VERMA
            </motion.span>
            <div className="social">
             <a href="https://www.linkedin.com/your-profile"><img src="/linkedin.png" alt="" /></a>
             <a href="https://www.instagram.com/your-profile"><img src="/instagram.png" alt="" /></a>
             <a href="https://www.github.com/your-profile"><img src="/github.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar