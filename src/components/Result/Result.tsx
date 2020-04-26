import React from 'react';
import styles from './Result.module.scss';

function Result(props: {
  id: React.ReactNode,
  logo: React.ReactNode,
  stars: React.ReactNode,
  review: React.ReactNode,
  type: React.ReactNode,
  typeL: React.ReactNode,
  exclusive: React.ReactNode,
  amount: React.ReactNode,
  page: React.ReactNode,
  seo: React.ReactNode,
  isCard: React.ReactNode,
}) {
  return (
    <div className={styles.Result + ' ' + styles.box}>
      {/* <div className={ this.state.isCard ? styles.box : styles.Result+ ' ' +styles.box}> */}
      {/* <div className={styles.Result}> */}
      < a href={'' + props.page} >
        <div className={styles.result_card}>
          <div className={styles.position_indicator}>
            <p>{props.id}</p>
          </div>
          <div className={styles.company_logo}>
            <a className="seo-url" href={'' + props.seo}>
              <img className="logo" src={require(`../../assets/logos/${props.logo}.svg`)} alt="" />
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
              <p className={styles.type_indicator_lb}>{props.exclusive}</p>
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
