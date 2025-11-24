-- ===============================
-- NETTOYAGE DES DONNÉES EXISTANTES
-- ===============================

-- Désactiver temporairement les contraintes de clés étrangères
SET session_replication_role = replica;

-- Supprimer toutes les données existantes dans l'ordre inverse des dépendances
DELETE FROM commentaires;
DELETE FROM details_commande;
DELETE FROM commandes;
DELETE FROM articles;
DELETE FROM categories;
DELETE FROM utilisateurs;
DELETE FROM roles;

-- Réinitialiser les séquences d'auto-incrémentation (PostgreSQL)
-- Seulement si elles existent
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.sequences WHERE sequence_name = 'roles_id_seq') THEN
        ALTER SEQUENCE roles_id_seq RESTART WITH 1;
    END IF;
    
    IF EXISTS (SELECT 1 FROM information_schema.sequences WHERE sequence_name = 'utilisateurs_id_seq') THEN
        ALTER SEQUENCE utilisateurs_id_seq RESTART WITH 1;
    END IF;
    
    IF EXISTS (SELECT 1 FROM information_schema.sequences WHERE sequence_name = 'categories_id_seq') THEN
        ALTER SEQUENCE categories_id_seq RESTART WITH 1;
    END IF;
    
    IF EXISTS (SELECT 1 FROM information_schema.sequences WHERE sequence_name = 'articles_id_seq') THEN
        ALTER SEQUENCE articles_id_seq RESTART WITH 1;
    END IF;
    
    IF EXISTS (SELECT 1 FROM information_schema.sequences WHERE sequence_name = 'commandes_id_seq') THEN
        ALTER SEQUENCE commandes_id_seq RESTART WITH 1;
    END IF;
    
    IF EXISTS (SELECT 1 FROM information_schema.sequences WHERE sequence_name = 'details_commande_id_seq') THEN
        ALTER SEQUENCE details_commande_id_seq RESTART WITH 1;
    END IF;
    
    IF EXISTS (SELECT 1 FROM information_schema.sequences WHERE sequence_name = 'commentaires_id_seq') THEN
        ALTER SEQUENCE commentaires_id_seq RESTART WITH 1;
    END IF;
END $$;

-- ===============================
-- INSERTION DES NOUVELLES DONNÉES
-- ===============================

-- Insertion des rôles
INSERT INTO
    roles (nom_role, description)
VALUES (
        'Administrateur',
        'Accès complet à toutes les fonctionnalités.'
    ),
    (
        'Client',
        'Peut passer des commandes et laisser des commentaires.'
    ),
    (
        'Modérateur',
        'Peut gérer les commentaires et les articles.'
    ),
    (
        'Vendeur',
        'Peut créer et gérer ses propres articles.'
    ),
    (
        'Support',
        'Peut assister les clients et traiter les réclamations.'
    );

-- Insertion des utilisateurs
INSERT INTO
    utilisateurs (
        nom,
        prenom,
        email,
        mot_de_passe,
        role_id
    )
VALUES (
        'Dupont',
        'Jean',
        'jean.dupont@example.com',
        'motdepasse123',
        1
    ),
    (
        'Martin',
        'Marie',
        'marie.martin@example.com',
        'motdepasse456',
        2
    ),
    (
        'Bernard',
        'Pierre',
        'pierre.bernard@example.com',
        'motdepasse789',
        3
    ),
    (
        'Durand',
        'Sophie',
        'sophie.durand@example.com',
        'password123',
        2
    ),
    (
        'Leroy',
        'Thomas',
        'thomas.leroy@example.com',
        'secure456',
        4
    ),
    (
        'Moreau',
        'Julie',
        'julie.moreau@example.com',
        'mypass789',
        2
    ),
    (
        'Simon',
        'Paul',
        'paul.simon@example.com',
        'paulpass',
        4
    ),
    (
        'Michel',
        'Claire',
        'claire.michel@example.com',
        'clairepass',
        2
    ),
    (
        'Garcia',
        'Lucas',
        'lucas.garcia@example.com',
        'lucas123',
        2
    ),
    (
        'Robert',
        'Emma',
        'emma.robert@example.com',
        'emmapass',
        5
    ),
    (
        'Petit',
        'Hugo',
        'hugo.petit@example.com',
        'hugopass',
        2
    ),
    (
        'Roux',
        'Léa',
        'lea.roux@example.com',
        'learoux',
        2
    ),
    (
        'Vincent',
        'Noah',
        'noah.vincent@example.com',
        'noahpass',
        4
    ),
    (
        'Fournier',
        'Chloé',
        'chloe.fournier@example.com',
        'chloepass',
        2
    ),
    (
        'Girard',
        'Maxime',
        'maxime.girard@example.com',
        'maxpass',
        2
    );

-- Insertion des catégories
INSERT INTO
    categories (nom_categorie, description)
