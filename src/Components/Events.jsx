import React, { useEffect, useRef } from "react";
import Eventcard from "./Eventcard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import event1 from '../assets/event1.jpg'
import event2 from '../assets/event2.jpg'
import event3 from '../assets/event3.jpg'
import event4 from '../assets/event4.jpg'
import event5 from '../assets/event5.jpg'
import event6 from '../assets/event6.jpg'


gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  const container = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = container.current;
      if (!el) return;

      const updateAnimation = () => {
        const scrollWidth = el.scrollWidth - window.innerWidth;

        // Kill only this trigger, not all
        ScrollTrigger.getAll().forEach((st) => {
          if (st.trigger === el) st.kill();
        });

        gsap.to(el, {
          x: -scrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: () => `+=${scrollWidth}`,
            scrub: true,
            pin: true,
            anticipatePin: 1, // allow other ScrollTriggers to animate
            // markers: true, // optional, for debugging
          },
        });
      };

      updateAnimation();
      window.addEventListener("resize", updateAnimation);

      return () => window.removeEventListener("resize", updateAnimation);
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div id='EVENT' ref={container} className="flex bg-black h-screen ">
      <div className='flex items-center justify-center h-screen w-screen shrink-0 bg-black ' >
        <span id='EVENT'className='relative bg-gradient-to-r from-lime-300 to-green-500 bg-clip-text text-[250px] text-transparent '>
          EVENTS ➟
        </span>
      </div>
      <Eventcard img1={event1} img2={event2} text1='NSUTTHON' text2='GARBA NIGHT' />
      <Eventcard img1={event4} img2={event3} text1='SCRIBBLE DAY' text2='MR. & MS. MOKSHA' />
      <Eventcard img1={event5} img2={event6} text1='FAREWELL' text2='ALUMNI MEET' />
    </div>
  );
};

export default Events;
