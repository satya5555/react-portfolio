import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.jpg";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "FOREST RANGER",
    image: projectOne,
    description: (
      <>
        <p>
         Forest Ranger is a game where a super hero tries to 
         keep his life in risk for saving the nature and forest from the demons , it is developed using CORE ENGINE(UNREAL ENGINE). 
         It is basically of knowing how to use AI Engines. 
        </p>
      </>
    ),
    github: "https://github.com/satya5555/Forest-Ranger-Game",
  },
  2: {
    title: "Fake News Detection",
    image: projectTwo,
    description: (
      <>
        <p>
        In today’s digital era, misinformation spreads faster than ever before, making fake news detection an essential challenge.
        This project builds a machine learning system to classify news articles as Fake (0) or Real (1) using Natural Language Processing (NLP) and multiple classification algorithms.
        The system preprocesses raw data, extracts features using TF-IDF, and trains several models to identify the most accurate and efficient solution for detecting fake news.
        </p>
      </>
    ),
    github: "https://github.com/satya5555/Fake-News-Detection",
  },
  3: {
    title: "Banking Network System",
    image: projectThree,
    description: (
      <>
        <p>
          The project involves designing and implementing a network infrastructure for Rockers Company Ltd.'s new branch in Nairobi, Kenya. It includes creating VLANs for different departments, 
          implementing OSPF for routing, setting up DHCP servers, configuring SSH for remote access, 
          deploying wireless networks for each department, 
          and ensuring secure communication using protocols like HTTPS and SSL/TLS. The goal is to enable seamless connectivity and efficient management across departments, integrating various hardware and software components crucial for banking and insurance operations.
        </p>
      </>
    ),
    github: "https://github.com/satya5555/Banking-Network-System",
  },
};

export default projects;