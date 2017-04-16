'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique: (value, next) => {
          Student.find({
            where: {email: value}
          }).done(function(exist) {
            if(exist) {
              console.log('Email is in use!')
            }else {
              next();
            }
          })
        }
      }
    }, 
    phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Teacher.hasMany(models.StudentTeacher);
        Teacher.belongsToMany(models.Student,{through: 'StudentTeacher'});
      }
    }
  });
  return Teacher;
};