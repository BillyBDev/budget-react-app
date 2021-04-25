import React from 'react';

function numToAmt(num){
    let i = num;
    if (num >= 0){
        return "$" + i.toFixed(2);
    } else {
        i *= -1;
        return "-$" + i.toFixed(2);
    }
}

function pocketAmt(num){
    let ans = num / 30;
    return ans;
}

function DailyAmount(props){
    return (
        <div id="day-label">
            Per day: <span id="day-amt" class={props.colorClass}>
                {numToAmt(pocketAmt(props.total))}
            </span>
        </div>
    )
}

const Header = (props) => {
    let colorClass;
    if (props.total >= 0){
        colorClass = "positive";
    } else if (props.total < 0){
        colorClass="negative";
    }
    return (
        <div class="header">
            <div id="net-label">Net: <span id="net-amt" class={colorClass}>{numToAmt(props.total)}</span></div>
            <DailyAmount total={props.total} colorClass={colorClass}/>
        </div>
    )
}

export default Header;


