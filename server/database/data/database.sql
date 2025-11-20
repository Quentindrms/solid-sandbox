-- Création de la base de données (optionnel, car souvent créé via un outil d'administration)
CREATE DATABASE ma_base_de_donnees;

-- Connexion à la base de données
\c ma_base_de_donnees;

-- Création des schémas pour organiser les tables
CREATE SCHEMA IF NOT EXISTS public;

-- Table des rôles (pour la gestion des permissions)
CREATE TABLE roles (
    role_id SERIAL PRIMARY KEY,
    nom_role VARCHAR(50) NOT NULL UNIQUE,
    description TEXT
);

-- Table des utilisateurs
CREATE TABLE utilisateurs (
    utilisateur_id SERIAL PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    mot_de_passe VARCHAR(255) NOT NULL,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    role_id INTEGER REFERENCES roles(role_id),
    est_actif BOOLEAN DEFAULT TRUE
);

-- Table des catégories (pour classer les articles)
CREATE TABLE categories (
    categorie_id SERIAL PRIMARY KEY,
    nom_categorie VARCHAR(100) NOT NULL UNIQUE,
    description TEXT
);

-- Table des articles
CREATE TABLE articles (
    article_id SERIAL PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    description TEXT,
    prix DECIMAL(10, 2) NOT NULL,
    quantite_en_stock INTEGER DEFAULT 0,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    categorie_id INTEGER REFERENCES categories(categorie_id),
    utilisateur_id INTEGER REFERENCES utilisateurs(utilisateur_id)
);

-- Table des commandes
CREATE TABLE commandes (
    commande_id SERIAL PRIMARY KEY,
    utilisateur_id INTEGER REFERENCES utilisateurs(utilisateur_id),
    date_commande TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    statut VARCHAR(50) DEFAULT 'en attente',
    montant_total DECIMAL(10, 2) NOT NULL
);

-- Table des détails de commande (pour gérer les articles commandés)
CREATE TABLE details_commande (
    detail_id SERIAL PRIMARY KEY,
    commande_id INTEGER REFERENCES commandes(commande_id),
    article_id INTEGER REFERENCES articles(article_id),
    quantite INTEGER NOT NULL,
    prix_unitaire DECIMAL(10, 2) NOT NULL
);

-- Table des commentaires (pour les avis sur les articles)
CREATE TABLE commentaires (
    commentaire_id SERIAL PRIMARY KEY,
    article_id INTEGER REFERENCES articles(article_id),
    utilisateur_id INTEGER REFERENCES utilisateurs(utilisateur_id),
    contenu TEXT NOT NULL,
    note INTEGER CHECK (note BETWEEN 1 AND 5),
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index pour optimiser les requêtes fréquentes
CREATE INDEX idx_articles_categorie ON articles(categorie_id);
CREATE INDEX idx_commandes_utilisateur ON commandes(utilisateur_id);
CREATE INDEX idx_commentaires_article ON commentaires(article_id);
