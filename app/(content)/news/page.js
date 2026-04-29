import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

export default function News() {
    const articles = getAllNews();

    return (
        <main>
            <h1>News Page</h1>
            <NewsList articles={articles} />
        </main>
    )
}
