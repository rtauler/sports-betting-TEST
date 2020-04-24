import React from 'react';
import styles from './Result.module.scss';

const Result: React.FC = () => (
<div className={styles.Result}>
  <div className={styles.result_card}>
    <div className={styles.position_indicator}>
    <p>1</p>
    </div>
    <div className={styles.company_logo}>
      <img src={require('../../assets/logos/si.svg')} />
    </div>
    <div className={styles.review_link}>
      <p>
        <a href="#">Review</a>
      </p>
    </div>
    <div className={styles.info}>
    <div className={styles.info_wrapper}>
        <p className={styles.type_indicator}>Bonus</p>
        <p className={styles.amount}>$200</p>
    </div>
    </div>
    <div className={styles.expand}></div>
  </div>
  </div>
);

export default Result;
