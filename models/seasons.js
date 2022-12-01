const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    const Season = sequelize.define("Season", {
        title: {
            type: DataTypes.STRING, 
            allowNull: false
        }, 
        resume: {
            type: DataTypes.STRING
        }, 
        trailer: {
            type: DataTypes.STRING
        }, 
        release_date: {
            type: DataTypes.DATE
        }
    })

    return Season
}