-- DROP DATABASE
DROP DATABASE IF EXISTS nfl_weather_db;

-- CREATE DATABASE

CREATE DATABASE nfl_weather_db;

USE nfl_weather_db; 

-- Create Teams table
CREATE TABLE teams (
  id VARCHAR(10) PRIMARY KEY,
  location VARCHAR(100) NOT NULL,
  name VARCHAR(100) NOT NULL,
  display_name VARCHAR(100) NOT NULL,
  short_display_name VARCHAR(100) NOT NULL,
  abbreviation VARCHAR(5) NOT NULL,
  color VARCHAR(10),
  logo_url VARCHAR(255),
  clubhouse_url VARCHAR(255),
  record_summary VARCHAR(20),
  season_summary VARCHAR(100),
  standing_summary VARCHAR(100),
  venue_name VARCHAR(100) NOT NULL,
  venue_city VARCHAR(100) NOT NULL,
  venue_state CHAR(2) NOT NULL,
  venue_zip_code VARCHAR(10) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create Games table
CREATE TABLE games (
  id VARCHAR(20) PRIMARY KEY,
  date DATETIME NOT NULL,
  name VARCHAR(255) NOT NULL,
  short_name VARCHAR(100) NOT NULL,
  season_year INT NOT NULL,
  season_type VARCHAR(50) NOT NULL,
  week_number INT NOT NULL,
  week_text VARCHAR(50) NOT NULL,
  attendance INT,
  neutral_site BOOLEAN DEFAULT FALSE,
  status_type VARCHAR(50),
  status_description VARCHAR(100),
  competition_type VARCHAR(50),
  broadcast_network VARCHAR(50),
  broadcast_market VARCHAR(50),
  home_team_id VARCHAR(10) NOT NULL,
  away_team_id VARCHAR(10) NOT NULL,
  venue_name VARCHAR(100) NOT NULL,
  venue_city VARCHAR(100) NOT NULL,
  venue_state CHAR(2) NOT NULL,
  venue_zip_code VARCHAR(10) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (home_team_id) REFERENCES teams(id),
  FOREIGN KEY (away_team_id) REFERENCES teams(id)
);

-- Create Weather table
CREATE TABLE weather (
  id INT AUTO_INCREMENT PRIMARY KEY,
  game_id VARCHAR(20) NOT NULL,
  weather_description VARCHAR(100) NOT NULL,
  temp DECIMAL(5,2) NOT NULL,
  feels_like_temp DECIMAL(5,2),
  temp_min DECIMAL(5,2),
  temp_max DECIMAL(5,2),
  pressure INT,
  humidity INT NOT NULL,
  visibility INT,
  precipitation INT NOT NULL,
  wind_speed DECIMAL(5,2) NOT NULL,
  wind_direction INT,
  icon_code VARCHAR(10),
  icon_description VARCHAR(100),
  coordinates_lat DECIMAL(10,8),
  coordinates_lon DECIMAL(11,8),
  last_updated DATETIME NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (game_id) REFERENCES games(id)
);

-- Create Users table
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

