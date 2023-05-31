const express = require('express');
const app = express();
const articleRouter = require('./routes/articles');

app.set('view engine', 'ejs');

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(8080, () => {
    console.log("Server is running on port 8080")
});