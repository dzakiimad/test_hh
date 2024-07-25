'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Activity.belongsTo(models.User, { foreignKey: 'user_id' });
      Activity.belongsTo(models.Project, { foreignKey: 'project_id' });
    }
  }
  Activity.init({
    judul: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    project_id: DataTypes.INTEGER,
    tanggal_mulai: DataTypes.DATE,
    tanggal_berakhir: DataTypes.DATE,
    jam_mulai: DataTypes.TIME,
    jam_berakhir: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Activity',
  });
  return Activity;
};