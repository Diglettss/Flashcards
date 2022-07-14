# Project Plan

Pod Members: **Osaru Elaiho, Daniel Jones, Hayley Simmons**


## Problem Statement and Description

*Problem Statement*
According to an article from [The Washington Post](https://www.washingtonpost.com/lifestyle/2019/04/15/many-students-dont-know-how-study-heres-how-parents-can-help/), there are many students in high school & college who don't know how to study; they either lack good study habits/skills, or rely on strategies that don't work.

*Description*
- The purpose of this project is to provide a simple learning tool that is completely free to use, while helping to provide one of the best methods of studying: information retrieval. This project will help users practice their information retrieval by making the user take their time in recalling the information before flipping a card over. Users will be able to sign up, create a profile, & create sets of digital flashcards based on any subject they choose. The flashcards can be then reviewed based on the mode the user chooses. The website will be searchable by anyone for other sets of flashcards or other user profiles.

## User Roles and Personas

*User Roles*
- **"The Student"** 
  * *a user who plans to use the app as an additional study tool to reinforce learning*

- **"The Instructor"**
  * *a user who wants to help students by creating material on the app to supplement lesson topics covered in a classroom setting*
  
*User Personas*
- **2 Student Personas:**
  * Bob is a high school junior living in a small town north of Dallas, Texas. Ever since he was a little kid, Bob has had great aspirations of attending an Ivy league school and studying computer science. However, such dreams largely depend on Bob's performance on his upcoming SAT. Despite his shortcomings in preparation, Bob's is now determined to succeed and dead-set on adequately preparing himself for the future.
  * Sarah is a rising junior at the University of Texas studying biology with hopes to take her MCAT this upcoming fall. As far as she can remember, Sarah has had trouble focusing on material and finding a way to control her inattentiveness. However, recently Sarah was diagonosed with mild ADHD and prescribed medicine to help her focus. As she approaches her MCAT, Sarah hopes to take advantage of her newfound clarity in order to study well.

- **2 Instructor Personas:**
  * Mrs.Smith is a new middle school teacher in Charleston, West Virginia. Recent studies show that West Virginia is the least educated U.S. state, with an overall score of 23.65. Mrs.Smith is quite familiar with technology and is aware of positive effect it can have on young minds as they begin to develop. She hopes to take advantage of the app's features and introduce her students' to a new, interactive teaching model. 
  * Mrs. Brown has been an elementary teacher for over 25 years in Jersey City, New Jersey. In the past, she has been praised and highly acclaimed for her innovative teaching styles and approach to students who struggle with concepts. Mrs. Brown is not inherently tech savvy and instead often opts for a more hands-on approach to reinforcement of topics. However, after attending a teaching conference, Mrs. Brown has had a change of heart and hopes to employ the use of user, beginner friendly technology that will ensure a smooth transition into online learning. 


## User Stories

1. As a student, I want to create flashcards so that and I can share them with my friends.
2. As a student, I want to be able to create lots of flashcard sets so that I can keep up with all of my coursework.
3. As a student, I want to try to match flashcards to their definition, so that I can use different studying approaches.
4. As a student, I want to be quizzed on my flashcards, so that I can figure out what I understand.
5. As a student, I want to be able to import my notes into flashcards, so that I can spend more time studing instead of tranferring one by one.
6. As an student, I want to custimize the color and font of my flash cards, so that I can
7. As an student, I want to search for flashcards, so that I won't have to create my own if one already exist.
8. As an student, I want to highlight specific cards, so that they can be distinct when studying. 
9. As an instructor, I want to group my flashcards, so that my cards are organized.
10. As an instructor, I want to be able to private my flashcard sets, so that my students still have to take notes and only those who need them have access.
## Pages/Screens

List all the pages and screens in the app. Include wireframes for at least 3 of them.


## Data Model

Describe your app's data model using diagrams or tables

### user table

| column name     | type          | description                       |
| ---             | ----          | ---                               |
| id              | integer       | primary key                       |
| set_id          | integer ARRAY | sets the user owns/has access to  |
| user_name       | Text          | username                          |
| first_name      | Text          | first name                        |
| last_name       | Text          | last name                         |
| email           | Text          | email address                     |
| password        | Text          | hashed password                   |

### flashcard table

| column name | type    | description             |
| ---         | ----    | ---                     |
| id          | integer | primary key             |
| term        | Text    | text on the flashcard   |
| definition  | Text    | definition for the term |

### set table
| column name   | type          | description                     |
| ---           | ----          | ---                             |
| id            | integer       | primary key                     |
| user_id       | integer       | refrences the owner of the set  |
| flashcard_id  | integer ARRAY | points to flashcard tables      |
| is_public     | boolean       | is the set public               |
| description   | text          | describes the set               |
| group         | text          | what group the set is in        |

## Endpoints

List the API endpoints you will need to implement.

| CRUD        | HTTP Verb     | description                       | User stories |
| ---         | ----          | ---                               | ---          |
| Create      | POST          | create user                       |              |
| Read        | GET           | get user                          |              |
| Read        | GET           | get all flashcard sets for a user |              |
| Read        | GET           | Search through public sets        | 7,           |
| Delete      | DELETE        | delete flashcard set              |              |
| Update      | PUT           | update flashcard set              |              |
| Create      | POST          | create flashcard set              | 1,2          |





***Don't forget to set up your Issues, Milestones, and Project Board!***
