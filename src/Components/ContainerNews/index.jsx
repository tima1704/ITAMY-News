import React from "react";
import cls from "./index.module.scss";

export const ContainerNews = ({ props }) => {
  return (
    <div className={cls.container_news}>
      <img src={props.image} alt="news-img" />
      <h1>{props.title}</h1>
      <p>{props.info}</p>
    </div>
  );
};
