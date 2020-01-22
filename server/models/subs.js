module.exports = (sequelize, DataTypes) => {

    var Subs = sequelize.define('Subs', {
        FirstName: {
            type: DataTypes.STRING
        },
        LastName: {
            type: DataTypes.STRING
        },
        Email: {
            type: DataTypes.STRING
        }
    });
    return Subs;
};