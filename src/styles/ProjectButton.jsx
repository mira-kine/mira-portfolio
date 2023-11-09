import React from 'react';

export default function ProjectButton({ children, path }) {
  const handleNav = () => {
    // route to projects page and specific project id
  };
  return (
    <button className="w-1/3 items-center px-3 py-2 text-sm text-center bg-primary text-white rounded-lg hover:bg-primary_light hover:text-dark font-sans">
      <span>About</span>
      {children}
    </button>
  );
}
