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

const ItemsList = (props) => {
    const list = props.items.map((item) => {
        return (
            <li className="incomeListItem">{item.desc} - {item.amount}</li>
        )
    });

    return <ul>{list}</ul>
}

class List extends Component {
    state = {
        flip: this.props.flip,
        showForm: false,
        items: []
    }

    toggleForm = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    }

    addItem = (obj) => {
        let newItem = obj;
        this.props.adjustTotal(obj.amount);
        this.setState({
            items: [...this.state.items, newItem]
        });
    }
    
    render(){
        return (
            <div>
                <ItemsList items={this.state.items} />
                <Form 
                    showForm={this.state.showForm} 
                    toggleForm={this.toggleForm}
                    addItem={this.addItem}
                    />
                <AddItemBtn showForm={this.state.showForm} toggleForm={this.toggleForm}/>
            </div>
        )
    }
}

export default List;