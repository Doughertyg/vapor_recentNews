-- run from terminal using "mysql -u root < schema.sql" or "npm run initialize" to initialize the database
DROP DATABASE IF EXISTS steam_updates;

CREATE DATABASE steam_updates;

USE steam_updates;

-- seed script uses force: true and thus we don't need to create table here 
CREATE TABLE updates (

);