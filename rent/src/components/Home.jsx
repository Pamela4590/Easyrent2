import { Link } from "react-router-dom"
import "../styles/Home.css"
import heroImage from "../images/firsthouse.jpg"
import buyImage from "../images/home.jpg"
import rentImage from "../images/fifth.jpg"
import house1 from "../images/house1.jpg"
import house2 from "../images/house2.jpg"
import house3 from "../images/house3.jpg"
import house4 from "../images/property5.jpg"
import rentHouse1 from "../images/property1.jpg"
import rentHouse2 from "../images/property2.jpg"
import rentHouse3 from "../images/property3.jpg"
import rentHouse4 from "../images/property4.jpg"
import clientImage from "../images/Screenshot 2025-04-11 162333.png"

const Home = () => {
  const forSaleProperties = [
    {
      id: 1,
      image: house1,
      address: "17081 Perry Street",
      location: "San Francisco, CA, USA",
      price: "$850,000",
      beds: 4,
      baths: 2,
      levels: 3,
      sqft: 1234,
    },
    {
      id: 2,
      image: house2,
      address: "52591 Union Boulevard",
      location: "San Francisco, CA, USA",
      price: "$580,000",
      beds: 4,
      baths: 2,
      levels: 3,
      sqft: 1234,
    },
    {
      id: 3,
      image: house3,
      address: "33234 Washington Avenue",
      location: "San Francisco, CA, USA",
      price: "$770,000",
      beds: 4,
      baths: 2,
      levels: 2,
      sqft: 1234,
    },
    {
      id: 4,
      image: house4,
      address: "15066 Banks Street",
      location: "San Francisco, CA, USA",
      price: "$700,000",
      beds: 4,
      baths: 2,
      levels: 3,
      sqft: 1234,
    },
  ]

  const forRentProperties = [
    {
      id: 5,
      image: rentHouse1,
      address: "11251 Terry Street",
      location: "San Francisco, CA, USA",
      price: "$1,500",
      beds: 4,
      baths: 2,
      levels: 3,
      sqft: 1234,
    },
    {
      id: 6,
      image: rentHouse2,
      address: "22043 Columbus Avenue",
      location: "San Francisco, CA, USA",
      price: "$1,200",
      beds: 4,
      baths: 2,
      levels: 2,
      sqft: 1234,
    },
    {
      id: 7,
      image: rentHouse3,
      address: "15878 Mulberry Street",
      location: "San Francisco, CA, USA",
      price: "$1,800",
      beds: 4,
      baths: 2,
      levels: 2,
      sqft: 1234,
    },
    {
      id: 8,
      image: rentHouse4,
      address: "16698 Spring Street",
      location: "San Francisco, CA, USA",
      price: "$2,200",
      beds: 4,
      baths: 2,
      levels: 3,
      sqft: 1234,
    },
  ]

  return (
    <div className="home">
      {/* Hero Section */}

        <div className="hero-content">
          <h1>New Properties</h1>
          <p>EXCLUSIVELY BY DWELL</p>
          <Link to="/properties" className="explore-btn">
            Explore
          </Link>
        </div>

      {/* What Are You Looking For Section */}
      <section className="looking-for">
        <h2>WHAT ARE YOU LOOKING FOR?</h2>
        <div className="options">
          <Link to="/properties/buy" className="option buy" style={{ backgroundImage: `url(${buyImage})` }}>
            <div className="option-overlay">
              <h3>Buy</h3>
            </div>
          </Link>
          <Link to="/properties/rent" className="option rent" style={{ backgroundImage: `url(${rentImage})` }}>
            <div className="option-overlay">
              <h3>Rent</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* For Sale Properties Section */}
      <section className="properties-section">
        <h2>NEW PROPERTIES</h2>
        <h3>For Sale</h3>
        <div className="properties-grid">
          {forSaleProperties.map((property) => (
            <Link to={`/property/${property.id}`} className="property-card" key={property.id}>
              <div className="property-image" style={{ backgroundImage: `url(${property.image})` }}>
                <div className="buy-tag">BUY</div>
              </div>
              <div className="property-details">
                <h4>{property.address}</h4>
                <p className="location">{property.location}</p>
                <p className="price">{property.price}</p>
                <div className="property-features">
                  <div className="feature">
                    <span className="feature-label">Beds</span>
                    <span className="feature-value">{property.beds}</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Baths</span>
                    <span className="feature-value">{property.baths}</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Levels</span>
                    <span className="feature-value">{property.levels}</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Sqft</span>
                    <span className="feature-value">{property.sqft}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="view-more-container">
          <Link to="/properties/buy" className="view-more-btn">
            View More
          </Link>
        </div>
      </section>

      {/* Client Stories Section */}
      <section className="client-stories">
        <h2>CLIENTS STORIES</h2>
        <div className="testimonial">
          <div className="testimonial-content">
            <p>
              "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double
              click me to add your own content and make changes to the font."
            </p>
            <h4>Alexis Willis, NJ</h4>
            <div className="testimonial-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
          <div className="testimonial-image" style={{ backgroundImage: `url(${clientImage})` }}></div>
        </div>
      </section>

      {/* For Rent Properties Section */}
      <section className="properties-section">
        <h2>NEW PROPERTIES</h2>
        <h3>For Rent</h3>
        <div className="properties-grid">
          {forRentProperties.map((property) => (
            <Link to={`/property/${property.id}`} className="property-card" key={property.id}>
              <div className="property-image" style={{ backgroundImage: `url(${property.image})` }}>
                <div className="rent-tag">RENT</div>
              </div>
              <div className="property-details">
                <h4>{property.address}</h4>
                <p className="location">{property.location}</p>
                <p className="price">{property.price}</p>
                <div className="property-features">
                  <div className="feature">
                    <span className="feature-label">Beds</span>
                    <span className="feature-value">{property.beds}</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Baths</span>
                    <span className="feature-value">{property.baths}</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Levels</span>
                    <span className="feature-value">{property.levels}</span>
                  </div>
                  <div className="feature">
                    <span className="feature-label">Sqft</span>
                    <span className="feature-value">{property.sqft}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="view-more-container">
          <Link to="/properties/rent" className="view-more-btn">
            View More
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
