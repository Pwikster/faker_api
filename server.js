const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})

const { faker } = require('@faker-js/faker')

const createUser = () => {
    return {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.string.uuid()
    }
}

const createCompany = () => {
    return {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    }
}

app.get('/api/users/new', (req, res) => {
    res.json(createUser())
})

app.get('/api/companies/new', (req, res) => {
    res.json(createCompany())
})

app.get('/api/user/company', (req, res) => {
    res.json({
        user: createUser(),
        company: createCompany()
    })
})

