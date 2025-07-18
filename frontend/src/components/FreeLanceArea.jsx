import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

const FreeLanceArea = () => {
  const [glowPos, setGlowPos] = useState({
    x: 0,
    y: 0,
  });

  return (
    <Tilt
      glareEnable={true}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      scale={1.05}
      transitionSpeed={1000}
      onMove={(e) => {
        if (!e || !e.event || !e.event.currentTarget) return;
        const bounds = e.event.currentTarget.getBoundingClientRect();
        const x = e.event.clientX - bounds.left;
        const y = e.event.clientY - bounds.top;
        setGlowPos({ x, y });
      }}
      onLeave={() => setGlowPos({ x: 0, y: 0 })}
      style={{
        background: `radial-gradient(600px at ${glowPos.x}px ${glowPos.y}px, rgba(244,63,94,0.15), transparent 80%)`,
      }}
      className='relative bg-[#111] border border-red-500/30 hover:border-red-500/60 rounded-2xl p-10 max-w-5xl mx-auto backdrop-blur-md shadow-2xl'>
      <div className='absolute -top-20 -left-20 w-[200px] h-[200px] bg-red-500 rounded-full opacity-20 blur-3xl animate-pulse z-[-10]' />
      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className='text-3xl md:text-5xl font-bold text-red-400 text-center mb-6'>
        Open for freelance Work
      </motion.h2>
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className='text-gray-300 text-md md:text-lg text-center max-w-3xl mx-auto'>
        Need a modern , scalable website or web app built with clean design and
        blazing-fast performance ? I specialize in full-stack JavaScript
        solutions-let's bring your idea to life!
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className='mt-8 text-center'>
        <a
          href='#contact'
          className='inline-flex items-center gap-2 px-6 py-3 bg-red-500/10 text-red-300 border border-red-500/30 hover:bg-red-500/20 transition rounded-full backdrop-blur-md text-sm md:text-base'>
          <FiSend /> Let’s Collaborate
        </a>
      </motion.div>
    </Tilt>
  );
};

export default FreeLanceArea;
