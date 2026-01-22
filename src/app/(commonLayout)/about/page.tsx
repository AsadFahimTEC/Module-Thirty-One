
// "use client";

import { blogService } from "@/services/blog.service";
import { useEffect, useState } from "react";

// export const dynamic = 'force-dynamic';

export default function AboutPage() {
const [data, setData] = useState();

console.log(data);

useEffect(() => {
    (async () => {
        const { data } = await blogService.getBlogPosts();
        setData(data);
    }) ();
}, []);

   

    return (
        <div>
            <h1> This is about page component </h1>
        </div>
    );
};


  //* For simulating load time
    // await new Promise((resolve) => setTimeout(resolve, 4000));
    
    //* For simulating error
    // throw new Error("Something went wrong");