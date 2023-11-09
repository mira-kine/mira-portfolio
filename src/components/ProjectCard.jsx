import React from 'react';

export default function ProjectCard({
  imagePath,
  projectTitle,
  description,
  children,
}) {
  return (
    <div className="min-h-[450px] w-10/12 bg-white/70 border-4 border-secondary rounded-lg shadow-2xl mx-10 my-12">
      <img
        className="h-[200px] w-full object-cover"
        src={`/assets/${imagePath}.png`}
        alt="tomoiru web home page"
      />
      <div className="p-5">
        <h5 className="mb-2 text-3xl font-bold text-dark font-title">
          {projectTitle}
        </h5>
        <p className="text-medium font-normal text-dark font-sans max-w-prose min-h-[100px]">
          {description}
        </p>
        <div className="flex justify-between gap-x-5 my-4 px-2 w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
