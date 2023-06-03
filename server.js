const express = require('express');
const articleRouter = require('./routes/articles');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/blog');


app.set('view engine', 'ejs');

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test Description'
    }]
    res.render('articles/index', { articles: articles });
})

app.listen(8080, () => {
    console.log("Server is running on port 8080")
});