const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    const Platform = sequelize.define("Platform", {
        name: {
            type: DataTypes.STRING, 
            allowNull: false
        }
    })

    return Platform
}