const LoginPage = props => {
  const {history} = props
  const onClickMastertBtn = () => {
    history.replace('/teacher/login')
  }

  const onClickStudentBtn = () => {
    history.replace('/student/login')
  }

  return (
    <div>
      <div>
        <button type="button" onClick={onClickMastertBtn}>
          Teacher Login
        </button>
      </div>
      <div>
        <button type="button" onClick={onClickStudentBtn}>
          Student Login
        </button>
      </div>
    </div>
  )
}

export default LoginPage
