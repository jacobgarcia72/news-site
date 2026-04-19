import NewsList from "@/components/news-list";
import articles from "@/lib/dummy-articles";

export default function News() {
    return (
        <main>
            <h1>News Page</h1>
            <NewsList articles={articles} />
        </main>
    )
}
