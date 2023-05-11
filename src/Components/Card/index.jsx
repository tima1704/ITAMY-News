import React from "react";
import cls from "./index.module.scss";
const Card = ({ props }) => {
  return (
    <div className={cls.container_card_news}>
      <div className={cls.top_card}>
        <h1>{props.title}</h1>
        <img src={props.img} alt="news-img" />
        <p>{props.info}</p>
      </div>
      <div className={cls.bottom_card}>
        <p>{props.date}</p>
        <button>settings</button>
      </div>
    </div>
  );
};

export default Card;
