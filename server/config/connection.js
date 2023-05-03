const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://mannyrveloz23:Gw5Rw8pZwyXRjasx@humidor-haven.kqdzrtm.mongodb.net/humidor-haven?retryWrites=true&w=majority');

module.exports = mongoose.connection;
