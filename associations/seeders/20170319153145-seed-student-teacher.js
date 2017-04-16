'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    
     return queryInterface.bulkInsert('StudentTeachers', [
      {
        StudentId: 1,
        TeacherId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        StudentId: 2,
        TeacherId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        StudentId: 3,
        TeacherId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        StudentId: 4,
        TeacherId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        StudentId: 5,
        TeacherId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        StudentId: 6,
        TeacherId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        StudentId: 7,
        TeacherId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        StudentId: 8,
        TeacherId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        StudentId: 9,
        TeacherId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('StudentTeachers', [
      {
        StudentId: 1,
        TeacherId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        StudentId: 2,
        TeacherId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        StudentId: 3,
        TeacherId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        StudentId: 4,
        TeacherId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        StudentId: 5,
        TeacherId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        StudentId: 6,
        TeacherId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        StudentId: 7,
        TeacherId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        StudentId: 8,
        TeacherId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        StudentId: 9,
        TeacherId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  }
};
