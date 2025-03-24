import React, { useState } from 'react';

function TechStack() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTechStack = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tech-stack">
      <button onClick={toggleTechStack}>
        {isOpen ? 'Hide Tech Stack' : 'Show Tech Stack'}
      </button>
      {isOpen && (
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>CSS</li>
          <li>HTML</li>
          {/* Add more tech stack items as needed */}
        </ul>
      )}
    </div>
  );
}

export default TechStack;
