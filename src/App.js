import {Route, Switch} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import StudentLogin from './components/StudentLogin'
import TeacherLogin from './components/TeacherLogin'
import StudentSign from './components/StudentSign'
import TeacherSign from './components/TeacherSign'
import TeacherHome from './components/TeacherHome'
import StudentHome from './components/StudentHome'
import NotFound from './components/NotFound'

import './App.css'

const App = () => {
  const studentDetails = localStorage.getItem('student_details')
  if (studentDetails === null) {
    const students = []
    localStorage.setItem('student_details', JSON.stringify(students))
  }
  const teacherDetails = localStorage.getItem('teacher_details')
  if (teacherDetails === null) {
    const teachers = []
    localStorage.setItem('teacher_details', JSON.stringify(teachers))
  }

  const questionDetails = localStorage.getItem('questions_list')
  if (questionDetails === null) {
    const questionList = []
    localStorage.setItem('questions_list', JSON.stringify(questionList))
  }

  const answerDetails = localStorage.getItem('answers_list')
  if (answerDetails === null) {
    const answerList = []
    localStorage.setItem('answers_list', JSON.stringify(answerList))
  }

  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/student/login" component={StudentLogin} />
      <Route exact path="/student/sign-up" component={StudentSign} />
      <Route exact path="/teacher/login" component={TeacherLogin} />
      <Route exact path="/teacher/sign-up" component={TeacherSign} />
      <Route exact path="/teacher/home" component={TeacherHome} />
      <Route exact path="/student/home" component={StudentHome} />
      <Route component={NotFound} />
    </Switch>
  )
}
export default App
