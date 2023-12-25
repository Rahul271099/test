import React from "react";
import "./card.scss";

const CardComponent = (props) => {
  return (
    <div className="Card_wrapper">
      <main className="card_container">
        <section className="cardheader">
          <h3>{props.contenttitle}</h3>
          <h4>{props.contensub}</h4>
        </section>
        <img src={props.contentImage} alt="" />
        <div className="button_card">
          <button>
            {props.buttontext} <span>&#11166;</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default CardComponent;
