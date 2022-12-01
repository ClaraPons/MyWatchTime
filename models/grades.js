const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    const Grade = sequelize.define("Grade", {
        note: {
            type: DataTypes.INTEGER, 
            allowNull: false
        }, 
    })
    
    return Grade
}