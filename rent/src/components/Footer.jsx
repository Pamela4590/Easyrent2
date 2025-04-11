import { Link } from "react-router-dom"
import { Phone, MapPin, Mail, Facebook, Twitter, Linkedin, Youtube } from "lucide-react"
import "../styles/Footer.css"
import dwellLogo from "../images/lg.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="dream-house">
          <h3>YOUR DREAM HOUSE IS ONE STEP AWAY!</h3>

          <div className="contact-methods">
            <div className="contact-method">
              <div className="icon-circle">
                <Phone className="contact-icon" />
              </div>
              <h4>Call Us</h4>
              <p className="small-text">Free Calls</p>
              <p>1-800-555-1234</p>
            </div>

            <div className="contact-method">
              <div className="icon-circle">
                <MapPin className="contact-icon" />
              </div>
              <h4>Find Us</h4>
              <p>500 Terry Francine St.</p>
              <p>San Francisco, CA 94158</p>
            </div>

            <div className="contact-method">
              <div className="icon-circle">
                <Mail className="contact-icon" />
              </div>
              <h4>Email Us</h4>
              <p className="small-text">Client Email</p>
              <p>info@mysite.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-middle">
        <div className="footer-section">
          <h3>FIND YOUR NEXT HOME</h3>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double
            click me to add your own content and make changes to the font.
          </p>
        </div>

        <div className="footer-section">
          <h3>CONTACT US</h3>
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input type="text" id="firstName" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input type="text" id="lastName" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" required />
            </div>

            <div className="form-group">
              <label>Interested in</label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="interest" value="buy" />
                  Buy
                </label>
                <label>
                  <input type="radio" name="interest" value="rent" />
                  Rent
                </label>
                <label>
                  <input type="radio" name="interest" value="other" />
                  Other
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4"></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <img src={dwellLogo || "lg.png"} alt="Dwell Properties" />
          <span>EAZY RENT</span>
        </div>

        <div className="footer-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/properties">Properties</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <p>500 Terry Francine Street</p>
          <p>San Francisco, CA 94158</p>
          <p>info@mysite.com</p>
        </div>

        <div className="footer-social">
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

      <div className="copyright">
        <p>© 2035 by Dwell. Powered and secured by Wix</p>
      </div>
    </footer>
  )
}

export default Footer
