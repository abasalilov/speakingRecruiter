import { FETCH_LESSONS, FETCH_QUIZ, LESSON_SELECTED } from './types';
import axios from 'axios';

export function fetchLessons() {
    let theHeaders = new Headers({ "Content-Type": "application/json" });
    const request = fetch('/lessons', { method: 'GET', headers: theHeaders})

  return {
    type: FETCH_LESSONS,
    payload: request
  };
}

export function fetchQuiz() {
  console.log('inscide payload')
    const request2 = axios.get('/questions/q')
  return {
    type: FETCH_QUIZ,
    payload: request2
  };
}

export function selectLesson (lesson) {
  return {
    type: LESSON_SELECTED,
    payload: lesson
  }
};
