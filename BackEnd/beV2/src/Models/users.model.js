import { DataTypes } from "sequelize";
import db from "../Config/db.js";

export default db.define("users", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    cpf: {
        type: DataTypes.STRING,
        allowNull: false
    },

    address: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    isGiver: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },

    profilePic: {
        type: DataTypes.STRING
    }
});