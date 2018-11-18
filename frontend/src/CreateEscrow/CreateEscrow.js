import React, { Component } from 'react';
import './CreateEscrow.css'


class CreateEscrow extends Component {
    
    constructor(){
        super();
            this.state={
                address:null
            }
    }

    componentDidMount() {

    }
    render() {
        return(
            <div className="escrowBox">
                <form>
                    <input type="text" value="" placeholder="Recipient Wallet Address"></input>
                    <input type="text" placeholder="ERC-20 Contract Address"></input>
                    <button type="submit">Initiate with MetaMask</button>
                </form>
            </div>
        );
    }
}

export default CreateEscrow;
