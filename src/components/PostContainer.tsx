import React from 'react';
import {postApi} from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
    const {data: posts, error, isLoading} = postApi.useFetchAllPostsQuery(10)

    return (
        <div>
            {isLoading && <h1> Идет загрузка.....</h1>}
            {error && <h1>Error!!!!</h1>}

            {posts && posts.map(post =>
                <PostItem key={post.id} post={post} />
            )}
        </div>
    );
};

export default PostContainer;
