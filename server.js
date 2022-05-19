const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

class User {
    constructor() {
        this.password = faker.internet.password();
        this.email = faker.internet.email();
        this.phoneNumber = faker.phone.phoneNumber();
        this.lastName = faker.name.lastName();
        this.firstName = faker.name.firstName();
        // this._id = _id;
    }
};

class Company {
    constructor() {
        // this._id = _id;
        this.name = faker.company.companyName();
        this.address = [ faker.address.streetName(), faker.address.cityName(), faker.address.state(), faker.address.zipCode(), faker.address.country() ]
    }
};

// // hello word test route
// app.get('/api/hello', (req, res) => {
//     res.json({msg: 'hello world'});
// })

// creates new user
app.get('/api/users/new', (req, res) => {
    let newUser = new User();
    res.json(newUser);
})

// creates a new company
app.get('/api/companies/new', (req, res) => {
    let newCompany = new Company();
    res.json(newCompany);
})

// returns new user and company
app.get('/api/user/company', (req, res) => {
    let newUser = new User();
    let newCompany = new Company();
    res.json({user: newUser, company: newCompany});
})



app.listen( port, () => console.log(`Listening on port: ${port}`) );