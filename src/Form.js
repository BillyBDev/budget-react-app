import React, {Component} from 'react';
import { Button } from 'semantic-ui-react'

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

    submitForm = () => {
        this.props.addIncome(this.state);
        this.setState(this.initialState);
        this.props.toggleForm();
    }

    render(){

        const {desc, amount} = this.state;

        if (this.props.showForm) {
            return (
                <div>
                    <div className="hiddenForm">
                        <div className="ui mini fluid input">
                            <input 
                                type="text" 
                                placeholder="Description"
                                name="desc"
                                value={desc}
                                onChange={this.handleChange}
                                />
                        </div>
                        <br />
                        <div className="ui mini fluid action input">
                            <input  type="text" 
                                    placeholder="Amount"
                                    name="amount"
                                    value={amount}
                                    onChange={this.handleChange} />
                            <button className="ui button"
                                    onClick={this.submitForm}>Add</button>
                        </div>
                        <div>
                            <Button circular icon='minus' onClick={this.props.toggleForm}/>
                        </div>
                        
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Form;