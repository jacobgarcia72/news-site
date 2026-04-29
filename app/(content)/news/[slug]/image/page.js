import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

export default function ImagePage({ params }) {
    const { slug } = params;
    const article = getNewsItem(slug);

    if(!article) notFound();

    return (
        <div className="fullscreen-image">
            <img src={`/images/news/${article.image}`} alt={article.title} />
        </div>
    )
}