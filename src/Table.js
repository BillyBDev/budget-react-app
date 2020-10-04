import React, {Component} from 'react';
import { Button, Icon } from 'semantic-ui-react';
import Income from './Income';




class Table extends Component {


    render(){
        return (
            <div class="row">
                <div class="column">
                    <Income adjustTotal={this.props.adjustTotal}/>
                </div>
                <div class="column">

                </div>
            </div>
        )
    }
}

export default Table;







// ===================================

/*

const ShowFormButton = (props) => {
    if (props.formToggle === false){
        return (
            <Button animated onClick={props.handleClick}>
                <Button.Content visible>Next</Button.Content>
                <Button.Content hidden>
                    <Icon name='arrow right' />
                </Button.Content>
            </Button>
        )
    } else {
        return null;
    }

}

const Form = (props) => {
    if (props.formToggle) {
        return(
            <div>
                <div className="hiddenForm">
                    <div className="ui mini fluid input">
                        <input type="text" placeholder="Description (optional)" />
                    </div>
                    <br />
                    <div className="ui mini fluid action input">
                        <input type="text" placeholder="Amount" />
                        <button className="ui button">Add</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

class Income extends Component {
    state = {
        formToggle: false
    }

    showForm = () => {
        this.setState({
            formToggle: !this.state.formToggle
        });
    }

    render(){
        return (
            <div>
                <h4>I am the income column.</h4>
                <Form formToggle={this.state.formToggle}/>
                <ShowFormButton formToggle={this.state.formToggle} showForm={this.showForm}/>
                
            </div>
        )
    }
} */