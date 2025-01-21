
create type Style as enum (
  'Ale',
  'Lager'
);

CREATE TABLE recipe (
  id SERIAL PRIMARY KEY,
  uid UUID NOT NULL,
  created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
  recipe_name VARCHAR(40) DEFAULT 'n/a' NOT NULL,
  f_volume SMALLINT DEFAULT 23 NOT NULL CHECK (f_volume > 0 AND f_volume < 10000),
  author VARCHAR(40) DEFAULT 'n/a' NOT NULL,
  notes VARCHAR(255) DEFAULT 'n/a' NOT NULL,
  boil_duration SMALLINT DEFAULT 60 NOT NULL CHECK (boil_duration > 0 AND boil_duration < 241),
  brew_style Style DEFAULT 'Ale' NOT NULL,
  FOREIGN KEY (uid) REFERENCES user_account(id)
);

INSERT INTO recipe (uid, id, recipe_name, f_volume, author, notes, boil_duration, brew_style) VALUES ('bfda458b-e4e1-4b5e-b73a-08e39df8663d', 1, 'Pale Ale 2.0', 23, 'JordanR', 'Bigger than the other one', 60, 'Ale'),
('bfda458b-e4e1-4b5e-b73a-08e39df8663d', 2, 'Pale Ale 3.0', 28, 'JordanR', 'Bigger than the other one', 60, 'Ale'), 
('bfda458b-e4e1-4b5e-b73a-08e39df8663d', 3, 'Pale Ale 4.0', 23, 'JordanR', 'Bigger than the other one',  90, 'Ale'), 
('bfda458b-e4e1-4b5e-b73a-08e39df8663d', 4, 'Pale Ale 5.0', 23, 'JordanR', 'Bigger than the other one', 60, 'Ale'),
('bfda458b-e4e1-4b5e-b73a-08e39df8663d', 5, 'Pale Ale 6.0', 22, 'JordanR', 'Bigger than the other one', 60, 'Ale'),
('bfda458b-e4e1-4b5e-b73a-08e39df8663d', 6, 'Pale Ale 7.0', 23, 'JordanR', 'Fruity', 45, 'Ale'),
('bfda458b-e4e1-4b5e-b73a-08e39df8663d', 7, 'Pale Ale 8.0', 23, 'JordanR', 'Bigger than the other one', 45, 'Ale'),
('bfda458b-e4e1-4b5e-b73a-08e39df8663d', 8, 'Pale Ale 9.0', 23, 'JordanR', 'Bigger than the other one', 60, 'Ale'), 
('bfda458b-e4e1-4b5e-b73a-08e39df8663d', 9, 'Pacific Ale 1.0', 20, 'JordanR', 'Add oats for more body', 60, 'Ale'), 
('bfda458b-e4e1-4b5e-b73a-08e39df8663d', 10, 'Pacific Ale 2.0', 15, 'JordanR', 'Bigger than the other one', 45, 'Ale'), 
('bfda458b-e4e1-4b5e-b73a-08e39df8663d', 11, 'Pacific Ale 4.0', 40, 'JordanR', 'Bigger than the other one', 50, 'Ale'), 
('bfda458b-e4e1-4b5e-b73a-08e39df8663d', 12, 'Pacific Ale 5.0', 23, 'JordanR', 'Close to the original', 50, 'Ale'),
('bfda458b-e4e1-4b5e-b73a-08e39df8663d', 13, 'Pacific Ale 6.0', 23, 'JordanR', 'Bigger than the other one', 60, 'Ale'), 
('bfda458b-e4e1-4b5e-b73a-08e39df8663d', 14, 'Amber Ale 1.0', 23, 'JordanR', 'Not as good as previous', 60, 'Ale'),
('bfda458b-e4e1-4b5e-b73a-08e39df8663d', 15, 'Amber Ale 2.0', 23, 'JordanR', 'Bigger than the other one', 45, 'Ale'), 
('bfda458b-e4e1-4b5e-b73a-08e39df8663d', 16, 'Amber Ale 3.0', 27, 'JordanR', 'Bigger than the other one', 55, 'Ale'), 
('bfda458b-e4e1-4b5e-b73a-08e39df8663d', 17, 'Amber Ale 4.0', 27, 'JordanR', 'Bigger than the other one', 70, 'Ale'), 
('bfda458b-e4e1-4b5e-b73a-08e39df8663d', 18, 'Amber Ale 5.0', 13, 'JordanR', 'Bigger than the other one', 60, 'Ale'), 
('bfda458b-e4e1-4b5e-b73a-08e39df8663d', 19, 'Amber Ale 6.0', 13, 'JordanR', 'Bigger than the other one', 60, 'Ale') 