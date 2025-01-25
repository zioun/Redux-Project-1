import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './postSlice';
import '../../App.css';

const PostView = () => {
    const {isLoading, posts, error} = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUsers());
    },[]);
    return (
        <div>
            <h2>Post View</h2>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div class='card-container'>
                {posts.map((post) => (
                    <div class='card-design' key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostView;