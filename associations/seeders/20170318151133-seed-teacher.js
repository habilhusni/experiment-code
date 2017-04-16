'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    
      /*Add altering commands here.
      Return a promise to correctly handle asynchronicity.*/

      // Example:
      return queryInterface.bulkInsert('Teachers', [
      {
        name: 'John Doe',
        email: 'johndoe@yahoo.com',
        phone: '0879181819',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jonny Ismail',
        email: 'jonnyIsmail@yahoo.com',
        phone: '0879181821',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sulaiman',
        email: 'sulaiman@yahoo.com',
        phone: '0879121333',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Subagja',
        email: 'subagja@yahoo.com',
        phone: '087913121',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Supratman',
        email: 'supratman@yahoo.com',
        phone: '0871213131',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sihombing',
        email: 'sihombing@yahoo.com',
        phone: '0852121313',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gogon',
        email: 'gogon@yahoo.com',
        phone: '08121333367',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gegen',
        email: 'gegen@yahoo.com',
        phone: '081211316778',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sedeng',
        email: 'sedeng@yahoo.com',
        phone: '0811312127',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {});

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkDelete('Teachers', [
      {
        name: 'John Doe',
        email: 'johndoe@yahoo.com',
        phone: '0879181819',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jonny Ismail',
        email: 'jonnyIsmail@yahoo.com',
        phone: '0879181821',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sulaiman',
        email: 'sulaiman@yahoo.com',
        phone: '0879121333',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Subagja',
        email: 'subagja@yahoo.com',
        phone: '087913121',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Supratman',
        email: 'supratman@yahoo.com',
        phone: '0871213131',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sihombing',
        email: 'sihombing@yahoo.com',
        phone: '0852121313',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gogon',
        email: 'gogon@yahoo.com',
        phone: '08121333367',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gegen',
        email: 'gegen@yahoo.com',
        phone: '081211316778',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sedeng',
        email: 'sedeng@yahoo.com',
        phone: '0811312127',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {});   
  }
};
