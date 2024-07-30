import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links.jsx";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton.jsx";

const variants = {
  open: {
    width: "300px",
    height: "100%",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    width: "0px",
    height: "100%",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  

  return (
    <motion.div
      className="sidebar"
      animate={open ? "open" : "closed"}
      variants={variants}
      ref={sidebarRef}
    >
      <motion.div className="bg">
        <Links />
      </motion.div>
      <ToggleButton setOpen={toggleSidebar} />
    </motion.div>
  );
};

export default Sidebar;
