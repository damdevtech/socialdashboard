import PostCards from "./PostCards";
import posts from "../data/posts";
import { useState } from "react";
import CommentModal from "./CommentModal";

function Feeds() {
    const [selectedPost, setSelectedPost] = useState(null);
    const [post, setPost] = useState(posts);

    const addComment = (postId, newComment) => {
        const updatedPosts = post.map((p) => {
            if (p.id === postId) {
                return {
                    ...p,
                    comments: [...p.comments, newComment]
                };
            }
            return p;
        });

        setPost(updatedPosts);
    };

    return (
        <div className="feeds">
            {post.map((postItem) => (
                <PostCards
                    key={postItem.id}
                    post={postItem}
                    comments={postItem.comments}
                    commentsCount={postItem.comments.length}
                    openComments={() => setSelectedPost(postItem)}
                />
            ))}

            {selectedPost && (
                <CommentModal
                    post={selectedPost}
                    addComment={addComment}
                    closeModal={() => setSelectedPost(null)}
                />
            )}
        </div>
    );
}

export default Feeds;