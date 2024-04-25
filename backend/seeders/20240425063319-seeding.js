'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'user1@example.com',
        password: bcrypt.hashSync('password1',10),
        name:'user1',
        rate_perjam: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'user2@example.com',
        password: bcrypt.hashSync('password2',10),
        rate_perjam: 25,
        name:'user2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
    await queryInterface.bulkInsert('Projects', [
      {
        name: 'Project A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Project B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
    await queryInterface.bulkInsert('Activities', [
      {
        judul: 'Meeting',
        user_id: 1,
        project_id: 1,
        tanggal_mulai: new Date(),
        tanggal_berakhir: new Date(),
        jam_mulai: '09:00:00',
        jam_berakhir: '10:00:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        judul: 'Coding',
        user_id: 2,
        project_id: 2,
        tanggal_mulai: new Date(),
        tanggal_berakhir: new Date(),
        jam_mulai: '10:00:00',
        jam_berakhir: '12:00:00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },
  

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Activities', null, {});
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Projects', null, {});
  }
};
