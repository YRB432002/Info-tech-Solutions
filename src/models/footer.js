const mongoose = require("mongoose");

const footer = mongoose.Schema({
    icons: [
        {
            iconUrl: String,
            link: String
        },
    ],
    
    links: [
        {
            label: String,
            url: String
        },
    ],
    copyright: String
});

module.exports = mongoose.model("footer", footer);