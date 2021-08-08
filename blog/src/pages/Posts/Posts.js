import './Posts.css';
import Post from '../../components/Post/Post';
import axios from "axios";
import { useState, useEffect } from "react";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios('/posts');
          setPosts(result.data);
        };
        fetchData();
    }, []);

    return (
        <div className='posts'>
            {posts.map((p) => (
                <Post post={p}/>
            ))}
        </div>
    )
}
