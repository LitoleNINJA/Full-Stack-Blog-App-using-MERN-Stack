import './Post.css'
import { Link } from 'react-router-dom';

export default function Post({post}) {
    const loc = "http://localhost:5000/images/";
    console.log(loc+post.photo)
    return (
        <div className='post'>
            {post.photo && (
                <img className='postImg' src={loc + post.photo} alt="" />
            )}
            <div className="postInfo">
                <div className="postDate">
                    <span><strong>Date Added : </strong> {new Date(post.createdAt).toDateString()}</span>
                </div>
                <Link to={`/post/${post._id}`} className='link'>
                    <div className="postTitle">
                        {post.title}
                    </div>
                </Link>
                <div className="postContent">
                    <p>
                        {post.desc}
                    </p>
                </div>
            </div>
        </div>
    )
}
