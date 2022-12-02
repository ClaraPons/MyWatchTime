const { Sequelize } = require('sequelize');
const grades = require('../models/grades');

const sequelize = new Sequelize('myWatchTime', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql'
})

const connectDb = async () => {
    try {
        await sequelize.authenticate()
        console.log("Connected to db");
    }catch (error) {
        console.error(error)
    }
}

connectDb()

const User = require("../models/user") (sequelize)
const Favorite = require("../models/favorites") (sequelize)
const EpisodeState = require("./episodeStates") (sequelize)
const Grade = require("../models/grades") (sequelize)
const Comment = require("../models/comments") (sequelize)
const TvShow = require("../models/tvShows") (sequelize)
const Season = require("../models/seasons") (sequelize)
const Episode = require("../models/episodes") (sequelize)
const ActingList = require("../models/actingLists") (sequelize)
const TvShowActor = require("../models/tvShowActors") (sequelize)
const Image = require("../models/images") (sequelize)
const Platform = require("../models/platforms") (sequelize)
const Category = require("../models/categories") (sequelize)

User.hasMany(EpisodeState)
EpisodeState.belongsTo(User)

User.hasMany(Favorite)
Favorite.belongsTo(User)

User.hasMany(Grade)
Grade.belongsTo(User)

User.hasMany(Comment)
Comment.belongsTo(User)

TvShow.hasMany(EpisodeState)
EpisodeState.belongsTo(TvShow)

TvShow.hasMany(Favorite)
Favorite.belongsTo(TvShow)

TvShow.hasMany(Grade)
Grade.belongsTo(TvShow)

TvShow.hasMany(Comment)
Comment.belongsTo(TvShow)

TvShow.hasMany(Episode)
Episode.belongsTo(TvShow)

TvShow.hasMany(Season)
Season.belongsTo(TvShow)

TvShow.hasMany(TvShowActor)
TvShowActor.belongsTo(TvShow)

TvShow.hasMany(Image)
Image.belongsTo(TvShow)

Episode.hasMany(EpisodeState)
EpisodeState.belongsTo(Episode)

Episode.hasMany(Grade)
Grade.belongsTo(Episode)

Episode.hasMany(Comment)
Comment.belongsTo(Episode)

Episode.hasOne(Image)
Image.belongsTo(Episode)

ActingList.hasMany(TvShowActor)
TvShowActor.belongsTo(ActingList)

ActingList.hasOne(Image)
Image.belongsTo(ActingList)

Season.hasMany(Episode)
Episode.belongsTo(Season)

Platform.hasOne(Image)
Image.belongsTo(Platform)

TvShow.belongsToMany(Platform, { through: "TvShow_Platform" });
Platform.belongsToMany(TvShow, { through: "TvShow_Platform" })

TvShow.belongsToMany(Category, { through: "TvShow_Category" });
Category.belongsToMany(TvShow, { through: "TvShow_Category" })

Episode.belongsToMany(ActingList, { through: "Episode_ActingList" });
ActingList.belongsToMany(Episode, { through: "Episode_ActingList" })

sequelize.sync({ alter: true })

const db = {
    sequelize: sequelize,
    User: User,
    Favorite: Favorite,
    EpisodeState: EpisodeState,
    Grade: Grade, 
    Comment: Comment, 
    TvShow: TvShow, 
    Season: Season,
    Episode: Episode, 
    ActingList: ActingList,
    TvShowActor: TvShowActor, 
    Image: Image, 
    Platform: Platform, 
    Category: Category
}

module.exports = db