import React, { useState } from 'react';
import { ArrowRight, Github } from 'lucide-react';
import lms from "../assets/lms.png"
import suds from "../assets/suds.png"
import portfolio from "../assets/portfolio.png"
import country from "../assets/country.png"
import notes from "../assets/notes.png"
import book from "../assets/book.png"
const ProjectsWithBoxModel = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: 'Learning Management System',
      description: '',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Razorpay','axios', 'Tailwind'],
      image: lms,
      demo: 'https://lmsedu.vercel.app',
      github: 'https://github.com/ajayGodara0001/lms',
    },
    {
      title: 'Shoping Website',
      description: '',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Razorpay', 'axios','Tailwind'],
      image: suds,
      demo: 'https://suds.vercel.app',
      github: 'https://github.com/ajayGodara0001/suds',
    },
    {
      title: 'Portfolio website',
      description: '',
      tech: ['React', 'Tailwind'],
      image: portfolio,
      demo: 'https://ajaygodara-portfolio.vercel.app',
      github: 'https://github.com/ajayGodara0001/AJAY-Portfolio',
    },
    {
      title: 'All Country Info website',
      description: '',
      tech: ['React','Css', 'JavaScript','Api', 'Tailwind', 'axios'],
      image: country,
      demo: 'https://ajaycountry.vercel.app/',
      github: 'https://github.com/ajayGodara0001/country',
    },
    {
      title: 'Notes App',
      description: '',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Razorpay', 'axios','Tailwind'],
      image: notes,
      demo: 'https://ajaynotes.vercel.app/',
      github: 'https://github.com/ajayGodara0001/Notes',
    },
    {
      title: 'Book Store',
      description: '',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Razorpay', 'axios','Tailwind'],
       image: book,
      demo: 'https://ajaybookstore.vercel.app/',
      github: 'https://github.com/ajayGodara0001/bookstore',
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-20 bg-[#1A1A1A] text-[#E0E0E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="bg-[#2A2A2A] rounded-xl shadow-lg"
            >
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-6 flex flex-col justify-between ">
                <div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#00FFAA] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#A0A0A0] text-sm mb-4 transition-all duration-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium text-[#E0E0E0] bg-[#00FFAA]/20 rounded-md hover:bg-[#00FFAA] hover:text-[#1A1A1A] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 ">
                <a
                    href={project.github}
                    target="_blank"
                    className="bg-[#6fa895] text-[#1A1A1A] font-bold px-2 py-1 rounded-full  hover:bg-[#80ffd5] transition-colors shadow-md hover:shadow-lg"
                  >
                   <span className='flex justify-center items-center gap-1'><Github size={16} /> GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    className="border border-[#00FFAA] text-[#00FFAA] px-2 py-1 rounded-md text-sm font-semibold hover:bg-[#6fa895] hover:text-[#1A1A1A] transition-colors shadow-md hover:shadow-lg"
                  >
                    <span className='flex justify-center items-center gap-1'> Live Demo <ArrowRight size={20} className='pt-1' /></span>
                    
                  </a>
                 
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="border border-[#00FFAA] text-[#00FFAA] px-6 py-3 rounded-full font-semibold hover:bg-[#6fa895] hover:text-[#1A1A1A] cursor-pointer transition-colors shadow-md hover:shadow-lg"
          >
            {showAll ? 'See Less' : 'See More Projects'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsWithBoxModel;