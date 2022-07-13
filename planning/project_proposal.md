# Project Proposal

Pod Members: **Osaru Elaiho, Daniel Jonas, & Hayley Simmons**


## Problem Statement
According to an article from [The Washington Post](https://www.washingtonpost.com/lifestyle/2019/04/15/many-students-dont-know-how-study-heres-how-parents-can-help/), there are many students in high school & college who don't know how to study; they either lack good study habits/skills, or rely on strategies that don't work.


## Description

The purpose of this project is to provide a simple learning tool that is completely free to use, while helping to provide one of the best methods of studying: information retrieval.

Information retrieval, as described by [Cornell University](https://lsc.cornell.edu/how-to-study/studying-for-and-taking-exams/effective-study-strategies/), means to actively recall information from memory: an effective practice for long-term learning. It's considered one of the best methods of study because it helps identify what someone does or doesn't understand.

This project will help users practice their information retrieval by making the user take their time in recalling the information before flipping a card over. Users will be able to sign up, create a profile, & create sets of digital flashcards based on any subject they choose. The flashcards can be then reviewed based on the mode the user chooses. The website will be searchable by anyone for other sets of flashcards or other user profiles.


## Expected Features List

##### **Terms Used:**
- **Inverse View (Included in all modes by default)**
    - *term --> **flip** --> definition*
    - *definition --> **flip** --> term*
- **Optional Modes:**
    - **Review Mode - Default Key Feature**
        - viewing each card individually like a slideshow
        - can set a time limit between flipping over cards, in order to allow the user to figure out the answer
            - time limit range: 5-30 sec. w/ 5 sec. increases 
    - **Matching Mode - Stretch feature**
        - match the correct term w/ its definition, & vice versa
        - can be **timed** or untimed
            - *time limit range: 10-60 sec. w/ 5 sec. increases*
            - *optional field to input their own time (max 60 sec.)*
    - **Quiz Mode - Stretch feature**
        - same as matching mode, but w/ a scoring system
- **Sets**
    - a set of flashcards
- **Cards**
    - an individual flashcard
- **Public**
    - when a set/folder is searchable on the website & can be viewed on user's profiles
- **Private**
    - when a set/folder is NOT searchable or viewable by others
    - only viewable by creating a shareable link (anyone can see)
__________________________________________________________________________

##### **Key features:**
- User can create an account/make a profile.
- **Registered** users can:
    - Create sets
        - *Unlimited cards per set*
        - *Sets must have a title; a description will be optional* 
        - *Can save their progress for later, in case a set isn't finished*
        - *Can create folders for organization*
        - *Can view their sets (in the default mode) after saving them*
- **Unregistered** users will only be able to view the landing page.
 __________________________________________________________________________
 
##### **Stretch features:**
- Website is responsive.
- **Unregistered** users can:
    - Search the site for **public** sets & other users
    - View other's **public or private** folders/sets 
- **Registered** users can:
    - Do the above tasks
    - Create sets
        - *Can hide the cards while in the creation process (adds the convenience of less scrolling when there's many cards)*
    - Highlight items in their finished sets
    - Customize their sets:
        - *Card colors*
        - *Fonts/font colors*
        - *Alter the card orientation (portrait/landscape)*
        - *Highlighter colors*
    - Have optional modes of studying their flashcards:
        - *Review*
        - *Matching*
        - *Quiz*


## Related Work

[Quizlet](https://quizlet.com/latest) is the main inspiration for this project. We want ours to stand out by: 
  - Offering every single feature for free (Quizlet wants users to pay for the card-customizing & highlighting features);
  - Making the user set a time limit between flipping the cards (Quizlet doesn't have this feature);
  - & having a simpler UI for things like:
      - Creating multiple flashcards at once (Quizlet makes users create one at a time);
      - Hiding the finished flashcards while still in the process of creating the set (Quizlet doesn't have this feature, so the more cards           you have the more you have to scroll);
      - & simplifying the user profile interface to only include profile info in one tab, & the user's folders/flashcards in                           another (if the user made their stuff public; otherwise that section will be empty). 


## Open Questions

We will need to research many things, such as: how to save the user's progress if they need to finish their flashcards later, & how to create folders for organizing. For the stretch features, we will need to research how to implement timers, the customizing options, & basically everything else there.
