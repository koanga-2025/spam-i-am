import { NavLink } from 'react-router-dom'
import LoginButton from '../Nav/LoginButton'
import { useState } from 'react'

function Header() {
  const [isActive, setIsActive] = useState(true)

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  window.addEventListener('resize', handleResize)

  const menuItems = [
    { title: 'About', link: './about' },
    { title: 'Games', link: './games' },
    { title: 'Quiz', link: './quiz' },
    { title: 'Rate That Spam!', link: './rate-spam' },
  ]

  const navClass = `${isActive ? 'block' : 'hidden'}`

  return (
    <header className="bg-spamYellow px-3">
      <nav className="flex items-center justify-center md:justify-between">
        <button onClick={() => setIsActive(!isActive)} className={`md:hidden`}>
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
          className={`flex flex-col items-center space-x-3 md:flex-row ${navClass}`}
        >
          {menuItems.map((item) => (
            <li
              key={item.title}
              className="p-3 font-heading text-heading-sm font-heading-bold text-spamBlue"
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
