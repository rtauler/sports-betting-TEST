import React from 'react';

import styles from './_List.module.scss';
import Result from '../Result/Result';

//load external json with item list
import Pages from './pages.json';

class List extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    //define initial state of sort order also define if item is card
    this.state = { isSortAlf: false, isList: true, isAllItems: false, Pages: Pages };
    this.sortItems = this.sortItems.bind(this);
    this.transItems = this.transItems.bind(this);
    this.viewItems = this.viewItems.bind(this);

  }

  //check for window width with check of window resize
  resize = () => this.forceUpdate()
  componentDidMount() {
    window.addEventListener('resize', this.resize)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }
  //----------------

  //define sortItems and prevent update on click on sort anchor
  sortItems(e: { preventDefault: () => void; }) {
    e.preventDefault();
    this.setState((prevState: { isSortAlf: any; }) => ({
      isSortAlf: !prevState.isSortAlf
    }));
  }

  //define transItem and prevent update on click on card anchor
  transItems(e: { preventDefault: () => void; }) {
    e.preventDefault();
    this.setState((prevState: { isList: any; }) => ({
      isList: !prevState.isList,
    }));
  }

  //define isAllItems and prevent update on click on sort anchor
  viewItems(e: { preventDefault: () => void; }) {
    e.preventDefault();
    this.setState((prevState: { isAllItems: any; }) => ({
      isAllItems: !prevState.isAllItems,
    }));
  }

  render() {
    //show more/show less

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
          <a href="test.html" id="sort" className={styles.sort_filter_link} onClick={this.sortItems}>
            Sort{' '}
            {this.state.isSortAlf ? 'By position' : 'Alphabetically'}
          </a>
          <div className={styles.main_title}>
            <img src={require(`../../assets/logos/ca.svg`)} alt="" />
             Best sports betting sites
             </div>
          <a href="test.html" id="trans-items" className={styles.sort_filter_card} onClick={this.transItems}>
            <p>Change View</p>
            <label className={styles.switch}>
              <input id="checkbox" checked={this.state.isList ? false : true} type="checkbox" readOnly></input>
              <span className={styles.slider + ' ' + styles.round}></span>
            </label>
          </a>
        </div>

        {/* check if component is card or not */}
        <div className={this.state.isList ? styles.items : styles.box_items}>
          {
            this.state.Pages.slice(0, this.state.isAllItems ? this.state.Pages.lenght : 5).map((item: {
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
        <a href="test.html" id="view_all" className={styles.view_more} onClick={this.viewItems}>View {this.state.isAllItems ? 'Less' : 'More'} Sports Betting Sites</a>
      </div>
    );
  }
}

export default List;


