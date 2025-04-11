import "../styles/News.css"
import newsImage1 from "../images/news1.jpg"
import newsImage2 from "../images/news2.jpg"
import newsImage3 from "../images/news3.jpg"

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Choosing Your Next Apartment",
      date: "Nov 1, 2035",
      author: "Mike Helman",
      image: newsImage1,
      excerpt:
        'This item is connected to a text field in your content collection. Double click what you want to edit and then select "Change Content" to add your own content to the collection. Want to view and manage all your collections? Click the Content Manager icon on the add panel to your left. In the Content Manager, you can update items, add new fields, create dynamic pages and more.',
    },
    {
      id: 2,
      title: "10 Tips for Students to Pay Rent",
      date: "Sep 30, 2035",
      author: "Gregory Jems",
      image: newsImage2,
      excerpt:
        'This item is connected to a text field in your content collection. Double click what you want to edit and then select "Change Content" to add your own content to the collection. Want to view and manage all your collections? Click the Content Manager icon on the add panel to your left. In the Content Manager, you can update items, add new fields, create dynamic pages and more.',
    },
    {
      id: 3,
      title: "Find Your Next Vacation House",
      date: "Aug 31, 2035",
      author: "Gerry Grossman",
      image: newsImage3,
      excerpt:
        'This item is connected to a text field in your content collection. Double click what you want to edit and then select "Change Content" to add your own content to the collection. Want to view and manage all your collections? Click the Content Manager icon on the add panel to your left. In the Content Manager, you can update items, add new fields, create dynamic pages and more.',
    },
  ]

  return (
    <div className="news-page">
      <div className="news-hero">
        <div className="news-hero-content">
          <h2>OUR UPDATES</h2>
          <h1>NEWS</h1>
        </div>
      </div>

      <div className="news-grid">
        {newsArticles.map((article) => (
          <div className="news-card" key={article.id}>
            <div className="news-date">{article.date}</div>
            <h3 className="news-title">{article.title}</h3>
            <div className="news-author">By {article.author}</div>
            <div className="news-image">
              <img src={article.image || "/placeholder.svg?height=300&width=500"} alt={article.title} />
            </div>
            <p className="news-excerpt">{article.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News
