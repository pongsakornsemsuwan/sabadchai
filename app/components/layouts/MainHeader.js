import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';

/*
This is a header of the page, it will be mount(render) only one time.
Please find react's component life cycle : https://facebook.github.io/react/docs/component-specs.html

The most important function is render which is what this component will return.
The render function has to return ONLY ONE BLOCK
*/

export default class MainHeader extends React.Component {
    static get NAME() {
        return 'MainHeader';
    }

    static get contextTypes() {
        return {
            data: React.PropTypes.object
        };
    }

    constructor(props, context) {
        super(props, context);
        this.state = context.data[MainHeader.NAME] || {};
        console.log('this.state');
        console.log(this.state);
    }


    //user created function. can be called in DOM
    handleLogout() {


    }
    //function to render html-like code, notice that we use 'className' instead of 'class'
    render() {
        let loginButton;
        let greeting;

        let currentUser = false;

        if (currentUser)
        {
            loginButton = (
                <div className="dropdown">
                    <div className="profileThumbnail dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <img className="dropdown-toggle" src="/images/mark.jpg"/>
                    </div>

                    {/*<button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">*/}

                    {/*<span className="caret"></span>*/}
                    {/*</button>*/}
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a href={currentUser._id}>{currentUser.profile.full_name}</a></li>
                        <li><a href="#">Setting</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#">Startup A</a></li>
                        <li><a href="#">Startup B</a></li>
                        <li><a href="#">+ Create new Startup</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#" onClick={this.handleLogout}>Logout</a></li>
                    </ul>
                </div>
            )
            greeting = (
                <p className="navbar-text nav navbar-nav navbar-right" style={{marginRight:15 + 'px'}}>Welcome, Pongsakorn Semsuwan</p>
            )
        }
        else
        {
            console.log('MainHeader');
            if(this.props.activeNav === "login"){
                loginButton = (
                    <li className="active">
                        <Link className="link" to="/login">
                            Login
                        </Link>
                    </li>
                )
            }else{
                loginButton = (
                    <li>
                        <Link className="link" to="/login">
                            Login
                        </Link>
                    </li>
                )
            }
        }

        let signupButton;
        if( currentUser ){

        } else {
            if(this.props.activeNav === "signup"){

                signupButton = (<li className="active"><Link className="link" to="/signup">
                    Sign Up
                </Link></li>);
            }else{
                signupButton = (<li>
                    <Link className="link" to="/signup">
                        Sign Up
                    </Link>
                    </li>
);
            }
        }

        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">Sabadchai</Link>
                        <Link className="navbar-brand" to="/startups">Fundraising</Link>
                        <Link className="navbar-brand" to="/startups">Investors</Link>
                        <Link className="navbar-brand" to="/startups">Startups</Link>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            {signupButton}
                            {loginButton}
                        </ul>
                        {greeting}
                    </div>

                </div>
            </nav>
        )
    }
}
