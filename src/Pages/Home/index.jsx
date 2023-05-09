import React from 'react';

import cls from '../../Styles/HomeStyles/index.module.scss';

export const Home = () => {
  const [news, setNews] = React.useState(
    JSON.parse(localStorage.getItem('news')) || []
  );

  React.useEffect(() => {

  }, [news])

  return (
    <div className={cls.container_home}>
      
    </div>
  )
}

export default Home;