VALUES (
        'Électronique',
        'Appareils électroniques et accessoires.'
    ),
    (
        'Vêtements',
        'Vêtements pour hommes, femmes et enfants.'
    ),
    (
        'Livres',
        'Livres de fiction et non-fiction.'
    ),
    (
        'Sport',
        'Équipements et vêtements de sport.'
    ),
    (
        'Maison & Jardin',
        'Décoration, mobilier et outils de jardinage.'
    ),
    (
        'Beauté & Santé',
        'Produits cosmétiques et de bien-être.'
    ),
    (
        'Informatique',
        'Ordinateurs, périphériques et logiciels.'
    ),
    (
        'Jouets',
        'Jouets et jeux pour enfants.'
    ),
    (
        'Automobile',
        'Accessoires et pièces automobiles.'
    ),
    (
        'Musique',
        'Instruments et accessoires musicaux.'
    );

-- Insertion des articles
INSERT INTO
    articles (
        titre,
        description,
        prix,
        quantite_en_stock,
        categorie_id,
        utilisateur_id
    )
VALUES
    -- Électronique
    (
        'Smartphone X1',
        'Smartphone haut de gamme avec écran OLED.',
        699.99,
        50,
        1,
        1
    ),
    (
        'Écouteurs Bluetooth Pro',
        'Écouteurs sans fil avec réduction de bruit.',
        149.99,
        75,
        1,
        5
    ),
    (
        'Tablette Ultra 10"',
        'Tablette avec processeur rapide et grand écran.',
        399.99,
        30,
        1,
        5
    ),
    (
        'Montre connectée Sport',
        'Montre intelligente avec GPS intégré.',
        249.99,
        40,
        1,
        7
    ),
    (
        'Enceinte portable',
        'Enceinte Bluetooth étanche IPX7.',
        79.99,
        60,
        1,
        7
    ),

-- Vêtements
('T-Shirt Noir', 'T-Shirt en coton, taille M.', 19.99, 100, 2, 2),
('Jean Slim Bleu', 'Jean coupe slim, 100% coton bio.', 59.99, 80, 2, 5),
('Robe d''été Fleurie', 'Robe légère parfaite pour l''été.', 45.99, 50, 2, 5),
('Veste en Cuir', 'Veste en cuir véritable, style moderne.', 199.99, 25, 2, 7),
('Baskets Running', 'Chaussures de sport respirantes.', 89.99, 70, 2, 7),
('Pull en Laine', 'Pull chaud en laine mérinos.', 79.99, 45, 2, 13),
('Chemise Blanche', 'Chemise classique pour homme.', 39.99, 60, 2, 13),

-- Livres
('Livre : Le Petit Prince', 'Classique de la littérature française.', 12.50, 30, 3, 3),
('Roman : L''Étranger', 'Chef-d''œuvre d''Albert Camus.', 15.99, 25, 3, 3),
('Guide de Cuisine', 'Recettes faciles pour débutants.', 24.99, 40, 3, 3),
('Livre de Développement Personnel', 'Améliorer sa confiance en soi.', 18.99, 35, 3, 3),
-- Sport
('Ballon de Football', 'Ballon officiel FIFA approuvé.', 29.99, 50, 4, 5),
('Raquette de Tennis', 'Raquette professionnelle en graphite.', 129.99, 20, 4, 7),
('Tapis de Yoga', 'Tapis antidérapant 6mm d''épaisseur.', 34.99, 40, 4, 7),
('Haltères 10kg', 'Paire d''haltères réglables.', 79.99, 15, 4, 13),

-- Maison & Jardin
('Lampe de Bureau LED', 'Lampe avec variateur d''intensité.', 49.99, 30, 5, 5),
('Plante Verte Déco', 'Monstera deliciosa en pot.', 27.99, 25, 5, 7),
('Coussin Décoratif', 'Coussin en velours bleu marine.', 19.99, 80, 5, 13),
('Outils de Jardinage', 'Kit complet pour jardinage.', 59.99, 20, 5, 13),

-- Beauté & Santé
(
    'Crème Hydratante',
    'Crème pour visage, tous types de peau.',
    24.99,
    60,
    6,
    5
),
(
    'Parfum Femme',
    'Fragrance florale élégante.',
    89.99,
    30,
    6,
    7
),
(
    'Brosse à Dents Électrique',
    'Brosse avec timer intégré.',
    69.99,
    25,
    6,
    13
),

-- Informatique
(
    'Clavier Mécanique',
    'Clavier gaming avec rétroéclairage.',
    119.99,
    35,
    7,
    5
),
(
    'Souris Gaming',
    'Souris haute précision 12000 DPI.',
    59.99,
    45,
    7,
    7
),
(
    'Webcam HD',
    'Webcam 1080p avec micro intégré.',
    79.99,
    40,
    7,
    13
),

