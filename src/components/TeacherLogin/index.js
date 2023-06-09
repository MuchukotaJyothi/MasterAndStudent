import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class TeacherLogin extends Component {
  state = {username: '', password: '', isError: false, errMsg: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickCheckBox = () => {
    const passwordElement = document.getElementById('pass')
    if (passwordElement.type === 'password') {
      passwordElement.type = 'text'
    } else {
      passwordElement.type = 'password'
    }
  }

  checkFields = () => {
    const {username, password} = this.state
    if (username === '' || password === '') {
      this.setState({isError: true, errMsg: 'Please Enter all credentials'})
    } else {
      this.setState({isError: false})
      this.loginProcess()
    }
  }

  loginProcess = () => {
    const {username, password} = this.state
    const details = JSON.parse(localStorage.getItem('teacher_details'))
    let exists = false
    details.forEach(eachItem => {
      if (eachItem.username === username) {
        exists = true
      }
    })
    if (exists) {
      const particularUser = details.filter(
        eachItem => eachItem.username === username,
      )
      if (particularUser[0].password === password) {
        const currentUser = details.filter(
          eachElement => eachElement.username === username,
        )
        localStorage.setItem(
          'current_user_teacher',
          JSON.stringify(currentUser[0]),
        )
        const {history} = this.props
        history.replace('/master/home')
      } else {
        this.setState({
          isError: true,
          errMsg: "Username and Password didn't match",
        })
      }
    } else {
      this.setState({
        isError: true,
        errMsg: 'The user seems to be new! Please sign up',
      })
    }
  }

  onClickLogin = event => {
    event.preventDefault()
    this.checkFields()
  }

  render() {
    const {username, password, isError, errMsg} = this.state
    return (
      <div className="login-cont">
        <div className="login-form-cont">
          <h1>Master Login</h1>
          <form className="login-form" onSubmit={this.onClickLogin}>
            <label htmlFor="user">USERNAME</label>
            <input
              id="user"
              type="text"
              placeholder="Enter Username"
              className="inputs"
              value={username}
              onChange={this.onChangeUsername}
            />
            <label htmlFor="pass">PASSWORD</label>
            <input
              id="pass"
              type="password"
              placeholder="Enter Password"
              className="inputs"
              value={password}
              onChange={this.onChangePassword}
            />
            <div>
              <input
                id="show"
                type="checkbox"
                className="check-box"
                onClick={this.onClickCheckBox}
              />
              <label htmlFor="show">Show Password</label>
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
            {isError && <p className="err">{errMsg}</p>}
          </form>
          <p>
            New Here ? <Link to="/master/sign-up">SIGN UP</Link>
          </p>
        </div>
      </div>
    )
  }
}

export default TeacherLogin
