import { NavLink } from 'react-router-dom'
import LoginButton from '../Nav/LoginButton'
import { useEffect, useState } from 'react'

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isSmall, setIsSmall] = useState(true)

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      // if screen is large
      setIsSmall(false)
      setIsNavOpen(true)
    } else {
      // if screen is small
      setIsSmall(true)
      setIsNavOpen(false)
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const menuItems = [
    { title: 'About', link: './about' },
    { title: 'Games', link: './games' },
    { title: 'Quiz', link: './quiz' },
    { title: 'Rate That Spam!', link: './rate-spam' },
  ]

  const navClass = `${isNavOpen ? 'block bg-spamYellow' : 'hidden'}`
  const navClass2 = `${isNavOpen && isSmall ? 'absolute top-20 rounded-xl place-content-center' : ''}`
  const navClass3 = `${!isSmall && isNavOpen ? 'space-x-3' : ''}`

  return (
    <header className="bg-spamYellow px-3">
      <nav className="flex items-center justify-center md:justify-between">
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className={`md:hidden`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <NavLink to="/">
          <img
            src="/images/classic_spam_transparent.png"
            alt="a beautiful classic can of spam"
            className="duration-400 w-24 transform p-3 transition hover:animate-rotate360"
          />
        </NavLink>
        <ul
          className={`flex flex-col items-center md:flex-row ${navClass} ${navClass2} ${navClass3}`}
        >
          {menuItems.map((item) => (
            <li
              key={item.title}
              className="bg-red-500 p-3 font-heading text-heading-sm font-heading-bold text-spamBlue"
            >
              <NavLink to={item.link}>{item.title}</NavLink>
            </li>
          ))}
          <LoginButton />
        </ul>
      </nav>
    </header>
  )
}
export default Header
