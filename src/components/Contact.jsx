import React, { useState } from 'react';
import {  toast } from 'react-toastify';

const Contact = () => {

  const [result, setResult] = useState("Send Message");
  const onSubmit = async (event) => {

    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d25ed56c-06b1-422c-9b5d-692599f4c19c");
console.log(formData);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

     
    if (data.success) {
      toast.success('Form Submitted Successfully');
      setResult('Send Message');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult('Send Message');
      toast.error(data.message);
    }
  };
  return (
    <section id="contact"  className="py-20 xl:px-10 bg-[#1A1A1A] text-[#E0E0E0]">
      <div className=" px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#00FFAA] text-center mb-16">Contact Me</h2>
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-2">
          {/* Contact Info */}
          <div className="w-full  lg:w-9/20">
            <h3 className="text-2xl font-bold text-center md:text-left mb-6 md:pl-44 lg:pl-0  ">
              Get in Touch
            </h3>
            <div className="space-y-6 text-left  md:pl-44 lg:pl-0">
              <p className="text-lg">
                <span className="text-[#00FFAA]">Name:</span> Ajay Godara
              </p>
              <p className="text-lg">
                <span className="text-[#00FFAA]">Mobile:</span> +91 8168584557
              </p>
              <p className="text-lg">
                <span className="text-[#00FFAA]">Email:</span>{' '}
                <a
                  href="mailto:ajaygodara84557@gmail.com"
                  className="  hover:text-[#00FFAA] transition "
                >
                  ajaygodara84557@gmail.com
                </a>
              </p>
              <p className="text-lg">
                <span className="text-[#00FFAA]">Location:</span> GJUS&T, HISAR, HARYANA 125001
              </p>
              {/* Google Maps Embed */}
              <div className="w-72  h-48 sm:h-56 lg:h-64 rounded-xl shadow-lg">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.366292038018!2d75.7014153153841!3d29.14988898215393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39123d9b8b3d4a9d%3A0x8f1c5c5b5b5b5b5b!2sGuru%20Jambheshwar%20University%20of%20Science%20and%20Technology%2C%20Hisar!5e0!3m2!1sen!2sin!4v1696861234567!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
            ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2 lg:pr-6 md:w-[90vh] md:pl-36 lg:pl-0 xl:pr-12 flex flex-col justify-between">
            <h3 className="text-2xl font-bold mb-6  text-center lg:text-left">
              Send a Message
            </h3>
            <form  onSubmit={onSubmit} className="space-y-6 ">
              <div>
                <label htmlFor="name" className="block text-lg font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-[#2A2A2A] text-[#E0E0E0] rounded-md border border-[#00FFAA]/20 focus:border-[#00FFAA] focus:outline-none transition-colors"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-[#2A2A2A] text-[#E0E0E0] rounded-md border border-[#00FFAA]/20 focus:border-[#00FFAA] focus:outline-none transition-colors"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 bg-[#2A2A2A] text-[#E0E0E0] rounded-md border border-[#00FFAA]/20 focus:border-[#00FFAA] focus:outline-none transition-colors resize-none"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="text-center lg:text-left ">
                <button
                  type="submit"
                  className={`bg-[#6fa895] text-[#1A1A1A] px-6 py-3 rounded-full font-bold hover:bg-[#80ffd5]  transition-colors shadow-md hover:shadow-lg cursor-pointer`}
                  disabled={result === 'Sending....'}
                >
           {result}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;