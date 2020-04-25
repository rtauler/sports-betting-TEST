import React from 'react';
import styles from './List.module.scss';
import Result from '../Result/Result';

//load external json with item list
import Pages from './pages.json';

class List extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    //define initial state of sort order
    this.state = { isToggleOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  //define handleclick and prevent update on click on sort anchor
  handleClick(e: { preventDefault: () => void; }) {
    e.preventDefault();
    this.setState((prevState: { isToggleOn: any; }) => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    //establish logic on what to do when clicking on the sort anchor
    if (this.state.isToggleOn === true) {
      Pages.sort(function(a, b) { 
        //sort alfabeticaly
        return a.name.localeCompare(b.name);
      });
    } else {
      Pages.sort(function(a, b) { 
        //sort by id
        return a.id - b.id;
      });
    }

    return (
      <div className={styles.List}>
        {/* click on sort anchor calls handle click function to sort the list items */}
        <a href="test.html" onClick={this.handleClick}>sort alfabeticaly</a>
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
}
export default List;


