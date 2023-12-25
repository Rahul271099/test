import React from "react";
import "./hero.scss";
import { useTypewriter } from "react-simple-typewriter";
import HeroImage from "./HeroImage/HeroImage";

const HeroComponent = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "Code.",
      "Learn New Framework.",
      "Review Bug Report.",
      "Present Live Demo.",
      "Get Feedback.",
      "Create Rapid Prototype.",
    ],
    loop: {},
    typeSpeed: 20,
    deleteSpeed: 40,
  });
  return (
    <div>
      <main className="hero_section">
        <section className="hero_left">
          <div className="hero__top_left">
            <button>Introducing StackBlitz Teams</button>
            <button className="last_button">Learn More &#5171;</button>
          </div>
          <div className="hero__top_middle">
            <div className="hero_head">
              <h1>Click.</h1>
              <h2 className="for_smaller">Code.</h2>
              <h1 className="typing_word">{typeEffect}</h1>
              <h1 className="last">Done.</h1>
            </div>
            <p>
              Stay in the flow with instant dev experiences.No more hours <br />
              stashing/pulling/installing locally — just click,
              and start coding.
            </p>
          </div>
          <div className="hero__top_bottom"></div>
        </section>
        <section className="hero_right">
          <HeroImage />
        </section>
      </main>
    </div>
  );
};

export default HeroComponent;
