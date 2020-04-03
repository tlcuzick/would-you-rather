/* eslint-disable no-use-before-define */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Avatar from '@material-ui/core/Avatar';
import './Login.css';

class Login extends Component {
  
state= {
  userId: ''
}

handleChange = (event, value) => {
  const userID = value.hasOwnProperty('id') ? value.id : '';
  this.setState({userID});
}

handleSubmit = e => {
  e.preventDefault();
  alert(this.state.userID);
}
  
render() {
    
const styles = {
        width: 450,
        fontSize: 15,
        margin: '0 auto'
}

const {usersArray} = this.props;
  
  return (
    <div className="Login-container">
      <h1 className="Login-h1">Welcome to the Would You Rather App</h1>
      <h2 className="Login-h2">Please sign in to continue</h2>
      <div className="Login-logo-hero">
        <img src="./logo192.png" alt="logo" className="Login-logo" />
      </div>
      <Autocomplete
        id="country-select-demo"
        style={styles}
        options={usersArray}
        value={this.state.value}
        onChange={this.handleChange}    
        autoHighlight
        getOptionLabel={(option) => option.name}
        renderOption={(option) => (
          <React.Fragment>
            <span className="Login-select">
              <Avatar alt={option.name}  src={option.avatarURL} className="Login-img" />
            </span>
            {option.name}
          </React.Fragment>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select user"
            variant="outlined"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password',
            }}
          />
        )}
      />
      <div onClick={this.handleSubmit} className="Login-button">
        <span className="Login-button-text">Sign In</span>
      </div>
    </div>
  );
    
  }
}

  
const mapStateToProps = ({users}) => {
  const usersArray = Object.keys(users).map(userID => users[userID]);
  return {usersArray}
}

export default connect(mapStateToProps)(Login);