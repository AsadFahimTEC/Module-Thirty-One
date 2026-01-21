//! This can be used only in client component
// import { useParams } from "next/navigation";

import { blogService } from "@/services/blog.service";

export default async function BlogPage({ params }:
    {
        params: Promise<{ id: string }>;
    }) {
    const { id } = await params;

    const { data } = await blogService.getBlogById(id);

    return (
        // <div>
        //     <h1> This is a dynamic page {id} </h1>
        // </div>

        <section className="max-w-5xl mx-auto px-4 py-10">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {data.title}
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                <span>
                    ✍️ {data.author?.name || "Unknown Author"}
                </span>
                <span>
                    📅 {new Date(data.createdAt).toLocaleDateString()}
                </span>
                <span>
                    💬 {data._count?.comments ?? 0} comments
                </span>
                {data.isFeatured && (
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                        Featured
                    </span>
                )}
            </div>
            {/* Tags */}
            {data.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                    {data.tags.map((tag: string) => (
                        <span
                            key={tag}
                            className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            )}

            {/* Content */}
            <article className="prose prose-lg max-w-none">
                {data.content}
            </article>
            {/* Status */}
            <div className="mt-8">
                <span
                    className={`inline-block px-4 py-1 rounded text-sm font-medium ${data.status === "PUBLISHED"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                        }`}
                >
                    {data.status}
                </span>
            </div>
        </section>
    );
};


// This can be used only in client component
// const {id} = useParams();