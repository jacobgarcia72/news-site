import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

export default function InterceptedImagePage({ params }) {
    const { slug } = params;
    const article = getNewsItem(slug);

    if(!article) notFound();

    return (
        <>
            <ModalBackdrop />
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img src={`/images/news/${article.image}`} alt={article.title} />
                </div>
            </dialog>
        </>
    )
}