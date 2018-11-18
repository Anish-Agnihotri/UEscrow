import React, { Component } from 'react';
import axios from 'axios';
import './GasPrice.css'

class GasPrice extends Component {
        constructor(){
            super();
                this.state={
                    GPrice:null
                }
        }

        componentDidMount(){
            axios.get("https://ethgasstation.info/json/ethgasAPI.json",{}).then((res)=>{
                //on success
                this.setState({
                    GPrice:res.data
                });
                }).catch((error)=>{
                    alert("There is an error in the API call.");
            });
        }

        render(){
            return(
                this.state.GPrice!=null &&
                <div>
                    <h2 class="axiosDecleration">{this.state.GPrice.safeLowWait} Gwei</h2>
                </div>
            )
        }

}

export default GasPrice;
