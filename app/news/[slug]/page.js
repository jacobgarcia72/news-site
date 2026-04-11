import articles from "@/lib/dummy-articles";

export default function NewsArticle({ params }) {
    const { slug } = params;
    const article = articles.find((article) => article.slug === slug);

    return (
        <article className="news-article">
            <header>
                <img src={`/images/news/${article.image}`} alt={article.title} />
                <h1>{article.title}</h1>
                <time dateTime={article.date}>{article.date}</time>
            </header>
            <p>{article.content}</p>
        </article>
    )
}