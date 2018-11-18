import React, { Component } from 'react';
import './About.css'
import vault from './vault.svg';
import bitcoin from './bitcoin.svg';
import ethereum from './ethereum.svg';


class About extends Component {
    render() {
        return(
            <div class="aboutCenter">
                <h1>About UEscrow.</h1>
                <p>UEscrow makes it easy to send large payments, without having to worry about both parties following through. With our unique smart contract built on the core goals of supporting UCash and other ERC-20 tokens, you're able to easily exchange your funds.</p>
                <table className="customTable">
                    <tr>
                        <td>1.</td>
                        <td><img src={vault} /></td>
                        <td>First, start the escrow process by initating your contract. In this way, you initialize the eschange between parties, and allow for the contract between the two to be generated.</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td><img src={bitcoin} /></td>
                        <td>Next, deposit your funds into the contract to place them in escrow. The other party will have a set amount of time to reply, afterwhich the funds will be easily transacted.</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td><img src={ethereum} id="friedImage"/></td>
                        <td>Finally, once either both parties have agreed to have funds exchanged (in the case of no arbitrator), or the abritator has deemed that the transaction is ready to proceed in favour of a party, the funds are released to payees in the same transaction.</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default About;
