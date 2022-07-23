import { DataTypes } from "sequelize";
import db from "../Config/db.js";

export default db.define("donations", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    },

    idGiver: {
        type: DataTypes.STRING,
        allowNull: false
    },

    picDonate: {
        type: DataTypes.STRING,
        allowNull: false
    },

    locate: {
        type: DataTypes.STRING,
        allowNull: false
    },

    coord: {
        type: DataTypes.STRING,
        allowNull: false
    }
});