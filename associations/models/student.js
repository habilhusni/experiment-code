'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    firstname: DataTypes.STRING,

    lastname: DataTypes.STRING,

    dob: DataTypes.DATE,

    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Please enter valid email'
        },
        
        isUnique: (val, callback)=> {
          Student.find({
            where: {email:val},
            attributes: ['id']
          }).done((err)=> {
            if(err){
              return callback('Email already in use');
            } else {
              callback()
            }
          })
        }

      }
    },

    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 150,
          msg: 'Minimum height is 150 cm'
        }
      }
    },

    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10,13],
          msg: 'Phone length must be 10-13'
        },
        isAlpha: {
          args: false,
          msg: 'Phone not allow letters'
        },
        isAlphanumeric: {
          args: false,
          msg: 'Phone is not alphanumeric'
        }
      }
    }

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Student.hasMany(models.StudentTeacher);
        Student.belongsToMany(models.Teacher,{through: 'StudentTeacher'})
      },
      getAllData: function(callback) {
           Student.findAll()
           .then((students) => {

            students.forEach((student) => {
              let firstname = student.getDataValue('firstname');
              let lastname = student.getDataValue('lastname');
              let fullname = `${firstname} ${lastname}`;
              student.setDataValue('fullname', fullname);
              let dob = student.getDataValue('dob');
              let email = student.getDataValue('email');
              let height = student.getDataValue('height');
              let phone = student.getDataValue('phone');
            })

              callback(students);

           })
      }
    },
    instanceMethods: {
      getFullName: function() {
        return `${this.firstname} ${this.lastname}`
      },
      getAge: function() {
        let age = new Date().getFullYear() - this.dob.getFullYear();
        return age;
      }
    }
  });
  return Student;
};