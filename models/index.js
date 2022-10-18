
const config =require("../config/config");
const Cars = require("././cars");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSOWRD, {
    host: config.HOST,
    dialect: config.dialect,
    port: config.PORT,
    }

);

sequelize
.authenticate()
.then(() => {
    console.log('Connection has been established succeesfully,');

})
.catch(err => {
    console.error('Error cant establish healthy connection....');
})
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.cars = Cars(sequelize, Sequelize);
module.exports = db;
