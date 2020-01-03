module.exports = (sequelize, DataTypes) =>{
    var Blog = sequelize.define('Blog', {
        Content:{
            type: DataTypes.TEXT
        },
        Author: {
            type: DataTypes.STRING
        },
        Blurb: {
            type: DataTypes.TEXT
        },
        Title:{
            type: DataTypes.STRING
        }
    });
    return Blog
};