import React from 'react';

export default function AboutMe() {
  return (
    <>
      <div
        id="aboutme"
        className="snap-center flex w-full h-full justify-center items-center align-center bg-matcha"
        name="about-me"
      >
        <div className="relative flex flex-col items-center justify-center w-11/12 rounded-lg lg:flex-row text-charcoal">
          <img
            className="animate-wiggle object-contain w-3/12 sm:w-4/12 md:w-5/12 rounded-full bg-matcha/40"
            src="/assets/mookie.png"
            alt="mira mookie logo"
          />
          <div className="flex flex-col p-4 leading-relaxed bg-charcoal rounded-xl shadow-lg">
            <p className="pb-2 mb-2 text-3xl md:text-5xl font-bold text-white font-handwrite leading-relaxed">
              My name is Mira -
            </p>
            <p className="mb-3 text-white text-xl lg:text-2xl lg:max-w-3xl font-garamond leading-relaxed max-w-prose">
              and I am a full stack software developer. I care about people and
              their stories, and am working to curate an accessible, equitable
              and soulful digital world. I also love creating and learning new
              things - my personal projects employ a calm, user-friendly
              interface, and my aesthetics are influenced by my Japanese-Korean
              roots (and my goldendoodle, Mookie).
            </p>
            {/* <p>
              My past as a mental health counselor, health care worker and
              educator are all an important part of who I am and the passions I
            </p> */}
            <p className="mb-3 text-white text-xl lg:text-2xl lg:max-w-3xl font-garamond leading-relaxed max-w-prose">
              This website is mainly a space to showcase my most current
              projects and technical skills, but I update it with where I am in
              my journey as well. Feel free to look around, and reach out to me
              for any questions or other inquiries!
            </p>
          </div>
          {/* click to learn more about my journey */}
        </div>
      </div>
    </>
  );
}
