import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';
import Header from './header.jsx';
import LessonDetail from './lesson_detail.jsx';

class LessonList extends Component {

 constructor(props){
    super(props)
    this.state = {
    activeLesson: null,
  }
}

  componentWillMount() {
    this.props.fetchLessons();
  }

  componentDidMount(){

  }

  createLesson(){
    return (
    <div>
    <LessonDetail  lesson={this.state.activeLesson} key={Math.random()} />
    </div>
    )
  }

renderLesson(lesson){
  this.setState({activeLesson: lesson});

}

renderHeader(){
  return <Header key={Math.random()} />
}

  render() {
    return (
      <div >
      {(this.state.activeLesson === null ? (this.renderHeader()) : null )}
      <div className="sideBar">
        {console.log('this', this)}
        {this.props.lessons.slice(0,8).map((lesson) => {
          return (
            <div className="lesson-list">
          <div key={lesson.lessonId + Math.random()} className="card card-block">
            <h4 className="card-title">{lesson.title}</h4>
            <h6 className="card-title">{lesson.summary}</h6>
            <a className="btn btn-primary" onClick = {() => this.renderLesson(lesson)} >{lesson.title}</a>
            </div>
          </div>
        )
        })}
     </div>
     <div className="mainContent">
       {(this.state.activeLesson !== null) ? <h4>{this.createLesson()}</h4> : <p>click on a lesson to begin</p>}
     </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return { lessons: state.lessons };
}

export default connect(mapStateToProps, actions)(LessonList);


// const urlSafeTitle = book.title.replace(' ', '-');
//
// <Link
// +            to={`/${urlSafeTitle}`}
// +            onClick = {() => this.props.selectBook(book)}
// +            activeStyle={{
// +              textDecoration: 'none',
// +              color: 'orange'
// +            }}
// +          >
// +            {book.title}
// +          </Link>
