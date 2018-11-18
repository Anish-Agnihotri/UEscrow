import React, { Component } from 'react';
import './Dashboard.css'
import CreateEscrow from '../CreateEscrow';
import AddToEscrow from '../AddToEscrow';


class Dashboard extends Component {
    render() {
        return(
            <div>
                <div className="dashboardSectionLeft">
                    <h1>1. Create Escrow.</h1>
                    <p>Get started by easily initiating an escrow contract on the Ethereum blockchain. You only need to know your currency of choice.</p>
                    <CreateEscrow />
                </div>
                <div className="dashboardSectionRight">
                    <h1>2. Add funds to Escrow.</h1>
                    <p>Already have an escrow? Want to update its value? Use this tool to easily add more funds to your escrow contract.</p>
                    <AddToEscrow />
                </div>
            </div>
        );
    }
}

export default Dashboard;
