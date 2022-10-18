module.exports = (sequelize, Sequelize) => {
    const Cars = sequelize.define("cars",
    {
        Car_ID: {
            type: Sequelize.INTEGER,
            primaryKey:true,
            field: 'Car_ID'
        },
        
        Car_Brand: {
            type: Sequelize.STRING
        },
        Car_Desc: {
            type: Sequelize.STRING
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