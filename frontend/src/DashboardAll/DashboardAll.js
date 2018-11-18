import React, { Component } from 'react';
import './DashboardAll.css'

class DashboardAll extends Component {
    render() {
        return(
            <div className="centerItem">
                <h1>Explore ERC-20 Balance</h1>
                <p>We'd like to make your escrow process as conveient as possible. Easily use our balance utility to check your ERC-20 token balance using any Wallet Address and ERC-20 Contract Address!</p>
                <iframe src="https://anish-agnihotri.github.io/TempHost/checkBalance"></iframe>
            </div>
        );
    }
}

export default DashboardAll;
