import articles from "@/lib/articles";

export default function NewsArticle({ params }) {
    const { slug } = params;
    const article = articles.find((article) => article.id === parseInt(slug));

    return (
        <main>
            <article>
                <h1>{article.title}</h1>
                <p>{article.content}</p>
            </article>
        </main>
    )
}