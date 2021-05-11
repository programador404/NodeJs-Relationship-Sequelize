module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'NodeSequelize',
  define: {
    timestamp: true,
    underscored: true
  }
}