CREATE EXTENSION citext; 

CREATE  FUNCTION update_updated_on_user_task()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TABLE user_account (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  username VARCHAR(30) NOT NULL UNIQUE,
  password VARCHAR(73) NOT NULL,
  email CITEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  last_seen TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL,
  disabled BOOLEAN DEFAULT FALSE NOT NULL,
  locale VARCHAR(2) DEFAULT 'en' NOT NULL,
  email_verified BOOLEAN DEFAULT FALSE NOT NULL,
  default_role VARCHAR(4) DEFAULT 'user' NOT NULL
);

INSERT INTO user_account(id, username, password, email) VALUES 
('bfda458b-e4e1-4b5e-b73a-08e39df8663d', 'dec0004', '$2a$12$ESI.W.skhcRBt9GxSG2qDehQuBBhDmf.TkDBgks3q31gvjuOCT9fi', 'jordan@mail.com')


