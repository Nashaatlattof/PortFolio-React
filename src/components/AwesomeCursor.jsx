import React, { useEffect, useState } from "react";
import "/src/App.css";
import { motion } from "framer-motion";

const AwesomeCursor = ({ cursorVariants, theme }) => {
  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: cursorPosition.x - 25,
      y: cursorPosition.y - 25,
      backgroundColor: theme === "light" ? "#E78895" : "#277eac22",
    },
    text: {
      x: cursorPosition.x - 25,
      y: cursorPosition.y - 25,
      width: 80,
      height: 80,
      backgroundColor: theme === "light" ? "gray" : "#277dac",
      mixBlendMode: "difference",
      border: "1px solid gray",
    },
  };
  return (
    <motion.div
      variants={variants}
      animate={cursorVariants}
      className="cursor"
    ></motion.div>
  );
};

export default AwesomeCursor;
