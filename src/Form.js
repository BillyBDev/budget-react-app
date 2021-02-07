import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/AddBoxOutlined';
import RetractIcon from '@material-ui/icons/ExpandLess';
import { ThemeProvider } from '@material-ui/core';

class Form extends Component {

    initialState = {
        desc: '',
        amount: ''
    }

    state = this.initialState;

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    undoForm = () => {
        this.props.toggleForm();
        this.setState(this.initialState);
    }

    submitForm = () => {
        this.props.addItem(this.state);
        this.setState(this.initialState);
        this.props.toggleForm();
    }

    render(){
        const {desc, amount} = this.state;

        let color = "primary";

        if (this.props.showForm) {
            if (this.props.flip){
                color = "secondary";
            }
            return (
                <div>
                    <div className="hiddenForm">
                        <form>
                            <div>
                                <TextField
                                    type="text"                                 
                                    label="Description"
                                    // variant="outlined"
                                    name="desc"
                                    value={desc}
                                    color={color}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <br />
                            <div>
                                <TextField  
                                    type="text" 
                                    label="Amount"
                                    name="amount"
                                    color={color}
                                    value={amount}
                                    onChange={this.handleChange} 
                                />
                            </div>
                            <div>
                                <IconButton aria-label="minus" onClick={this.undoForm}>
                                    <RetractIcon />
                                </IconButton>
                                <IconButton aria-label="submit" id="submit-form" onClick={this.submitForm}>
                                    <AddIcon />
                                </IconButton>
                            </div>
                        </form>    
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Form;