-- To log into these you must not use a SECRET_KEY in your .env

INSERT INTO users (email, username, first_name, last_name, password)
VALUES ('AnityaGupta@gmail.com',
        'AnityaGupta',
        'Anitya',
        'Gupta',
        '$2b$13$COGtW16FBSE/JOzoEzJzjuPEOUwnDY81d/BikiG6pntLziKSb8/7W');


INSERT INTO users (email, username, first_name, last_name, password)
VALUES ('1@',
        '1',
        '1',
        '1',
        '$2b$13$QDyZl0byBhW82nrhB0xaP.y0i3EWFGK57KpJp39/6SC2qeK0IMYmu');


INSERT INTO users (email, username, first_name, last_name, password)
VALUES ('3@',
        '3',
        '3',
        '3',
        '$2b$13$QDyZl0byBhW82nrhB0xaP.y0i3EWFGK57KpJp39/6SC2qeK0IMYmu');


INSERT INTO users (email, username, first_name, last_name, password)
VALUES ('4@',
        '4',
        '4',
        '4',
        '$2b$13$QDyZl0byBhW82nrhB0xaP.y0i3EWFGK57KpJp39/6SC2qeK0IMYmu');


INSERT INTO users (email, username, first_name, last_name, password)
VALUES ('5@',
        '5',
        '5',
        '5',
        '$2b$13$QDyZl0byBhW82nrhB0xaP.y0i3EWFGK57KpJp39/6SC2qeK0IMYmu');


INSERT INTO users (email, username, first_name, last_name, password)
VALUES ('6@',
        '6',
        '6',
        '6',
        '$2b$13$QDyZl0byBhW82nrhB0xaP.y0i3EWFGK57KpJp39/6SC2qeK0IMYmu');


INSERT INTO FlashcardSets (user_id, is_public, description, title, flashcards)
VALUES (1,
        true,
        'Algebra formulas for Mrs.Smiths class',
        'Algebra Formulas',
        '[
        {"term":"Absolute Value","definition":"Distance of a number from 0","id":0},
        {"term":"Slope Intercept Form","definition":"y = mx+b","id":1},
        {"term":"Pythagorean Theorem","definition":"Fundamental relationship of 3 right triangles","id":2},
        {"term":"Function Notation","definition":"A way to show all types of functions in mathematics","id":3}
        ]'
);


INSERT INTO FlashcardSets (user_id, is_public, description, title, flashcards)
VALUES (1,
        true,
        'American History starting from early colonial times',
        'American History',
        '[
        {"term":"Proclamation Act of 1763","definition":"Act passed by Parliament that prohibited colonists from settling west of the Appalachian Mountains; British hoped it would prevent violence between Native Americans and colonists.","id":0},
        {"term":"Sugar Act 1764","definition":"Placed tax on sugar, coffee, indigo, and molasses.","id":1},
        {"term":"Declaration of Independence","definition":"1776 statement, issued by the Second Continental Congress, explaining why the colonies wanted independence from Britain.","id":2},
        {"term":"Triangular Trade","definition":"A three way system of trade during 1600-1800s Africa sent slaves to America, America sent Raw Materials to Europe, and Europe sent Guns and Rum to Africa.","id":3},
        {"term":"Mayflower Compact","definition":"A document written by the Pilgrims establishing themselves as a political society and setting guidelines for self-government.","id":4}
        ]'
);


INSERT INTO FlashcardSets (user_id, is_public, description, title, flashcards)
VALUES (1,
        true,
        'basic economic terms',
        'Economics',
        '[
        {"term":"4 Factors of Production","definition":"land, labor, capital, and entrepreneurs","id":0},
        {"term":"Entrepreneurs","definition":"people who decide how to combine the other factors of production to create new goods and service","id":1},
        {"term":"Incentive","definition":"reward offered to persuade people to make certain economic decisions","id":2},
        {"term":"Demand","definition":"Combination of quantities that someone would be willing and able to buy over a range of possible prices at a given moment","id":3},
        {"term":"Elasticity","definition":"a measure of responsiveness that tells us how a dependent variable, such as quantity demanded or quantity supplied, responds to a change in an independent variable such as price","id":4}
        ]'
);


INSERT INTO FlashcardSets (user_id, is_public, description, title, flashcards)
VALUES (6,
        true,
        'notes for english 101 class',
        'English 101',
        '[
        {"term":"knots","definition":"a measure of the speed of ships, one is one nautical mile per hour","id":0},
        {"term":"disperse","definition":"to (cause to) spread something","id":1},
        {"term":"congeals","definition":"to change from a liquid to a solid state","id":2},
        {"term":"sulphur","definition":"a light yellow non-mettalic element found in the earth, which burn with a blue flame","id":3},
        {"term":"funnel","definition":"a chimney on a ship etc. through which smoke escapes giving off a choking smell","id":4}
        ]'
);


INSERT INTO FlashcardSets (user_id, is_public, description, title, flashcards)
VALUES (4,
        true,
        'description1',
        'title1',
        '[
        {"term":"user1term8","definition":"user1def8 public","id":0},
        {"term":"user1term9","definition":"user1def9 public","id":1}
        ]'
);


INSERT INTO FlashcardSets (user_id, is_public, description, title, flashcards)
VALUES (1,
        true,
        'study terms for Microbiology 301C',
        'Microbiology 301C',
        '[
        {"term":"Microbiology","definition":"A branch of biology dealing especially with microscopic forms of life (as bacteria, protozoans, viruses, and fungi).","id":0},
        {"term":"Infectious","definition":"Diseases that are caused by infecting organisms; they can be passed from person to person","id":1},
        {"term":"Antibiotics","definition":"Drugs that block the growth and reproduction of bacteria","id":2},
        {"term":"With regard to microscopy, contrast is best described as","definition":"the differences in intensity between an object and its background.","id":3},
        {"term":"Which unit is most appropriate to measure the size of cells?","definition":"micrometer","id":4}
        ]'
);