import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { useMediaQuery } from "react-responsive";

function HomePage() {
  return (
    <>
      <div className="bg-contain text-center pt-60">
        <h1 className="text-white text-5xl font-medium bg-zinc-800 mx-20">
          This homepage is for Managed Democracy
        </h1>
        <i className="text-white text-center bg-zinc-800">"For Democracy!"</i>
        <h2 className="text-white"></h2>
        <p className="text-white  mx-20 bg-zinc-800">
          Check out all the Stratagems for when you become a Helldiver for Super
          Earth or Refresh or knowledge on the Stratagems now that you have
          become a Helldiver
        </p>
        <br></br>
      </div>
    </>
  );
}

export default HomePage;
