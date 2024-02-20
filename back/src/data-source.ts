import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: ["src/entity/*.ts"],
    migrations: ["src/migrations/*.ts"],
    subscribers: [],
    migrationsTableName: "users_migrations",
    migrationsRun: true,
    uuidExtension: "uuid-ossp",
})
