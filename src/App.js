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
        <Table adjustTotal={this.adjustTotal}/>
      </div>

    )
  }
}

export default App;
