import {Component} from 'react'
import {Link} from 'react-router-dom'
import {v4} from 'uuid'

import './index.css'

class TeacherHome extends Component {
  state = {inputText: '', errMsg: '', error: false}

  onChangeQuestion = event => {
    this.setState({inputText: event.target.value})
  }

  onSubmitQuestionBtn = event => {
    event.preventDefault()
    const {inputText} = this.state

    if (inputText === '') {
      this.setState({errMsg: 'Please Enter Question', error: true})
    } else {
      const ques = {
        id: v4(),
        question: inputText.toLowerCase(),
      }
      const details = JSON.parse(localStorage.getItem('questions_list'))
      const newQuestion = [...details, ques]
      localStorage.setItem('questions_list', JSON.stringify(newQuestion))
    }
    this.setState({inputText: ''})
  }

  onClickLogoutMaster = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {inputText, errMsg, error} = this.state

    return (
      <div className="teacher-home-container">
        <nav className="nav">
          <h1 className="nav-heading">You tell, I do</h1>
          <div>
            <Link to="/solutions" className="link-names">
              Solutions
            </Link>
            <Link to="/master/home" className="link-names">
              Home
            </Link>
            <button
              type="button"
              onClick={this.onClickLogoutMaster}
              className="logout-bth"
            >
              Logout
            </button>
          </div>
        </nav>
        <form onSubmit={this.onSubmitQuestionBtn} className="form">
          <h1 className="main-heading">Create Activity!</h1>
          <div>
            <input
              value={inputText}
              placeholder="Ex: one plus two"
              onChange={this.onChangeQuestion}
              id="question"
              className="input"
            />
          </div>
          <button type="submit" className="add-btn">
            Add
          </button>
          {error ? <p className="error-msg">{errMsg}</p> : ''}
        </form>
        <p className="para-student-note">
          Note:{'  '}
          <span className="note-span">
            Please Enter values separated by space
          </span>
        </p>
      </div>
    )
  }
}

export default TeacherHome
