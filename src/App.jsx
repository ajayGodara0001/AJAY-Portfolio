import React, { useContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import  { AppContext } from './context/AppContext'
import Hero from './components/Hero'
import ProjectsWithBoxModel from './components/Project'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Shimmer from './components/Shimer'
const App = () => {
 const  { isOpen, setIsOpen } = useContext(AppContext)
 const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);


  if (loading) {
    return (
      <>
      <nav className="fixed w-full top-0 z-50 font-bold text-xl bg-gray-900 border-b border-gray-200 ">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Shimmer for Logo */}
            <Shimmer className="h-8 w-20" />
            {/* Shimmer for Links */}
            <div className="hidden md:flex gap-10">
              <Shimmer className="h-6 w-16" />
              <Shimmer className="h-6 w-16" />
              <Shimmer className="h-6 w-16" />
              <Shimmer className="h-6 w-16" />
            </div>
            {/* Shimmer for Menu Button */}
            <Shimmer className="md:hidden h-8 w-8 rounded-full" />
          </div>
        </div>
      </nav>
      <Hero loading={loading} />
      </>
    );
  }
  return (
    <div onClick={() => isOpen && setIsOpen(!isOpen)} className="min-h-screen bg-[#121212]">
       
          <Navbar />
          <Hero />
          <About />
          <ProjectsWithBoxModel />
          <Contact />
          <Footer />
        
      
    </div>
  );
}

export default App
