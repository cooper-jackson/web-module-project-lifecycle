import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios'
import GithubCard from './GithubCard';

const githubUrl = 'https://api.github.com/users/cooper-jackson'
const followingUrl = 'https://api.github.com/users/cooper-jackson/following'

class AppClass extends React.Component {
  state = {
    githubAccount: {},
    githubFollowers: []
  }

  componentDidMount() {
    axios.get(githubUrl)
    .then(res => {
      this.setState({
        githubAccount: res.data
      })
      console.log(this.state.githubAccount)
    })
      .then(
       axios.get(followingUrl)
       .then(res => {
         console.log(res)
         this.setState({
           githubFollowers: res.data
          })
       })
       .catch(err => {
         console.log(err)
       }) 
      )
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="App">
        <GithubCard githubAccount={this.state.githubAccount} />
        {this.state.githubFollowers.map(follower => {
          return <GithubCard githubAccount={follower}/>
        })}
      </div>
    )
  }
}

export default AppClass;
