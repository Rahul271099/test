import React from "react";
import "./banner3.scss";

const Banner3 = (props) => {
  return (
    <div>
      <main className={`${props.bg} banner3`}>
        <header className="main-banner3_head">
          <h3 dangerouslySetInnerHTML={{ __html: props.headtitle }}></h3>
        </header>
        <section className="main_banner3_lower">
          <div className="banner3_logo">
            <img src={props.imageSrc1} alt="" />
            <img src={props.imageSrc2} alt="" />
          </div>
          <div
            className="banner3_content"
            dangerouslySetInnerHTML={{ __html: props.contentDetails }}
          ></div>
        </section>
      </main>
    </div>
  );
};

export default Banner3;
