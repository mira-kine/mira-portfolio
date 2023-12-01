import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProjectButton({ children, path }) {
  const navigate = useNavigate();
  const handleNav = () => {
    // route to projects page and specific project id
    navigate('/projects');
  };
  return (
    <button
      className="w-1/3 items-center px-3 py-2 text-sm text-center bg-primary text-white rounded-lg hover:bg-primary_light hover:text-dark font-sans"
      onClick={handleNav}
    >
      <span>About</span>
      {children}
    </button>
  );
}
