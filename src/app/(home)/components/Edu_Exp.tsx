import React from 'react';

export default function Resume() {
  const educationData = [
    {
      period: "2016 - 2022",
      degree: "Bunrany Hunsen Roleabier",
   
      description: "Graduated from High School at Bunrany Hunsen Roleabier High School, Kampong chhngang"
    },
    {
      period: "2023 - 2027",
      degree: "Royal University of Phnom Penh",
      institution: "Bachelor degree IT Engineering",
      description: "Focus on Programming Fundamentals and Software Development"
    },
    {
        period:"2023 (7months)",
        degree:"Short Course at Etec-Center",  
        description:"Study C++ and Frontend Development(React JS) "

    },
    {
        period:"2024-present",
        degree:"ANT Training",  
        description:"I'm a student studying Scholarship Web Development at the ANT Training Center.The Ministry of Post and Telecommunication is the sponsor. "

    }
  ];

  const experienceData = [
    {
      period: "2023 (5-6months)",
      role: "Volunteer Business Club students at RUPP",
     
      description: " Organization Events  and marketing "
    },
    {
      period: "2023 (1month)",
      role: "Internship at Spring Education center",
     
    },
    {
        period: "2023 ",
        role: "Volunteer e-days at FE-RUPP Generation 10",
       
      }
      

  ];

  return (
    <div className="min-h-screen  md:p-12">
      <div className="max-w-7xl mx-auto bg-slate-200    rounded-xl shadow-xl overflow-hidden">
        <div className="grid  lg:grid-cols-2 gap-2">
          {/* Education Section */}
          <div className="p-8 bg-gray-900 text-white">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="bg-blue-500 w-2 h-8 mr-4 rounded-full"></span>
              Education
            </h2>
            
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div key={index} className="border-l-2 border-blue-500 pl-4 hover:border-blue-400 transition-colors">
                  <div className="text-sm text-blue-400">{edu.period}</div>
                  <h3 className="text-xl font-semibold mt-1">{edu.degree}</h3>
                  <div className="text-gray-400">{edu.institution}</div>
                  <p className="mt-2 text-gray-300">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="p-8 ">
            <h2 className="text-3xl font-bold mb-8   text-gray-800 flex items-center">
              <span className="bg-emerald-500 w-2 h-8 mr-4 rounded-full"></span>
              Experience
            </h2>
            
            <div className="space-y-6">
              {experienceData.map((exp, index) => (
                <div key={index} className="border-l-2 border-emerald-500 pl-4 hover:border-emerald-400 transition-colors">
                  <div className="text-sm text-emerald-600">{exp.period}</div>
                  <h3 className="text-xl font-semibold mt-1 text-gray-800">{exp.role}</h3>
               
                  <p className="mt-2 text-gray-600">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}