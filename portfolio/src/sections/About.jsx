import React, { useRef } from 'react';
import Card from '../components/Card';
import { Globe } from '../components/globe';
import CopyEmailButton from '../components/CopyEmailButton';
import {Frameworks} from '../components/Frameworks';

const About = () => {
  const grid2Container = useRef();

  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 with image inside */}
        <div className="relative flex items-end justify-center grid-default-color grid-1 overflow-hidden">
          <img
            src="assets/coding-pov.png"
            alt="Coding POV"
            className="absolute bottom-0 left-0 scale-[1.75] md:scale-[3] lg:scale-[2.5]"
          />

          <div className="z-10 text-white pr-3">
            <p className="headtext">Hi, I'm Agmal</p>
            <p className="subtext">
              I developed my frontend and backend skills to deliver software and web applications.
            </p>
          </div>

          {/* Gradient Bottom-Left */}
          <div className="absolute bottom-0 left-5 pointer-events-none h-1/2 sm:h-1/3 w-1/2 bg-gradient-to-t from-indigo-800 opacity-50" />
        </div>

        {/* Grid 2 */}
        
        <div className="relative grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="relative flex items-center justify-center w-full h-full"
          >
            <p className="absolute bottom-0 text-5xl text-gray-500">CODE IS CRAFT</p>

            {/* Cards */}
            <Card
              style={{ rotate: '75deg', top: '30%', left: '20%' }}
              text="GRASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: '-30deg', top: '60%', left: '45%' }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: '90deg', top: '30%', left: '70%' }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: '-45deg', top: '55%', left: '0%' }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: '20deg', top: '10%', left: '38%' }}
              text="SRP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: '30deg', top: '70%', left: '70%' }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: '-45deg', top: '70%', left: '25%' }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: '-45deg', top: '5%', left: '10%' }}
              image="assets/logos/blazor-pink.png"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Remaining Grids */}
        <div className="grid-black-color grid-3">
          <div className='z-10 w-[50%]'>
            <p className="headtext">Time Zone</p>
            <p className='subtext'>
               open to remote work worldwide
            </p>
          </div>
          <figure className='absoulute left-[30%] top-[10%]'>
            <Globe/>
          </figure>
        </div>
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className='text-center headtext'>Do you want to start a project together?</p>
            <CopyEmailButton/>
          </div>
        </div>
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className='headText'>Teck Stack</p>
            <p className='subtext'>
              I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications
            </p>
          </div>
          <div className='absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125'>
            <Frameworks/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
