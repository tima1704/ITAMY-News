import React from "react";
import cls from "./index.module.scss";
import { Link } from "react-router-dom";
import { useTheme } from "../../../Hooks/theme";
const hedaerItems = [
  {
    id: 1,
    item: "Sport",
    route: "/sport",
  },
  {
    id: 2,
    item: "Politic",
    route: "/politic",
  },
  {
    id: 3,
    item: "Hot news",
    route: "/hot",
  },
  {
    id: 4,
    item: "Criminal",
    route: "/criminal",
  },
  {
    id: 5,
    item: "Add news",
    route: "/add_news",
  },
  {
    id: 6,
    item: "Settings",
    route: "/settings",
  },
];

export const Header = () => {
  const { setTheme } = useTheme();

  return (
    <div className={cls.header_container}>
      <Link to="/">News</Link>
      <ul>
        {hedaerItems.map((item) => (
          <Link key={item.id} to={item.route}>
            {item.item}
          </Link>
        ))}
        <div>
          <button onClick={() =>setTheme('light')} className={cls.light}>light</button>
          <button onClick={() =>setTheme('dark')} className={cls.dark}>dark</button>
        </div>
      </ul>
    </div>
  );
};
