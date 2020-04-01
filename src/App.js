import React, {Component} from 'react';
import NavBar from './shared_components/NavBar'
//import Home from './screens/home/Home'
//import QuestionDetail from './screens/question_detail/QuestionDetail';
import Leaderboard from './screens/leaderboard/Leaderboard';
import Login from './screens/login/Login';
import CreateQuestion from './screens/create_question/CreateQuestion';
import md5 from 'md5'

class App extends Component {
  //QuestionDetail questionID="xj352vofupe1dqz9emx13r"/>
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <CreateQuestion />
        </header>
      </div>
    );   
  }
}

export default App;