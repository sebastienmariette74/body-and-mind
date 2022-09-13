# ECF salle de sport

### Description

Application à destination de l'équipe technique de la marque en vue de gérer les droits d'accès des applications web de
ses franchisés et partenaires qui possèdent des salles de sport.
Lorsqu'une salle de sport ouvre et prend la franchise de la marque, elle a accès à un outil de gestion en ligne
comportant différentes fonctionnalités qu'elle peut utiliser en fonction de son contrat.

# Sommaire

* [Détails du projet](#détails-du-projet)
* [Guide d'utilisation](#guide-dutilisation)
* [Déploiement](#déploiement)
* [Installation en local](#installation-en-local)
* [Questions et réflexions](#questions-et-réflexions)

# Détails du projet

## Objectifs

L’objectif du projet est de mener une étude (Analyse des besoins) et développer l’application web présentée ci-dessous.
Il convient également d’élaborer un dossier d’architecture web qui documente entre autres les choix des technologies,
les choix d’architecture web et de configuration, les bonnes pratiques de sécurité́ implémentées, etc.

Il est également demandé d’élaborer un document spécifique sur les mesures et bonnes pratiques de sécurité́ mises en
place et la justification de chacune d’entre elles. Les bases de données et tout autre composant nécessaire pour faire
fonctionner le projet sont également accompagnés d’un manuel de configuration et d’utilisation.

## Exigences

Notre client est une grande marque de salle de sport et souhaite la création d’une interface simple à destination de ses
équipes qui gèrent les droits d'accès à ses applications web de ses franchisés et partenaires qui possèdent des salles
de sport.

Ainsi, lorsqu'une salle de sport ouvre et prend la franchise de cette marque, on lui donne accès à un outil de gestion
en ligne.

En fonction de ce qu’il va reverser à la marque et de son contrat, il a droit à des options ou modules supplémentaires.

Par exemple, un onglet “faire son mailing” ou encore "gérer le planning équipe" ou bien “promotion de la salle" ou
encore “vendre des boissons” peut être activé ou désactivé.

Le projet a donc pour but la création et la construction d’une interface cohérente et ergonomique afin d’aider leurs
équipes à ouvrir des accès aux modules de leur API auprès des franchisés/partenaires.

L’interface devra permettre de donner de la visibilité́ sur les partenaires/franchisés utilisant l’API et quels modules
sont accessibles par ces partenaires.

Elle doit faciliter l'ajout, la modification ou la suppression des permissions aux modules de chaque
partenaire/franchisé.

## cible

L’interface sera utilisée par l’équipe technique de développement de la marque.

## Descriptions des fonctionnalités

- Afficher la liste des partenaires actifs,
- Afficher la liste des partenaires désactivés,
- Consulter les différentes structures des partenaires (activées et désactivées),
- Modifier les permissions des structures,
- Ajouter une nouvelle structure à un partenaire avec des permissions prédéfinies entre un technicien du client et le
  partenaire concerné,
- Envoyer automatiquement un email après l’ajout d’une structure au partenaire concerné,
- Possibilité de confirmation d’accès aux données de la structure par le partenaire,
- Afficher le contenu du mail dans un nouvel onglet.

# Guide d'utilisation

Le guide d'utilisation se trouve dans le dossier ```annexes```.

Vous pouvez également cliquer sur
ce [lien](https://github.com/sebastienmariette74/body-and-mind/blob/main/annexes/guide%20d'utilisation.pdf).

# Déploiement

## Environnement de développement

### Pré-requis

* PHP 8.1
* Symfony 6.1
* Composer
* Symfony CLI
* nodejs et npm

Vous pouvez vérifier les pré-requis avec la commande suivante (de la CLI Symfony) :

```bash
symfony check:requirements
```

### Lancer l'environnement de développement

```bash
composer install
npm install
npm run build
symfony serve -d
```

Cette application comprend l'envoi de mails. Pour pouvoir les visualiser, vous pouvez vous rendre sur [mailtrap](https://mailtrap.io/inboxes/1886536/messages).

```
- login : bodyandmindfrance@gmail.com
- mot de passe : bodyandmind
```


## Déploiement sur Heroku

Afin de déployer le projet sur Heroku. Il est important d'avoir créer un compte sur celui-ci.

* Créer une nouvelle aplication avec la cli
    ```
    heroku create (nom de l'appli)
    ```
* Configurer les variables d'environnement
    ```
    heroku config:set APP_ENV=prod
    ```
* Lancer le déploiement
    ```
    git push heroku main
    ```

Pour garantir un déploiement sur Heroku réussi, je vous conseille de passer par le bunddle [nat/deploy](https://packagist.org/packages/nat/deploy). Suivez-les étapes décrites sur le site.

## Installation en local

Pour installer le projet en local. Vous devez avoir un [environnement de développement](https://symfony.com/doc/current/setup.html) correctement configuré.

### Etapes

* Créer votre dossier de travail et cloner le projet.
    ```
    git clone https://github.com/sebastienmariette74/body-and-mind.git 
    ```
* Créer une copie du .env en le nommant .env.local et modifier le fichier .env.local afin de le rendre compatible avec votre environement.

* Installer les dépendances php
    ```
    composer install
    ```
* Installer les dépendances javascript
    ```
    npm install
    ```
* Exécuter les migrations sur la base de données
    ```
    php bin/console doctrine:migrations:migrate
    ```
* Compiler le javascript
    ```
    npm run dev
    ```
* Lancer le projet
    ```
    symfony server:start
    ```

# Questions et réflexions

Le document questions et réflexions ce trouve dans le dossier ```annexes```.

Vous pouvez également cliquer sur
ce [lien](https://github.com/sebastienmariette74/body-and-mind/blob/main/annexes/questions%20et%20reflexions.pdf) pour le voir.
