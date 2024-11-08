import '../css/header.css'
import Themes from './Themes'
function Header() {
  return (
    <header>
      <div className="header">
        <a href="#">
          <img
            src="/icon/favicon.ico"
            alt="Logo"
            width={'50px'}
            className="logo"
          />
        </a>
        <ul className="links">
          <a href="#">
            <li className="link">Home</li>
          </a>
          <a href="#info">
            <li className="link">About</li>
          </a>
          <a href="#info">
            <li className="link">Projects</li>
          </a>
          <a href="#info">
            <li className="link">Contact</li>
          </a>
        </ul>
        <div className="head-themes">
          <Themes />
          <a href="#">
            <button className="contact_me">Написать</button>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
