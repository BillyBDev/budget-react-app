import React, {Component} from 'react';

const Header = (props) => {
    return (
        <div class="header">
            <h2>This is the header section.</h2>
            <h3>{props.total}</h3>
            <br />
            <hr />
        </div>
    )
}

export default Header;