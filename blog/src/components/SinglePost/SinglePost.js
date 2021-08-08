import './SinglePost.css'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react'; 

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get('/posts/' + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        }
        getPost();
    }, [path])

    const loc = "http://localhost:5000/images/";

    const handelEdit = () => {
        try {
            setUpdate(true);
        } catch (err) {
            console.log(err);
        }
    }

    const handelDelete = async() => {
        try {
            await axios.delete("/posts/" + path);
            window.location.replace("/");
        } catch (err) {
            console.log(err);
        }
    }

    const handelUpdate = async() => {
        try {
            const newPost = {
                title,
                desc
            }
            await axios.put("/posts/" + path, newPost);
            window.location.reload();
            setUpdate(false);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='singlePost'>
            { post.photo && (
                <img src={ loc + post.photo } className='singlepostImg' />
            )}
            <div className='singlepostDate'>
                <strong>Date Added : </strong> {new Date(post.createdAt).toDateString()}
                <br /><br />
                <strong>Author : </strong> {post.author}
            </div>
            <EditIcon className='editIcon' onClick={handelEdit} />
            <DeleteIcon className='deleteIcon' onClick={handelDelete} />
            <div className="inputWrapper">
                {
                    update ? <input 
                                type="text" 
                                value={title} 
                                className='singlepostTitleInput'
                                onChange={ (e)=>setTitle(e.target.value)} 
                                autoFocus/> : (
                        <h1 className="singlepostTitle">{post.title}</h1>
                    )
                }
                {
                    update ?    <div className="inputWrapper"> 
                                    <textarea 
                                    type="text" 
                                    value={desc} 
                                    className='singlepostDescInput' 
                                    onChange={ (e)=>setDesc(e.target.value) }/> 
                                    <Button 
                                        variant='contained' 
                                        color='primary'
                                        onClick={handelUpdate}>UPDATE</Button>
                                </div> : (
                        <p className="singlepostDesc">{post.desc}</p>
                    )
                }
            </div>
        </div>
    )
}
