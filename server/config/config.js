require('dotenv').config(); 

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
		"define" : {
      "timestamps": false,
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
		"define" : {
      "timestamps": false,
    }
  },
  "production": {
    "use_env_variable": "JAWSDB_BRONZE_URL",
    "dialect": "mysql",
		"define" : {
      "timestamps": false,
    }
  }
}