import { useState } from 'react';

function PostCards({ post }) {

    const [likes, setLikes] = useState(post.likes);
    const [comments, setComments] = useState(post.comments);
    const [shares, setShares] = useState(post.shares);

    return (
        <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition cursor-pointer bg-white">
            <div className="flex gap-3">
                <img src={post.avatar} alt={post.username} className="w-10 h-10 rounded-full" />

                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">{post.username}</span>
                        <span className="text-gray-500 text-sm">{post.handle}</span>
                    </div>

                    <p className="mt-1 text-gray-800">{post.content}</p>

                    <div className="flex gap-6 mt-4 text-gray-500 text-sm">

                        <button
                            onClick={() => setLikes(likes + 1)}
                            className="flex items-center gap-1 hover:text-red-500 transition">
                            ❤️ {likes}
                        </button>

                        <button
                            onClick={() => setComments(comments + 1)}
                            className="flex items-center gap-1 hover:text-blue-500 transition">
                            💬 {comments}
                        </button>

                        <button
                            onClick={() => setShares(shares + 1)}
                            className="flex items-center gap-1 hover:text-green-500 transition">
                            🔁 {shares}
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostCards;
