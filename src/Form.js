import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/AddBoxOutlined';
import RetractIcon from '@material-ui/icons/ExpandLess';

class Form extends Component {

    initialState = {
        desc: '',
        amount: '',
        error: false
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

    submitForm = (event) => {
        event.preventDefault();
        let regex = /^[$]?(([0-9]{1,3}[,]?){0,3}[0-9]{1,3}[.]?[0-9]{0,2}|[.][0-9]{1,2})$/;
        if (regex.test(this.state.amount)) {
        this.setState({amount: Number(this.state.amount.replace(/[$,]/g, "")).toFixed(2)})
        this.props.addItem(this.state);
        this.setState(this.initialState);
        this.props.toggleForm();
        } else {
            this.setState({error: true})
        }
    }

    render(){
        const {desc, amount} = this.state;

        let color = "primary";

        if (this.props.showForm) {
            if (this.props.flip){
                color = "secondary";
            }

            let helperText = "";
            if (this.state.error){
                helperText = "Please enter a valid amount."
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
                                    inputProps={{ maxLength: 25 }}
                                    InputProps={{ style: { fontSize: "16px" } }}
                                />
                            </div>
                            <br />
                            <div>
                                <TextField  
                                    type="text" 
                                    error={this.state.error}
                                    helperText={helperText}
                                    label="Amount"
                                    name="amount"
                                    color={color}
                                    value={amount}
                                    onChange={this.handleChange} 
                                    inputProps={{ maxLength: 20 }}
                                    InputProps={{ style: { fontSize: "16px" } }}
                                />
                            </div>
                            <div>
                                <IconButton aria-label="minus" onClick={this.undoForm}>
                                    <RetractIcon />
                                </IconButton>
                                <IconButton aria-label="submit" type="submit" id="submit-form" onClick={this.submitForm}>
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