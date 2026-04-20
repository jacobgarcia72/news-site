import articles from "@/lib/dummy-articles";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function NewsArticle({ params }) {
    const { slug } = params;
    const article = articles.find((article) => article.slug === slug);

    if(!article) notFound();

    return (
        <article className="news-article">
            <header>
                <Link href={`/news/${article.slug}/image`}>
                    <img src={`/images/news/${article.image}`} alt={article.title} />
                </Link>
                <h1>{article.title}</h1>
                <time dateTime={article.date}>{article.date}</time>
            </header>
            <p>{article.content}</p>
        </article>
    )
}