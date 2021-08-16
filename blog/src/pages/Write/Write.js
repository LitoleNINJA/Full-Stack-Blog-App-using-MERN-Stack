import './Write.css'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Input } from '@material-ui/core';
import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Write() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const [author, setAuthor] = useState("");

    const handelSubmit = async(e) => {
        console.log("HERE");
        e.preventDefault();
        const newPost = {
            author,
            title,
            desc,
        };
        if(file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post('/upload', data);
            } catch (err) {
                console.log(err);
            }
        }
        try {
            const res = await axios.post('/posts', newPost);
            window.location.replace('/post/' + res.data._id);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='write'>
            {file && (
                <img src={ URL.createObjectURL(file) } alt="..." className='writeImg'/>
            )}
            <form className="writeForm" onSubmit={handelSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput" className='plusIcon'>
                        <AddIcon color='primary' style={{ fontSize: 40 }}/>
                    </label>
                    <Input type="file" id="fileInput" onChange={e=>setFile(e.target.files[0])} />
                    <Input
                        placeholder='Post Title' 
                        id='writeInput' 
                        autoFocus={true}
                        onChange = {e=>setTitle(e.target.value)} />
                </div>
                <div style={{color: "#121212"}}>
                <CKEditor
                    editor={ ClassicEditor }
                    config = {
                         { toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', '|', 'undo', 'redo' ] },
                         { placeholder: 'Tell Your Story ... ' }
                    }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log(data);
                        setDesc(data);
                    } } />
                </div>
                <Input 
                    id="author" 
                    placeholder='Written By ... '
                    onChange = {e=>setAuthor(e.target.value)} />
                <div className="submitBtn">
                    <Button type="submit" variant="contained" color="primary" size="large">PUBLISH</Button>
                </div>
            </form>
        </div>
    )
}
