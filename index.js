const express = require('express');
const app = express();
const dotenv = require('dotenv');
const multer = require('multer');
const postRoute = require('./routes/posts');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "/images")));
dotenv.config();

mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(console.log('Connected to MongoDB')).catch(err => console.log(err));


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images');
    }, filename: function (req, file, cb) {
        cb(null, req.body.name);
    }
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
    res.status(200).json('File has been uploaded !');
});

app.use('/api/posts', postRoute);


app.listen(5000, () => {
    console.log("RUNNING FINE");
});