import React from 'react';
import styles from './Result.module.scss';

function Result(props: {
  id: React.ReactNode,
  logo: React.ReactNode,
  stars: React.ReactNode,
  review: React.ReactNode,
  type: React.ReactNode,
  amount: React.ReactNode,
}) {
  return (
    <div className={styles.Result}>
      <div className={styles.result_card}>
        <div className={styles.position_indicator}>
          <p>{props.id}</p>
        </div>
        <div className={styles.company_logo}>
          <img src={require(`../../assets/logos/${props.logo}.svg`)} alt="" />
        </div>
        <div className={styles.review_link}>
          <p>
            <a href={`${props.review}`}>Review</a>
          </p>
        </div>
        <div className={styles.info}>
          <div className={styles.info_wrapper}>
            <p className={styles.type_indicator}>{props.type}</p>
            <p className={styles.amount}>{props.amount}</p>
          </div>
        </div>
        <div className={styles.expand}></div>
      </div>
    </div>
  );
}


export default Result;
