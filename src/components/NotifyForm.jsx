'use client'
import { useState } from 'react'
import './NotifyForm.css'

export default function NotifyForm() {
  const [email, setEmail]   = useState('')
  const [error, setError]   = useState('')
  const [status, setStatus] = useState('') // '', 'loading', 'success', 'error'

  function validate(value) {
    if (!value.includes('@')) return 'Email must include “@”.'
    const [, domain] = value.split('@')
    if (!domain || !domain.includes('.')) return 'Domain must include a “.”.'
    return ''
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const err = validate(email.trim())
    if (err) return void setError(err)

    setError('')
    setStatus('loading')

    try {
      const res = await fetch('/api/subscribe', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email: email.trim() })
      })

      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        throw new Error()
      }
    } catch {
      setStatus('error')
    }
  }

  function handleChange(e) {
    setEmail(e.target.value)
    if (status) setStatus('')
    if (error) setError(validate(e.target.value))
  }

  // Prepare feedback props
  const showFeedback = Boolean(error || status === 'success' || status === 'error')
  let feedbackClass = ''
  let feedbackIcon  = ''
  let feedbackText  = ''

  if (error) {
    feedbackClass = 'error'
    feedbackIcon  = 'fa-solid fa-exclamation-triangle'
    feedbackText  = error
  } else if (status === 'success') {
    feedbackClass = 'success'
    feedbackIcon  = 'fa-solid fa-check-circle'
    feedbackText  = "You’re subscribed!"
  } else if (status === 'error') {
    feedbackClass = 'error'
    feedbackIcon  = 'fa-solid fa-exclamation-triangle'
    feedbackText  = "Something went wrong."
  }

  return (
    <div className="notify-form-wrapper">
      <form className="notify-form" onSubmit={handleSubmit} noValidate>
        <div className="input-group">
          <input
            type="email"
            placeholder="Get notified on launch..."
            value={email}
            onChange={handleChange}
            className={error ? 'invalid' : ''}
            required
          />
          <button type="submit" disabled={status === 'loading'}>
            {status === 'loading'
              ? '…Sending'
              : (
                <>
                  Notify me <i className="fa-solid fa-paper-plane-top"></i>
                </>
              )
            }
          </button>
        </div>
        <p className='ex_bob'>e.g. shkeffy@gmail.com</p>

        <div
          className={
            `feedback-message` +
            (showFeedback ? ' visible' : '') +
            (feedbackClass ? ` ${feedbackClass}` : '')
          }
        >
          {showFeedback && (
            <>
              <i className={feedbackIcon} />
              {feedbackText}
            </>
          )}
        </div>
      </form>
    </div>
  )
}