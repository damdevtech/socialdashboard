import { useState } from "react";

function PostCards({ post, openComments }) {

    const [likes, setLikes] = useState(post.likes);
    const [shares, setShares] = useState(post.shares);


    return (
        <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition bg-white">

            <div className="flex gap-3">

                <img
                    src={post.avatar}
                    alt={post.username}
                    className="w-10 h-10 rounded-full"
                />

                <div className="flex-1">

                    <div className="flex items-center gap-2">
                        <span className="font-semibold">{post.username}</span>
                        <span className="text-gray-500 text-sm">{post.handle}</span>
                    </div>

                    <p className="mt-1 text-gray-800">{post.content}</p>

                    <div className="flex gap-6 mt-4 text-gray-500 text-sm">

                        {/* LIKE */}
                        <button
                            onClick={() => setLikes(likes + 1)}
                            className="flex items-center gap-1 hover:text-red-500 transition"
                        >
                            ❤️ {likes}
                        </button>

                        {/* COMMENT */}
                        <button
                            onClick={() => openComments(post)}
                            className="flex items-center gap-1 hover:text-blue-500 transition"
                        >
                            💬 {post.commentsCount.length}
                        </button>

                        {/* SHARE */}
                        <button
                            onClick={() => setShares(shares + 1)}
                            className="flex items-center gap-1 hover:text-green-500 transition"
                        >
                            🔁 {shares}
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default PostCards;