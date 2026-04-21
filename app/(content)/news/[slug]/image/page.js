import articles from "@/lib/dummy-articles";
import { notFound } from "next/navigation";

export default function ImagePage({ params }) {
    const { slug } = params;
    const article = articles.find((article) => article.slug === slug);

    if(!article) notFound();

    return (
        <div className="fullscreen-image">
            <img src={`/images/news/${article.image}`} alt={article.title} />
        </div>
    )
}