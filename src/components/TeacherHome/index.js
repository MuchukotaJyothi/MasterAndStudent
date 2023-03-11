import {Component} from 'react'
import {v4} from 'uuid'

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
        id: v4,
        question: inputText,
      }
      const details = JSON.parse(localStorage.getItem('questions_list'))
      const newQuestion = [...details, ques]
      localStorage.setItem('questions_list', JSON.stringify(newQuestion))
    }
    this.setState({inputText: ''})
  }

  render() {
    const {inputText, errMsg, error} = this.state

    return (
      <div>
        <form onSubmit={this.onSubmitQuestionBtn}>
          <label htmlFor="question">Enter Question</label>
          <input
            value={inputText}
            placeholder="Enter Question"
            onChange={this.onChangeQuestion}
            id="question"
          />
          <button type="submit">Add</button>
          {error ? <p>{errMsg}</p> : ''}
        </form>
      </div>
    )
  }
}

export default TeacherHome
