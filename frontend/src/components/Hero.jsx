import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import {motion} from 'framer-motion'
import {
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import NavBar from "./NavBar";
import Contact from "./Contact";
import Footer from "./Footer";
import FreeLanceArea from "./FreeLanceArea";

const Hero = () => {
  const [heroPos, setHeroPos] = useState({ x: 0, y: 0 });
  const [projectPos, setProjectPos] = useState({ x: 0, y: 0 });
  const [aboutPos, setAboutPos] = useState({ x: 0, y: 0 });
  return (
    <>
      <NavBar />
      <div className=' pt-32 absolute top-[-50px] left-[-100px] w-[600px] h-[600px] bg-green-400 rounded-full opacity-20 blur-3xl animate-pulse z-[-10]' />
      <div className='flex flex-col items-center justify-center text-center w-full mb-1 relative pt-40'>
        <div className='absolute w-[500px] h-[500px] bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-3xl opacity-10 animate-pulse -z-10 top-[-150px] left-[-100px]' />
        <div className='absolute w-[500px] h-[500px] bg-gradient-to-bl from bg-purple-500 to-violet-600 rounded-full blur-3xl opacity-10 animate-pulse -z-10 bottom-[-150px] right-[-100px]'></div>
        <div className='absolute w-[500px] h-[500px] bg-gradient-to-bl from bg-purple-500 to-violet-600 rounded-full blur-3xl opacity-10 animate-pulse -z-10 bottom-[-150px] right-[-100px]'></div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className='mt-1 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-400 text-2xl md:text-4xl font-bold tracking-widest text-center drop-shadow-lg z-50'>
          Designing futures through code —{" "}
          <span className='text-green-400'>
            and writing the kind that bites back.
          </span>
        </motion.div>
        <p className='mb-10 text-gray-400 text-sm md:text-base text-center z-40'>
          I design and build modern, responsive, and magical web experiences.
        </p>
        <div className='flex gap-4 justify-center md:justify-start text-2xl text-green-400 mt-4'>
          <SiJavascript />
          <SiNodedotjs />
          <SiExpress />
          <SiMongodb />
          <SiPostgresql />
        </div>
      </div>
      {/* top section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}>
        <section
          id='hero'
          className='w-full pt-28 pb-10 md:pt-40 md:pb-20 bg-[#0a0a0a] text-white flex items-center justify-center px-6 md:px-16'>
          <Tilt
            glareEnable={false}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
            transitionSpeed={1000}
            className='relative p-8 rounded-2xl bg-[#111] border border-green-500/20 hover:border-green-400/40 backdrop-blur-sm shadow-2xl flex flex-col md:flex-row gap-10 items-center justify-center w-full max-w-7xl'
            onMove={(e) => {
              if (!e || !e.event || !e.event.currentTarget) return;
              const bounds = e.event.currentTarget.getBoundingClientRect();
              const x = e.event.clientX - bounds.left;
              const y = e.event.clientY - bounds.top;
              setHeroPos({ x, y });
            }}
            onLeave={() => setHeroPos({ x: 0, y: 0 })}
            style={{
              background: `radial-gradient(600px at ${heroPos.x}px ${heroPos.y}px , rgba(34,197,94,0.15),transparent 80%)`,
            }}>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className='space-y-6 max-w-xl text-center md:text-left'>
              <h1 className='text-4xl md:text-6xl font-bold leading-tight'>
                Hello , I'm <span className='text-green-400'>Kartike</span>
              </h1>
              <p className='text-lg md:text-xl text-gray-300 max-w-xl'>
                I craft modern , high-performance web experiences. Expert in{" "}
                <span className='text-green-400'>
                  JavaScript , Node.js , React
                </span>
                , and backend magic with{" "}
                <span className='text-green-400'>Express , MongoDB , SQL</span>
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className='flex justify-center w-[250px] md:w-[300px] aspect-square rounded-xl overflow-hidden'>
              <img
                src='/kartike.png'
                className='w-full h-full object-cover rounded-xl z-20 relative'
              />
            </motion.div>
          </Tilt>
        </section>
      </motion.div>
      <motion.div
  initial={{ y: 100, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
  <section
    id="resume"
    className="w-full bg-[#0a0a0a] text-white py-16 px-6 md:px-16 flex justify-center items-center"
  >
    <Tilt
      glareEnable={false}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      scale={1.05}
      transitionSpeed={1000}
      className="relative p-8 bg-[#111] border border-purple-500/30 hover:border-purple-400/60 backdrop-blur-sm shadow-2xl w-full max-w-4xl rounded-2xl text-center"
      onMove={(e) => {
        if (!e || !e.event || !e.event.currentTarget) return;
        const bounds = e.event.currentTarget.getBoundingClientRect();
        const x = e.event.clientX - bounds.left;
        const y = e.event.clientY - bounds.top;
        // glowing radial effect
        e.event.currentTarget.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(168,85,247,0.15), transparent 80%)`;
      }}
      onLeave={(e) => {
        if (e?.event?.currentTarget) {
          e.event.currentTarget.style.background = "none";
        }
      }}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-purple-400 mb-6">
        Resume
      </h2>
      <p className="text-gray-300 text-md md:text-lg mb-6">
        Explore my professional journey, skills, and achievements in detail.
      </p>

      {/* Download Button */}
      <a
        href="/Kartike_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-3 rounded-lg font-medium text-white bg-black border border-purple-500/30 hover:border-purple-500 transition-all duration-300 ease-in-out shadow-lg mb-8"
      >
        📄 Download Resume
      </a>

      {/* Optional inline preview */}
      <div className="rounded-lg overflow-hidden border border-white/10 shadow-lg">
        <embed
          src="/resume.pdf"
          type="application/pdf"
          className="w-full h-[500px] rounded-lg"
        />
      </div>
    </Tilt>
  </section>
</motion.div>
      {/* about me section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
        <section
          data-aos='fade-right'
          id='about'
          className='w-full bg-[#0a0a0a] text-white py-16 px-6 md:px-16 flex justify-center items-center'>
          <Tilt
            glareEnable={false}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
            transitionSpeed={1000}
            className='relative p-8 bg-[#111] border border-orange-400/40 backdrop-blur-sm shadow-2xl w-full max-w-5xl rounded-2xl text-center'
            onMove={(e) => {
              if (!e || !e.event || !e.event.currentTarget) return;
              const bounds = e.event.currentTarget.getBoundingClientRect();
              const x = e.event.clientX - bounds.left;
              const y = e.event.clientY - bounds.top;
              setAboutPos({ x, y });
            }}
            onLeave={() => setAboutPos({ x: 0, y: 0 })}
            style={{
              background: `radial-gradient(600px at ${aboutPos.x}px ${aboutPos.y}px , rgba(234,88,12,0.15),transparent 80%)`,
            }}>
            <div className='absolute -top-20 -left-20 w-[200px] h-[200px] bg-orange-400 rounded-full opacity-20 blur-3xl animate-pulse z-[-10]' />
            <h2 className='text-3xl md:text-5xl font-bold text-orange-400 mb-6'>
              About Me
            </h2>
            <p className='text-gray-300 text-md md:text-lg leading-relaxed'>
              I'm Kartike, a passionate full-stack developer who thrives on
              building elegant, efficient, and powerful digital experiences. I
              specialize in JavaScript, Node.js, and React, with a love for
              crafting beautiful UIs and scalable backends.
            </p>
            <p className='text-gray-400 text-sm md:text-base mt-4'>
              Currently open to exciting roles, collaborations, or just nerding
              out over code & coffee ☕.
            </p>
          </Tilt>
        </section>
      </motion.div>

      {/* project section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
        <section
          data-aos='fade-left'
          id='projects'
          className='w-full bg-[#0a0a0a] text-white flex items-center justify-center px-6 md:px-16 py-6 md:py-10'>
          <Tilt
            glareEnable={false}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
            transitionSpeed={1000}
            className='relative p-8 bg-[#111] border border-blue-500/20 hover:border-blue-400/40 backdrop-blur-sm shadow-2xl w-full max-w-7xl rounded-2xl'
            onMove={(e) => {
              if (!e || !e.event || !e.event.currentTarget) return;
              const bounds = e.event.currentTarget.getBoundingClientRect();
              const x = e.event.clientX - bounds.left;
              const y = e.event.clientY - bounds.top;
              setProjectPos({ x, y });
            }}
            onLeave={() => setProjectPos({ x: 0, y: 0 })}
            style={{
              background: `radial-gradient(600px at ${projectPos.x}px ${projectPos.y}px , rgba(59,130,246,0.15),transparent 80%)`,
            }}>
            <div className='absolute -top-20 -right-20 w-[300px] h-[300px] bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse z-[-10]' />
            <h2 className='text-3xl md:text-5xl font-bold text-blue-400 text-center mb-10'>
              Projects
            </h2>
            <div className='grid gap-6 md:grid-cols-2'>
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.05}
                transitionSpeed={1000}
                glareEnable={false}
                onMove={(e) => {
                  if (!e || !e.event || !e.event.currentTarget) return;
                  const bounds = e.event.currentTarget.getBoundingClientRect();
                  const x = e.event.clientX - bounds.left;
                  const y = e.event.clientY - bounds.top;
                  setProjectPos({ x, y });
                }}
                onLeave={() => setProjectPos({ x: 0, y: 0 })}
                style={{
                  background: `radial-gradient(600px at ${projectPos.x}px ${projectPos.y}px , rgba(59,130,246,0.15),transparent 80%)`,
                }}
                className='bg-[#1a1a1a] p-5 rounded-2xl border border-blue-500/10 hover:border-blue-400/40 backdrop-blur-md shadow-lg'>
                <h3 className='text-xl font-semibold text-blue-400'>
                  Airline Management System
                </h3>
                <p className='text-gray-300 mt-2 text-sm'>
                  Feb 2025 - March 2025
                </p>
                <p className='text-gray-300 mt-2 text-sm'>
                  Developed an airline management system with flight booking,
                  scheduling, and passanger management features with Java and
                  SQL
                </p>
                <div className='flex flex-wrap gap-2 mt-3 text-xs'>
                  <span className='bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full'>
                    Java
                  </span>
                  <span className='bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full'>
                    SQL
                  </span>
                </div>
                <div className='mt-4 w-full h-48 rounded-lg bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center text-blue-300 text-sm border border-white/10'>
                  🛠 Backend-focused project
                </div>
              </Tilt>
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.05}
                transitionSpeed={1000}
                glareEnable={false}
                onMove={(e) => {
                  if (!e || !e.event || !e.event.currentTarget) return;
                  const bounds = e.event.currentTarget.getBoundingClientRect();
                  const x = e.event.clientX - bounds.left;
                  const y = e.event.clientY - bounds.top;
                  setProjectPos({ x, y });
                }}
                onLeave={() => setProjectPos({ x: 0, y: 0 })}
                style={{
                  background: `radial-gradient(600px at ${projectPos.x}px ${projectPos.y}px , rgba(59,130,246,0.15),transparent 80%)`,
                }}
                className='bg-[#1a1a1a] p-5 rounded-2xl border border-blue-500/10 hover:border-blue-400/40 backdrop-blur-md shadow-lg'>
                <h3 className='text-xl font-semibold text-blue-400'>TaskPro</h3>
                <p className='text-gray-400 text-sm'>May 2025 - June 2025</p>
                <p className='text-gray-300 mt-2 text-sm'>
                  SaaS platform simulating task management workflow with
                  animated stats, Apex Charts, and live-updating task table
                </p>
                <div className='flex gap-3 mt-3'>
                  <a
                    href='https://task-pro-brown.vercel.app'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-400 hover:underline text-sm'>
                    🔗 Live Link
                  </a>
                  <a
                    href='https://github.com/kartikekhurana/task-pro'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-400 hover:underline text-sm'>
                    📂 View Code
                  </a>
                </div>
                <div className='flex flex-wrap gap-2 mt-3 text-xs'>
                  <span className='bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full'>
                    React
                  </span>
                  <span className='bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full'>
                    TypeScript
                  </span>
                  <span className='bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full'>
                    Vercel
                  </span>
                </div>
                <div className='mt-4 rounded-lg overflow-hidden'>
                  <img
                    src='/taskPro.png'
                    alt='TaskPro Screenshot'
                    className='rounded-lg shadow-md border border-white/10 hover:scale-105 transition duration-300'
                  />
                </div>
              </Tilt>
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.05}
                transitionSpeed={1000}
                glareEnable={false}
                onMove={(e) => {
                  if (!e || !e.event || !e.event.currentTarget) return;
                  const bounds = e.event.currentTarget.getBoundingClientRect();
                  const x = e.event.clientX - bounds.left;
                  const y = e.event.clientY - bounds.top;
                  setProjectPos({ x, y });
                }}
                onLeave={() => setProjectPos({ x: 0, y: 0 })}
                style={{
                  background: `radial-gradient(600px at ${projectPos.x}px ${projectPos.y}px , rgba(59,130,246,0.15),transparent 80%)`,
                }}
                className='bg-[#1a1a1a] p-5 rounded-2xl border border-blue-500/10 hover:border-blue-400/40 backdrop-blur-md shadow-lg'>
                <h3 className='text-xl font-semibold text-blue-400'>
                  TaskArena
                </h3>
                <p className='text-gray-400 text-sm'> July2025 - August2025</p>
                <p className='text-gray-300 mt-2 text-sm'>
                 TaskArena is a sleek, real-time task management platform built with Next.js, WebSockets, and MongoDB. It empowers teams with live collaboration, comments, and notifications in a dark inspired UI.
                </p>
                 <div className='flex gap-3 mt-3'>
                  <a
                    href='https://task-arena-xu12.vercel.app/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-400 hover:underline text-sm'>
                    🔗 Live Link
                  </a>
                  <a
                    href='https://github.com/kartikekhurana/TaskArena'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-400 hover:underline text-sm'>
                    📂 View Code
                  </a>
                </div>
                <div className='flex flex-wrap gap-2 mt-3 text-xs'>
                  <span className='bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full'>
                    Next.js
                  </span>
                  <span className='bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full'>
                    TypeScript
                  </span>
                  <span className='bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full'>
                    WebSockets
                  </span>
                </div>
                <img
                    src='/TaskArena.png'
                    alt='TaskArena Screenshot'
                    className='rounded-lg shadow-md border border-white/10 hover:scale-105 transition duration-300'
                  />
              </Tilt>

              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.05}
                transitionSpeed={1000}
                glareEnable={false}
                onMove={(e) => {
                  if (!e || !e.event || !e.event.currentTarget) return;
                  const bounds = e.event.currentTarget.getBoundingClientRect();
                  const x = e.event.clientX - bounds.left;
                  const y = e.event.clientY - bounds.top;
                  setProjectPos({ x, y });
                }}
                onLeave={() => setProjectPos({ x: 0, y: 0 })}
                style={{
                  background: `radial-gradient(600px at ${projectPos.x}px ${projectPos.y}px , rgba(59,130,246,0.15),transparent 80%)`,
                }}
                className='bg-[#1a1a1a] p-5 rounded-2xl border border-blue-500/10 hover:border-blue-400/40 backdrop-blur-md shadow-lg'>
                <h3 className='text-xl font-semibold text-blue-400'>
                  IdeaForge
                </h3>
                <p className='text-gray-400 text-sm'>June 2025 - July 2025</p>
                <p className='text-gray-300 mt-2 text-sm'>
                  Full-stack SaaS app for Idea generation with AI, secure auth,
                  admin panel, favourting, CSV export, and more.
                </p>
                <div className='flex gap-3 mt-3'>
                  <a
                    href='https://idea-forge-six.vercel.app'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-400 hover:underline text-sm'>
                    🔗 Live Link
                  </a>
                  <a
                    href='https://github.com/kartikekhurana/IdeaForge'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-400 hover:underline text-sm'>
                    📂 View Code
                  </a>
                </div>
                <div className='flex flex-wrap gap-2 mt-3 text-xs'>
                  <span className='bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full'>
                    React
                  </span>
                  <span className='bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full'>
                    Node.js
                  </span>
                  <span className='bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full'>
                    MongoDB
                  </span>
                  <span className='bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full'>
                    Cohere API
                  </span>
                </div>
                <div className='mt-4 rounded-lg overflow-hidden'>
                  <img
                    src='/IdeaForge.png'
                    className='rounded-lg shadow-md border border-white/10 hover:scale-105 transition duration-300'
                  />
                </div>
              </Tilt>
            </div>
          </Tilt>
        </section>
      </motion.div>
      {/* freelance section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
        <section
          id='freelance'
          data-aos='fade-up'
          className='pt-20 pb-10 px-6 md:px-16'>
          <FreeLanceArea />
        </section>
      </motion.div>
      {/* contact section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
        <section
          id='contact'
          data-aos='fade-up'
          className='pt-20 pb-32 px-6 md:px-16'>
          <Contact />
        </section>
      </motion.div>

      <Footer />
    </>
  );
};

export default Hero;
