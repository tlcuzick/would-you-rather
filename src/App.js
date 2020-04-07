import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CircularProgress from '@material-ui/core/TextField';
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
    const authed = this.props.authedUser ? true : false;
    return this.props.loading ? (
      <CircularProgress /> 
      ) :
      (
      <Router>
        <div className="App">
          <NavBar />
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <PrivateRoute authed={authed} path='/question/:id' exact component={QuestionDetail} />
          <PrivateRoute authed={authed} path='/leaderboard' exact component={Leaderboard} />
          <PrivateRoute authed={authed} path='/new' exact component={CreateQuestion} />
        </div>
      </Router>
    );   
  }
}

function mapStateToProps({authedUser, loading}) {
  return {authedUser, loading};
}

export default connect(mapStateToProps)(App); 
