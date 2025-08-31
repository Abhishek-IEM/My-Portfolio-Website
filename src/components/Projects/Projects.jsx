import React from "react";
import Card from "../Card/Card";
import Card2 from "../Card/Card2";
import "./Projects.css";
import code from "../../assets/CodeEditor.png";
import aiimage from "../../assets/AiImage.png";
import aichat from "../../assets/Screenshot (30).png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  useGSAP(() => {
    gsap.from("#para", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: "#para",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      },
    });
    gsap.from(".slider", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".slider",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      },
    });
  });

  return (
    <div id="projects">
      <h1 id="para">2+ YEARS EXPERIENCED IN PROJECTS</h1>
      <div className="slider">
        <Card2
          title="TEXT TO AI IMAGE GENERATOR"
          image={aiimage}
          link="https://text-to-ai-image-generator.onrender.com/"
        />
        <Card2
          title="AI POWERED CHATBOT"
          image={aichat}
          link="https://ai-powered-chatbot-five.vercel.app/"
        />
        <Card2
          title="REAL TIME CODE EDITOR"
          image={code}
          link=" https://real-time-code-editor-git-main-as6119552-gmailcoms-projects.vercel.app/"
        />
      </div>
    </div>
  );
}

export default Projects;
