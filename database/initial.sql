DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

--- Criando a tabela users
CREATE TABLE users (
    id UUID PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    type VARCHAR(15) DEFAULT 'personal',
    created TIMESTAMP,
    modifield TIMESTAMP,
    deleted TIMESTAMP
);

-- Criando a tabela workouts com chave estrangeira referenciando users
CREATE TABLE workouts (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255),
    break_time INTEGER,
    created TIMESTAMP,
    modifield TIMESTAMP,
    deleted TIMESTAMP
);

-- Criando a tabela exercises com chave estrangeira referenciando workouts
CREATE TABLE exercises (
    id UUID PRIMARY KEY,
    workout_id UUID REFERENCES workouts(id) ON DELETE CASCADE,
    title VARCHAR(255),
    serie INTEGER,
    repetition INTEGER,
    created TIMESTAMP,
    modifield TIMESTAMP,
    deleted TIMESTAMP
);

-- Criando a tabela running_trainings com chave estrangeira referenciando workouts
CREATE TABLE running_trainings (
    id UUID PRIMARY KEY,
    workout_id UUID REFERENCES workouts(id) ON DELETE CASCADE,
    start_date TIMESTAMP,
    end_date TIMESTAMP,
    created TIMESTAMP,
    modifield TIMESTAMP,
    deleted TIMESTAMP
);

-- Populando a tabela users
INSERT INTO users (id, name, email, password, created, modifield, deleted) VALUES
('b8098c1a-f86e-11da-bd1a-00112444be1a', 'John Doe', 'john.doe@example.com', 'password123', '2023-01-01 00:00:00', '2023-01-01 00:00:00', NULL),
('b8098c1a-f86e-11da-bd1a-00112444be1b', 'Jane Smith', 'jane.smith@example.com', 'password456', '2023-02-01 00:00:00', '2023-02-01 00:00:00', NULL);

-- Populando a tabela workouts
INSERT INTO workouts (id, user_id, title, break_time, created, modifield, deleted) VALUES
('a8098c1a-f86e-11da-bd1a-00112444be1e', 'b8098c1a-f86e-11da-bd1a-00112444be1a', 'Workout A', 60, '2023-01-01 00:00:00', '2023-01-01 00:00:00', NULL),
('a8098c1a-f86e-11da-bd1a-00112444be1f', 'b8098c1a-f86e-11da-bd1a-00112444be1b', 'Workout B', 90, '2023-02-01 00:00:00', '2023-02-01 00:00:00', NULL);

-- Populando a tabela exercises
INSERT INTO exercises (id, workout_id, title, serie, repetition, created, modifield, deleted) VALUES
('c8098c1a-f86e-11da-bd1a-00112444be1a', 'a8098c1a-f86e-11da-bd1a-00112444be1e', 'Push-up', 3, 15, '2023-01-01 00:00:00', '2023-01-01 00:00:00', NULL),
('c8098c1a-f86e-11da-bd1a-00112444be1b', 'a8098c1a-f86e-11da-bd1a-00112444be1e', 'Sit-up', 3, 20, '2023-01-01 00:00:00', '2023-01-01 00:00:00', NULL),
('c8098c1a-f86e-11da-bd1a-00112444be1c', 'a8098c1a-f86e-11da-bd1a-00112444be1f', 'Squat', 4, 12, '2023-02-01 00:00:00', '2023-02-01 00:00:00', NULL);

-- Populando a tabela running_trainings
INSERT INTO running_trainings (id, workout_id, start_date, end_date, created, modifield, deleted) VALUES
('d8098c1a-f86e-11da-bd1a-00112444be1a', 'a8098c1a-f86e-11da-bd1a-00112444be1e', '2023-01-01 06:00:00', '2023-01-01 07:00:00', '2023-01-01 00:00:00', '2023-01-01 00:00:00', NULL),
('d8098c1a-f86e-11da-bd1a-00112444be1b', 'a8098c1a-f86e-11da-bd1a-00112444be1f', '2023-02-01 06:00:00', '2023-02-01 07:00:00', '2023-02-01 00:00:00', '2023-02-01 00:00:00', NULL);


