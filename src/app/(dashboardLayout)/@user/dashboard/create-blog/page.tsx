// import CreateBlogFormServer from "@/components/modules/user/createBlog/CreateBlogFormServer";

import { CreateBlogFormClient } from "@/components/modules/user/CreateBlog/CreateBlogFormClient";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";

export default function CreateBlogPage() {
    // const { data } = await blogService.getBlogPosts({}, {cache: "no-store"});

    return (
        <div className="h-[calc(100vh-100px)] flex items-center justify-center">
            {/* <CreateBlogFormServer></CreateBlogFormServer> */}
            <CreateBlogFormClient></CreateBlogFormClient>

            {/* {
                data.data.map((item: BlogPost) => (
                    <p key={item.id}>{item.title}</p>
                ))
            } */}
        </div>
    );
}