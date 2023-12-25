import React from "react";
import "./banner2.scss";

const Banner2 = () => {
  const image_data = [
    {
      id: 1,
      imagesrc: "https://c.staticblitz.com/assets/vite/google-SoTepagF.svg",
      alttext: "google",
    },
    {
      id: 2,
      imagesrc: "https://c.staticblitz.com/assets/vite/meta-WWD01PTq.svg",
      alttext: "meta",
    },
    {
      id: 3,
      imagesrc: "https://c.staticblitz.com/assets/vite/shopify-ch7bpIk5.svg",
      alttext: "shopify",
    },
    {
      id: 4,
      imagesrc: "https://c.staticblitz.com/assets/vite/salesforce-v8Lm0S_7.svg",
      alttext: "salesforce",
    },
    {
      id: 5,
      imagesrc: "https://c.staticblitz.com/assets/vite/intel-UxdgsNV0.svg",
      alttext: "intel",
    },
    {
      id: 6,
      imagesrc: "https://c.staticblitz.com/assets/vite/mozilla-gZ50AedX.svg",
      alttext: "mozilla",
    },
    {
      id: 7,
      imagesrc: "https://c.staticblitz.com/assets/vite/cloudflare-D8dIlFQq.svg",
      alttext: "cloudflare",
    },
    {
      id: 8,
      imagesrc: "https://c.staticblitz.com/assets/vite/stripe-hSQrL72T.svg",
      alttext: "stripe",
    },
  ];
  return (
    <div>
      <main className="banner_2_section">
        <header className="banner2_head">
          <h2>
            Loved by millions of developers every month <br /> at the world's
            largest companies
          </h2>
        </header>
        <section className="lower_banner-icons">
          {image_data.map((item, i) => (
            <img src={item.imagesrc} alt="google" key={item.id} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Banner2;
