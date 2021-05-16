import React, {Component} from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import Header from './Header';
import Table from './Table';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: "#5fff8f",
    },
    secondary: {
      main: "#ff3d78"
    }
  }
})

class App extends Component {
  state = JSON.parse(
    window.localStorage.getItem('myState')
  ) || { total: 0, incomeItems: [], expenseItems: [] }

  //used button instead
  //logic that persists app state all the time
  // componentDidUpdate() {
  //   window.localStorage.setItem(
  //     'myState',
  //     JSON.stringify(this.state)
  //   );
  // }

  adjustTotal = (num) => {
    let newTotal = this.state.total + (Number(num));
    this.setState({total: newTotal})
  }

  addItem = (newItem, flip) => {
    let amt = newItem.amount
    if (flip) {
        amt = amt * -1;
        this.adjustTotal(amt);
        this.setState({
            expenseItems: [...this.state.expenseItems, newItem]
        });
    } else {
      this.adjustTotal(amt);
      this.setState({
          incomeItems: [...this.state.incomeItems, newItem]
      });
    }
}

  removeItem = (index, amount, flip) => {
      let amt = amount;
      if (flip) {
          const items = this.state.expenseItems;
          amt = amt * -1;
          this.adjustTotal(amt * -1);
          this.setState({expenseItems: items.filter((item, i) => {
              return i !== index
          })})
      } else {
        const items = this.state.incomeItems;
        this.adjustTotal(amt * -1);
        this.setState({incomeItems: items.filter((item, i) => {
            return i !== index
        })})
      }
  }
  

  render (){
    return (
      <ThemeProvider theme={theme}>
        <div class="title">Monthly Budget Creator</div>
        <div class="subtitle">Add incomes & expenses to get started</div>
        <div class="container">
          <Header total={this.state.total}/>
          <Table 
            incomeItems={this.state.incomeItems} 
            expenseItems={this.state.expenseItems} 
            addItem={this.addItem} 
            removeItem={this.removeItem}
           />

        </div>
        <div class="footer">
          <span id="save">
         {/* minimal icon version of save button */}
            {/* <IconButton size="small" aria-label="save">
              <SaveOutlinedIcon onClick={() => {window.localStorage.setItem('myState', JSON.stringify(this.state))}}/>
            </IconButton> */}
            <Button
              variant="outlined"
              size="small"
              className="button"
              startIcon={<SaveOutlinedIcon />} 
              onClick={() => {window.localStorage.setItem('myState', JSON.stringify(this.state))}}
            >      
              Save
            </Button>
          </span>
          by Billy Brown III&nbsp;&nbsp;
          <IconButton href="https://www.billybdev.com" target="_blank" size="small" aria-label="portfolio">
            <LanguageIcon />
          </IconButton>
          &nbsp;
          <IconButton href="https://www.github.com/BillyBDev" target="_blank" size="small" aria-label="github">
            <GitHubIcon />
          </IconButton>
        </div>
      </ThemeProvider>


    )
  }
}

export default App;