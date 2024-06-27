import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

function TraitorofSuperEarth() {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        clearInterval(interval);
        navigate("/");
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [countdown]);
  return (
    <div className="bg-contain object-cover bg-black h-screen text-center">
      <h1 className="text-red-900 dark:text-white text-7xl">
        You are under suspicion of treason.
      </h1>
      <p className="text-red-600 text-6xl">See your nearest superior</p>
      <p className="text-red-600 text-5xl">You will be bombarded in</p>
      <p className="text-red-600 text-9xl">{countdown}</p>
      <br></br>
    </div>
  );
}

export default TraitorofSuperEarth;
