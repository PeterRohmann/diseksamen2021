const mongoose = require('mongoose');

let connection;


const getConnection = async () => {
    if (!connection) {
        connection = await mongoose.connect('mongodb+srv://MrRohmann:o0peter0o@cluster0.zaoqs.mongodb.net/dis2020?authSource=admin&replicaSet=atlas-x7hw5l-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', {
        useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
    }
    return connection;
}

module.exports = {
    getConnection: getConnection
}