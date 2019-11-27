var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Quiz:quiz@cluster0-9fmtj.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

module.exports = mongoose;