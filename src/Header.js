import React from 'react';

function pocketAmt(num){
    let ans = num / 30;
    return ans.toFixed(2)
}

function DailyAmount(props){
        return (
            <>
                <div id="day-label">Per day: <span id="day-amt" class={props.colorClass}>${pocketAmt(props.total)}</span></div>
            </>

        )
    }


const Header = (props) => {
    let colorClass;
    if (props.total > 0){
        colorClass = "positive"
    } else if (props.total < 0){
        colorClass="negative"
    }
    return (
        <div class="header">
            <div id="net-label">Net: <span id="net-amt" class={colorClass}>${props.total.toFixed(2)}</span></div>
            {/* <div id="net-amt">{props.total.toFixed(2)}</div> */}
            <DailyAmount total={props.total} colorClass={colorClass}/>
        </div>
    )
}

export default Header;


