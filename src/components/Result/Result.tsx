import React from 'react';
import styles from './_Result.module.scss';

function Result(props: any) {
  return (
    <div className={props.isList ? styles.Result : styles.Result + ' ' + styles.box}>
      <a href={'' + props.page}>
        <div className={styles.result_card}>
          <div className={props.isSortAlf ? styles.position_indicator + ' ' + styles.alf : styles.position_indicator}>
            <p>{props.id}</p>
          </div>
          <div className={props.isSortAlf ? styles.company_logo + ' ' + styles.alf : styles.company_logo}>
            <a id="seo_url" href={'' + props.seo}>
              <img id="seo_img" src={require(`../../assets/logos/${props.logo}.svg`)} alt="" />
            </a>
          </div>
          <div className={styles.review_link}>
            <img className={styles.stars} src={require(`../../assets/icons/${props.stars}stars.svg`)} alt="" />
            <p>
              <a href={`${props.review}`}>Review</a>
            </p>
          </div>
          <div className={styles.info}>
            <div className={styles.info_wrapper}>
              <p className={styles.type_indicator_lb}>{props.exclusive ? '- Exclusive -' : ''}</p>
              <p className={styles.type_indicator_l}>{props.typeL}</p>
              <p className={styles.type_indicator}>{props.type}</p>
              <p className={styles.amount}>{props.amount}</p>
            </div>
          </div>
          <div className={styles.expand}><p>Play Now</p></div>
        </div>
      </a >
    </div >
  );
}


export default Result;
