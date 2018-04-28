import * as React from 'react';
import { Group } from '../model/menu';



export class DropMenu extends React.Component {
  private groups: Array<Group> = new Array<Group>();
  constructor(props: any) {
    super(props);
    this.state = {};
    // 构造函数是TS/ES6的特征，在这里无法setState，需要在react的生命周期中setState才可行
    // 所以如果在这里调用 _fetchItems方法是无法执行setState的
    // this._fetchItems();
  }

  componentWillMount(): void {
    this._fetchItems();
  }
  // getInitialState(): any {
  //   this._fetchItems();
  // 
  // https://reactjs.org/docs/react-without-es6.html#setting-the-initial-state
  // Setting the Initial State
  // In ES6 classes, you can define the initial state by assigning this.state in the constructor:

  // class Counter extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {count: props.initialCount};
  //   }
  //   // ...
  // }
  // With createReactClass(), you have to provide a separate getInitialState method that returns the initial state:

  // var Counter = createReactClass({
  //   getInitialState: function() {
  //     return {count: this.props.initialCount};
  //   },
  //   // ...
  // });
  // }

  async _fetchItems(): Promise<void> {
    // ajax
    this.groups = [
      {
        ID: 1,
        Key: 'g1',
        Value: 'group1'
      },
      {
        ID: 2,
        Key: 'g1',
        Value: 'group1'
      },
      {
        ID: 3,
        Key: 'g1',
        Value: 'group1'
      }
    ];
    this.setState({
      groups: this.groups
    })
  }

  render(): any {
    let itemhtml = this.state['groups'].map((item: Group) => {
      return <li>{item.Value}</li>
    });
    // why wrong?
    // let itemhtml1 =
    //   this.state['groups'].forEach((item: Group) => {
    //     return <li>{item.Value}</li>;
    //   });

    // let itemhtml2 = this.state['groups'].forEach(function (item: Group) {
    //   return <li>{item.Value}</li>;
    // });

    // let ul = 
    //   this.state.items.forEach(item => {
    //      <li>{item.value}</li>
    //   })
    // }
    return (
      <div style={style.dropMenu}>
        <div style={style.title}>
          <span>Group</span>
          <span>▼</span>
        </div>
        <div style={style.menu}>
          <ul>
            {itemhtml}
          </ul>
        </div>
      </div>
    );
  }
}

const style = {
  dropMenu: {
    width: 100,
    height: 30,
    lineHieght: 30,
    borderWidth: 1,
    // borderRadius: 4,
    borderColor: 'silver',
    borderStyle: 'solid'
  },
  title: {
    width: 100
  },
  menu: {
    width: 100,
    height: 100
  }
}