module.exports = {
  type: "mysql",
  host: process.env.TYPEORM_HOST || "localhost",
  port: 333333,
  username: process.env.TYPEORM_USERNAME || "root",
  password: process.env.TYPEORM_PASSWORD || "password",
  database: "catalogue",
  entities: ["dist/**/**.entity{.ts,.js}"],
  migrations: [
    "dist/migrations/**/*.js"
  ],
  logging: true,
  migrationsRun: true,
  synchronize: true
};