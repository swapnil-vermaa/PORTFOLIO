import React, { useRef } from "react"; // Add this line to import useRef
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import PropTypes from "prop-types";

const items = [
  {
    id: 1,
    title: "Evershine Dental",
    img: "/assets/evershineDental.png",
    desc: "A user-friendly website built with HTML, CSS, and JavaScript, offering seamless appointment booking and secure patient data storage in Google Sheets. Designed to enhance accessibility and streamline clinic operations, with ongoing improvements to meet patient needs."
  },
  {
    id: 2,
    title: "DecoVista",
    img: "/assets/blogify (2).png",
    desc: "Welcome to DecoVista, your go-to eCommerce site for premium decor items! We offer stunning mandala art to bring tranquility to your home and a wide selection of vibrant anime posters for fans of Japanese culture. Discover the best products to enhance your living space and express your unique style with DecoVista."
  },
  {
    id: 3,
    title: "Cuisine Creation",
    img: "/assets/CuisineCreation.png",
    desc: "Discover and share recipes on our platform, where you can add your own with instruction and quantities, while also saving them offline for easy access."
  },
];

const Single = ({ item }) => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);


  return <section >
    <div className="container">
      <div className="wrapper">
        <div className="imageContainer" ref={ref}>
          <img src={item.img} alt="" />
        </div>
        <motion.div className="textContainer" style={{y}}>
          <h2 >{item.title}</h2>
          <p>{item.desc}</p>
          <button>See Demo</button>
        </motion.div>
      </div>
    </div>
  </section>
};

Single.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
  }).isRequired,
};

const Portfolio = () => {

  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works </h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
