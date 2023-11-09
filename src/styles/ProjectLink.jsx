import React from 'react';

export default function ProjectLink({ title, href, children }) {
  return (
    <a
      href={href}
      className="w-1/3 items-center px-3 py-2 text-sm text-center bg-primary text-white rounded-lg hover:bg-primary_light hover:text-dark font-sans"
    >
      <span>{title}</span>
      {children}
    </a>
  );
}