-- Jouets
(
    'Puzzle 1000 pièces',
    'Puzzle paysage de montagne.',
    14.99,
    50,
    8,
    5
),
(
    'Jeu de Construction',
    'Set de 500 pièces colorées.',
    39.99,
    30,
    8,
    7
),

-- Automobile
(
    'Chargeur Voiture USB',
    'Chargeur rapide double port.',
    19.99,
    100,
    9,
    13
),
(
    'Tapis de Sol Auto',
    'Set de 4 tapis universels.',
    34.99,
    40,
    9,
    13
),

-- Musique
(
    'Guitare Acoustique',
    'Guitare débutant avec médiators.',
    159.99,
    15,
    10,
    7
),
(
    'Partition Piano',
    'Recueil de morceaux classiques.',
    16.99,
    25,
    10,
    13
);

-- Insertion des commandes
INSERT INTO
    commandes (
        utilisateur_id,
        statut,
        montant_total
    )
VALUES (2, 'livrée', 899.98),
    (3, 'en attente', 12.50),
    (4, 'livrée', 149.99),
    (6, 'expédiée', 234.98),
    (9, 'livrée', 79.99),
    (11, 'en attente', 189.98),
    (12, 'livrée', 45.99),
    (14, 'expédiée', 399.99),
    (15, 'livrée', 119.98),
    (4, 'livrée', 299.97),
    (6, 'en préparation', 89.99),
    (9, 'livrée', 174.98),
    (11, 'expédiée', 69.99),
    (12, 'en attente', 249.99),
    (14, 'livrée', 54.98);

-- Insertion des détails de commande
INSERT INTO
    details_commande (
        commande_id,
        article_id,
        quantite,
        prix_unitaire
    )
VALUES
    -- Commande 1
    (1, 1, 1, 699.99),
    (1, 5, 2, 79.99),
    (1, 6, 1, 19.99),
    -- Commande 2
    (2, 8, 1, 12.50),
    -- Commande 3
    (3, 2, 1, 149.99),
    -- Commande 4
    (4, 7, 1, 59.99),
    (4, 17, 1, 34.99),
    (4, 20, 1, 129.99),
    -- Commande 5
    (5, 5, 1, 79.99),
    -- Commande 6
    (6, 1, 1, 699.99),
    (6, 21, 1, 189.98),
    -- Commande 7
    (7, 8, 1, 45.99),
    -- Commande 8
    (8, 4, 1, 399.99),
    -- Commande 9
    (9, 6, 2, 19.99),
    (9, 7, 1, 59.99),
    (9, 16, 1, 24.99),
    -- Commande 10
    (10, 9, 1, 199.99),
    (10, 10, 1, 89.99),
    -- Commande 11
    (11, 18, 1, 89.99),
    -- Commande 12
    (12, 2, 1, 149.99),
    (12, 12, 1, 24.99),
    -- Commande 13
    (13, 22, 1, 69.99),
    -- Commande 14
    (14, 4, 1, 249.99),
    -- Commande 15
    (15, 13, 1, 39.99),
    (15, 15, 1, 14.99);

-- Insertion des commentaires
INSERT INTO commentaires (article_id, utilisateur_id, contenu, note) VALUES
(1, 2, 'Excellent smartphone, très rapide et belle finition.', 5),
(8, 3, 'Un livre intemporel, à lire absolument.', 5),
(2, 4, 'Son de qualité exceptionnelle, très satisfait !', 5),
(1, 6, 'Bon rapport qualité-prix, je recommande.', 4),
(5, 9, 'Enceinte très pratique pour les sorties plage.', 4),
(6, 11, 'Tissu de bonne qualité, taille parfaite.', 4),
(7, 12, 'Jean confortable et stylé, très content.', 5),
(4, 14, 'Montre précise avec beaucoup de fonctionnalités.', 4),
(3, 15, 'Tablette rapide, idéale pour le travail.', 5),
(9, 2, 'Veste de très belle qualité, coupe parfaite.', 5),
(10, 4, 'Baskets confortables pour le running.', 4),
(15, 6, 'Ballon de bonne qualité, conforme aux attentes.', 4),
(16, 9, 'Raquette légère et maniable, parfaite !', 5),
(19, 11, 'Lampe très pratique avec bon éclairage.', 4),
(2, 12, 'Réduction de bruit impressionnante.', 5),
(22, 14, 'Clavier réactif, parfait pour le gaming.', 5),
(8, 15, 'Histoire captivante, lecture agréable.', 4),
(11, 2, 'Pull chaud et confortable pour l''hiver.', 4),
(17, 4, 'Tapis antidérapant, très stable.', 4),
(20, 6, 'Plante en parfait état à la livraison.', 5);

-- Réactiver les contraintes de clés étrangères
SET session_replication_role = DEFAULT;