import HistoryTable from "@/components/modules/user/history/HistoryTable";

import { blogService } from "@/services/blog.service";

export default async function HistoryPage() {
 

  const response = await blogService.getBlogPosts();

  console.log(response);


  const posts = response.data?.data || [];

  console.log(posts);

//   const pagination = response.data?.pagination || {
//     limit: 10,
//     page: 1,
//     total: 0,
//     totalPages: 1,
//   };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Blog Post History</h1>
      <HistoryTable posts={posts} />

      {/* <PaginationControls meta={pagination} /> */}
    </div>
  );
}