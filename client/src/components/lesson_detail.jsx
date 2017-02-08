import React, { Component } from 'react';
import Quiz from './Quiz';
import { connect } from 'react-redux';

export default class LessonDetail extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
  }

  render() {

    return (
      <div >
        <div>
        <h4>{this.props.lesson.title}</h4>
        <h6 >{this.props.lesson.summary}</h6>
        <a> {this.props.lesson.content}</a>
        </div>
        <div>
        <div>
          <Quiz quizNum = {this.props.lesson.title.slice(-1)}/>
        </div>
        </div>
      </div>

      )
  }
}
