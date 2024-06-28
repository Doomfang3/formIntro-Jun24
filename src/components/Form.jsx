import { useState } from 'react'

const Form = ({ addUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isChecked, setIsChecked] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    console.log({ email, password, isChecked })
    addUser({ email, password, isChecked })
    setEmail('')
    setPassword('')
    setIsChecked(false)
  }

  return (
    <>
      <h1>Form</h1>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
        <label>
          Email{' '}
          <input
            name='email'
            type='email'
            required
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </label>
        <label>
          Password{' '}
          <input
            name='password'
            type='password'
            required
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </label>
        <label>
          Sell your soul{' '}
          <input
            type='checkbox'
            checked={isChecked}
            onChange={event => setIsChecked(event.target.checked)}
          />
        </label>
        <button type='submit'>Register</button>
      </form>
    </>
  )
}

export default Form
