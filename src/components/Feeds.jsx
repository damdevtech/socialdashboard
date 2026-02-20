import PostCards from "./PostCards";
import posts from "../data/posts";


function Feeds() {


    return (
        <div className="feeds">
            {posts.map((post) => (
                <PostCards key={post.id} post={post} />
            ))}
        </div>
    );
}

export default Feeds;