import React, {Component} from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Header from './Header';
import Table from './Table';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: "#5fff8f"
    },
    secondary: {
      main: "#ff3d78"
    }
    // },
    // warning: {
    //   main: "#ff3d78"
    // }
  }
})



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
      <ThemeProvider theme={theme}>
        <div class="container">
          <Header total={this.state.total}/>
          <Table adjustTotal={this.adjustTotal}/>
        </div>
      </ThemeProvider>


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