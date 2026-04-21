"use client"

import articles from "@/lib/dummy-articles";
import { notFound, useRouter } from "next/navigation";

export default function InterceptedImagePage({ params }) {
    const router = useRouter();

    const { slug } = params;
    const article = articles.find((article) => article.slug === slug);

    if(!article) notFound();

    return (
        <>
            <div className="modal-backdrop" onClick={router.back} />
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img src={`/images/news/${article.image}`} alt={article.title} />
                </div>
            </dialog>
        </>
    )
}