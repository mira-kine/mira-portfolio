import React from 'react';

export default function TechStack() {
  return (
    <>
      <div
        className="flex flex-col font-handwrite text-2xl md:text-4xl lg:text-6xl md:h-full w-7/8 lg:justify-start items-center align-center lg:mt-12 mx-12"
        name="about-me"
      >
        <div className="flex flex-col md:flex-row items-center justify-center w-full rounded-lg text-charcoal">
          <div className="flex flex-col pt-12">
            <a
              href="https://react.dev/"
              target="_blank"
              className="font-handwrite text-3xl sm:text-4xl md:text-6xl hover:text-pink"
            >
              React
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              className="font-handwrite text-3xl sm:text-4xl md:text-6xl hover:text-pink"
            >
              Javascript
            </a>
            <a
              href="https://nextjs.org/"
              target="_blank"
              className="font-handwrite text-3xl sm:text-4xl md:text-6xl hover:text-pink"
            >
              Next.js
            </a>
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              className="font-handwrite text-3xl sm:text-4xl md:text-6xl hover:text-pink"
            >
              Typescript
            </a>
          </div>
          <div className="flex flex-col">
            <a
              href="https://nodejs.org/en"
              target="_blank"
              className="font-handwrite text-3xl sm:text-4xl md:text-6xl hover:text-pink"
            >
              Node.js
            </a>
            <a
              href="https://expressjs.com/"
              target="_blank"
              className="font-handwrite text-3xl sm:text-4xl md:text-6xl hover:text-pink"
            >
              Express
            </a>
            <a
              href="https://www.w3schools.com/sql/sql_intro.asp#:~:text=What%20is%20SQL%3F,for%20Standardization%20(ISO)%20in%201987"
              target="_blank"
              className="font-handwrite text-3xl sm:text-4xl md:text-6xl hover:text-pink"
            >
              SQL
            </a>
            <a
              href="https://aws.amazon.com/"
              target="_blank"
              className="font-handwrite text-3xl sm:text-4xl md:text-6xl hover:text-pink"
            >
              AWS
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
