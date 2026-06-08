import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const input = [];
const title = [];
var blogInput = 1;
const data = {
    blogs: input,
    name: title,
    post: blogInput
}


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index.ejs', data);
});

app.post('/blog', (req, res) => {
    res.render('blog.ejs', data);
});

app.post('/submit', (req, res) => {
    input.push(req.body['blogPost']);
    title.push(req.body['title']);
    res.render('index.ejs', data);
});

app.listen(port, () => {
    console.log(`Listening to ${port}`);
});



/*<form action="/post" method="POST" id="<%= name[i] %>">
            <input type="submit" value="<%= name[i] %>">
            </form>*/