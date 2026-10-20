import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')

  const { login } = useAuth()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    setMessage('')

    if (
      !name.trim() ||
      !email.trim() ||
      !password ||
      !confirmPassword
    ) {
      setMessage('Please fill in all fields.')
      return
    }

    if (password.length < 8) {
      setMessage('Password must contain at least 8 characters.')
      return
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.')
      return
    }

    // Frontend demo registration.
    // No account or password is stored permanently.
    login({
      name: name.trim(),
      email: email.trim()
    })

    navigate('/')
  }

  return (
    <div className="min-h-screen bg-[#071d16] text-white flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-2xl">

        <Link
          to="/"
          className="text-green-400 text-sm hover:text-green-300 transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="text-3xl font-bold mt-8 mb-2">
          Create Account
        </h1>

        <p className="text-gray-400 mb-8">
          Join the FloraVision community.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Full Name */}
          <div>
            <label
              htmlFor="register-name"
              className="block text-sm mb-2"
            >
              Full Name
            </label>

            <input
              id="register-name"
              type="text"
              autoComplete="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-green-400 transition-colors"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="register-email"
              className="block text-sm mb-2"
            >
              Email Address
            </label>

            <input
              id="register-email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-green-400 transition-colors"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="register-password"
              className="block text-sm mb-2"
            >
              Password
            </label>

            <input
              id="register-password"
              type="password"
              autoComplete="new-password"
              placeholder="Minimum 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-green-400 transition-colors"
              minLength={8}
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm mb-2"
            >
              Confirm Password
            </label>

            <input
              id="confirm-password"
              type="password"
              autoComplete="new-password"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-green-400 transition-colors"
              minLength={8}
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-green-600 py-3 font-semibold hover:bg-green-500 transition-colors"
          >
            Create Account
          </button>

          {/* Validation Message */}
          {message && (
            <p
              role="alert"
              className="text-sm text-red-300"
            >
              {message}
            </p>
          )}

        </form>

        <p className="text-center text-gray-400 text-sm mt-7">
          Already have an account?{' '}
          <Link
            to="/login"
            className="text-green-400 hover:text-green-300"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  )
}