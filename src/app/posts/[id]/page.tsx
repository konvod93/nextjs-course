const fetchPost = async (postId: string) => {
    const post = await fetch(`http://localhost:3000/api/posts/${postId}`, {
        method: "GET",
    });
    return post.json();
};

export async function generateMetadata({ params }: any) {
    const { post } = await fetchPost(params.id);

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            url: `/posts/${params.id}`,
            siteName: "Konvod",
            images: [
                {
                    url: post.img_url,
                    width: 1260,
                    height: 800,
                },
            ],
            locale: "en-US",
            type: "website",
        }
    }
}

export default function PostID({ params }: any) {
    // fetch from here with the params
    return <main>Post {params.id}</main>
}