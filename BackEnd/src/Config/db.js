import { Sequelize } from "sequelize";
import dotenv from "dotenv/config";

const dbData = {
    dbName: process.env.DB_NAME,
    dbUser: process.env.DB_USER,
    dbPass: process.env.DB_PASS,
    dbHost: process.env.DB_HOST
}

const sequelize = new Sequelize(dbData.dbName, dbData.dbUser, dbData.dbPass, {
    dialect: "mysql",
    host: dbData.dbHost,
    define: {
        timestamps: false
    }
});

export default sequelize;