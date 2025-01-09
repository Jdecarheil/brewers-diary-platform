
CREATE EXTENSION citext;

CREATE  FUNCTION update_updated_on_user_task()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_on = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL,
  last_seen timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL,
  disabled boolean DEFAULT FALSE NOT NULL,
  avatar_url text,
  user_name text UNIQUE DEFAULT 'User',
  locale VARCHAR(2) DEFAULT 'en' NOT NULL,
  email CITEXT UNIQUE NOT NULL,
  email_verified boolean DEFAULT false,
  default_role text DEFAULT 'user'
);

INSERT INTO users (id, avatar_url, user_name, email)
VALUES ('bcba3d99-d0e0-4711-a434-b091b7622f45', 'url', 'jordan', 'jordan1@gmail.com'); 