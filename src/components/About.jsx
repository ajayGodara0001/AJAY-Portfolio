import React from 'react';
import ajay from "../assets/ajay.jpg"
const About = () => {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'MongoDB',
    'Express.js',
    'Tailwind CSS',
    'GitHUB',
    'REST APIs',
    'POSTMAN',
    'Redux tool'
  ];

  return (
    <section id="about" className="py-20 bg-[#1A1A1A] text-[#E0E0E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <img
              src={ajay}
              alt="ajay profile"
              className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Bio and Skills */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <h3 className="text-2xl font-semibold mb-4">
              Hi, I’m <span className="text-[#00FFAA]">AJAY</span>
            </h3>
            <p className="text-[#A0A0A0] text-lg mb-6 max-w-2xl mx-auto lg:mx-0">
              I’m a passionate MERN Stack Developer with a knack for building dynamic, scalable web applications. With experience in MongoDB, Express.js, React, and Node.js, I love turning ideas into functional, user-friendly solutions. When I’m not coding, you’ll find me exploring new tech trends, gaming, or sipping coffee while brainstorming my next project.
            </p>
            <div>
              <h4 className="text-xl font-semibold mb-4">Skills</h4>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium text-[#E0E0E0] bg-[#00FFAA]/20 rounded-full hover:bg-[#00FFAA] hover:text-[#1A1A1A] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;