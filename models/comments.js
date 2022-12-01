const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    const Comment = sequelize.define("Comment", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        containt: {
            type: DataTypes.STRING
        }
    })

    return Comment
}