-- Criando a tabela body_measurements com todas as colunas e comentários
CREATE TABLE body_measurements (
    id UUID PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    height DECIMAL(5,2),
    weight DECIMAL(5,2),
    neck DECIMAL(5,2),
    chest DECIMAL(5,2),
    abdomen DECIMAL(5,2),
    hips DECIMAL(5,2),
    waist DECIMAL(5,2),
    glute DECIMAL(5,2),
    left_thigh DECIMAL(5,2),
    right_thigh DECIMAL(5,2),
    left_calf DECIMAL(5,2),
    right_calf DECIMAL(5,2),
    left_arm DECIMAL(5,2),
    right_arm DECIMAL(5,2),
    left_forearm DECIMAL(5,2),
    right_forearm DECIMAL(5,2),
    fat_mass DECIMAL(6,2),
    lean_mass DECIMAL(6,2),
    body_fat_percentage DECIMAL(5,2),
    created TIMESTAMP,
    modifield TIMESTAMP,
    deleted TIMESTAMP
);

-- Adicionar comentários para as colunas
COMMENT ON COLUMN body_measurements.id IS 'UUID único para o conjunto de medidas';
COMMENT ON COLUMN body_measurements.user_id IS 'UUID do usuário ao qual as medidas pertencem';
COMMENT ON COLUMN body_measurements.height IS 'Altura (em cm)';
COMMENT ON COLUMN body_measurements.weight IS 'Peso (em kg)';
COMMENT ON COLUMN body_measurements.neck IS 'Circunferência do pescoço (em cm)';
COMMENT ON COLUMN body_measurements.chest IS 'Circunferência do peitoral (em cm)';
COMMENT ON COLUMN body_measurements.abdomen IS 'Circunferência do abdômen (em cm)';
COMMENT ON COLUMN body_measurements.hips IS 'Circunferência do quadril (em cm)';
COMMENT ON COLUMN body_measurements.waist IS 'Circunferência da cintura (em cm)';
COMMENT ON COLUMN body_measurements.glute IS 'Circunferência do glúteo (em cm)';
COMMENT ON COLUMN body_measurements.left_thigh IS 'Circunferência da coxa esquerda (em cm)';
COMMENT ON COLUMN body_measurements.right_thigh IS 'Circunferência da coxa direita (em cm)';
COMMENT ON COLUMN body_measurements.left_calf IS 'Circunferência da panturrilha esquerda (em cm)';
COMMENT ON COLUMN body_measurements.right_calf IS 'Circunferência da panturrilha direita (em cm)';
COMMENT ON COLUMN body_measurements.left_arm IS 'Circunferência do braço esquerdo (em cm)';
COMMENT ON COLUMN body_measurements.right_arm IS 'Circunferência do braço direito (em cm)';
COMMENT ON COLUMN body_measurements.left_forearm IS 'Circunferência do antebraço esquerdo (em cm)';
COMMENT ON COLUMN body_measurements.right_forearm IS 'Circunferência do antebraço direito (em cm)';
COMMENT ON COLUMN body_measurements.fat_mass IS 'Massa gorda (em kg)';
COMMENT ON COLUMN body_measurements.lean_mass IS 'Massa magra (em kg)';
COMMENT ON COLUMN body_measurements.body_fat_percentage IS 'Percentual de gordura (em %)';
COMMENT ON COLUMN body_measurements.created IS 'Data de criação do registro';
COMMENT ON COLUMN body_measurements.modifield IS 'Data da última modificação do registro';
COMMENT ON COLUMN body_measurements.deleted IS 'Data de exclusão lógica do registro (NULL se não excluído)';

-- Inserindo dados na tabela body_measurements com as novas colunas
INSERT INTO body_measurements ( id, user_id, height, weight, neck, chest, abdomen, hips, waist, glute, left_thigh, right_thigh, left_calf, right_calf, left_arm, right_arm, left_forearm, right_forearm, fat_mass, lean_mass, body_fat_percentage, created, modifield, deleted) 
VALUES('e8098c1a-f86e-11da-bd1a-00112444be1a', 'b8098c1a-f86e-11da-bd1a-00112444be1a', 163.00, 66.40, 37.00, 95.00, 78.50, 82.50, 83.00, 97.00, 
 59.50, 61.50, 35.50, 34.00, 35.50, 36.00, 28.50, 28.50, 5.47, 24.46, 18.26, '2023-01-01 00:00:00', '2023-01-01 00:00:00', NULL),
('e8098c1a-f86e-11da-bd1a-00112444be1b', 'b8098c1a-f86e-11da-bd1a-00112444be1b', 170.00, 70.00, 38.00, 100.00, 80.00, 85.00, 85.00, 100.00, 
 60.00, 62.00, 36.00, 35.00, 36.00, 37.00, 29.00, 29.00, 6.00, 25.00, 20.00, '2023-02-01 00:00:00', '2023-02-01 00:00:00', NULL);
