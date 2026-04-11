import articles from "@/lib/dummy-articles";
import Link from "next/link";

export default function News() {
    return (
        <main>
            <h1>News Page</h1>
            <ul className="news-list">
                {articles.map((article) => (
                    <li key={article.id}>
                        <Link href={`/news/${article.slug}`}>
                            <img src={`/images/news/${article.image}`} alt={article.title} />
                            <span>{article.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}
