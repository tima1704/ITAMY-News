import React from 'react'
import { CardNews } from '../../Components/CardNews';

export const Sport = () => {
  const [news, setNews] = React.useState(
    JSON.parse(localStorage.getItem('news')) || []
  )


  const filtredNews = news.filter((item) => item.category === 'Sport ')

  console.log(filtredNews);

  return (
    <div>
      {filtredNews.map(item => (
        <CardNews item={item} />
      ))}
    </div>
  )
}