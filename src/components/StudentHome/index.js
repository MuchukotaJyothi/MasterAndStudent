import {Component} from 'react'

class StudentHome extends Component {
  state = {answerInput: ''}

  onChangeAnsInput = event => {
    this.setState({answerInput: event.target.value})
  }

  renderRepository = () => {
    const {answerInput} = this.state
    const questionGiven = JSON.parse(localStorage.getItem('questions_list'))
    return (
      <div>
        <h1>Here Are Some Activities Todo.</h1>
        <ul>
          {questionGiven.map(each => (
            <p>{each.question}</p>
          ))}
        </ul>

        <input
          value={answerInput}
          placeholder="Answer Here"
          onChange={this.onChangeAnsInput}
        />
        <button type="button" onClick={this.onClickStuBtn}>
          Add Answer
        </button>
      </div>
    )
  }

  render() {
    return <div>{this.renderRepository()}</div>
  }
}

export default StudentHome
