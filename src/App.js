import "./App.scss";
import BannerComponent from "./Components/Banner1Component/Banner.Component";
import Banner2 from "./Components/Banner2Component/Banner2";
import Banner3 from "./Components/Banner3/Banner3";
import Footer from "./Components/Footer/Footer";
import HeroComponent from "./Components/HeroComponent/Hero.component";
import MiddleComponent from "./Components/Middle_section/Middle.Copmponent";
import Middle2 from "./Components/Middle_section2/Middle2.component";
import Navbar from "./Components/Navbar/Navbar";
import Banner4 from "./Components2/Banner4/Banner4";
import LowerComponet from "./Components2/LowerComponent/Lower.Component";
import LastComponet from "./Components2/lastComponent/Last.Component";
// import CardComponent from "./Components/card/card.component";

function App() {
  const data = [
    {
      id: 1,
      headTitle: `“Being able to instantly open and share environments has <br />
    <span> significantly reduced our team's support burden</span> for
    bug reproductions and enabled rapid innovation.”`,
      imag1src:
        "https://c.staticblitz.com/assets/vite/quote-author-stephen_fluin-HXTQcjUe.png",
      imag2src:
        "https://c.staticblitz.com/assets/vite/quote-logo-google-XFEYBMn2.svg",
      contentDetails: `<p>STEPHEN FLUIN</p>
      <span>Developer Relations Lead at Google</span>`,
    },
    {
      id: 2,
      headTitle: `“It's surely only a matter of time before locally installed IDEs <br />
        <span>go the way of the Walkman.”</span>`,
      imag1src:
        "https://c.staticblitz.com/assets/vite/quote-author-rich_harris-Bf4dZqLZ.jpg",
      imag2src:
        "https://c.staticblitz.com/assets/vite/quote-logo-svelte-RxGTMUql.svg",
      contentDetails: `<p>RICH HARRIS</p>
      <span>Svelte & SvelteKit creator</span>`,
    },
    {
      id: 3,
      headTitle: `<span>“StackBlitz unlocks a true one-click startup</span> experience
      with the full stack running in the browser —
      <span> it's a game-changer.</span>”`,
      imag1src:
        "https://c.staticblitz.com/assets/vite/quote-author-ilya_grigorik-MMLhptUJ.jpg",
      imag2src:
        "https://c.staticblitz.com/assets/vite/quote-logo-shopify-VdhQo_Hh.svg",
      contentDetails: `<p>ILYA GRIGORIK</p>
      <span>Principal Engineer at Shopify</span>`,
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <HeroComponent />
      <BannerComponent />
      <Banner2 />
      <MiddleComponent />
      <Banner3
        headtitle={data[0].headTitle}
        imageSrc1={data[0].imag1src}
        imageSrc2={data[0].imag2src}
        contentDetails={data[0].contentDetails}
        bg=""
      />
      <Middle2 />
      <LowerComponet />
      <Banner3
        headtitle={data[1].headTitle}
        imageSrc1={data[1].imag1src}
        imageSrc2={data[1].imag2src}
        contentDetails={data[1].contentDetails}
        bg="banner_dark"
      />
      <LastComponet />
      <Banner3
        headtitle={data[2].headTitle}
        imageSrc1={data[2].imag1src}
        imageSrc2={data[2].imag2src}
        contentDetails={data[2].contentDetails}
        bg=""
      />
      <Banner4 />
      <Footer />
    </div>
  );
}

export default App;
