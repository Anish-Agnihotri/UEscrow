import React, { Component } from 'react';

import './SubHeader.css';

class SubHeader extends Component {
    render() {
        return (
            <div className="subHeader">
                <ul>
                    <li>
                        <a href="/dashboard">CREATE AN ESCROW</a>
                    </li>
                    <li>
                        <a href="/dashboardAll">ADDITIONAL FEATURES</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SubHeader;
