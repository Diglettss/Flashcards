# **Project Plan**

Pod Members: **Osaru Elaiho, Daniel Jones, Hayley Simmons**


## **Problem Statement**
One of the biggest difficulties for education in the past two years has been the COIVD-19 pandemic which saw many teaching institutions struggle to navigate balancing campus safety and choosing whether or not to hold in-person classes. As a direct result of this disruption, many studies have shown a significant drop in lecture material retention and overall assessment scores for students. Essentially, the pandemic has created a large influx of students who are unable to perform at their highest level largely due to their inability to properly study and retain information [(source)](https://www.washingtonpost.com/lifestyle/2019/04/15/many-students-dont-know-how-study-heres-how-parents-can-help/).

## **Description**
The purpose of this project is to provide a simple learning tool that is completely free to use, while helping to provide one of the best methods of studying: information retrieval.

Information retrieval, as described by [Cornell University](https://lsc.cornell.edu/how-to-study/studying-for-and-taking-exams/effective-study-strategies/), means to actively recall information from memory: an effective practice for long-term learning. It's considered one of the best methods of study because it helps identify what someone does or doesn't understand.

This project will help users practice their information retrieval by making the user take their time in recalling the information before flipping a card over. Users will be able to sign up, create a profile, & create sets of digital flashcards based on any subject they choose. The flashcards can be then reviewed based on the mode the user chooses. The website will be searchable by anyone for other sets of flashcards or other user profiles.


## **About the Users**
##### Roles
The "Student" 
  * *a user who plans to use the app as an additional study tool to reinforce learning*

The "Instructor"
  * *a user who wants to help their students by creating material on the app to supplement lesson topics covered in a classroom setting*

##### Personas
Our "Students":
  * ***Steve*** is a high school junior who lives in a small town north of Dallas, Texas. Since Steve was a kid, he has had great aspirations of attending an Ivy league school & studying Computer Science. However, his dreams largely depend on his performance on his upcoming SAT. Despite his lacking in preparation, Steve is determined to succeed & prepare himself for the future.
  * ***Bailey*** is a rising junior at the University of Texas, majoring in Biology. She hopes to take her MCAT this upcoming fall. Though Bailey has always had trouble focusing on her work due to her ADHD, she recently sought out a psychiatrist who officially diagonosed her; Bailey is forturnately now on medication in order to help her focus. As her MCAT approches, she's ready to take advantage of her newfound attentiveness & study well.

Our "Instructors":
  * ***Francine*** is a new middle school teacher in Santa Fe, New Mexico. Recent studies showed that [New Mexico ranks last in the U.S. in K-12 education](https://www.usnews.com/news/best-states/rankings/education/prek-12). Francine is quite familiar with technology, & is also aware of the positive effects it can have on young minds as they're developing. She aims to introduce her students to better methods of studying.
  * ***Stan*** has been an elementary teacher for over 25 years in Jersey City, New Jersey. He has been praised for his innovative teaching style & approach to students who struggle with different concepts. Stan is not that tech savvy, often opting for a more hands-on approach to the reinforcement of topics. However, after attending a teaching conference, he has had a change of heart & wants to employ the use of beginner-friendly technology that will ensure a smooth transition into online learning.


##### Stories
   1. As a ***user***, I want to be able to create my own profile that will allow me to create and save my own flashcard sets.
   2. As a ***user***, I want to be able to login to a profile that only I have access to.
   3. As a ***user***, I want to be able to update any information on my profile that pertains to me.
   4. As a ***student***, I want to create flashcards so that I can share them & study with my classmates.
   5. As a ***student***, I want to be able to create as many flashcard sets as I need so that I can study all of my coursework.
   10. As a ***student***, I want to search for other flashcards so that I won't have to create my own if one already exists.
   11. As a ***user***, I want to be able to update my sets and delete the as I see fit to do so.
   12. As a ***user***, I want to be able to submit an issue if I run into any trouble on the app.
   13. As a ***student***, I want to highlight items in my cards so as to point out key items. 
   14. As an ***instructor***, I want to organize my flashcards into folders so that my cards are organized by class.
   15. As an ***instructor***, I want to be able to make my flashcard sets publicly available so that my students can search for them & study on their own.
   16. As a ***student***, I want to customize my flashcard sets so I can add a personal touch to my notes.
   17. As a ***student***, I want a study mode that lets me match the correct term to its corresponding definition under a time limit.

## **Pages/Screens**
***reminder: need to insert at least 3 wireframes***
* Landing *(not logged in)*
* Login
* Register
* Home *(logged in)*
* Search Results
* User Profile *(current + other users)*
* Set Creation *(while currently creating a set of flashcards)*
* Set View Page *(current + other users (if made public))*


## **Data Models**
#### User table
| column name     | type          | description                       |
| ---             | ----          | ---                               |
| id              | integer       | primary key                       |
| set_id          | integer ARRAY | sets the user has access to       |
| user_name       | Text          | username                          |
| first_name      | Text          | first name                        |
| last_name       | Text          | last name                         |
| email           | Text          | email address                     |
| password        | Text          | hashed password                   |

#### Set table
| column name   | type          | description                     |
| ---           | ----          | ---                             |
| id            | integer       | primary key                     |
| user_id       | integer       | refrences the owner of the set  |
| flashcard_id  | integer ARRAY | points to flashcard tables      |
| is_public     | boolean       | is the set public               |
| description   | text          | describes the set               |
| folder        | text          | which folder the set belongs to |


#### Flashcard table
| column name | type    | description             |
| ---         | ----    | ---                     |
| id          | integer | primary key             |
| term        | Text    | text on the flashcard   |
| definition  | Text    | definition for the term |



## **API Endpoints**
| CRUD        | HTTP Verb     | description                       | User stories |
| ---         | ----          | ---                               | ---          |
| Create      | POST          | create user                       | 1            |
| Read        | GET           | get user                          | 2            |
| Update      | PUT           | update user                       | 3            |
| Read        | GET           | get all flashcard sets for a user | 5            |
| Read        | GET           | get sets                          | 6            |
| Delete      | DELETE        | delete a set              | 7            |
| Update      | PUT           | update a set              | 7            |
| Create      | POST          | create a set              | 5            |
| Create      | POST          | submit an issue                   | 8            |


***Don't forget to set up your Issues, Milestones, and Project Board!***
