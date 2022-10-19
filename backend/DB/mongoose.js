const mongoose = require('mongoose');
const {database} = require('../config');

mongoose.connect(database, {
    useNewUrlParser: true, // Pozwala na parsowanie urla
    useUnifiedTopology: true // Pozwala na monitorowanie zachowań - nieistotne
});

