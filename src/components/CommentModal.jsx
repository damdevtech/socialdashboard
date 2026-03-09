import { useState } from "react";

function CommentModal({ post, closeModal, addComment }) {
    const [comment, setComment] = useState("");

    const handleSubmit = () => {
        if (comment.trim() === "") return;

        addComment(post.id, comment);
        setComment("");
        closeModal();
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

            <div className="bg-white w-[500px] rounded-xl p-6">

                <div className="flex justify-between mb-4">
                    <h2 className="font-semibold">Comments</h2>
                    <button onClick={closeModal}>✖</button>
                </div>

                <p className="mb-4 text-gray-700">{post.content}</p>

                {/* show existing comments */}
                <div className="mb-4  none">
                    {post.comments.length === 0 ? (
                        <p className="text-gray-400 text-sm">No comments yet.</p>
                    ) : (
                        <ul>
                            {post.comments.map((c, i) => (
                                <li key={i} className="border-b py-1 text-gray-700">
                                    {c}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <textarea
                    placeholder="Write a comment..."
                    className="w-full border rounded p-2 mb-3"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />

                <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Comment
                </button>

            </div>

        </div>
    );
}

export default CommentModal;