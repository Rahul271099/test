import React from "react";
import MiddleSubComponent from "../../Components/Middle_section/Middle_Sub_component/MiddleSub.component";
import "./lower.scss";

const LowerComponet = () => {
  const cdata = [
    {
      id: 1,
      title: "Seamless Node.js debugging with Chrome Dev Tools",
      subtitle: `Debug backend applications just as easily as frontend, using the powerful tools <span>already shipped in your browser.</span>`,
      image:
        "https://c.staticblitz.com/assets/vite/features-chrome_dev_tools-fyuN2nIR.webp",
    },
    {
      id: 2,
      title: "Run the backend in the frontend",
      subtitle: `If it can run on Node.js, it can run on StackBlitz WebContainers, including backend functionality and libraries, meaning you can <span>run servers. In your browser.</span>`,
      image:
        "https://c.staticblitz.com/assets/vite/03-graphql_75p_looped_65535_times_for_real-lJqgAoi_.webp",
    },
    {
      id: 3,
      title: "Fresh, fast environments on every page load.",
      subtitle: `Reinstalling node_modules is as simple as refreshing the page, and since StackBlitz package installations are orders of magnitude faster than local,<span>installing packages is now a trivial endeavour.</span>`,
      image:
        "https://c.staticblitz.com/assets/vite/feature-fresh_environment-iLWeT7Ab.webp",
    },
    {
      id: 4,
      title: "Zero latency. Work offline.",
      subtitle: `No external servers to connect to means no delays between your keystrokes and editor, and  <span>an internet connection is not required.</span>`,
      image:
        "https://c.staticblitz.com/assets/vite/feature-zero_latency-PCwXQp2E.webp",
    },
  ];
  return (
    <div>
      <main className="lower_container_wrapper">
        <header>
          Use the web <span>to build the web.</span>
        </header>
        <section className="lower_container-body">
          <MiddleSubComponent
            id={cdata[0].id}
            title={cdata[0].title}
            subtitle={cdata[0].subtitle}
            image={cdata[0].image}
            bg="lower_sub"
          />
          <MiddleSubComponent
            id={cdata[1].id}
            title={cdata[1].title}
            subtitle={cdata[1].subtitle}
            image={cdata[1].image}
            bg="lower_sub"
          />
          <MiddleSubComponent
            id={cdata[2].id}
            title={cdata[2].title}
            subtitle={cdata[2].subtitle}
            image={cdata[2].image}
            bg="lower_sub"
          />
          <MiddleSubComponent
            id={cdata[3].id}
            title={cdata[3].title}
            subtitle={cdata[3].subtitle}
            image={cdata[3].image}
            bg="lower_sub"
          />
        </section>
      </main>
    </div>
  );
};

export default LowerComponet;
