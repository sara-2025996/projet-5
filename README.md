# Projet 5 - Gestion des Employés RH
InnovateTech, une entreprise de 150 employes a Casablanca, gere les informations
du personnel dans des fichiers Excel. Mme Zineb a besoin d’un systeme centralise pour
gerer les employes et calculer automatiquement l’anciennete.

## Description
Cette application permet de gérer les employés d'une entreprise InnovateTech à Casablanca.  
Elle centralise les informations du personnel et automatise certains calculs comme l’ancienneté et les statistiques.  
L’application est responsive et peut être utilisée sur mobile et desktop.
JSON Server sert de backend simulé pour tester les opérations CRUD.

## Technologies utilisées
- **Frontend :** React 18+, composants fonctionnels  
- **Gestion d’état :** Redux Toolkit  
- **Routing :** React Router  
- **API :** Axios avec JSON Server  
- **Styles :** Bootstrap 5 

**Fonctionnalités principales :**
- Ajouter, modifier, supprimer un employé
- Calcul automatique de l’ancienneté (années et mois)
- Génération automatique d’un matricule unique
- Répartition des employés par département
- Détection des anniversaires d’embauche du mois
- Statistiques : effectif total, masse salariale globale, salaire moyen



## Installation et lancement

1. **Cloner le dépôt :**
git clone <URL_DU_DEPOT>

2. **Installer les dépendances:**
npm install

3. **Lancer le serveur JSON:**
json-server --watch db.json --port 5000

4. **Lancer l’application React**
npm start

5. **Structure des pages**
___________________________________________________________________________________________________________
| Page             | Route                  | Fonctionnalités                                             |
| ________________ | ______________________ | ___________________________________________________________ |
| Landing Page     | `/`                    | Présentation, bouton d’accès à l’application                |
| Dashboard        | `/dashboard`           | Statistiques, répartition par département, anniversaires    |
| Annuaire         | `/employees/list`      | Liste des employés avec actions (voir, modifier, supprimer) |
| Fiche Employé    | `/employees/detail/:id`| Détails d’un employé                                        |
| Ajouter Employé  | `/employees/add`       | Formulaire d’ajout                                          |
| Modifier Employé | `/employees/edite/:id` | Formulaire d’édition                                        |
|__________________|________________________|_____________________________________________________________|

6. **Statistiques et calculs**
Effectif total : nombre total d’employés

Masse salariale : somme des salaires de tous les employés

Salaire moyen : moyenne des salaires

Répartition par département : calcul avec reduce()

Anniversaires du mois : filtre sur le champ dateEmbauche

7. **L’application est déployée en ligne ici : http://localhost:5000/employees** 
