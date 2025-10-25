import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const AboutUs = () => {
  const blobRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // when section enters 80% of viewport
          end: "bottom 20%",
          toggleActions: "play none none reverse", // play when entering, reverse when leaving
        },
        defaults: { ease: "power3.out", duration: 1 },
      });

      // Blob appearance
      tl.fromTo(
        blobRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.5)" }
      );

      // Floating loop for blob
      gsap.to(blobRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: "power1.inOut",
      });

      // “About Us” heading
      tl.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.8"
      );

      // Paragraph
      tl.fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id='ABOUT US'
      ref={sectionRef}
      className=" border-b-2 border-lime-400 w-screen min-h-96 bg-black text-amber-50 flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16 overflow-hidden"
    >
      {/* Left Section — Animated Blob Card */}
      <div
        ref={blobRef}
        className="w-[250px] h-[250px] md:w-[250px] bg-gradient-to-tr from-lime-400 to-green-700 flex items-center justify-start [border-radius:17%_83%_83%_17%_/_71%_24%_76%_29%]"
      >
        <h1  ref={headingRef} className="text-[40px] font-bold text-white pl-4">
          ABOUT US
        </h1>
      </div>

      {/* Right Section — Description */}
      <div
        ref={textRef}
        className="w-full md:w-1/2 text-lg leading-8 tracking-widest text-gray-200"
      >
        <p>
          <span className="text-lime-400 font-semibold">CrossLinks</span> is the
          Student & Public Relations Society of{" "}
          <span className="text-green-400 font-semibold">NSUT</span>. It is one
          of the most well-known societies of our college. It brings to you
          everything there is to know about NSUT and puts our institution on a
          national platform. Whether it’s about connecting students and
          authorities together, promoting the college, or organizing numerous
          events and fests throughout the year —{" "}
          <span className="text-lime-400 font-semibold">CrossLinks</span> does
          it all.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
