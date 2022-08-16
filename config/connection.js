const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Social_net_api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;