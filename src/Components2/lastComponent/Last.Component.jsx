import React from "react";
import { src } from "../../assets/abc";
import "./last.scss";
import CardComponent from "../../Components/card/card.component";

const LastComponet = () => {
  const cardData = [
    {
      id: 2,
      contenttitle: "StackBlitz has joined the",
      contensub: "Bytecode Alliance",
      buttontext: "Read ARTICLE",
      contentImage:
        "https://c.staticblitz.com/assets/vite/card-bg-bytecode_alliance-q_8qALHk.png",
    },
    {
      id: 3,
      contenttitle: "StackBlitz is now the",
      contensub: "largest backer of vite",
      buttontext: "Read ARTICLE",
      contentImage:
        "https://c.staticblitz.com/assets/vite/card-bg-vite-n5Xv1Imv.png",
    },
  ];
  return (
    <div className="last_main">
      <main className="last_wrapper">
        <section className="last_first_middle">
          <img src={src} alt="image1" />
          <h2>BlEEDING EDGE</h2>
        </section>
        <section className="last_second_middle">
          <h2>
            The first dev environment <span>faster</span> and
            <span>more secure</span> than local.
          </h2>
          <p>
            We're working with and
            <span> invested in the fastest growing open source projects </span>
            to make instant, secure-by-default
            <span> browser-based computing </span>
            accessible to everyone.
          </p>
        </section>
        <div className="card_wrapper_last">
          <CardComponent
            contenttitle={cardData[0].contenttitle}
            contensub={cardData[0].contensub}
            buttontext={cardData[0].buttontext}
            contentImage={cardData[0].contentImage}
          />
          <CardComponent
            contenttitle={cardData[1].contenttitle}
            contensub={cardData[1].contensub}
            buttontext={cardData[1].buttontext}
            contentImage={cardData[1].contentImage}
          />
        </div>
      </main>
    </div>
  );
};

export default LastComponet;
