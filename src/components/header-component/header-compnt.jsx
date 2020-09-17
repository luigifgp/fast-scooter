import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import DropDownMenu from '../sign-in-sign-up-components/logout-dropdown/dropdown-menu';
import './header-component.styles.scss'

class Header extends Component {


    render() {

        const joinUs = (

            <Link className="nav-item nav-link " to="/JoinUs">
                JoinUs
            </Link>


        );
        const logOut = (
            <DropDownMenu>
                <Link className="nav-item nav-link" to=""></Link>
            </DropDownMenu>

        );

    return(
        <nav className="navbar navbar-expand-lg  ">
            <Link className="navbar-brand " to="/">
                <img src="scooter_Logo.png" alt="logo" width="250" height="56" />
            </Link>
            <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link className="nav-item nav-link" to="/About">About <span class="sr-only">(current)</span></Link>
                    <Link className="nav-item nav-link" to="/map">
                        Maps
                        </Link>
                    <Link className="nav-item nav-link" to="/Rules">
                        Rules
                     </Link>
                    <Link className="nav-item nav-link" to="/Contact">
                        Contact
                     </Link>

                    {localStorage.usertoken ? logOut : joinUs}

                    <Link className=" nav-link" to="/">
                        <button type="button" className="btn btn-dark btn-ed">
                            Download
              </button>
                    </Link>  
                </div>
            </div>
        </nav>
    );
    }
}

export default withRouter(Header);