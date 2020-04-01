/* eslint-disable no-use-before-define */
import React, {Component, Fragment} from 'react';
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

const users = this.props.users;

const usersArray = Object.keys(users).map(userID => users[userID]);
  
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

Login.defaultProps = {
    displayAnswered: false,      
    authedUser: 'sarahedo',
    users: {
      sarahedo: {
        id: 'sarahedo',
        name: 'Sarah Edo',
        avatarURL: 'https://www.gravatar.com/avatar/088a603eeddafecbbac2cda572e6894e?d=retro',
        answers: {
          "8xf0y6ziyjabvozdd253nd": 'optionOne',
          "6ni6ok3ym7mf1p33lnez": 'optionOne',
          "am8ehyc8byjqgar0jgpub9": 'optionTwo',
          "loxhs1bqm25b708cmbf3g": 'optionTwo'
        },
        questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
      },
      tylermcginnis: {
        id: 'tylermcginnis',
        name: 'Tyler McGinnis',
        avatarURL: 'https://www.gravatar.com/avatar/5288b46931879d666e7da8f59a627a3e?d=retro',
        answers: {
          "vthrdm985a262al8qx3do": 'optionOne',
          "xj352vofupe1dqz9emx13r": 'optionTwo',
        },
        questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
      },
      johndoe: {
        id: 'johndoe',
        name: 'John Doe',
        avatarURL: 'https://www.gravatar.com/avatar/6579e96f76baa00787a28653876c6127?d=retro',
        answers: {
          "xj352vofupe1dqz9emx13r": 'optionOne',
          "vthrdm985a262al8qx3do": 'optionTwo',
          "6ni6ok3ym7mf1p33lnez": 'optionOne'
        },
        questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
      }
    },
    
    questions: {
      "8xf0y6ziyjabvozdd253nd": {
        id: '8xf0y6ziyjabvozdd253nd',
        author: 'sarahedo',
        timestamp: 1467166872634,
        optionOne: {
          votes: ['sarahedo'],
          text: 'have horrible short term memory',
        },
        optionTwo: {
          votes: [],
          text: 'have horrible long term memory'
        }
      },
      "6ni6ok3ym7mf1p33lnez": {
        id: '6ni6ok3ym7mf1p33lnez',
        author: 'johndoe',
        timestamp: 1467166873333,
        optionOne: {
          votes: [],
          text: 'become a superhero',
        },
        optionTwo: {
          votes: ['johndoe', 'sarahedo'],
          text: 'become a supervillian'
        }
      },
      "am8ehyc8byjqgar0jgpub9": {
        id: 'am8ehyc8byjqgar0jgpub9',
        author: 'sarahedo',
        timestamp: 1488579767190,
        optionOne: {
          votes: [],
          text: 'be telekinetic',
        },
        optionTwo: {
          votes: ['sarahedo'],
          text: 'be telepathic'
        }
      },
      "loxhs1bqm25b708cmbf3g": {
        id: 'loxhs1bqm25b708cmbf3g',
        author: 'tylermcginnis',
        timestamp: 1482579767190,
        optionOne: {
          votes: [],
          text: 'be a front-end developer',
        },
        optionTwo: {
          votes: ['sarahedo'],
          text: 'be a back-end developer'
        }
      },
      "vthrdm985a262al8qx3do": {
        id: 'vthrdm985a262al8qx3do',
        author: 'tylermcginnis',
        timestamp: 1489579767190,
        optionOne: {
          votes: ['tylermcginnis'],
          text: 'find $50 yourself',
        },
        optionTwo: {
          votes: ['johndoe'],
          text: 'have your best friend find $500'
        }
      },
      "xj352vofupe1dqz9emx13r": {
        id: 'xj352vofupe1dqz9emx13r',
        author: 'johndoe',
        timestamp: 1493579767190,
        optionOne: {
          votes: ['johndoe'],
          text: 'write JavaScript',
        },
        optionTwo: {
          votes: ['tylermcginnis'],
          text: 'write Swift'
        }
      },
    }
  }

export default Login;