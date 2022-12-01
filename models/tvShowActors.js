const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    const TvShowActor = sequelize.define("TvShowActor", {
        role: {
            type: DataTypes.STRING, 
            allowNull: false
        }
    })

    return TvShowActor
}