# Project Plan

Pod Members: **Osaru Elaiho, Daniel Jones, Hayley Simmons**


## Problem Statement and Description

Insert the latest summary of your problem statement and app description.


## User Roles and Personas

Include the most up-to-date user roles and personas.


## User Stories

List the current user stories you will implement.


## Pages/Screens

List all the pages and screens in the app. Include wireframes for at least 3 of them.


## Data Model

Describe your app's data model using diagrams or tables

### user table

| column name     | type          | description                       |
| ---             | ----          | ---                               |
| id              | integer       | primary key                       |
| user_name       | Text          | username                          |
| first_name      | Text          | first name                        |
| last_name       | Text          | last name                         |
| email           | Text          | email address                     |
| password        | Text          | hashed password                   |
| set_id          | integer ARRAY | sets the user owns/has access to  |

### flashcard

| column name | type    | description             |
| ---         | ----    | ---                     |
| id          | integer | primary key             |
| term        | Text    | text on the flashcard   |
| definition  | Text    | definition for the term |

### set
| column name   | type          | description                     |
| ---           | ----          | ---                             |
| id            | integer       | primary key                     |
| user_id       | integer       | refrences the owner of the set  |
| public        | boolean       | is the set public               |
| description   | text          | describes the set               |
| flashcard_id  | integer ARRAY | points to flashcard tables      |

## Endpoints

List the API endpoints you will need to implement.


***Don't forget to set up your Issues, Milestones, and Project Board!***
