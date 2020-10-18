const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('d70m620gkqf8pr', 'dfclxccuwltopv', '84dbe0e93c2fdcc7baed545fc91d10cd2a80bbe2c77d6ac8ae305797f9cea0e3', {
  host: 'ec2-107-20-104-234.compute-1.amazonaws.com',
  dialect: 'postgres',
  ssl: true,
  protocol: "postgres",

  logging: true,
  dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false 
      }
  }
});

class List extends Model {}

List.init({
    title: {
      type: DataTypes.STRING
    },
    token: {
      type: DataTypes.STRING
    },
    in_actived: {
      type: DataTypes.BOOLEAN
    }
  },{
    sequelize,
    timestamps: false,
    raw: true,
    tableName: 'list',
    modelName: 'List' // We need to choose the model name
});

module.exports = List;
