import {Link} from 'react-router-dom'
import './index.css'

const Solutions = () => {
  const questions = JSON.parse(localStorage.getItem('questions_list'))
  const answers = JSON.parse(localStorage.getItem('answers_list'))

  return (
    <div>
      <nav className="nav">
        <h1 className="nav-heading">You tell, I do</h1>
        <div>
          <Link to="/solutions" className="link-names">
            Solutions
          </Link>
          <Link to="/master/home" className="link-names">
            Home
          </Link>
        </div>
      </nav>

      {questions.length === 0 ? (
        <p className="activity-assigned">Activity Not Assigned Yet!</p>
      ) : (
        <ol className="order">
          <h1 className="sol-heading">Answers Submitted By Student</h1>
          {questions.map((each, index) => (
            <li key={each.id} className="ordered-list-sol">
              <p>How to calculate {each.question} ?</p>
              <p className="para">
                Answer:{' '}
                <span className="span-sol">
                  {answers[index] === undefined || answers[index] === undefined
                    ? 'Yet to be Answer'
                    : answers[index]}
                </span>
              </p>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}

export default Solutions
