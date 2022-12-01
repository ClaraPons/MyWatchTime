const { DataTypes } = require("sequelize")

module.exports= (sequelize) => {
    const ActingList = sequelize.define("ActingList", {
        firstName: {
            type: DataTypes.STRING, 
            allowNull: false
        }, 
        lastName: {
            type: DataTypes.STRING, 
        }
    })

    return ActingList
}