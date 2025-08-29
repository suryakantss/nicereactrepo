const express = require('express');
const cars = require('./store');
var cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())

app.listen(3000, () => {
    console.log('server is up [3000]');
});
app.get('/', (req, res) => {
    res.send('<h3>Rest API Demo</h3>');
});
app.get('/cars', (req, res) => {
    res.json(cars);
});
app.get('/cars/:id', (req, res) => {
    let id = req.params.id;
    res.json(cars.filter(c => c.id == id));
});
app.post('/cars', (req, res) => {
    let car = req.body;
    cars.push(car);
    res.status(200).json(car);
});
app.delete('/cars/:id', (req, res) => {
    let id = req.params.id;
    cars.forEach((c, index) => {
        if (c.id == id) {
            cars.splice(index, 1);
            res.status(200).json(c);
        }
    });
});

app.put('/cars/:id', (req, res) => {
    let id = req.params.id;
    cars.forEach((c, index) => {
        if (c.id == id) {
            cars.splice(index, 1);
            let newcar = req.body;
            newcar.id = id;
            cars.push(newcar);
            res.status(200).json(newcar);
        }
    });
});
