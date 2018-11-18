import React, { Component } from 'react';
import './Status.css'

import BlockNumber from './BlockNumber';
import GasPrice from './GasPrice';

class Status extends Component {
    render() {
        return(
            <div className="aboutCenter">
                <h1>Application Status.</h1>
                <p>Is something wrong? It might be that a component of the application is not functioning up to spec. We rely primarily on the Ethereum blockchain (for our smart contract and all ERC-20 related transactions). Take a look at the status below:</p>
                <div className="liveStatus">
                    <p>Ethereum Network</p>
                    <div class="statusItem">
                        <div class="statusItemLeft">
                            <p>Last Block Time:</p>
                        </div>
                        <div class="statusItemRight">
                            <p><BlockNumber /></p>
                        </div>
                    </div>
                    <div class="statusItem">
                        <div class="statusItemLeft">
                            <p>Average Gas Price:</p>
                        </div>
                        <div class="statusItemRight">
                            <p><GasPrice /></p>
                        </div>
                    </div>
                </div>
                <div className="liveStatus">
                    <p>Application Load</p>
                    <div class="statusItem">
                        <div class="statusItemLeft">
                            <p>Current Memory Usage:</p>
                        </div>
                        <div class="statusItemRight">
                            <p>Normal</p>
                        </div>
                    </div>
                </div>
                <div className="liveStatus">
                    <p>Contract Status</p>
                    <div class="statusItem">
                        <div class="statusItemLeft">
                            <p>UCash Contrast Deployment:</p>
                        </div>
                        <div class="statusItemRight">
                            <p><a href="https://rinkeby.etherscan.io/address/0xbD52C5265B94f727f0616f831b011c17e1f235A2">0xbD52C5265B94f727f0616f831b011c17e1f235A2</a></p>
                        </div>
                    </div>
                    <div class="statusItem">
                        <div class="statusItemLeft">
                            <p>UEscrow Contract Deployment:</p>
                        </div>
                        <div class="statusItemRight">
                            <p>Not deployed.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Status;
