import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CircularProgress() {
  const [progress, setProgress] = useState(0);
  const [size, setSize] = useState(window.innerWidth < 480 ? 150 : 250); // Default size

  useEffect(() => {
  
    const handleResize = () => {
      setSize(window.innerWidth < 480 ? 150 : 250);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const strokeWidth = size * 0.08; 
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * progress) / 100;

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "300px" }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#161D2F"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="red"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy="0.3em"
          fontSize={size * 0.16}
          fontWeight="bold"
          fill="white"
        >
          {progress}%
        </text>
      </svg>
    </div>
  );
}