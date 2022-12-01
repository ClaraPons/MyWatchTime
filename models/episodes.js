const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    const Episode = sequelize.define("Episode", {
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
            type: DataTypes.STRING
        }, 
        duration: {
            type: DataTypes.INTEGER
        }
    })
    
    return Episode
}