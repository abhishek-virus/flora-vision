import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const { login } = useAuth()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    setMessage('')

    if (!email.trim() || !password) {
      setMessage('Please fill in all fields.')
      return
    }

    // Frontend demo login: no real authentication.
    login({
      name: email.split('@')[0],
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
          Welcome Back
        </h1>

        <p className="text-gray-400 mb-8">
          Login to your FloraVision account.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="login-email"
              className="block text-sm mb-2"
            >
              Email Address
            </label>

            <input
              id="login-email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-green-400 transition-colors"
              required
            />
          </div>

          <div>
            <label
              htmlFor="login-password"
              className="block text-sm mb-2"
            >
              Password
            </label>

            <input
              id="login-password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-green-400 transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-green-600 py-3 font-semibold hover:bg-green-500 transition-colors"
          >
            Login
          </button>

          {message && (
            <p role="alert" className="text-sm text-red-300">
              {message}
            </p>
          )}
        </form>

        <p className="text-center text-gray-400 text-sm mt-7">
          Don't have an account?{' '}
          <Link
            to="/register"
            className="text-green-400 hover:text-green-300"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}