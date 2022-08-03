-- To log into these you must use not a SECRET_KEY in your .env

INSERT INTO users (email, username, first_name, last_name, password)
VALUES ('2@',
        '2',
        '2',
        '2',
        '$2b$13$QDyZl0byBhW82nrhB0xaP.y0i3EWFGK57KpJp39/6SC2qeK0IMYmu');


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
        false,
        'Algebra formulas for Mrs.Smiths class',
        'Algebra Formulas',
        '[
    {"term":"Volume of Cylinder","definition":"V=πr^2 h","id":0},
    {"term":"Slope Intercept Form","definition":"y=mx+b","id":1},
    {"term":"Area of Circle","definition":"A=πr^2","id":2}
]');


INSERT INTO FlashcardSets (user_id, is_public, description, title, flashcards)
VALUES (1,
        true,
        'American History starting from early colonial times',
        'American History',
        '[
    {"term":"Proclamation Act of 1763","definition":"Act passed by Parliament that prohibited colonists from settling west of the Appalachian Mountains; British hoped it would prevent violence between Native Americans and colonists.","id":0},
    {"term":"Sugar Act 1764","definition":"Placed tax on sugar, coffee, indigo, and molasses.","id":1},
    {"term":"Declaration of Independence","definition":"1776 statement, issued by the Second Continental Congress, explaining why the colonies wanted independence from Britain.","id":2}
]');


INSERT INTO FlashcardSets (user_id, is_public, description, title, flashcards)
VALUES (1,
        true,
        'basic economic terms',
        'Economics',
        '[
    {"term":"4 factors of production","definition":"land, labor, capital, and entrepreneurs","id":0},
    {"term":"entrepreneurs","definition":"people who decide how to combine the other factors of production to create new goods and service","id":1},
    {"term":"incentive","definition":"reward offered to persuade people to make certain economic decisions","id":2}
]');


INSERT INTO FlashcardSets (user_id, is_public, description, title, flashcards)
VALUES (6,
        false,
        'description2',
        'title2',
        '[
    {"term":"user6term6","definition":"user6def6 not public","id":0},
    {"term":"user6term7","definition":"user6def7 not public","id":1}
]');


INSERT INTO FlashcardSets (user_id, is_public, description, title, flashcards)
VALUES (4,
        true,
        'description1',
        'title1',
        '[
    {"term":"user1term8","definition":"user1def8 public","id":0},
    {"term":"user1term9","definition":"user1def9 public","id":1}
]');


INSERT INTO FlashcardSets (user_id, is_public, description, title, flashcards)
VALUES (1,
        false,
        'study terms for Microbiology 301C',
        'Microbiology 301C',
        '[
    {"term":"Microbiology","definition":"A branch of biology dealing especially with microscopic forms of life (as bacteria, protozoans, viruses, and fungi).","id":0},
    {"term":"Infectious","definition":"Diseases that are caused by infecting organisms; they can be passed from person to person","id":1},
    {"term":"Antibiotics","definition":"Drugs that block the growth and reproduction of bacteria","id":2}
]');

