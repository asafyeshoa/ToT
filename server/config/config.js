const dotenv = require("dotenv");
dotenv.config();

const config = {
    PORT: process.env.PORT || 5000,
    DB_CONNECTION: process.env.MONGO_URI,
    AUTH: process.env.AUTH_TOKEN
}

module.exports = config
