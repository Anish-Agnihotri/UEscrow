import React, { Component } from 'react';
import logo from './p2p.svg';
import './Home.css'

class Home extends Component {
    render() {
        return(
            <div className="landingComp">
                <div>
                    <h1 className="landingHeader">Simple escrows, smart-contract procedures.</h1>
                    <p className="landingParagraph">Automated smart-contract backed escrow system for convenient fund transfer for UCash and other ERC-20 tokens.</p>
                    <p className="landingParagraph">Try it out now! Simply sign in using MetaMask (so we can access your information), and easily get started generating a new escrow payment, or managing an existing escrow arbitration.</p>
                    <br></br>
                    <a className="findOutMore" href="about">Find Out More</a>
                    <a className="secondButton" href="https://rinkeby.etherscan.io/address/0xd0d535a55962eeff8f876f1043e31aa2050d64cd" target="_blank">Transperency</a>
                </div>
                <div className="secondComp">
                    <img src={logo} className="landingImage"/>
                </div>
            </div>
        );
    }
}

export default Home;
