import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CircularProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 30); 

    return () => clearInterval(interval);
  }, []);

  const size = 250; 
  const strokeWidth = 20; 
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * progress) / 100;

  return (
    <div style={{displey: "flex", justifyContent: "center", alignItems: "center", height: "300px" }}>
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
          fontSize="40"
          fontWeight="bold"
          fill="white" 
        >
          {progress}%
        </text>
      </svg>
    </div>
  );
}