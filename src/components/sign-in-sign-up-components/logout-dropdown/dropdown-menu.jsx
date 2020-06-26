import React from 'react';
import './logout-dropdown.scss';
import jwt_decode from 'jwt-decode';


class DropdownMenu extends React.Component {
    constructor() {
        super();

        this.state = {
            user: {},
            displayMenu: false,
            
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

    };

    logOut(e) {
        localStorage.removeItem("usertoken");
    }

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });

    }
    componentDidMount(){
        const token = localStorage.usertoken;
        
        if(!token) {
        console.log("no token");
        }else {
        const decoded = jwt_decode(token);
        this.setState({ user: decoded });
}
}


    render() {
        
        const user = this.state.user;

        return (
            <div className="dropdown">
                <div className="button" onClick={this.showDropdownMenu}>Hello, {user.name}</div>

                {this.state.displayMenu ? (
                    <ul>
                        <li><a className="active" href="#Create Page">{user.email}</a></li>
                        <li><a href="#Setting">Setting</a></li>
                        <li><a href="#Log Out" onClick={this.logOut.bind(this)}>Log Out</a></li>
                    </ul>
                ) :
                    (
                        null
                    )
                }

            </div>

        );
    }
}

export default DropdownMenu;