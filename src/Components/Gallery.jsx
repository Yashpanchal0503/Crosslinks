import React, { useState, useEffect } from "react";
import gsap from "gsap";

const Gallery = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const panels = [
    { image: "https://crosslinksnsut.vercel.app/img/gallery7.jpg" },
    { image: "https://crosslinksnsut.vercel.app/img/gallery8.jpg" },
    { image: "https://crosslinksnsut.vercel.app/img/gallery2.jpg" },
    { image: "https://crosslinksnsut.vercel.app/img/gallery3.jpg" },
    { image: "https://crosslinksnsut.vercel.app/img/gallery1.jpg" },
    { image: "https://crosslinksnsut.vercel.app/img/gallery5.jpg" },
  ];

  const handleClick = (index) => {
    setExpandedIndex(index);
  };

  // Animate background transition
  useEffect(() => {
    gsap.to(".gallery-bg", {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        gsap.to(".gallery-bg", {
          backgroundImage: `url(${panels[expandedIndex].image})`,
          opacity: 1,
          duration: 0.5,
        });
      },
    });
  }, [expandedIndex]);

  return (
    <main className="w-screen h-screen bg-black overflow-hidden">

      <div
        className="h-full w-full flex items-center justify-center p-4 relative overflow-hidden"
      >
      <div className="text-white z-10 absolute top-10 text-5xl font-bold ">GALLERY</div>
        
        {/* Background */}
        <div
          className=" gallery-bg absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{
            backgroundImage: `url(${panels[expandedIndex].image})`,
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] backdrop-blur-md z-0"></div>

        {/* Panels */}
        <div className="flex w-full max-w-7xl h-[60vh] gap-2 items-center justify-center z-10">
          {panels.map((panel, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`h-full rounded-2xl cursor-pointer overflow-hidden transition-all duration-700 ease-in-out ${
                expandedIndex === index
                  ? "w-[40%] shadow-2xl"
                  : "w-[10%] hover:w-[12%] brightness-75 hover:brightness-100"
              }`}
            >
              <img
                src={panel.image}
                alt={`panel-${index}`}
                className="w-full h-full object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Gallery;
