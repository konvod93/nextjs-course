// "use client";

// import { useState, useEffect } from "react";
// // const fetchPost = async (postId: string) => {
// //     const post = await fetch(`http://localhost:3000/api/posts/${postId}`, {
// //         method: "GET",
// //     });
// //     return post.json();
// // };

// // export async function generateMetadata({ params }: any) {
// //     const { post } = await fetchPost(params.id);

// //     return {
// //         title: post.title,
// //         description: post.description,
// //         openGraph: {
// //             title: post.title,
// //             description: post.description,
// //             url: `/posts/${params.id}`,
// //             siteName: "Konvod",
// //             images: [
// //                 {
// //                     url: post.img_url,
// //                     width: 1260,
// //                     height: 800,
// //                 },
// //             ],
// //             locale: "en-US",
// //             type: "website",
// //         }
// //     }
// // }

// type Post = {
//     title?: string;
//     description?: string;
// }
// export default function PostID({ params }: any) {
// //     const response = await fetch(`http://127.0.0.1:3000/api/posts/${postId}`, {
// //         method: 'GET'
// //     });

// //     return response.json();
// // };

// // export default async function PostID({ params }: any) {
// //     const { post } = await getPostById(params.id); 

// //     console.log(post)
//     const [post, setPost] = useState<Post | null>(null);
//     const [loading, setLoading] = useState(false);

//     const getPostById = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(
//           `http://localhost:3000/api/posts/${params.id}`,
//           {
//             method: "GET",
//           }
//         );
//         if (response) {
//             const { post } = await response.json();
//             if  (post) setPost(post);            
//         };
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     useEffect(() => {
//         getPostById()
//     }, [])

//     return (
//       <main>
//         {loading && <div>Loading</div>}
//         {!loading && <div>
//           {post && <h1>{post.title}</h1>}
//           {post && <p>{post.description}</p>}
//         </div>}
//       </main>
//     );
// }

async function getPostById(postId: string) {
    const response = await fetch(`http://127.0.0.1:3000/api/posts/${postId}`, {
         method: 'GET',
         next: {
            revalidate: 5000,
         }
    });
    return response.json();
}

export default async function PostID({ params }: any) {
    const { post } = await getPostById(params.id);

    return (
        <main>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
        </main>
    );
}

