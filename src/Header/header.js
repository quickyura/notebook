import React from 'react';

function Header(props) {
const {done,more}= props;
    return (
        <div className="wrap_header">
            <h1>Hello react</h1>
            <div className="wrap_header_span">
                <span className="header_span"> Done:{done} </span>
                <span className="header_span"> More to do:{more} </span>
            </div>
        </div>
    )

}

export default Header;