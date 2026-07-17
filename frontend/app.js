const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const BACKEND_URL = process.env.BACKEND_URL || "http://backend:8080/api";

const fetch = (...args) =>
    import('node-fetch')
        .then(({ default: fetch }) => fetch(...args));

app.get('/', async function (req, res) {

    const options = {
        method: 'GET'
    };

    try {
        let response = await fetch(BACKEND_URL, options);
        let data = await response.json();

        console.log(data);

        res.render('index', data);

    } catch (err) {
        console.log(err);

        res.status(500).json({
            msg: 'Internal Server Error'
        });
    }

});

app.listen(3000, function () {
    console.log('Frontend listening on port 3000!');
});