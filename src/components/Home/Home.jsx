import React from "react";
import "./Home.css";
import man from "../../assets/github_profile.webp";
import resume from "../../assets/Abhishek_Sharma_Resume.pdf";
import { Typewriter } from "react-simple-typewriter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Home() {
  useGSAP(() => {
    let tl1 = gsap.timeline();
    tl1.from(".line1", {
      y: 80,
      duration: 1,
      opacity: 0,
    });
    tl1.from(".line2", {
      y: 80,
      duration: 1,
      opacity: 0,
    });
    tl1.from(".line3", {
      y: 80,
      duration: 1,
      opacity: 0,
    });
    gsap.from(".righthome img", {
      x: 200,
      duration: 1,
      opacity: 0,
    });
  });

  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">ABHISHEK SHARMA</div>
          <div className="line3">
            <Typewriter
              words={["FULL STACK WEB DEVELOPER", "SOFTWARE DEVELOPER"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <a href={resume} download>
            <button>MY RESUME</button>
          </a>
        </div>
      </div>
      <div className="righthome">
        <img src={man} alt="" />
      </div>
    </div>
  );
}

export default Home;
