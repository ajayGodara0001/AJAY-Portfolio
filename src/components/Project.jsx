import React, { useState } from 'react';
import { ArrowRight, Github } from 'lucide-react';
import lms from "../assets/lms.png"
import suds from "../assets/suds.png"
import portfolio from "../assets/portfolio.png"
import country from "../assets/country.png"
import notes from "../assets/notes.png"

const ProjectsWithBoxModel = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: 'Learning Management System',
      description: 'A LMS where you can explore and master a variety of technologies. And, you can become an instructor, uploading and sharing your own courses. This website is built with powerful technologies like MongoDB, React, and Node.js.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Razorpay', 'axios', 'Tailwind'],
      image: lms,
      demo: 'https://lmsedu.vercel.app',
      github: 'https://github.com/ajayGodara0001/lms',
    },
    {
      title: 'Shopping Website',
      description: 'An engaging online store where users can explore, select, and buy products effortlessly. Built with a modern tech stack, it offers a smooth shopping experience powered by MongoDB, React, and Node.js.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Razorpay', 'axios', 'Tailwind'],
      image: suds,
      demo: 'https://suds.vercel.app',
      github: 'https://github.com/ajayGodara0001/suds',
    },
    {
      title: 'Portfolio website',
      description: 'A personal portfolio showcasing my projects and skills. This stylish site displays my achievements and abilities, built using a modern stack of React, Tailwind, and JavaScript.',
      tech: ['React', 'Tailwind', 'JavaScript'],
      image: portfolio,
      demo: 'https://ajaygodara-portfolio.vercel.app',
      github: 'https://github.com/ajayGodara0001/AJAY-Portfolio',
    },
    {
      title: 'All Country Info website',
      description: 'An informative site built with an API that provides detailed data about every country worldwide. Explore facts like population, area, currency, capital, and bordering countries to expand your global knowledge.',
      tech: ['React', 'Css', 'JavaScript', 'Api', 'Tailwind', 'axios'],
      image: country,
      demo: 'https://ajaycountry.vercel.app/',
      github: 'https://github.com/ajayGodara0001/country',
    },
    {
      title: 'Notes App',
      description: 'A user-friendly note management website where you can log into your account to create, organize, and manage your notes. Add notes with titles, descriptions, and tags, then update or delete them as needed. Built using a modern tech stack to ensure a smooth and efficient user experience.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js',  'axios', 'Tailwind'],
      image: notes,
      demo: 'https://ajaynotes.vercel.app/',
      github: 'https://github.com/ajayGodara0001/Notes',
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-[#1A1A1A] text-[#E0E0E0]">
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl  text-[#00FFAA] font-bold text-center mb-16">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {displayedProjects.map((project, index) => (
            <div
            key={index}
            className="bg-[#2A2A2A] rounded-2xl h-[500px] hover:z-10  shadow-lg group"
            >
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-6 flex flex-col rounded-b-2xl group-hover:h-fit group-hover:bg-[#2A2A2A] h-[calc(500px-192px)]  justify-between ">
                <div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#00FFAA] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#A0A0A0] text-sm mb-4 transition-all duration-300 line-clamp-3 group-hover:line-clamp-none">
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
                <div className="flex gap-4  ">
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