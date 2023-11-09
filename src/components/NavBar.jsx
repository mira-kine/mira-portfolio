import React from 'react';
import InstagramIcon from '../icons/InstagramIcon.jsx';
import GithubIcon from '../icons/GithubIcon.jsx';
import LinkedInIcon from '../icons/LinkedInIcon.jsx';

export default function NavBar() {
  return (
    <div className="bg-transparent text-charcoal sticky top-0 z-20 transition-shadow py-8">
      <div className="max-w-7xl px-3 mobile:px-6">
        <div className="flex min-w-full space-y-8 justify-end tablet:space-x-10">
          <div className="flex justify-end relative rounded-lg bg-white/80 px-2 py-2">
            <div className="flex whitespace-nowrap pt-1 mx-3 justify-center space-x-1 ">
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
  );
}
