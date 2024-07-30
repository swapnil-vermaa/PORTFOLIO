import { motion, useScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";
import "./parallax.scss";
import { useRef } from "react";

const Parallax = ({ type }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const planetsImage = type === "services" ? require("../../assets/planets.png") : require("../../assets/sun.png");

    return (
        <div
            className="parallax"
            ref={ref}
            style={{
                background:
                    type === "services"
                        ? "linear-gradient(180deg, #111132, #0c0c1d)"
                        : "linear-gradient(180deg, #111132, #505064)",
            }}
        >
            <motion.h1 style={{ y: yText }}>
            My Work Chronicles
                {/* {type === "services" ? "What We Do?" : "What We Did?"} */}
            </motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div 
                className="planets"
                style={{
                    y: yBg,
                    backgroundImage: `url(${planetsImage})`,
                }}
            ></motion.div>
            <motion.div style={{ y: yBg }} className="stars"></motion.div>
        </div>
    );
};

Parallax.propTypes = {
    type: PropTypes.string.isRequired,
};

export default Parallax;
