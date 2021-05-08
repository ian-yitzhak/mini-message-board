const express = require('express')

const app = express()
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const usersRouter = require('./routes/user');

app.set('views', 'views')
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);






app.set('views engine' , 'ejs')

const port = process.env.PORT || 3000

app.listen(port, ()=> console.log(`on ${port}`))