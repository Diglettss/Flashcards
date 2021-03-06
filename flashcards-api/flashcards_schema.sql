CREATE TABLE users( 
    id          SERIAL PRIMARY KEY,
    set_id      INTEGER[],
    username    TEXT NOT NULL,
    password    TEXT NOT NULL,
    first_name  TEXT NOT NULL,
    last_name   TEXT NOT NULL,
    email       TEXT NOT NULL UNIQUE CHECK(POSITION('@' IN email) > 1),
    created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);
