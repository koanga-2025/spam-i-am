import { NavLink } from 'react-router-dom'
import LoginButton from '../Nav/LoginButton'

function Header() {
  const menuItems = [
    { title: 'About', link: './about' },
    { title: 'Games', link: './games' },
    { title: 'Quiz', link: './quiz' },
    { title: 'Rate That Spam!', link: './rate-spam' },
  ]

  return (
    <header className="bg-spamYellow px-3">
      <nav className="flex items-center justify-between">
        <NavLink to="/">
          <img
            src="/images/classic_spam_transparent.png"
            alt="a beautiful classic can of spam"
            className="duration-400 w-24 transform p-3 transition hover:animate-rotate360"
          />
        </NavLink>
        <ul className="flex items-center space-x-3">
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
