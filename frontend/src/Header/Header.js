import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import logo from './UEscrow.svg';
import Login from '../Login';
import Profile from '../Profile';

const LS_KEY = 'mm-login-demo:auth';

class Header extends Component {

    componentWillMount() {
        // Access token is stored in localstorage
        const auth = JSON.parse(localStorage.getItem(LS_KEY));
        this.setState({
          auth
        });
      }
    
      handleLoggedIn = auth => {
        localStorage.setItem(LS_KEY, JSON.stringify(auth));
        this.setState({ auth });
      };

    handleLoggedOut = () => {
        localStorage.removeItem(LS_KEY);
        this.setState({ auth: undefined });
      };

    render() {
        const { auth } = this.state;

        return (
            <div className="header">
                <div className="logo">
                    <a href="/"><img src={logo} /></a>
                </div>
                <div className="authentication">
                {auth ? (
                    <Profile auth={auth} onLoggedOut={this.handleLoggedOut} />
                ) : (
                    <Login onLoggedIn={this.handleLoggedIn} />
                )}
                </div>
                <div className="menu">
                    {auth ? (<ul style={{marginRight: 60 + 'px'}}>
                                <li><a href="/">HOME</a></li>
                                <li><a href="about">ABOUT</a></li>
                                <li>
                                    <a href="dashboard">DASHBOARD</a>
                                </li>
                                <li>
                                <a href="status">STATUS</a>
                                </li>
                            </ul>) : (<ul style={{marginLeft: 60 + 'px'}}>
                            <li><a href="/">HOME</a></li>
                            <li><a href="about">ABOUT</a></li>
                            </ul>)}
                </div>
            </div>
        );
    }
}

export default Header;