import React from "react";
import cls from './index.module.scss';

export const CardNews = ({item}) => {
  return (
    <div className={cls.container_card}>
      <h1>{item.title}</h1>
      <img src={item.img} />
      <p>{item.info}</p>
    </div>
  );
};
