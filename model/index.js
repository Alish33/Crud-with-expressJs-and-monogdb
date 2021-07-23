const mongoose = require('mongoose')

const schema = mongoose.Schema

const indexSchema = new schema({
    first: {
        type: String
    },
    last: {
        type: String
    },
    address: {
        type: String
    },
    contact: {
        type: String
    },
    email: {
        type: String
    }
})

module.exports = mongoose.model("Index", indexSchema);