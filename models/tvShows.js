const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    const TvShow = sequelize.define("TvShow", {
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
        },
        status: {
            type: DataTypes.STRING
        }
    })

    return TvShow
}