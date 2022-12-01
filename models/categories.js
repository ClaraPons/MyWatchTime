const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    const Category = sequelize.define("Category", {
        title: {
            type: DataTypes.STRING, 
            allowNull: false
        }
    })

    return Category
}