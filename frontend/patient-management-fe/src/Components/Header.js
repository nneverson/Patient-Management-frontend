import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import { Navbar, NavDropdown, Link } from 'react-bootstrap';

class Header extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        return (
            <div>
              <nav>
                <ul className='nav-links'>
				<Link to='/'>
					<li>Home</li>
				</Link>
				<Link to='/add' >
					<li>Add new Patient</li>
				</Link>
				
        </ul>
              </nav>
            </div>
        );
    }
}

export default Header;