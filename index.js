const express = require("express");
const AppRouter = require('./router/app');
const app = express();
const port = 8000;


app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('view')
})
app.use('/upload',AppRouter)

app.listen(port,()=>console.log(`server run with ${port}..`));