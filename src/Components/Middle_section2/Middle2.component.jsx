import React from "react";
import "./middle2.scss";
import logo from "../../assets/22340788_6596276.svg";
import CardComponent from "../card/card.component";
import TableContent from "../../assets/Screenshot 2023-12-23 130916.png";
import Banner3 from "../Banner3/Banner3";

const Middle2 = () => {
  const cardData = {
    id: 1,
    contenttitle: "Introducuing WebContainers:",
    contensub: "Run Node.js in your browser",
    buttontext: " Read the release",
    contentImage:
      "https://c.staticblitz.com/assets/vite/card-bg-webcontainer-GtcY4Swf.png",
  };
  const data = {
    id: 2,
    headTitle: `“StackBlitz is the first online IDE
    <span> whose compute model makes sense to me.”</span>`,
    imag1src:
      "https://c.staticblitz.com/assets/vite/quote-author-tom_preston_werner-Mez9khwG.png",
    imag2src:
      "https://c.staticblitz.com/assets/vite/quote-logo-github-bvWQ98DQ.svg",
    contentDetails: `<p>TOM PRESTON-WERNER</p>
      <span>founder of GitHub & Investor in StackBlitz</span>`,
  };
  return (
    <div className="middle2_wrapper">
      <main className="middle2_upper">
        <section className="first_middle">
          <img src={logo} alt="" />
          <h2>BlEEDING EDGE</h2>
        </section>
        <section className="second_middle">
          <h2>
            The first dev environment <span>faster</span> and
            <span>more secure</span> than local.
          </h2>
        </section>
        <section className="third_middle">
          <CardComponent
            contenttitle={cardData.contenttitle}
            contensub={cardData.contensub}
            buttontext={cardData.buttontext}
            contentImage={cardData.contentImage}
          />
          <div className="third_middle_para">
            <p>
              Powered by <span>WebContainers,</span>the
              <span> first WebAssembly-based operating system</span> which boots
              <span>entire development environments</span> in
              <span>milliseconds, securely</span> within your
              <span> browser tab.</span>
            </p>
          </div>
        </section>
        <section className="forth_middle">
          <div className="left_forth_middle">
            <h2>What about other online IDEs?</h2>
            <p>
              Unlike StackBlitz,<span> legacy online IDEs</span> run on remote
              servers and <span>stream the results back</span> to your browser.
              This approach yields <span>few security benefits</span> and
              provides a <span>worse experience</span> than your local machine
              in nearly every way. <br />
              <br />
              <span>
                StackBlitz solves these problems by doing all compute inside
                your browser.
              </span>
              This leverages decades of speed and security innovations and also
              unlocks key <span>development & debugging benefits</span> (see
              below).
            </p>
          </div>
          <div className="right_forth_middle">
            <img src={TableContent} alt="" className="right_image" />
            <div className="tO-cover"></div>
          </div>
        </section>
        <Banner3
          headtitle={data.headTitle}
          imageSrc1={data.imag1src}
          imageSrc2={data.imag2src}
          contentDetails={data.contentDetails}
          id={data.id}
          bg="banner_dark"
        />
      </main>
    </div>
  );
};

export default Middle2;
