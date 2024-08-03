CREATE TABLE users (
    id UUID PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    created TIMESTAMP,
    modifield TIMESTAMP,
    deleted TIMESTAMP
);

-- Criando a tabela running_trainings
CREATE TABLE running_trainings (
    id UUID PRIMARY KEY,
    workout_id VARCHAR(255),
    start_date TIMESTAMP,
    end_date TIMESTAMP,
    created TIMESTAMP,
    modifield TIMESTAMP,
    deleted TIMESTAMP
);

-- Criando a tabela workouts
CREATE TABLE workouts (
    id UUID PRIMARY KEY,
    user_id UUID,
    title VARCHAR(255),
    break_time INTEGER,
    created TIMESTAMP,
    modifield TIMESTAMP,
    deleted TIMESTAMP
);

-- Criando a tabela exercises
CREATE TABLE exercises (
    id UUID PRIMARY KEY,
    workout_id UUID,
    title VARCHAR(255),
    serie INTEGER,
    repetition INTEGER,
    created TIMESTAMP,
    modifield TIMESTAMP,
    deleted TIMESTAMP
);


INSERT INTO users (name, email, password, created, modifield, deleted) VALUES
('John Doe', 'john.doe@example.com', 'password123', '2023-01-01 00:00:00', '2023-01-01 00:00:00', NULL),
('Jane Smith', 'jane.smith@example.com', 'password456', '2023-02-01 00:00:00', '2023-02-01 00:00:00', NULL);

-- Populando a tabela workouts
INSERT INTO workouts (id, user_id, title, break_time, created, modifield, deleted) VALUES
('a8098c1a-f86e-11da-bd1a-00112444be1e', 'a8098c1a-f86e-11da-bd1a-00112444be1e', 'Workout A', 60, '2023-01-01 00:00:00', '2023-01-01 00:00:00', NULL),
('a8098c1a-f86e-11da-bd1a-00112444be1f', 'a8098c1a-f86e-11da-bd1a-00112444be1f', 'Workout B', 90, '2023-02-01 00:00:00', '2023-02-01 00:00:00', NULL);

-- Populando a tabela exercises
INSERT INTO exercises (id, workout_id, title, serie, repetition, created, modifield, deleted) VALUES
('b8098c1a-f86e-11da-bd1a-00112444be1e', 'a8098c1a-f86e-11da-bd1a-00112444be1e', 'Push-up', 3, 15, '2023-01-01 00:00:00', '2023-01-01 00:00:00', NULL),
('b8098c1a-f86e-11da-bd1a-00112444be1f', 'a8098c1a-f86e-11da-bd1a-00112444be1e', 'Sit-up', 3, 20, '2023-01-01 00:00:00', '2023-01-01 00:00:00', NULL),
('b8098c1a-f86e-11da-bd1a-00112444be20', 'a8098c1a-f86e-11da-bd1a-00112444be1f', 'Squat', 4, 12, '2023-02-01 00:00:00', '2023-02-01 00:00:00', NULL);

-- Populando a tabela running_trainings
INSERT INTO running_trainings (workout_id, start_date, end_date, created, modifield, deleted) VALUES
('a8098c1a-f86e-11da-bd1a-00112444be1e', '2023-01-01 06:00:00', '2023-01-01 07:00:00', '2023-01-01 00:00:00', '2023-01-01 00:00:00', NULL),
('a8098c1a-f86e-11da-bd1a-00112444be1f', '2023-02-01 06:00:00', '2023-02-01 07:00:00', '2023-02-01 00:00:00', '2023-02-01 00:00:00', NULL);

