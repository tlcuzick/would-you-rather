import React, {Component} from 'react';
import { connect } from 'react-redux';
import UserCard from './components/UserCard';
import './Leaderboard.css';

class Leaderboard extends Component {
    render() {
      const {users} = this.props;
      
      return (
        <div className="Leaderboard">
          {users.map(user => (
            <UserCard key={user.id} {...user} />
          ))}   
        </div>
      );
    }
}
 
const mapStateToProps = ({users}) => {
      const userIDs = Object.keys(users); 
      const userData = userIDs.map(userID => {
        const {id, name, avatarURL, answers, questions} = users[userID];
        const numAnswers = Object.keys(answers).length;
        const numQuestions = questions.length;
        const score = numAnswers + numQuestions;
        return {id, name, avatarURL, numAnswers, numQuestions, score}
      })
      .sort((a,b) => b.score - a.score)
  
  return {
    users: userData
  }
}

export default connect(mapStateToProps)(Leaderboard)