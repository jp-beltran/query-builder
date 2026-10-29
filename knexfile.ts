export default {
  //config do knex
  client: "sqlite3",
  conections: {
    filename: "./src/database/database.db"
  },
  useNullAsDefault: true,
  migratons: {
    extensions: "ts",
    directory: "./src/database/migrations"
  }
}