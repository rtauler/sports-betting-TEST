import React from 'react';
import styles from './List.module.scss';
import Result from '../Result/Result';

//load external json with item list
import Pages from './pages.json';




class List extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    //define initial state of sort order also define if item is card
    this.state = { isSortAlf: false, isList: true, Pages: Pages };
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
    this.setState((prevState: { isList: any; }) => ({
      isList: !prevState.isList,
    }));
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

    return (
      <div className={styles.List}>
        {/* click on sort anchor calls handle click function to sort the list items */}
        <div className={styles.filter_area}>
          <a href="test.html" className={styles.sort_filter_link} onClick={this.sortItems}>
            <p>Sort{' '}
              {this.state.isSortAlf ? 'By position' : 'Alphabetically'}
            </p>
          </a>

          <a href="test.html" className={styles.sort_filter_card} onClick={this.transItems}>
            <p>Change View</p>
            <label className={styles.switch}>
              <input checked={this.state.isList ? true : false} readOnly type="checkbox"></input>
              <span className={styles.slider + ' ' + styles.round}></span>
            </label>
          </a>
        </div>

        {/* check if component is card or not */}
        <div className={this.state.isList ? styles.items : styles.box_items}>
          {
            this.state.Pages.map((item: {
              id: React.ReactNode;
              logo: React.ReactNode;
              stars: React.ReactNode;
              review: React.ReactNode;
              type: React.ReactNode;
              typeL: React.ReactNode;
              exclusive: React.ReactNode;
              amount: React.ReactNode;
              page: React.ReactNode;
              seo: React.ReactNode;
            }, i: any) => {
              return (
                <Result
                  key={item.id}
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
                  isList={this.state.isList}
                  isSortAlf={this.state.isSortAlf}
                />
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default List;


