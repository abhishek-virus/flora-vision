
import { useState, useEffect } from 'react'
import logo from '../assets/logo.jpg'
import { motion } from 'motion/react'

import {
  ShoppingBag,
  ChevronDown,
  UserRound,
  LogOut,
  Menu,
  X,
  Home,
  Leaf,
  Info,
  Mail
} from 'lucide-react'

import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { cartCount } = useCart()
  const { user, logout } = useAuth()

  const navigate = useNavigate()
  const location = useLocation()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [plantsMenuOpen, setPlantsMenuOpen] = useState(false)
  const [accountMenuOpen, setAccountMenuOpen] = useState(false)

  function handleLogout() {
    logout()
    setAccountMenuOpen(false)
    setMobileMenuOpen(false)
    navigate('/login')
  }

  function closeMenus() {
    setMobileMenuOpen(false)
    setPlantsMenuOpen(false)
    setAccountMenuOpen(false)
  }

  useEffect(() => {
    closeMenus()
  }, [location.pathname, location.hash])

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape') {
        closeMenus()
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const navLinkClass =
    'flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-300 transition-colors hover:bg-white/10 hover:text-green-300 md:px-0 md:py-0 md:hover:bg-transparent'

  const sectionLinks = [
    { label: 'Trending Plants', href: '/#trending' },
    { label: 'Top Selling Plants', href: '/#top-selling' },
    { label: 'Best O2 Plants', href: '/#best-o2' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a160f]/85 backdrop-blur-xl"
    >
      <div className="mx-auto flex min-h-[76px] max-w-[1600px] items-center justify-between gap-3 px-4 py-3 sm:px-6 md:min-h-[88px] md:px-8 lg:px-12">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenus}
          className="flex min-w-0 shrink-0 items-center gap-2"
          aria-label="FloraVision home"
        >
          <img
            src={logo}
            alt="FloraVision Logo"
            className="h-10 w-10 object-contain sm:h-12 sm:w-12 lg:h-14 lg:w-14"
          />

          <span className="whitespace-nowrap text-lg font-bold tracking-tight text-white sm:text-xl">
            FloraVision.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 text-sm font-medium text-gray-300 lg:flex xl:gap-8 xl:text-base">
          <a href="/#home" className="transition-colors hover:text-white">
            Home
          </a>

          {/* Plants Type Dropdown */}
          <div className="group relative">
            <button
              type="button"
              onClick={() => setPlantsMenuOpen((open) => !open)}
              aria-expanded={plantsMenuOpen}
              className="flex items-center gap-1 transition-colors hover:text-white"
            >
              Plants Type
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  plantsMenuOpen ? 'rotate-180' : 'group-hover:rotate-180'
                }`}
              />
            </button>

            <div
              className={`absolute left-0 top-full z-50 w-56 pt-3 transition-all duration-200 ${
                plantsMenuOpen
                  ? 'visible translate-y-0 opacity-100'
                  : 'invisible -translate-y-1 opacity-0 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100'
              }`}
            >
              <div className="rounded-xl border border-white/10 bg-[#0b241b]/95 p-2 shadow-xl backdrop-blur-xl">
                {sectionLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenus}
                    className="block rounded-lg px-4 py-3 text-sm text-gray-300 transition-colors hover:bg-white/10 hover:text-green-300"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="/#about" className="transition-colors hover:text-white">
            About
          </a>

          <a href="/#contact" className="transition-colors hover:text-white">
            Contact
          </a>
        </div>

        {/* Cart, Account and Mobile Menu */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-3">
          {/* Cart */}
          <Link
            to="/cart"
            onClick={closeMenus}
            aria-label={`Shopping cart with ${cartCount} items`}
            className="relative rounded-full p-2 transition-colors hover:bg-white/10 hover:text-green-400"
          >
            <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6" />

            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-green-500 px-1 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Desktop Account */}
          <div className="relative hidden md:block">
            <button
              type="button"
              onClick={() => setAccountMenuOpen((open) => !open)}
              aria-expanded={accountMenuOpen}
              aria-label="Account menu"
              className="flex max-w-[190px] items-center gap-2 rounded-full border border-white/20 px-3 py-2 text-white transition-colors hover:bg-white/10 lg:px-4"
            >
              <UserRound className="h-5 w-5 shrink-0" />

              <span className="max-w-28 truncate text-sm">
                {user?.name || 'Account'}
              </span>

              <ChevronDown
                className={`h-4 w-4 shrink-0 transition-transform ${
                  accountMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {accountMenuOpen && (
              <div className="absolute right-0 top-full z-50 w-56 pt-3">
                <AccountMenu
                  user={user}
                  cartCount={cartCount}
                  onLogout={handleLogout}
                  onNavigate={closeMenus}
                />
              </div>
            )}
          </div>

          {/* Mobile Account Button */}
          <button
            type="button"
            onClick={() => setAccountMenuOpen((open) => !open)}
            aria-label="Toggle account menu"
            aria-expanded={accountMenuOpen}
            className="rounded-full p-2 transition-colors hover:bg-white/10 hover:text-green-300 md:hidden"
          >
            <UserRound className="h-5 w-5" />
          </button>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen((open) => !open)
              setAccountMenuOpen(false)
            }}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="rounded-full p-2 transition-colors hover:bg-white/10 hover:text-green-300 lg:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Account Dropdown on Mobile */}
      {accountMenuOpen && (
        <div className="absolute right-4 top-[calc(100%-4px)] z-[60] w-64 md:hidden">
          <AccountMenu
            user={user}
            cartCount={cartCount}
            onLogout={handleLogout}
            onNavigate={closeMenus}
          />
        </div>
      )}

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#0b241b]/98 px-4 pb-5 pt-3 shadow-2xl backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-[600px] flex-col gap-1">
            <a
              href="/#home"
              onClick={closeMenus}
              className={navLinkClass}
            >
              <Home className="h-4 w-4" />
              Home
            </a>

            {/* Mobile Plants Dropdown */}
            <div>
              <button
                type="button"
                onClick={() => setPlantsMenuOpen((open) => !open)}
                aria-expanded={plantsMenuOpen}
                className={`${navLinkClass} w-full justify-between`}
              >
                <span className="flex items-center gap-3">
                  <Leaf className="h-4 w-4" />
                  Plants Type
                </span>

                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    plantsMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {plantsMenuOpen && (
                <div className="ml-7 mt-1 flex flex-col border-l border-white/10 pl-3">
                  {sectionLinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenus}
                      className="rounded-lg px-4 py-3 text-sm text-gray-400 transition-colors hover:bg-white/10 hover:text-green-300"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/#about"
              onClick={closeMenus}
              className={navLinkClass}
            >
              <Info className="h-4 w-4" />
              About
            </a>

            <a
              href="/#contact"
              onClick={closeMenus}
              className={navLinkClass}
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>

            <div className="mt-2 border-t border-white/10 pt-3">
              <Link
                to="/cart"
                onClick={closeMenus}
                className={navLinkClass}
              >
                <ShoppingBag className="h-4 w-4" />
                My Cart
                <span className="ml-auto rounded-full bg-green-500/20 px-2 py-0.5 text-xs text-green-300">
                  {cartCount}
                </span>
              </Link>

              {!user && (
                <>
                  <Link
                    to="/login"
                    onClick={closeMenus}
                    className={navLinkClass}
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    onClick={closeMenus}
                    className={navLinkClass}
                  >
                    Register
                  </Link>
                </>
              )}

              {user && (
                <button
                  type="button"
                  onClick={handleLogout}
                  className={`${navLinkClass} w-full`}
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              )}
            </div>
          </nav>
        </div>
      )}
    </motion.nav>
  )
}

