import React, { useState } from 'react';

const ProjectsWithBoxModel = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack application with user authentication, payment integration using Stripe, and a responsive design for seamless shopping experiences across devices.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556740714-5f4e4d31e6b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      demo: 'https://example.com',
      github: 'https://github.com/yourusername/ecommerce',
    },
    {
      title: 'Task Manager',
      description: 'A productivity app designed to manage tasks efficiently with real-time updates, featuring a clean UI and WebSocket integration for instant syncing.',
      tech: ['MERN Stack', 'WebSockets'],
      image: 'https://images.unsplash.com/photo-1542744094-3ea9b7f8b53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      demo: 'https://example.com',
      github: 'https://github.com/yourusername/taskmanager',
    },
    {
      title: 'Social Media Dashboard',
      description: 'A dashboard to track social media analytics, offering insightful visualizations and data aggregation using Chart.js for dynamic charts.',
      tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      demo: 'https://example.com',
      github: 'https://github.com/yourusername/socialdashboard',
    },
    {
      title: 'Blog Platform',
      description: 'A blogging site with full CRUD functionality, user comments, and a rich text editor, built to provide a seamless content creation experience.',
      tech: ['MERN Stack'],
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      demo: 'https://example.com',
      github: 'https://github.com/yourusername/blogplatform',
    },
    {
      title: 'Weather App',
      description: 'A real-time weather forecasting tool that fetches data from the OpenWeather API, featuring a sleek interface and location-based updates.',
      tech: ['React', 'Node.js', 'OpenWeather API'],
      image: 'https://images.unsplash.com/photo-1592210454359-9047f67a7f73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      demo: 'https://example.com',
      github: 'https://github.com/yourusername/weatherapp',
    },
    {
      title: 'Chat Application',
      description: 'A real-time chat app with group functionality, powered by Socket.io for instant messaging and a modern, user-friendly design.',
      tech: ['MERN Stack', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      demo: 'https://example.com',
      github: 'https://github.com/yourusername/chatapp',
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
                    href={project.demo}
                    target="_blank"
                    className="bg-[#00FFAA] text-[#1A1A1A] px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#FF007A] transition-colors shadow-md hover:shadow-lg"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="bg-transparent border-2 border-[#00FFAA] text-[#00FFAA] px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#00FFAA] hover:text-[#1A1A1A] transition-colors shadow-md hover:shadow-lg"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#00FFAA] text-[#1A1A1A] px-6 py-3 rounded-full font-semibold hover:bg-[#FF007A] transition-colors shadow-md hover:shadow-lg"
          >
            {showAll ? 'See Less' : 'See More Projects'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsWithBoxModel;