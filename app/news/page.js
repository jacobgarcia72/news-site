import articles from "@/lib/articles";
import Link from "next/link";

export default function News() {
    return (
        <main>
            <h1>News</h1>
            <p>This is the news page.</p>
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>
                        <Link href={`/news/${article.id}`}>
                            {article.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}
