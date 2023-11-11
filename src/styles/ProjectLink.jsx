import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectLink({ title, href, children }) {
  return (
    <Link
      href={href}
      className="w-1/3 items-center px-3 py-2 text-sm text-center bg-primary text-white rounded-lg hover:bg-primary_light hover:text-dark font-sans"
    >
      <span>{title}</span>
      {children}
    </Link>
  );
}
