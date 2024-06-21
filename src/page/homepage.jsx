import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { useMediaQuery } from "react-responsive";

function HomePage() {
  return (
    <>
      <div className="bg-white dark:bg-gray-800">
        <h1 className="text-gray-900 dark:text-white">
          This homepage is TRASH
        </h1>
        <i className="text-white">"Easy peeezy lemon squeeezy!"</i>
        <h2 className="text-white">CS2 weapon list</h2>
        <br></br>
        <p className="text-white">
          This webpage contains a list of CS2 weapons with damage values price
          etc. not including any penetration values.
        </p>
        <br></br>
      </div>
    </>
  );
}

export default HomePage;
