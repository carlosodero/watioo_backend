import { DataTypes } from 'sequelize';
import sequelize from '../../database.js';

const UserSchema = sequelize.define('users', {
  userid: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  username: DataTypes.STRING,
  useremail: DataTypes.STRING,
  userpassword: DataTypes.STRING,

  isarchived: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  isconfirmed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  isadmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  dni: DataTypes.STRING,
  telefono: DataTypes.STRING,
  nombre: DataTypes.STRING,
  apellidos: DataTypes.STRING,
},
{
  timestamps: false,
}
);

export default UserSchema;
