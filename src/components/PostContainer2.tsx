import React, {useEffect, useState} from 'react';
import {postApi} from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer2 = () => {
    const [limit, setLimit] = useState(10);

    const {data: posts, error, isLoading,refetch} = postApi.useFetchAllPostsQuery(limit, {
        pollingInterval: 1000
    })


    useEffect(() => {
        setTimeout(() =>{
            setLimit(5)
        }, 2000)
    }, []);

    return (
        <div>
            {/*<button onClick={() =>refetch()}> refresh</button>*/}
            {isLoading && <h1> Идет загрузка.....</h1>}
            {error && <h1>Error!!!!</h1>}

            {posts && posts.map(post =>
                <PostItem key={post.id} post={post} />
            )}
        </div>
    );
};

export default PostContainer2;
