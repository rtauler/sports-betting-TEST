import React from 'react';
import styles from './List.module.scss';
import Result from '../Result/Result';

import Pages from './pages.json';

class List extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { isToggleOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: { preventDefault: () => void; }) {
    e.preventDefault();
    this.setState((prevState: { isToggleOn: any; }) => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    if (this.state.isToggleOn === true) {
      Pages.sort(function(a, b) { 
        return a.name.localeCompare(b.name);
      });
    } else {
      Pages.sort(function(a, b) { 
        return a.id - b.id;
      });
    }

    return (
      <div className={styles.List}>
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


