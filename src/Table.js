import React, {Component} from 'react';
import List from './List';




class Table extends Component {


    render(){
        return (
            <div className="table">
                <div className="row">              
                    <List 
                        items={this.props.incomeItems} 
                        addItem={this.props.addItem} 
                        removeItem={this.props.removeItem} 
                        flip={false}
                        // adjustTotal={this.props.adjustTotal} 
                    />
                </div>
                <div className="row">
                    <List 
                        items={this.props.expenseItems} 
                        addItem={this.props.addItem} 
                        removeItem={this.props.removeItem} 
                        flip={true}
                        // adjustTotal={this.props.adjustTotal} 
                    />
                </div>
            </div>
        )
    }
}

export default Table;