import './index.scss'
import LogoS from '../../assets/images/FdV_LOGO_Blanco.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faGoogle,
  
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoS} alt="Logo" />
          {/* <img className="sub-logo" src={LogoSubtitle} alt="slobodan" /> */}
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/federico-vigliarolo-943b72201/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/bobangajicsm"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a href="mailto:fd.vigliarolo@gmail.com" rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={faGoogle} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </div>
    )

    
}

export default Sidebar