import React, {Component} from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
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
        <div class="title">Monthly Budget Creator</div>
        <div class="container">
          <Header total={this.state.total}/>
          <Table adjustTotal={this.adjustTotal}/>
        </div>
        <div class="footer">
          by Billy Brown III&nbsp;&nbsp;
          <IconButton href="https://github.com/BillyBDev" size="small" aria-label="github">
            <GitHubIcon />
          </IconButton>
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