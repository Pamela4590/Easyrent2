import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Facebook, Twitter, Linkedin, Youtube, User, ChevronDown } from "lucide-react"
import "../styles/Navbar.css"
import dwellLogo from "../images/lg.png"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [showPropertiesDropdown, setShowPropertiesDropdown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="logo-container">
            <img src={dwellLogo || "/placeholder.svg"} alt="Dwell Properties" className="logo" />
            <span className="logo-text">EAZY RENT</span>
          </Link>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://youtube.com" aria-label="YouTube">
              <Youtube size={18} />
            </a>
          </div>
        </div>
        <div className="navbar-right">
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link home">
                Home
              </Link>
            </li>
            <li className="dropdown-container">
              <div
                className="nav-link properties-dropdown-trigger"
                onMouseEnter={() => setShowPropertiesDropdown(true)}
                onMouseLeave={() => setShowPropertiesDropdown(false)}
              >
                <Link to="/properties" className="nav-link">
                  Properties
                </Link>
                <ChevronDown size={16} />
                {showPropertiesDropdown && (
                  <div className="properties-dropdown">
                    <Link to="/properties" className="dropdown-item">
                      All
                    </Link>
                    <Link to="/properties/buy" className="dropdown-item">
                      Buy
                    </Link>
                    <Link to="/properties/rent" className="dropdown-item">
                      Rent
                    </Link>
                  </div>
                )}
              </div>
            </li>
            <li>
              <Link to="/news" className="nav-link">
                News
              </Link>
            </li>
            <li>
              <Link to="/team" className="nav-link">
                Team
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="nav-link dashboard">
                <User size={18} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
