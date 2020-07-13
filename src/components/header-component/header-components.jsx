import React, {Component} from "react";
import "./header-component.styles.scss";
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Scooter_Logo.svg";
import DropDownMenu from '../sign-in-sign-up-components/logout-dropdown/dropdown-menu';

class Header extends Component {


  render() {

      const joinUs =(
        <Link className="option" to="/JoinUs">
          JoinUs
        </Link>
        
      );
      const logOut =(
        <DropDownMenu>
        <Link className="option" to="">h</Link>
         </DropDownMenu> 
      );
   
    return (
      <div>
        <div className="header">
          <Link className="logo-container" to="/">
            <Logo className="logo" />
          </Link>
          <div className="options">
            <Link className="option" to="/About">
              About
            </Link>
            <Link className="option" to="/map">
              Maps
            </Link>
            <Link className="option" to="/How its works">
              How its works
            </Link>
            <Link className="option" to="/Contact">
              Contact
            </Link>

            {localStorage.usertoken  ? logOut: joinUs }

            <Link className="option" to="/">
              <button type="button" className="button-hd">
                Download App
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Header);
