import React from "react";
import "./middle.scss";
import MiddleSubComponent from "./Middle_Sub_component/MiddleSub.component";

const MiddleComponent = () => {
  const cdata = [
    {
      id: 1,
      title: "Instant Bug Reports",
      subtitle: `
      Create <span>zero-overhead, live templates</span> for your users to
      reliably submit bugs against, <span>filtering out true issues</span>
      from everything else. <br />
      <br />
      <span class="special">
        Share complete environments with only a url,
      </span>
      and never spin up heavy local installations for a simple bug report
      <span> ever again.</span>`,
      image: "https://c.staticblitz.com/assets/vite/bug_reports-Q4R9I2kA.png",
    },
    {
      id: 2,
      title: "Interactive Documentation",
      subtitle: `<span class="special">
      Use the StackBlitz SDK<span>
      </span> to embed and interact with <span>actual code </span>in your
      <span>actual docs,</span>
      blog or website.`,
      image:
        "https://c.staticblitz.com/assets/vite/interactive_documentation-l73gq3Nc.png",
    },
    {
      id: 3,
      title: "Rapid Prototyping",
      subtitle: `
      Speed up your entire development process with <span>real time hot-reloading in the</span> 
      <span class="special">
      fastest dev environment ever made.
      </span>
      Collaborate remotely on different devices, send and receive instant feedback, and
      <span>get to market faster.</span>`,
      image: "https://c.staticblitz.com/assets/vite/bug_reports-Q4R9I2kA.png",
    },
  ];
  return (
    <div>
      <main className="middle_upper">
        <section className="first_middle">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTFExNX14ztdFhYLADB16tr1twwFRQzuJOsNkbS980aedJQcY2x"
            alt=""
          />
          <h2>INSTANT DEV EXPERIENCES</h2>
        </section>
        <section className="second_middle">
          <h2>Wait, I can enjoy web dev again?</h2>
        </section>
        <section className="third_middle">
          <p>
            <span> Significantly reduce time to market with</span> matchlessly
            secure, instantly reproducible, fullstack dev environments
            <span> which </span>
            boot in milliseconds.
          </p>
        </section>
      </main>
      <div className="sub_component_wrapper">
        <MiddleSubComponent
          id={cdata[0].id}
          title={cdata[0].title}
          subtitle={cdata[0].subtitle}
          image={cdata[0].image}
          bg=""
        />
        <MiddleSubComponent
          id={cdata[1].id}
          title={cdata[1].title}
          subtitle={cdata[1].subtitle}
          image={cdata[1].image}
          bg=""
        />
        <MiddleSubComponent
          id={cdata[2].id}
          title={cdata[2].title}
          subtitle={cdata[2].subtitle}
          image={cdata[2].image}
          bg=""
        />
      </div>
    </div>
  );
};

export default MiddleComponent;
