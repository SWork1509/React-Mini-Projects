import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {

  const { quiz, error, handleChange, handleSubmit } = useGlobalContext();
  return <main>
    <section className="quiz quiz-small">
      <form className="setup-form" onSubmit={handleSubmit}>
        <h2>Setup Quiz</h2>

        {/* Amount */}
        <div className="form-control">
          <label htmlFor="amount">Number of questions</label>
          <input
            type="number"
            name="amount"
            id="amount"
            className="form-input"
            min={1}
            max={50}
            value={quiz.amount}
            onChange={handleChange}
          />
        </div>

        {/* Category */}
        <div className="form-control">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            className="form-input"
            value={quiz.category}
            onChange={handleChange} >
            <option value="sports">Sports</option>
            <option value="history">History</option>
            <option value="politics">Politics</option>
          </select>
        </div>

        {/* Difficulty */}
        <div className="form-control">
          <label htmlFor="difficulty">Difficulty</label>
          <select
            name="difficulty"
            id="difficulty"
            className="form-input"
            value={quiz.difficulty}
            onChange={handleChange} >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {error && <p className="error">Can't generate question , please try with different option</p>}
        <button type="submit" className="submit-btn">Start</button>
      </form>
    </section>
  </main>
}

export default SetupForm
