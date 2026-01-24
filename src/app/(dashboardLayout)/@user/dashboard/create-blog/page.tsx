import { blogService } from "@/services/blog.service";
import CreateBlogFormServer from "../../CreateBlog/CreateBlogFormServer";
import { BlogPost } from "@/types";

export default async function CreateBlogPage() {
    const { data } = await blogService.getBlogPosts({}, {cache: "no-store"});

    console.log(data);
    return (
        <div>
            <CreateBlogFormServer></CreateBlogFormServer>
            {
                data.data.map((item: BlogPost) => (
                    <p key={item.id}>{item.title}</p>
                ))}
        </div>
    );
};