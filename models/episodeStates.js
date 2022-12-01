const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    const EpisodeState = sequelize.define("EpisodeState", {
        watchDuration: {
            type: DataTypes.INTEGER, 
        }
    })

    return EpisodeState
}