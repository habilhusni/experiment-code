'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Students', [
      {
        firstname: 'Sandi',
        lastname: 'Sandoro',
        dob: '1998-10-12',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'sandoro@rocketmail.com',
        height: 160,
        phone: '09186151672',
        TeacherId: 1
      },
      {
        firstname: 'Surya',
        lastname: 'Saputra',
        dob: '1997-10-11',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'surya@rocketmail.com',
        height: 170,
        phone: '0189151672',
        TeacherId: 2
      },
      {
        firstname: 'Sembarang',
        lastname: 'Surat',
        dob: '1996-11-14',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'surat@rocketmail.com',
        height: 165,
        phone: '01786151672',
        TeacherId: 3
      },
      {
        firstname: 'Semprul',
        lastname: 'Sruput',
        dob: '1995-11-19',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'semprul@rocketmail.com',
        height: 190,
        phone: '087191919221',
        TeacherId: 1
      },
      {
        firstname: 'Sentot',
        lastname: 'Alibasyah',
        dob: '1994-11-09',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'sentot@rocketmail.com',
        height: 200,
        phone: '085791818712',
        TeacherId: 3
      },
      {
        firstname: 'Suku',
        lastname: 'Sempigu',
        dob: '1993-09-20',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'sukusempigu@rocketmail.com',
        height: 170,
        phone: '089127126334',
        TeacherId: 2
      },
      {
        firstname: 'Sertiga',
        lastname: 'Seempat',
        dob: '1992-08-10',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'sertiga@rocketmail.com',
        height: 190,
        phone: '08722761118',
        TeacherId: 4
      },
      {
        firstname: 'Sunda',
        lastname: 'Seung',
        dob: '1991-10-11',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'sundaseung@rocketmail.com',
        height: 190,
        phone: '09812731212',
        TeacherId: 2
      },
      {
        firstname: 'Suprapto',
        lastname: 'Surapraja',
        dob: '1999-10-22',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'suprapto@rocketmail.com',
        height: 190,
        phone: '089281631392',
        TeacherId: 2
      }
      ], {});
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Students', [
      {
        firstname: 'Sandi',
        lastname: 'Sandoro',
        dob: '1998-10-12',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'sandoro@rocketmail.com',
        height: 160,
        phone: '09186151672'
      },
      {
        firstname: 'Surya',
        lastname: 'Saputra',
        dob: '1997-10-11',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'surya@rocketmail.com',
        height: 170,
        phone: '0189151672'
      },
      {
        firstname: 'Sembarang',
        lastname: 'Surat',
        dob: '1996-11-14',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'surat@rocketmail.com',
        height: 165,
        phone: '01786151672'
      },
      {
        firstname: 'Semprul',
        lastname: 'Sruput',
        dob: '1995-11-19',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'semprul@rocketmail.com',
        height: 190,
        phone: '087191919221'
      },
      {
        firstname: 'Sentot',
        lastname: 'Alibasyah',
        dob: '1994-11-09',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'sentot@rocketmail.com',
        height: 200,
        phone: '085791818712'
      },
      {
        firstname: 'Suku',
        lastname: 'Sempigu',
        dob: '1993-09-20',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'sukusempigu@rocketmail.com',
        height: 170,
        phone: '089127126334'
      },
      {
        firstname: 'Sertiga',
        lastname: 'Seempat',
        dob: '1992-08-10',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'sertiga@rocketmail.com',
        height: 190,
        phone: '08722761118'
      },
      {
        firstname: 'Sunda',
        lastname: 'Seung',
        dob: '1991-10-11',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'sundaseung@rocketmail.com',
        height: 190,
        phone: '09812731212'
      },
      {
        firstname: 'Suprapto',
        lastname: 'Surapraja',
        dob: '1999-10-22',
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'suprapto@rocketmail.com',
        height: 190,
        phone: '089281631392'
      }
      ], {});
  }
}