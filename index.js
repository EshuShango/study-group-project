const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const controllers = require('./controllers');
const sequelize = require('./config/connection');

const path = require("path")

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    cookie: { 
        maxAge: 90000,
        sameSite: 'strict' 
    },
    resave: false,
    saveUninitialized: true
};


app.use(session(sess));
//app.use(express.static('public'));

app.use("/", express.static(path.join(__dirname, '/public')))
//difjndsofndsfndsf

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(controllers);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on http://localhost:' + PORT));
});