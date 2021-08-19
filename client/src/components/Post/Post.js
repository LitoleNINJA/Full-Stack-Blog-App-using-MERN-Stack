import "./Post.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Post({ post }) {
    const loc = "https://localhost:5000/images/";

    useEffect(() => {
        Aos.init({
            easing: "ease-in-out",
        });
    }, [])

    return (
        <div id="post" data-aos='fade-in' data-aos-delay="1500">
            {post.photo && <img className="postImg" src={loc + post.photo} alt="" />}
            <div className="postInfo">
                <div className="postDate">
                    <span>
                        <strong>Date Added : </strong>{" "}
                        {new Date(post.createdAt).toDateString()}
                    </span>
                </div>
                <Link to={`/post/${post._id}`} className="link">
                    <div className="postTitle">{post.title}</div>
                </Link>
                <div className="postContent">
                    <p>{post.desc}</p>
                </div>
            </div>
        </div>
    );
}
