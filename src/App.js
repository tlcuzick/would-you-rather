import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './shared_components/NavBar'
import Home from './screens/home/Home'
import QuestionDetail from './screens/question_detail/QuestionDetail';
import Leaderboard from './screens/leaderboard/Leaderboard';
import Login from './screens/login/Login';
import CreateQuestion from './screens/create_question/CreateQuestion';
import { handleInitialData } from './actions/shared';
import { connect } from 'react-redux'
import PrivateRoute from './shared_components/PrivateRoute';

class App extends Component {
  //QuestionDetail questionID="xj352vofupe1dqz9emx13r"/>
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }  
  
  render() {
    //console.log(this.props)
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <PrivateRoute authedUser={this.props.authedUser} path='/question/:id' component={QuestionDetail} />
          <PrivateRoute authedUser={this.props.authedUser} path='/leaderboard' component={Leaderboard} />
          <Route path='/new' component={CreateQuestion} />
        </div>
      </Router>
    );   
  }
}

function mapStateToProps({authedUser}) {
  return authedUser;
}

export default connect(mapStateToProps)(App); 
