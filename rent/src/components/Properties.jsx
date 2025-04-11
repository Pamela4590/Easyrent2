
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import "../styles/Properties.css"
import house1 from "../images/house1.jpg"
import house2 from "../images/house2.jpg"
import house3 from "../images/house3.jpg"
import house4 from "../images/property4.jpg"
import rentHouse1 from "../images/property1.jpg"
import rentHouse2 from "../images/property2.jpg"
import rentHouse3 from "../images/property3.jpg"
import rentHouse4 from "../images/property5.jpg"

const Properties = () => {
  const { type } = useParams()
  const [filter, setFilter] = useState(type || "all")

  useEffect(() => {
    if (type) {
      setFilter(type)
    }
  }, [type])

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
      type: "rent",
    },
  ]

  const filteredProperties = filter === "all" ? properties : properties.filter((property) => property.type === filter)

  return (
    <div className="properties-page">
      <div className="properties-hero">
        <div className="properties-hero-content">
          <h2>OUR EXCLUSIVE PROPERTIES</h2>
          <h1>All Properties</h1>
        </div>
      </div>

      <div className="properties-filter">
        <div className="filter-options">
          <button
            className={filter === "all" ? "filter-option active" : "filter-option"}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={filter === "buy" ? "filter-option active" : "filter-option"}
            onClick={() => setFilter("buy")}
          >
            Buy
          </button>
          <button
            className={filter === "rent" ? "filter-option active" : "filter-option"}
            onClick={() => setFilter("rent")}
          >
            Rent
          </button>
        </div>
      </div>

      <div className="properties-grid">
        {filteredProperties.map((property) => (
          <Link to={`/property/${property.id}`} className="property-card" key={property.id}>
            <div className="property-image" style={{ backgroundImage: `url(${property.image})` }}>
              <div className={property.type === "buy" ? "buy-tag" : "rent-tag"}>
                {property.type === "buy" ? "BUY" : "RENT"}
              </div>
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
    </div>
  )
}

export default Properties
