import React, {Component} from 'react';
import List from './List';




class Table extends Component {


    render(){
        return (
            <>
                <div className="row">              
                    <List adjustTotal={this.props.adjustTotal} flip={false}/>
                </div>
                <div className="row">
                    <List adjustTotal={this.props.adjustTotal} flip={true}/>
                </div>
            </>
        )
    }
}

export default Table;