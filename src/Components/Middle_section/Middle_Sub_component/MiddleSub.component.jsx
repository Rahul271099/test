import React from "react";
import "./middle_sub.scss";

const MiddleSubComponent = (props) => {
  // console.log(props.bg);
  return (
    <main
      className={`${props.bg} ${
        props.id % 2 !== 0
          ? "middle_sub_lower"
          : "middle_sub_lower2 middle_sub_lower"
      }`}
    >
      <section className="middle_sub_left">
        <div className="middle_sub_left_head">{props.title}</div>
        <div
          dangerouslySetInnerHTML={{ __html: props.subtitle }}
          className="subtitle_middle"
        />
      </section>
      <section className="middle_sub_right">
        <img src={props.image} alt="" />
      </section>
    </main>
  );
};

export default MiddleSubComponent;
