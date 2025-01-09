
create type Style as enum (
  'Ale',
  'Lager'
);

CREATE TABLE recipe (
  id SERIAL PRIMARY KEY,
  created_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL,
  recipe_name VARCHAR(40) DEFAULT 'n/a' NOT NULL,
  f_volume SMALLINT DEFAULT 23 NOT NULL CHECK (f_volume > 0 AND f_volume < 10000),
  author VARCHAR(40) DEFAULT 'n/a' NOT NULL,
  notes VARCHAR(255) DEFAULT 'n/a' NOT NULL,
  boil_duration SMALLINT DEFAULT 60 NOT NULL CHECK (boil_duration > 0 AND boil_duration < 241),
  brew_style Style DEFAULT 'Ale' NOT NULL
);

INSERT INTO recipe (id, recipe_name, f_volume, author, notes, boil_duration, brew_style) VALUES (1, 'Pale Ale 2.0', 23, 'JordanR', 'Bigger than the other one', 60, 'Ale'),
(2, 'Pale Ale 3.0', 28, 'JordanR', 'Bigger than the other one', 60, 'Ale'), 
(3, 'Pale Ale 4.0', 23, 'JordanR', 'Bigger than the other one',  90, 'Ale'), 
(4, 'Pale Ale 5.0', 23, 'JordanR', 'Bigger than the other one', 60, 'Ale'),
(5, 'Pale Ale 6.0', 22, 'JordanR', 'Bigger than the other one', 60, 'Ale'),
(6, 'Pale Ale 7.0', 23, 'JordanR', 'Fruity', 45, 'Ale'),
(7, 'Pale Ale 8.0', 23, 'JordanR', 'Bigger than the other one', 45, 'Ale'),
(8, 'Pale Ale 9.0', 23, 'JordanR', 'Bigger than the other one', 60, 'Ale'), 
(9, 'Pacific Ale 1.0', 20, 'JordanR', 'Add oats for more body', 60, 'Ale'), 
(10, 'Pacific Ale 2.0', 15, 'JordanR', 'Bigger than the other one', 45, 'Ale'), 
(11, 'Pacific Ale 4.0', 40, 'JordanR', 'Bigger than the other one', 50, 'Ale'), 
(12, 'Pacific Ale 5.0', 23, 'JordanR', 'Close to the original', 50, 'Ale'),
(13, 'Pacific Ale 6.0', 23, 'JordanR', 'Bigger than the other one', 60, 'Ale'), 
(14, 'Amber Ale 1.0', 23, 'JordanR', 'Not as good as previous', 60, 'Ale'),
(15, 'Amber Ale 2.0', 23, 'JordanR', 'Bigger than the other one', 45, 'Ale'), 
(16, 'Amber Ale 3.0', 27, 'JordanR', 'Bigger than the other one', 55, 'Ale'), 
(17, 'Amber Ale 4.0', 27, 'JordanR', 'Bigger than the other one', 70, 'Ale'), 
(18, 'Amber Ale 5.0', 13, 'JordanR', 'Bigger than the other one', 60, 'Ale'), 
(19, 'Amber Ale 6.0', 13, 'JordanR', 'Bigger than the other one', 60, 'Ale') 