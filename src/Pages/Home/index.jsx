import React from "react";
import cls from "../../Styles/HomeStyles/index.module.scss";
import Card from "../../Components/Card";
import { EmptyCard } from "../../Components/common/emptyCard";

export const Home = () => {
  const [allNews, setAllNews] = React.useState(
    JSON.parse(localStorage.getItem("news")) || []
  );

  return (
    <div className={cls.home_container}>
      {allNews.length === 0 ? (
        <EmptyCard />
      ) : (
        allNews.map(item => (
          <Card props={item} /> 
        ))
      )}
    </div>
  );
};

export default Home;
