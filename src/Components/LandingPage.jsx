import React, { useState, useEffect } from "react";

const LandingPage = () => {
  const [text, setText] = useState("");
  const word = "CrossLinks";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(word.slice(0, i + 1));
      i++;
      if (i === word.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id='HOME'
      className="h-screen w-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/43/b5/35/43b5355567e8af0c64099ec8a91572ec.jpg')",
      }}
    >
      <div className="text-white ml-2 md:ml-4 lg:ml-6">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <span className="relative bg-gradient-to-r from-lime-300 to-green-500 bg-clip-text text-transparent">
            {text}
            <span className="absolute left-0 bottom-0 w-full h-[3px] bg-gradient-to-r from-lime-300 to-green-500 rounded-full"></span>
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Connecting ideas, people and possibilities.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
