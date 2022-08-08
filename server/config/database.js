import {Sequelize} from "sequelize";

const db = new Sequelize('team_fight_tactics', 'root', 'rdcfgvjhlbni;P01', {
    host: "localhost",
    dialect: "mysql"
})
export default db;
