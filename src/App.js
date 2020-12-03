import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.jsx'
import './App.css';

// component is a property on react(library), so we can use: react.Component without importing { Component }
class App extends Component {
  // constructor()跟 super() render()都是 Component 內建的function
  constructor(){
    
    super(); // call constructor() on Component
    // 利用state的改變去改變DOM物件
    // string是 state 裡的 property
    this.state = {
      monsters: [],
      searchField: "",

    };
  }

  // life cycle: 利用mount這個life cycle，去獲取jsonplaceholder的資料
  // 再用setState把撈回之資料 新增到monsters陣列中 給State變化
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ monsters: users }))
  }

  // 這裡要用 arrow function 讓this可以跟 class App產生連結，用普通function會報錯
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  // 下面的 monsters 對應到props
  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Robot So Cute</h1>
        <SearchBox
        placeholder='Search monsters'
        handleChange={ this.handleChange }
        />
      <CardList monsters={ filteredMonsters } /> 
      </div>

    //   <div className="App">
    //     <CardList name="LS~">
    //        { this.state.monsters.map(mon => (
    //     <h1 key={mon.id}> {mon.name} </h1>
    //   ))}
    //     </CardList>
    // </div>
    )

  }
}

export default App;
