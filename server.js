const express = require('express');

const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes')

// process.env.PORT for live deployment, 3001 for local/testing
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// inform server is up if locally run
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});