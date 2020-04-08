import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import {setAuthedUser} from '../actions/authedUser';
import './NavBar.css';


class NavBar extends Component {
  
  logout = () => {
    this.props.dispatch(setAuthedUser(null));
  }  
  
  render() {
    
    const activeStyle = {
      backgroundColor: 'green',
      color: 'white',
      fontWeight: 'bold'
    }
    const {user} = this.props;
    
    const loginLogoutJSX = user ? (
        <ul className="NavBar-section">
          <li>{`Hello, ${user.name}`}</li>
          <li><Avatar alt={user.name}  src={user.avatarURL} /></li>
          <li className="NavBar-navlink-container">
            <Link
              activeStyle={activeStyle}
              onClick={this.logout}
              className="NavBar-navlink"
              to='/'
            >
              Logout
            </Link>
          </li>
        </ul>      
    ) : (
        <ul className="NavBar-section" style={{justifyContent: 'flex-end'}}>
          <li className="NavBar-navlink-container">
            <NavLink
              activeStyle={activeStyle}
              className="NavBar-navlink"
              to='/login'
            >
              Login
            </NavLink>
          </li> 
        </ul>
    )
    
    return (
      <nav className="NavBar">
        <ul className="NavBar-section">
          <li className="NavBar-navlink-container">
            <NavLink
              className="NavBar-navlink"
              activeStyle={activeStyle}
              to='/'
              exact
            >
              <span>Home</span>
            </NavLink>
          </li>
          <li className="NavBar-navlink-container">
            <NavLink
              className="NavBar-navlink"
              activeStyle={activeStyle}
              to='/add'
            >
              <span>New Question</span>
            </NavLink>
          </li>
          <li className="NavBar-navlink-container">
            <NavLink
              className="NavBar-navlink"
              activeStyle={activeStyle}
              to='/leaderboard'
            >
              <span>Leader Board</span>
            </NavLink>
          </li>          
        </ul>
        {loginLogoutJSX}
      </nav>      
    )
  }
}

const mapStateToProps = ({authedUser, users}) => {
  const user = users[authedUser];
  return {user}
}

export default connect(mapStateToProps)(NavBar);