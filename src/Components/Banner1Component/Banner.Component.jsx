import React, { useState, useEffect } from "react";
import data from "../../data";
import "./banner.scss";
import samplesvg from "../../assets/sample.svg";
const uniqueCategories = [...new Set(data.map((item) => item.category))];
const BannerComponent = () => {
  // const newdata = data;
  // console.log(uniqueCategories);

  const [toggle, setToggle] = useState(uniqueCategories);
  const [category, setCategory] = useState(uniqueCategories);
  const [active, setActive] = useState(0);

  const filterData = (catagory, index) => {
    const updatedData = data.filter((currData) => {
      return currData.category === catagory;
    });
    setToggle(updatedData);
    setActive(index);
  };
  useEffect(() => {
    filterData("popular", 0);
  }, []);

  return (
    <>
      <main className="banner_mainsection">
        <section className="main_upper">
          <h2>Boot a fresh environment in millisecond</h2>
        </section>
        <section className="main_lower">
          <div className="change_tab_section">
            <div className="upper_change_tab">
              <ul>
                {category.map((category, i) => (
                  <li key={i}>
                    <button
                      key={`category_${i}`}
                      onClick={() => filterData(category, i)}
                      className={
                        active === i
                          ? "span_tab_change active"
                          : "span_tab_change"
                      }
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="data_container">
              {toggle.map((item, i) => (
                <div className="change_container" key={`data_${i}`}>
                  <div className="change_symbol">
                    <img src={samplesvg} alt="" />
                  </div>
                  <div className="change_items">
                    <div className="title">{item.title}</div>
                    <div className="subtitle">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BannerComponent;
