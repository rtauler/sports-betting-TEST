import React from 'react';
import styles from './List.module.scss';
import Result from '../Result/Result';

import Pages from './pages.json';

class List extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e: { preventDefault: () => void; }) {
    e.preventDefault();
    this.setState((prevState: { isToggleOn: any; }) => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {

    // let sort_alf = true;

    // if (sort_alf === true) {
    //   Pages.sort(function(a, b) { 
    //     return a.name.localeCompare(b.name);
    //   });
    // } else {
    //   Pages.sort(function(a, b) { 
    //     return a.id - b.id;
    //   });
    // }


    // function handleClick(e: { preventDefault: () => void; }) {
    //   e.preventDefault();
    //   console.log('The link was clicked.');
    //   if (sort_alf === false) {
    //     sort_alf = true;
    //     console.log('sort_alf changed from false to true');
    //     Pages.sort(function (a, b) {
    //       return a.name.localeCompare(b.name);
    //     });
    //   } else if (sort_alf === true) {
    //     sort_alf = false;
    //     console.log('sort_alf changed from true to false');
    //     Pages.sort(function (a, b) {
    //       return a.id - b.id;
    //     });
    //   }
    // }

    return (


      <div className={styles.List}>

        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>

        <a href="test.html" onClick={this.handleClick}>sort alfabeticaly</a>
        <p>hello</p>
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


