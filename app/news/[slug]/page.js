import articles from "@/lib/dummy-articles";
import { notFound } from "next/navigation";

export default function NewsArticle({ params }) {
    const { slug } = params;
    const article = articles.find((article) => article.slug === slug);

    if(!article) notFound();

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