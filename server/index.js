const express = require('express');
const cors = require('cors');

const app = express();
const port = 4000;

const countries = [
    {
        name: 'India',
        capital: 'New Delhi'
    },
    {
        name: 'China',
        capital: 'Beijing'
    },
    {
        name: 'USA',
        capital: 'Washington'
    },
    {
        name: 'Japan',
        capital: 'Tokyo'
    },
    {
        name: 'Russia',
        capital: 'Moscow'
    },
    {
        name: 'Germany',
        capital: 'Berlin'
    },
    {
        name: 'France',
        capital: 'Paris'
    },
    {
        name: 'Brazil',
        capital: 'Brasília'
    },
    {
        name: 'Canada',
        capital: 'Ottawa'
    },
    {
        name: 'Mexico',
        capital: 'Mexico City'
    },
]
const users =[
    {
        name: 'John',
        email:"teslim@gmail.com",
        password:"idslkasks",
        gender: "male",
        age: 16,
        country: "India"
    },
    {
        name: 'Mary',
        email:"doe@example.com",
        password:"<PASSWORD>",
        gender: "female",
        age: 25,
        country: "India"
    },
    {
        name: 'Jane',
        email:"doe@example.com",
        password:"<PASSWORD>",
        gender: "female",
        age: 15,
        country: "India"
    }
]

app.use(
    cors({
        origin: 'http://localhost:5173'
    })
)
app.use(express.json())

app.get('/countries', (req, res) => {
  res.send(countries);
});

app.post('/login', async(req, res) => {
    console.log('i got herte ')
    const {email, password} = req.body
    console.log(email,password);
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        res.send(user);
    } else {
        res.status(401).send({message: 'Invalid credentials'});
    }
})

app.get('/students', (req, res) => {

})

app.listen(port, function(){
    console.log(`Server is running on port ${port}`);
})