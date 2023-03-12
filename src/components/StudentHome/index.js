import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class StudentHome extends Component {
  onClickLogoutStudent = () => {
    const {history} = this.props
    history.replace('/')
  }

  onClickSave = () => {
    const questions = JSON.parse(localStorage.getItem('questions_list'))
    let answers = JSON.parse(localStorage.getItem('answers_list'))
    answers = answers.slice(answers.length - questions.length)
    localStorage.setItem('answers_list', JSON.stringify(answers))
    console.log(answers)
  }

  renderRepository = () => {
    const questionGiven = JSON.parse(localStorage.getItem('questions_list'))
    const display = questionGiven.length === 0
    if (display) {
      const empty = []
      localStorage.setItem('answers_list', JSON.stringify(empty))
    }

    return (
      <div className="container-student-home">
        {display ? (
          ''
        ) : (
          <h1 className="main-heading">List of Activities Todo!</h1>
        )}

        {display ? (
          <p className="activity-assigned">Activity Not Assigned Yet!</p>
        ) : (
          <ol className="ordered-list">
            {questionGiven.map(each => {
              const conversion = num => {
                if (num === 'zero' || num === '0') {
                  return 0
                }
                if (num === 'one' || num === '1') {
                  return 1
                }
                if (num === 'two' || num === '2') {
                  return 2
                }
                if (num === 'three' || num === '3') {
                  return 3
                }
                if (num === 'four' || num === '4') {
                  return 4
                }
                if (num === 'five' || num === '5') {
                  return 5
                }
                if (num === 'six' || num === '6') {
                  return 6
                }
                if (num === 'seven' || num === '7') {
                  return 7
                }
                if (num === 'eight' || num === '8') {
                  return 8
                }
                if (num === 'nine' || num === '9') {
                  return 9
                }
                return `Unknown value ${num}`
              }
              const performCalculation = (num1, num2, operator) => {
                if (operator === 'plus' || operator === '+') {
                  return num1 + num2
                }
                if (operator === 'minus' || operator === '-') {
                  return num1 - num2
                }
                if (operator === 'times' || operator === '*') {
                  return num1 * num2
                }
                if (
                  operator === 'dividedBy' ||
                  operator === 'divide' ||
                  operator === '/' ||
                  operator === 'divided_by'
                ) {
                  return parseInt(num1 / num2)
                }
                return `Unknown operator ${operator}`
              }

              const onClickCalBtn = question => {
                const parts = question.split(' ')
                const one = conversion(parts[0])
                const two = conversion(parts[2])
                const res = performCalculation(one, two, parts[1])
                const details = JSON.parse(localStorage.getItem('answers_list'))
                const newAns = [...details, res]
                localStorage.setItem('answers_list', JSON.stringify(newAns))
              }

              return (
                <li key={each.id}>
                  <p>How to calculate {each.question} ?</p>
                  <p className="para-un">{onClickCalBtn(each.question)}</p>
                </li>
              )
            })}
          </ol>
        )}
        {display ? (
          ''
        ) : (
          <button type="button" onClick={this.onClickSave} className="add-btn">
            Calculate
          </button>
        )}
      </div>
    )
  }

  render() {
    return (
      <div className="student-container">
        <nav className="nav">
          <h1 className="nav-heading">You tell, I do</h1>
          <div>
            <Link to="/student/home" className="link-names">
              Home
            </Link>
            <button
              type="button"
              onClick={this.onClickLogoutStudent}
              className="logout-bth"
            >
              Logout
            </button>
          </div>
        </nav>
        {this.renderRepository()}
      </div>
    )
  }
}

export default StudentHome
