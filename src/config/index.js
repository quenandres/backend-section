if(process.env.NODE_ENV !== "production"){
    require('dotenv').config(); // Si no estamos en produccion dotenv va a cargar nuestros datos de configuración.
}

module.exports = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    APPLICATION_NAME: process.env.APPLICATION_NAME
}