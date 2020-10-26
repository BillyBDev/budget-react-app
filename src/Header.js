import React, {Component} from 'react';

function pocketAmt(num){
    let ans = num / 30;
    return ans.toFixed(2)
}

function DailyAmount(props){
    if (props.total > 0){
        return (
            <div>
                <h4>Daily pocket balance:</h4>
                <p>{pocketAmt(props.total)}</p>
            </div>
        )
    } else {
        return null
    }
}

const Header = (props) => {
    return (
        <div class="header">
            <h2>Net:</h2>
            <h3>{props.total.toFixed(2)}</h3>
            <br />
            <DailyAmount total={props.total}/>
            <hr className="header-hr"/>
        </div>
    )
}

export default Header;