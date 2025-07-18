import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import API from "../utils/Api";
import toast from "react-hot-toast";

const Contact = () => {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handlechange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/contact", formdata);
      if (res.status === 200) {
        console.log("message sent successfully");
      }
      toast.success("message sent successfully");
    } catch (error) {
      console.error("error while sending the message", error);
      toast.error("error while sending message");
    }
  };

  return (
    <div className='flex justify-center items-center py-32 px-4 md:px-0'>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.4}
        glareColor='#ffff00'
        glarePosition='all'
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        className='bg-[#111111] border border-yellow-400/20 backdrop-blur-xl rounded-2xl p-8 w-full max-w-2xl shadow-[0_0_40px_rgba(255,255,0,0.1)] relative transition-all duration-300'>
        <h2 className='text-4xl text-yellow-300 font-extrabold mb-8 tracking-wide'>
          Let’s Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            value={formdata.name}
            onChange={handlechange}
            className='p-4 rounded-lg bg-[#1a1a1a] text-white placeholder:text-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200'
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            value={formdata.email}
            onChange={handlechange}
            className='p-4 rounded-lg bg-[#1a1a1a] text-white placeholder:text-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200'
            required
          />
          <input
            type='text'
            name='phone'
            placeholder='Your Phone Number'
            value={formdata.phone}
            onChange={handlechange}
            className='p-4 rounded-lg bg-[#1a1a1a] text-white placeholder:text-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200'
            required
          />
          <textarea
            name='message'
            placeholder='Your Message'
            value={formdata.message}
            onChange={handlechange}
            className='p-4 rounded-lg bg-[#1a1a1a] text-white placeholder:text-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200'
            required
          />
          <button
            type='submit'
            className='bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg transition-all duration-200 tracking-wide'>
            Send Message
          </button>
        </form>
      </Tilt>
    </div>
  );
};

export default Contact;
