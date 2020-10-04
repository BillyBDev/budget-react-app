import React, {Component} from 'react';
import Form from './Form';
import { Button } from 'semantic-ui-react';

const AddItemBtn = (props) => {
    if (props.showForm === false) {
        return (
            <Button circular icon='plus' onClick={props.toggleForm}/>
        )
    } else {
        return null;
    }
}

const IncomesList = (props) => {
    const list = props.incomes.map((item) => {
        return (
            <li className="incomeListItem">{item.desc} - {item.amount}</li>
        )
    });

    return <ul>{list}</ul>
}

class Income extends Component {
    state = {
        showForm: false,
        incomes: []
    }

    toggleForm = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    }

    addIncome = (obj) => {
        let newInc = obj;
        this.props.adjustTotal(obj.amount);
        this.setState({
            incomes: [...this.state.incomes, newInc]
        });
    }
    
    render(){
        return (
            <div>
                <IncomesList incomes={this.state.incomes} />
                <Form 
                    showForm={this.state.showForm} 
                    toggleForm={this.toggleForm}
                    addIncome={this.addIncome}
                    />
                <AddItemBtn showForm={this.state.showForm} toggleForm={this.toggleForm}/>
            </div>
        )
    }
}

export default Income;