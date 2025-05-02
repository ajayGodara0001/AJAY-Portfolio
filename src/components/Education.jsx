import React from "react";

const Education = () => {
  const educations = [
    {
      degree: "B.tech in Computer Science & Engineering",
      institution: "Guru Jumbheshwar University of Science & Technology",
      year: "2022 - 2026",
    },
    {
      degree: "SVM Senior Secondary School, Rajasthan",
      institution: "Senior Secondary",
      year: "Percentage: 98.40%",
    },
    {
      degree: "SVM Senior Secondary School, Rajasthan",
      institution: "Secondary Education",
      year: "Percentage : 88.00%",
    },
  ];

  return (
    <section className=" bg-[#1A1A1A] text-[#E0E0E0] py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
          <span className="text-[#00FFAA]">Education</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educations.map((education, index) => (
            <div
              key={index}
              className="border-l-4 border-[#00FFAA] pl-6 py-6 bg-[#2A2A2A] rounded-lg"
            >
              <h2 className="text-xl sm:text-2xl font-semibold mb-1 text-[#80ffd5]">
                {education.degree}
              </h2>
              <p className="text-[#E0E0E0] text-base sm:text-lg mb-1">
                {education.institution}
              </p>
              <p className="text-[#A0A0A0] text-sm sm:text-base">
                {education.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
