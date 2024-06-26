import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { useMediaQuery } from "react-responsive";

function HomePage() {
  return (
    <>
      <div
        className="bg-gradient-to-l md:bg-gradient-to-r"
        //style="background-image: url('https://imgs.search.brave.com/vqKKH76GmeWP1iF_qezltwKxBA2wXI52FrSlBD1P4nc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/ZS9lNy9IZWxsZGl2/ZXJzMmNvdmVyLnBu/Zy81MTJweC1IZWxs/ZGl2ZXJzMmNvdmVy/LnBuZw');"
      >
        <h1 className="text-gray-900 dark:text-white">
          This homepage is TRASH
        </h1>
        <i className="text-white">"For Democracy!"</i>
        <h2 className="text-white">CS2 weapon list</h2>
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
