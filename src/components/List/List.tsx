import React from 'react';
import styles from './List.module.scss';
import Result from '../Result/Result';

import Pages from './pages.json';

function List() {
  return (
    <div className={styles.List}>
      {
        Pages.map(function (item, index) {
          return (
            <Result
              id={item.id}
              logo={item.logo}
              stars={item.stars}
              review={item.review}
              type={item.type}
              amount={item.amount} />
          )
        })
      }
    </div>
  );
}

export default List;
