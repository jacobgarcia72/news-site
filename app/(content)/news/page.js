import NewsList from "@/components/news-list";

export default async function News() {
    const res = await fetch('http://localhost:8080/news');

    if (!res.ok) {
        throw new Error('Failed to fetch news');
    }

    const articles = await res.json();

    return (
        <main>
            <h1>News Page</h1>
            <NewsList articles={articles} />
        </main>
    )
}
