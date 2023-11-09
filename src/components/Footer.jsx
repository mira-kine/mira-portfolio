import React from 'react';

export default function Footer() {
  return (
    <div className="bg-white w-full h-full p-8 flex">
      <div className="flex flex-col tablet:flex-row justify-around w-full p-4">
        <div>
          <a
            href="https://www.linkedin.com/in/mira-kinebuchi/"
            target="_blank"
            className="text-dark font-title text-lg underline"
          >
            LinkedIn
          </a>
        </div>
        <div>
          <a
            href="https://github.com/mira-kine"
            target="_blank"
            className="text-dark font-title text-lg underline"
          >
            GitHub
          </a>
        </div>
        <div className="text-dark text-lg">
          Made with love by Mira Kinebuchi &copy;
        </div>
      </div>
    </div>
  );
}
