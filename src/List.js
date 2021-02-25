import React, {Component} from 'react';
import Form from './Form';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/AddBoxOutlined';
import MinusIcon from '@material-ui/icons/RemoveCircleOutline';


const AddItemBtn = (props) => {
    if (props.showForm === false) {
        return (
            <span className="add-item">
                <IconButton aria-label="add" onClick={props.toggleForm}>
                    <AddIcon />
                </IconButton>
            </span>
        )
    } else {
        return null;
    }
}

const ItemsList = (props) => {
    const list = props.items.map((item, index) => {
        let desc = item.desc && " - " + item.desc;
        return (
            <li className="income-list-item"> 
                <div className="delete">
                    <IconButton aria-label="delete" onClick={() => {props.removeItem(index, item.amount)}}>
                        <MinusIcon />
                    </IconButton>
                    $<span class="list-amt">{item.amount}</span>{desc}
                </div>
            </li>
        )
    })
    return <ul>{list}</ul>
}

class List extends Component {
    state = {
        showForm: false,
        items: []
    }

    toggleForm = () => {
        this.setState({
            showForm: !this.state.showForm
        });
    }

    addItem = (newItem) => {
        let amt = newItem.amount
        if (this.props.flip) {
            amt = amt * -1;
        }
        this.props.adjustTotal(amt);
        this.setState({
            items: [...this.state.items, newItem]
        });
    }

    removeItem = (index, amount) => {
        const items = this.state.items;
        let amt = amount;
        if (this.props.flip) {
            amt = amt * -1;
        }
        this.props.adjustTotal(amt * -1);
        this.setState({items: items.filter((item, i) => {
            return i !== index
        })})
    }
    
    render(){
        let listHeader = "Incomes";
        let colorClass = "primary";
        if (this.props.flip){
            listHeader = "Expenses";
            colorClass="secondary";
        }
        return (
            <div>
                <div className={"row-header " + colorClass}>
                    <span className={colorClass}>{listHeader}</span>
                    <AddItemBtn showForm={this.state.showForm} toggleForm={this.toggleForm}/>
                    <hr className={"row-hr"}/>
                    <Form 
                    showForm={this.state.showForm} 
                    toggleForm={this.toggleForm}
                    addItem={this.addItem}
                    flip={this.props.flip}
                    />
                </div>

                <ItemsList items={this.state.items} removeItem={this.removeItem} />
                
            </div>
        )
    }
}

export default List;