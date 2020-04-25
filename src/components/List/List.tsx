import React from 'react';
import styles from './List.module.scss';
import Result from '../Result/Result';

//load external json with item list
import Pages from './pages.json';


class List extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    //define initial state of sort order also define if item is card
    this.state = { isSortAlf: false, isCard: false };
    this.sortItems = this.sortItems.bind(this);
    this.transItems = this.transItems.bind(this);
  }

  //define sortItems and prevent update on click on sort anchor
  sortItems(e: { preventDefault: () => void; }) {
    e.preventDefault();
    this.setState((prevState: { isSortAlf: any; }) => ({
      isSortAlf: !prevState.isSortAlf
    }));
  }

  //define transCard and prevent update on click on card anchor
  transItems(e: { preventDefault: () => void; }) {
    e.preventDefault();
    this.setState((prevState: { isCard: any; }) => ({
      isCard: !prevState.isCard
    }));
    console.log(this.state.isCard)
  }

  render() {
    //establish logic on what to do when clicking on the sort anchor
    if (this.state.isSortAlf === true) {
      Pages.sort(function (a, b) {
        //sort alfabeticaly
        return a.name.localeCompare(b.name);
      });
    } else {
      Pages.sort(function (a, b) {
        //sort by id
        return a.id - b.id;
      });
    }
    //establish logic on what to do when click on chane view anchor
    if (this.state.isCard === true) {

    }
    else {

    }

    return (
      <div className={styles.List}>
        {/* click on sort anchor calls handle click function to sort the list items */}
        <div className={styles.filter_area}>
          <a href="test.html" className={styles.sort_filter_link} onClick={this.sortItems}>Sort Alfabeticaly</a>
          <p> </p>
          <a href="test.html" className={styles.sort_filter_link} onClick={this.transItems}>Change View</a>
        </div>

        {
          Pages.map(function (item, index) {
            return (
              <Result
                id={item.id}
                logo={item.logo}
                stars={item.stars}
                review={item.review}
                type={item.type}
                typeL={item.typeL}
                exclusive={item.exclusive}
                amount={item.amount}
                page={item.page}
                seo={item.seo}
              />
            )
          })
        }

      </div>
    );
  }
}
export default List;


