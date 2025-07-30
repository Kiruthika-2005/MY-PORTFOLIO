import React from "react";

const Home: React.FC = () => {
  return (
    <section className="min-h-[calc(100vh-64px)] bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full px-10">
        
        {/* Left side text */}
        <div className="text-center md:text-left space-y-8">
          <h1 className="text-6xl font-extrabold text-black leading-tight">
            Hi, I’m Kiruthika Thangavel
          </h1>
          <p className="text-2xl text-black leading-relaxed font-medium">
            An aspiring <b>AI & Data Science Engineer</b> passionate about
            transforming raw data into meaningful insights.  
            Skilled in Python, SQL, and Machine Learning,  
            with a strong focus on Business Intelligence & Data Analysis.
          </p>
        </div>

        {/* Right side image */}
        <div className="flex justify-center">
          <img
            src="/profile.png"   // ✅ Ensure your image is in /public folder
            alt="Kiruthika Thangavel"
            className="rounded-2xl shadow-2xl object-cover h-[520px] w-[370px] border-4 border-black"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
