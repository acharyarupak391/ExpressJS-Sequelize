# REST API server using ExpressJS and connecting with PosgreSQL using Sequelize

## Steps to run: 
  1. `npm i`
  2. `npm run start:dev`

*Make sure your postgres server is running and you have the server configuration saved in `server/config/config.json` as such:*
```json
  {
    "environment-name": {
      "username": "your-postgres-username",
      "password": "your-password",
      "database": "your-db-name",
      "host": "database-host",
      "port": "db-port",
      "dialect": "postgres | sql | ..."
    }
  }

```