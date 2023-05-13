import React from "react";
import { CardNews } from "../../Components/CardNews";
import { EmptyCard } from "../../Components/CardEmpty";
import cls from "../../Styles/HomeStyles/index.module.scss";
export const Home = ({}) => {
  const [news, setNews] = React.useState(
    JSON.parse(localStorage.getItem("news")) || []
  );

  console.log(news);

  return (
    <div className={cls.container_home}>
      <div className={cls.block_news}>
        <div className={cls.content_block_news}>
          <h1>Новости которые шокируют вашу душу!</h1>
          <button>Hot News</button>
        </div>
      </div>

      <div className={cls.card_news}>
        <h1 className={cls.title}>All News </h1>
        {news.length === 0 ? (
          <EmptyCard />
        ) : (
          news.map((item) => <CardNews item={item} />)
        )}
      </div>
    </div>
  );
};
