import { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import { Toaster } from "react-hot-toast";
import Lenis from "@studio-freight/lenis";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      autoResize: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    let animationFrameId = requestAnimationFrame(raf);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);
  return (
    <>
      <Toaster position='top-right' reverseOrder={false} />
      <main className='min-h-screen bg-[#0a0a0a] text-white font-sans antialiased px-4 md:px-12'>
        <Hero />
      </main>
    </>
  );
}

export default App;
