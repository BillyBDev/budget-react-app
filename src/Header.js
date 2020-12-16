import React, {Component} from 'react';

function pocketAmt(num){
    let ans = num / 30;
    return ans.toFixed(2)
}

function DailyAmount(props){
    if (props.total > 0){
        return (
            <>
                <div id="day-label">Per day: <span id="day-amt">${pocketAmt(props.total)}</span></div>
            </>

        )
    } else {
        return null
    }
}

const Header = (props) => {
    return (
        <div class="header">
            <div id="net-label">Net <span id="net-amt">${props.total.toFixed(2)}</span></div>
            {/* <div id="net-amt">{props.total.toFixed(2)}</div> */}
            <DailyAmount total={props.total}/>
        </div>
    )
}

export default Header;


