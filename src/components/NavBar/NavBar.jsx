import React from 'react';
import InstagramIcon from '../../icons/InstagramIcon.jsx';
import GithubIcon from '../../icons/GithubIcon.jsx';
import LinkedInIcon from '../../icons/LinkedInIcon.jsx';

export default function NavBar() {
  return (
    <div className="bg-white/30 text-charcoal sticky top-0 z-20 transition-shadow">
      <div className="max-w-7xl mx-auto my-3 px-3 sm:px-6 ">
        <div className="flex flex-col-reverse md:flex-row min-w-full py-4 space-y-8 justify-center md:justify-between  md:space-x-10">
          <div className="flex justify-center">
            <h2 className="sticky top-0 z-20 transition-shadow text-4xl pt-6 rounded-lg text-charcoal font-handwrite">
              Hi, I'm so glad you're here.
            </h2>
          </div>
          <div className="flex justify-around">
            <div className="bg-none flex justify-end relative rounded-lg bg-white px-2">
              <div className="flex whitespace-nowrap pt-1  mx-3justify-center space-x-1 ">
                <a
                  href="https://www.instagram.com/mirakinebuchi"
                  target="_blank"
                  className="text-charcoal hover:text-pink"
                >
                  <span className="sr-only">Instagram</span>
                  <InstagramIcon />
                </a>

                <a
                  href="https://www.github.com/mira-kine"
                  target="_blank"
                  className="text-charcoal hover:text-pink"
                >
                  <span className="sr-only">GitHub</span>
                  <GithubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/mira-kinebuchi/"
                  target="_blank"
                  className="text-charcoal hover:text-pink"
                >
                  <span className="sr-only">LinkedIn</span>
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
