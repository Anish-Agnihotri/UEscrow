import React, { Component } from 'react';
import axios from 'axios';
import './BlockNumber.css'

class BlockNumber extends Component {
        constructor(){
            super();
                this.state={
                    BlockNumb:null
                }
        }

        componentDidMount(){
            axios.get("https://ethgasstation.info/json/ethgasAPI.json",{}).then((res)=>{
                //on success
                this.setState({
                    BlockNumb:res.data
                });
                }).catch((error)=>{
                    alert("There is an error in the API call.");
            });
        }

        render(){
            return(
                this.state.BlockNumb!=null &&
                <div>
                    <h2 class="axiosDecleration">{this.state.BlockNumb.block_time} Seconds</h2>
                </div>
            )
        }

}

export default BlockNumber;
