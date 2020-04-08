import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './shared_components/NavBar';
import Home from './screens/home/Home';
import QuestionDetail from './screens/question_detail/QuestionDetail';
import Leaderboard from './screens/leaderboard/Leaderboard';
import Login from './screens/login/Login';
import CreateQuestion from './screens/create_question/CreateQuestion';
import Loader from './shared_components/Loader';
import NotFound from './shared_components/NotFound';
import PrivateRoute from './shared_components/PrivateRoute';
import { handleInitialData } from './actions/shared';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const authed = this.props.authedUser ? true : false;
    return this.props.loading ? (
      <Loader />
    ) : (
      <Router>
        <div className='App'>
          <NavBar />
          <Switch>
            <Route path='/login' exact component={Login} />
            <Route path='/' exact component={Home} />
            <PrivateRoute
              authed={authed}
              path='/question/:question_id'
              exact
              component={QuestionDetail}
            />
            <PrivateRoute
              authed={authed}
              path='/leaderboard'
              exact
              component={Leaderboard}
            />
            <PrivateRoute
              authed={authed}
              path='/add'
              exact
              component={CreateQuestion}
            />
            <PrivateRoute authed={authed} component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser, loading }) => {
  return { authedUser, loading };
};

export default connect(mapStateToProps)(App);