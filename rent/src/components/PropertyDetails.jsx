"use client"
import { useParams } from "react-router-dom"
import "./PropertyDetail.css"
import house1 from "../assets/house1.jpg"
import house2 from "../assets/house2.jpg"
import house3 from "../assets/house3.jpg"
import house4 from "../assets/house4.jpg"
import rentHouse1 from "../assets/rent-house1.jpg"
import rentHouse2 from "../assets/rent-house2.jpg"
import rentHouse3 from "../assets/rent-house3.jpg"
import rentHouse4 from "../assets/rent-house4.jpg"
import agentImage from "../assets/agent.jpg"

const PropertyDetail = () => {
  const { id } = useParams()

  // Mock property data - in a real app, you would fetch this from an API
  const properties = [
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
      year: 2035,
      type: "buy",
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
      year: 2035,
      type: "buy",
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
      year: 2035,
      type: "buy",
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
      year: 2035,
      type: "buy",
    },
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
      year: 2035,
      type: "rent",
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
      year: 2035,
      type: "rent",
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
      year: 2035,
      type: "rent",
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
      year: 2035,
      type: "rent",
    },
  ]

  const property = properties.find((p) => p.id === Number.parseInt(id))

  if (!property) {
    return <div className="property-not-found">Property not found</div>
  }

  return (
    <div className="property-detail">
      <div className="property-header">
        <h1>{property.address}</h1>
        <div className="property-price">{property.price}</div>
      </div>

      <div className="property-image-container">
        <img src={property.image || "/placeholder.svg"} alt={property.address} className="property-main-image" />
      </div>

      <div className="property-content">
        <div className="property-info">
          <h2>Property Description</h2>
          <p>
            This item is connected to a text field in your content collection. Double click what you want to edit and
            then select "Change Content" to add your own content to the collection. Want to view and manage all your
            collections? Click the Content Manager icon on the add panel to your left. In the Content Manager, you can
            update items, add new fields, create dynamic pages and more.
          </p>

          <div className="property-specs">
            <div className="spec-item">
              <div className="spec-icon bedrooms-icon"></div>
              <div className="spec-label">Bedrooms</div>
              <div className="spec-value">{property.beds}</div>
            </div>

            <div className="spec-item">
              <div className="spec-icon bathrooms-icon"></div>
              <div className="spec-label">Bathrooms</div>
              <div className="spec-value">{property.baths}</div>
            </div>

            <div className="spec-item">
              <div className="spec-icon sqft-icon"></div>
              <div className="spec-label">Sqft</div>
              <div className="spec-value">{property.sqft}</div>
            </div>

            <div className="spec-item">
              <div className="spec-icon levels-icon"></div>
              <div className="spec-label">Levels</div>
              <div className="spec-value">{property.levels}</div>
            </div>

            <div className="spec-item">
              <div className="spec-icon year-icon"></div>
              <div className="spec-label">Built Year</div>
              <div className="spec-value">{property.year}</div>
            </div>

            <div className="spec-item">
              <div className="spec-icon location-icon"></div>
              <div className="spec-label">Main Location</div>
              <div className="spec-value">{property.location}</div>
            </div>
          </div>

          <h2>Contact Agent</h2>
          <form className="contact-agent-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First name *</label>
                <input type="text" id="firstName" required />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last name *</label>
                <input type="text" id="lastName" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" />
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>

        <div className="agent-info">
          <h3>Brenda Rogers</h3>
          <p className="agent-title">Realtor # 123.456.78</p>
          <img src={agentImage || "/placeholder.svg"} alt="Brenda Rogers" className="agent-image" />

          <div className="agent-contact">
            <h4>Email</h4>
            <p>info@mysite.com</p>

            <h4>Phone</h4>
            <p>123-456-7890</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetail
