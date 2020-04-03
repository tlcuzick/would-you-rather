import React, {Component} from 'react';
import NavBar from './shared_components/NavBar'
import Home from './screens/home/Home'
import QuestionDetail from './screens/question_detail/QuestionDetail';
import Leaderboard from './screens/leaderboard/Leaderboard';
import Login from './screens/login/Login';
import CreateQuestion from './screens/create_question/CreateQuestion';
import { handleInitialData } from './actions/shared';
import { connect } from 'react-redux'

class App extends Component {
  //QuestionDetail questionID="xj352vofupe1dqz9emx13r"/>
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }  
  
  render() {
    //console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <Login />
      </div>
    );   
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App); 
