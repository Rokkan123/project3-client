import React from "react";

function About() {
  return (
    <div
      style={{
        backgroundImage: "url('src/assets/helldivers-2-hero--2428302632.jpg')",
      }}
      className="h-screen bg-cover bg-center text-center"
    >
      <div className="bg-contain text-center pt-60">
        <i className="text-yellow-600 text-3xl font-medium text-center">
          Helldivers are an elite military group used to execute precision
          strikes against the enemies of Super Earth and managed Democracy.
        </i>
        <p className="text-yellow-600 text-2xl font-medium  text-center">
          Stratagems are the main tools for Helldivers in their mission to
          spread Democracy to all. All stratagems and Helldivers are located
          within a Destroyer.
        </p>
      </div>
    </div>
  );
}

export default About;
