import React from 'react';

export default function Landing() {
  return (
    <>
      <div
        className="flex flex-col font-handwrite text-2xl md:text-4xl lg:text-6xl md:h-full w-7/8 lg:justify-start items-center align-center lg:mt-12 mx-12"
        name="about-me"
      >
        <span className="text-3xl sm:text-5xl lg:text-7xl bg-white py-10 px-2 sm:px-8 md:px-12 rounded-lg">
          Current fav tech stack
        </span>
        <div className="flex flex-col md:flex-row items-center justify-center w-full rounded-lg text-charcoal">
          <div className="flex flex-col pt-12">
            <a
              href="https://www.w3.org/standards/webdesign/htmlcss"
              target="_blank"
              className="font-handwrite text-3xl sm:text-4xl md:text-6xl hover:text-pink"
            >
              HTML/CSS
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              className="font-handwrite text-3xl sm:text-4xl md:text-6xl hover:text-pink"
            >
              Javascript
            </a>
            <a
              href="https://react.dev/"
              target="_blank"
              className="font-handwrite text-3xl sm:text-4xl md:text-6xl hover:text-pink"
            >
              React
            </a>
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              className="font-handwrite text-3xl sm:text-4xl md:text-6xl hover:text-pink"
            >
              Typescript
            </a>
          </div>
          {/* click to learn more about my journey */}
          <img
            className="animate-wiggle object-contain w-7/12 sm:w-6/12 md:w-4/12 rounded-full mx-8 my-8 lg:my-0"
            src="/assets/heart_wifi_icon.png"
            alt="mental health tech logo"
          />
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
