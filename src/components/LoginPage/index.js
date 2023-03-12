import './index.css'

const LoginPage = props => {
  const {history} = props
  const onClickMastertBtn = () => {
    history.replace('/master/login')
  }

  const onClickStudentBtn = () => {
    history.replace('/student/login')
  }

  return (
    <div className="login-container">
      <div className="login-bg-container">
        <div className="teacher-btn-container">
          <h1 className="login-heading">Master Can Login Here!</h1>
          <button
            type="button"
            onClick={onClickMastertBtn}
            className="button-login"
          >
            Master Login
          </button>
        </div>
        <hr className="hr-line" />
        <div className="teacher-btn-container">
          <h1 className="login-heading">Student Can Login Here! </h1>
          <button
            type="button"
            onClick={onClickStudentBtn}
            className="button-login"
          >
            Student Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
