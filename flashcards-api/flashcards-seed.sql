-- To log into these you must use not a SECRET_KEY in your .env
INSERT INTO users ( email, username, first_name, last_name,     password )
VALUES (             '2@',     '2',       '2',       '2',       '$2b$13$QDyZl0byBhW82nrhB0xaP.y0i3EWFGK57KpJp39/6SC2qeK0IMYmu');

INSERT INTO users ( email, username, first_name, last_name,     password )
VALUES (             '1@',     '1',       '1',       '1',       '$2b$13$QDyZl0byBhW82nrhB0xaP.y0i3EWFGK57KpJp39/6SC2qeK0IMYmu');

INSERT INTO users ( email, username, first_name, last_name,     password )
VALUES (             '3@',     '3',       '3',       '3',      '$2b$13$QDyZl0byBhW82nrhB0xaP.y0i3EWFGK57KpJp39/6SC2qeK0IMYmu');

INSERT INTO users ( email, username, first_name, last_name,     password )
VALUES (             '4@',     '4',       '4',       '4',       '$2b$13$QDyZl0byBhW82nrhB0xaP.y0i3EWFGK57KpJp39/6SC2qeK0IMYmu');

INSERT INTO users ( email, username, first_name, last_name,     password )
VALUES (             '5@',     '5',       '5',       '5',       '$2b$13$QDyZl0byBhW82nrhB0xaP.y0i3EWFGK57KpJp39/6SC2qeK0IMYmu');

INSERT INTO users ( email, username, first_name, last_name,     password )
VALUES (             '6@',     '6',     '6',       '6',         '$2b$13$QDyZl0byBhW82nrhB0xaP.y0i3EWFGK57KpJp39/6SC2qeK0IMYmu');

INSERT INTO FlashcardSets ( user_id, is_public, description,            title,              flashcards )
VALUES (                    1,     false,     'description1',  'title1',       
'[
    {"term":"user1term0","definition":"user1def0 not public","id":0},
    {"term":"user1term1","definition":"user1def1 not public","id":1}
]'
);

INSERT INTO FlashcardSets ( user_id, is_public, description,            title,              flashcards )
VALUES (                    1,     true,     'description2',  'title2',       '[
    {"term":"user1term2","definition":"user1def2 public","id":0},
    {"term":"user1term3","definition":"user1def3 public","id":1}
]'
);

INSERT INTO FlashcardSets ( user_id, is_public, description,            title,              flashcards )
VALUES (                    4,     true,     'description1',  'title1',       '[
    {"term":"user4term4","definition":"user4def4 public","id":0},
    {"term":"user4term5","definition":"user4def5 public","id":1}
]'
);

INSERT INTO FlashcardSets ( user_id, is_public, description,            title,              flashcards )
VALUES (                    6,     false,     'description2',  'title2',       '[
    {"term":"user6term6","definition":"user6def6 not public","id":0},
    {"term":"user6term7","definition":"user6def7 not public","id":1}
]'
);

INSERT INTO FlashcardSets ( user_id, is_public, description,            title,              flashcards )
VALUES (                    1,     true,     'description1',  'title1',       '[
    {"term":"user1term8","definition":"user1def8 public","id":0},
    {"term":"user1term9","definition":"user1def9 public","id":1}
]'
);

INSERT INTO FlashcardSets ( user_id, is_public, description,            title,              flashcards )
VALUES (                    1,     false,     'description2',  'title2',       '[
    {"term":"user1term10","definition":"user1def10 not public","id":0},
    {"term":"user1term11","definition":"user1def11 not public","id":1}
]'
);
