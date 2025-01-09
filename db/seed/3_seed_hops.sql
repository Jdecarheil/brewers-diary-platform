
create type Type as enum (
  'Pellet',
  'Cryo',
  'Fresh'
);

create type Addition as enum (
  'Flame Out',
  'Boil',
  'Dry Hop'
);

CREATE TABLE hop (
  id INT,
  hop_id SERIAL PRIMARY KEY NOT NULL ,
  created_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL,
  hop_name VARCHAR(40) DEFAULT 'n/a' NOT NULL,
  alpha_acid DECIMAL DEFAULT 0.0 NOT NULL CHECK (alpha_acid > 0.0 AND alpha_acid < 100.0),
  type Type DEFAULT 'Pellet' NOT NULL,
  weight SMALLINT DEFAULT 0 NOT NULL CHECK (weight > 0 AND weight < 100000),
  duration SMALLINT DEFAULT 0 NOT NULL CHECK (duration > 0 AND duration < 100000),
  notes VARCHAR(255) DEFAULT 'n/a' NOT NULL,
  addition Addition DEFAULT 'Boil' NOT NULL,
  FOREIGN KEY (id) REFERENCES recipe(id)
);

INSERT INTO hop (id, hop_name, alpha_acid, type, weight, duration, notes, addition) VALUES (1, 'Magnum', 12.8, 'Pellet', 20, 60, 'from local farm', 'Boil'), 
(1, 'Centennial', 14.8, 'Pellet', 20, 4320, 'from local farm', 'Dry Hop'),
(3, 'Magnum', 12.8, 'Pellet', 20, 45, 'from local farm', 'Boil'),
(5, 'Galaxy', 16.7, 'Cryo', 20, 30, 'from local farm', 'Flame Out'),
(5, 'Galaxy', 16.7, 'Pellet', 20, 60, '', 'Boil'),
(5, 'Magnum', 12.8, 'Pellet', 20, 60, '', 'Boil'),
(14, 'Cascade', 4.7, 'Fresh', 20, 15, 'from local farm', 'Flame Out'),
(14, 'Magnum', 12.8, 'Pellet', 20, 60, 'from local farm', 'Boil'),
(15, 'Galaxy', 16.7, 'Pellet', 20, 7200, 'from local farm', 'Dry Hop'),
(15, 'Magnum', 12.8, 'Pellet', 20, 60, '', 'Boil'),
(15, 'Cascade', 4.7, 'Pellet', 20, 5, 'from local farm', 'Boil'),
(15, 'Magnum', 12.8, 'Pellet', 20, 30, 'from local farm', 'Boil'),
(15, 'Magnum', 12.8, 'Pellet', 20, 30, 'from local farm', 'Boil'),
(2, 'Cascade', 4.7, 'Pellet', 20, 60, 'from local farm', 'Boil'),
(11, 'Magnum', 12.8, 'Pellet', 20, 30, 'from local farm', 'Boil'),
(11, 'Magnum', 12.8, 'Pellet', 20, 30, 'from local farm', 'Boil'),
(11, 'Magnum', 12.8, 'Pellet', 20, 30, 'from local farm', 'Boil'),
(11, 'Magnum', 12.8, 'Pellet', 20, 30, 'from local farm', 'Boil')

