module.exports = (sequelize, Sequelize) => {
    const Cars = sequelize.define("cars",
    {
        Car_Brand: {
            type: Sequelize.STRING
        },
        Car_Desc: {
            type: Sequelize.STRING
        },
        Car_ID: {
            type: Sequelize.INTEGER,
            primaryKey:true,
            field: 'id'
        },
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'cars_tb'
    }
    );
    return Cars;
}