function AccountMenu({ user, cartCount, onLogout, onNavigate }) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0b241b]/98 p-2 shadow-xl backdrop-blur-xl">
      {user && (
        <div className="border-b border-white/10 px-4 py-3">
          <p className="truncate font-semibold text-white">{user.name}</p>
          <p className="mt-1 truncate text-xs text-gray-400">{user.email}</p>
        </div>
      )}

      <Link
        to="/cart"
        onClick={onNavigate}
        className="flex items-center justify-between rounded-lg px-4 py-3 text-sm text-gray-300 transition-colors hover:bg-white/10 hover:text-green-300"
      >
        <span>My Cart</span>
        <span className="text-green-400">{cartCount}</span>
      </Link>

      {!user && (
        <>
          <Link
            to="/login"
            onClick={onNavigate}
            className="block rounded-lg px-4 py-3 text-sm text-gray-300 transition-colors hover:bg-white/10 hover:text-green-300"
          >
            Login
          </Link>

          <Link
            to="/register"
            onClick={onNavigate}
            className="block rounded-lg px-4 py-3 text-sm text-gray-300 transition-colors hover:bg-white/10 hover:text-green-300"
          >
            Register
          </Link>
        </>
      )}

      {user && (
        <button
          type="button"
          onClick={onLogout}
          className="flex w-full items-center gap-2 rounded-lg px-4 py-3 text-sm text-gray-300 transition-colors hover:bg-white/10 hover:text-green-300"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      )}
    </div>
  )
}
