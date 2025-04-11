import "../styles/Contact.css"
import heroImage from "../images/firsthouse.jpg"
const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}></section>
        <div className="contact-hero-content">
          <h2>BE IN TOUCH</h2>
          <h1>Contact</h1>
        </div>
      </div>

      <div className="contact-content">
        <div className="office-info">
          <h3>Our Office</h3>
          <div className="office-details">
            <div className="address">
              <p>500 Terry Francine Street</p>
              <p>San Francisco, CA 94158</p>
            </div>
            <div className="contact-details">
              <p>Tel: 123-456-7890</p>
              <p>Fax: 123-456-7890</p>
            </div>
            <div className="email-details">
              <p>info@mysite.com</p>
            </div>
          </div>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1332402861897!2d-122.38939548468166!3d37.78083997975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7fd683557c3d%3A0x1fef0d94922ad766!2sSan%20Francisco%2C%20CA%2094158!5e0!3m2!1sen!2sus!4v1649361331420!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
        </div>

        <div className="contact-form-section">
          <h3>GET IN TOUCH</h3>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. I'm a great place for you to tell a story and
            let your users know a little more about you.
          </p>
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
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="6"></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
