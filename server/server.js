const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const path = require('path')
const dbConnection = require('./database') 
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport')
const app = express()
const PORT = process.env.PORT || 8080

const user = require('./routes/user')

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

if (process.env.NODE_ENV === "production") {
	app.use(express.static("../client/build"));
}

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', 
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, 
		saveUninitialized: false
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) 


// Routes
app.use('/user', user)

// If no API routes are hit, send the React app
app.use(function (req, res) {
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})
