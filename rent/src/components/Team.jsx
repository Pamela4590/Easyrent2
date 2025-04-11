import { Link } from "react-router-dom"
import "../styles/Team.css"
import agent1 from "../images/agent1.jpg"
import agent2 from "../images/agent2.jpg"
import agent3 from "../images/agent3.jpg"
import agent4 from "../images/agent4.jpg"
import agent5 from "../images/agent5.jpg"
import agent6 from "../images/agent6.jpg"

const Team = () => {
  const agents = [
    {
      id: 1,
      name: "Gregory Jems",
      title: "Realtor # 123.456.78",
      image: agent1,
      email: "info@mysite.com",
      phone: "123-456-7890",
      linkedin: "https://linkedin.com",
    },
    {
      id: 2,
      name: "Britney Bails",
      title: "Realtor # 123.456.78",
      image: agent2,
      email: "info@mysite.com",
      phone: "123-456-7890",
      linkedin: "https://linkedin.com",
    },
    {
      id: 3,
      name: "Gerry Grossman",
      title: "Realtor # 123.456.78",
      image: agent3,
      email: "info@mysite.com",
      phone: "123-456-7890",
      linkedin: "https://linkedin.com",
    },
    {
      id: 4,
      name: "Don White",
      title: "Realtor # 123.456.78",
      image: agent4,
      email: "info@mysite.com",
      phone: "123-456-7890",
      linkedin: "https://linkedin.com",
    },
    {
      id: 5,
      name: "Brenda Rogers",
      title: "Realtor # 123.456.78",
      image: agent5,
      email: "info@mysite.com",
      phone: "123-456-7890",
      linkedin: "https://linkedin.com",
    },
    {
      id: 6,
      name: "Mike Helman",
      title: "Realtor # 123.456.78",
      image: agent6,
      email: "info@mysite.com",
      phone: "123-456-7890",
      linkedin: "https://linkedin.com",
    },
  ]

  return (
    <div className="team-page">
      <div className="team-hero">
        <div className="team-hero-content">
          <h2>OUR TEAM</h2>
          <h1>Agents</h1>
        </div>
      </div>

      <div className="agents-grid">
        {agents.map((agent) => (
          <div className="agent-card" key={agent.id}>
            <h3>{agent.name}</h3>
            <p className="agent-title">{agent.title}</p>
            <div className="agent-image">
              <img src={agent.image || "/placeholder.svg?height=300&width=300"} alt={agent.name} />
            </div>
            <div className="agent-contact-info">
              <div className="contact-item">
                <h4>Email</h4>
                <p>{agent.email}</p>
              </div>
              <div className="contact-item">
                <h4>Phone</h4>
                <p>{agent.phone}</p>
              </div>
              <Link to={agent.linkedin} className="linkedin-link">
                LinkedIn
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
