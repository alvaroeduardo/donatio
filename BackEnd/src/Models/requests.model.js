import { DataTypes } from "sequelize";
import db from "../Config/db.js";

export default db.define("requests", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },

    idApplicant: {
        type: DataTypes.STRING,
        allowNull: false
    },

    idGiver: {
        type: DataTypes.STRING,
        allowNull: false
    },

    idDonate: {
        type: DataTypes.STRING,
        allowNull: false
    },

    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
});