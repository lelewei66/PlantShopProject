import React from "react";
import "./App.css";

function Card(props) {
  return (
    <div className="Card">
      <div className="img-box">
        <img src={props.img} alt="image" className="Card-img" />
      </div>
      <div className="Card-body">
        <h1 className="Card-title">{props.petName}</h1>
        <div className="tele-box">
          <img src="/images/tele.png" alt="telephone-icon" className="icon" />
          <p>{props.telephone}</p>
        </div>
        <div className="email-box">
          <img src="/images/email.png" alt="telephone-icon" className="icon" />
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
