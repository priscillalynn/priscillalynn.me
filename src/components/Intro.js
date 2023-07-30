import React from "react";
import "../App.css";
import Typist from "react-typist-component";
import temp from '../assets/pc3.gif'
import FadeInSection from "./FadeInSection";

const Intro = () => {
  return (
    <>
    <section id="intro">
        <div className="container header-container">
          
        <div className="header-img">
           <img src={temp} alt="computer" />
        </div>
          <Typist avgTypingDelay={120}>
            <span className="intro-title">
              {"hi, i'm "}
              <span className="intro-name">{"priscilla."}</span>
              <span className="Cursor">|</span>
            </span>            
          </Typist>

          <FadeInSection>
          <div className="intro-subtitle">I like to code sometimes.</div>
          <div className="intro-desc">
            I'm a senior Computer Science student at Florida International University and I have great
            interest in full-stack development, artificial intelligence,
            and data analytics. 
          </div>
          <a href="#contact" className="btn btn-primary">
              Say Hi!
            </a>
        </FadeInSection>
        </div>
      </section>
    </>
  );
};

export default Intro;