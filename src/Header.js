import React, {Component} from 'react';

function pocketAmt(num){
    let ans = num / 30;
    return ans.toFixed(2)
}

const Header = (props) => {
    return (
        <div class="header">
            <h2>Net:</h2>
            <h3>{props.total.toFixed(2)}</h3>
            <br />
            <h4>Here is your daily-pocket-balance:</h4>
            <p>{pocketAmt(props.total)}</p>
            <hr />
        </div>
    )
}

export default Header;