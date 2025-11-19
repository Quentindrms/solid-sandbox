-- Insertion des rôles
INSERT INTO roles (nom_role, description) VALUES
('Administrateur', 'Accès complet à toutes les fonctionnalités.'),
('Client', 'Peut passer des commandes et laisser des commentaires.'),
('Modérateur', 'Peut gérer les commentaires et les articles.');

-- Insertion des utilisateurs
INSERT INTO utilisateurs (nom, prenom, email, mot_de_passe, role_id) VALUES
('Dupont', 'Jean', 'jean.dupont@example.com', 'motdepasse123', 1),
('Martin', 'Marie', 'marie.martin@example.com', 'motdepasse456', 2),
('Bernard', 'Pierre', 'pierre.bernard@example.com', 'motdepasse789', 3);

-- Insertion des catégories
INSERT INTO categories (nom_categorie, description) VALUES
('Électronique', 'Appareils électroniques et accessoires.'),
('Vêtements', 'Vêtements pour hommes, femmes et enfants.'),
('Livres', 'Livres de fiction et non-fiction.');

-- Insertion des articles
INSERT INTO articles (titre, description, prix, quantite_en_stock, categorie_id, utilisateur_id) VALUES
('Smartphone X1', 'Smartphone haut de gamme avec écran OLED.', 699.99, 50, 1, 1),
('T-Shirt Noir', 'T-Shirt en coton, taille M.', 19.99, 100, 2, 2),
('Livre : Le Petit Prince', 'Classique de la littérature française.', 12.50, 30, 3, 3);

-- Insertion des commandes
INSERT INTO commandes (utilisateur_id, statut, montant_total) VALUES
(2, 'livrée', 899.98),
(3, 'en attente', 12.50);

-- Insertion des détails de commande
INSERT INTO details_commande (commande_id, article_id, quantite, prix_unitaire) VALUES
(1, 1, 2, 699.99),
(2, 3, 1, 12.50);

-- Insertion des commentaires
INSERT INTO commentaires (article_id, utilisateur_id, contenu, note) VALUES
(1, 2, 'Excellent smartphone, très rapide et belle finition.', 5),
(3, 3, 'Un livre intemporel, à lire absolument.', 5);
