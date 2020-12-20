import React, {Component} from 'react';
import Header from './Header';
import Table from './Table';


class App extends Component {
  state = {
    total: 0
  }

  adjustTotal = (num) => {
    let newTotal = this.state.total + (Number(num));
    this.setState({total: newTotal})
  }

  render (){
    return (
      <div class="container">
        <Header total={this.state.total}/>
        <hr id="header-hr"></hr>
        <Table adjustTotal={this.adjustTotal}/>
      </div>

    )
  }
}

export default App;

/*
state = {
  2020: [
    {
      name: "oct",
      incomes: [],
      expenses: []
    }
    ...
  ],
  2021: [],
  ...
}
*/