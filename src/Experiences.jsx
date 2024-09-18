import React from 'react';  
import { FaHtml5, FaNodeJs, FaJsSquare, FaCss3Alt, FaReact, FaJava, FaAws, FaPython } from 'react-icons/fa';  

const experiences = [  
  { name: 'HTML', icon: <FaHtml5 size={50} /> },  
  { name: 'Node.JS', icon: <FaNodeJs size={50} /> },  
  { name: 'JavaScript', icon: <FaJsSquare size={50} /> },  
  { name: 'CSS', icon: <FaCss3Alt size={50} /> },  
  { name: 'React.JS', icon: <FaReact size={50} /> },  
  { name: 'Java', icon: <FaJava size={50} /> },  
  { name: 'AWS', icon: <FaAws size={50} /> },  
  { name: 'Python', icon: <FaPython size={50} /> },  
];  

const Experience = () => {  
  return (  
    <div className="container mx-auto text-center">  
      <h2 className="text-2xl font-bold mb-4">Expériences</h2>  
      <div className="grid grid-cols-4 gap-4">  
        {experiences.map((exp, index) => (  
          <div key={index} className="flex flex-col items-center">  
            {exp.icon}  
            <span className="mt-2">{exp.name}</span>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default Experience;  