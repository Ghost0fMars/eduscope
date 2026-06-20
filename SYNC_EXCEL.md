# Synchronisation des données avec Excel

## Contexte

Actuellement, les modifications effectuées dans EduScope (renommage d'un référent ERSEH, déplacement d'un élève, ajustements ASH…) vivent uniquement en mémoire dans le navigateur et sont perdues au rechargement. L'objectif est de rendre ces modifications persistantes et de les répercuter dans un fichier Excel.

Deux approches sont envisagées.

---

## Option A — Export Excel à la demande

### Principe
Un bouton "Exporter vers Excel" génère et télécharge un fichier `.xlsx` reflétant l'état actuel de l'app. La librairie **SheetJS** (`xlsx`) s'exécute entièrement dans le navigateur, sans serveur.

### Points positifs
- **Mise en place rapide** : 2 à 3 heures de développement, pas de refonte de l'architecture.
- **Aucune infrastructure** : pas de serveur à maintenir, pas de déploiement. L'app reste un fichier statique.
- **Fonctionne hors ligne** : aucune dépendance réseau, l'export marche même sans connexion internet.
- **Contrôle total** : l'utilisateur décide quand il exporte. Pas de risque d'écrasement automatique involontaire.
- **Format flexible** : on choisit librement la structure du fichier exporté (onglets, colonnes, mise en forme).

### Points négatifs
- **Pas de synchro temps réel** : le fichier Excel n'est pas mis à jour automatiquement à chaque modification, il faut penser à exporter.
- **Pas de source de vérité unique** : il peut exister plusieurs versions du fichier Excel (export du lundi, export du mercredi…) avec risque de confusion.
- **Perte de données entre deux exports** : si l'utilisateur oublie d'exporter et ferme l'onglet, les modifications sont perdues — sauf si on ajoute une persistance locale (localStorage).
- **Pas adapté au multi-utilisateurs** : si deux personnes travaillent sur l'app en parallèle, leurs exports sont indépendants et ne se fusionnent pas.

---

## Option B — Synchronisation bidirectionnelle via backend

### Principe
Un serveur **Node.js / Express** (déjà présent dans le projet) tourne en arrière-plan. Il lit le fichier Excel au démarrage pour alimenter l'app, et écrit dedans à chaque modification via des endpoints API. La librairie **SheetJS** ou **ExcelJS** gère la lecture/écriture du `.xlsx` côté serveur.

### Points positifs
- **Source de vérité unique** : le fichier Excel est toujours à jour, toutes les modifications sont persistées immédiatement.
- **Pas d'action manuelle** : aucun bouton à cliquer, la sauvegarde est transparente pour l'utilisateur.
- **Historique possible** : le serveur peut versionner les modifications (horodatage, nom de l'auteur) pour tracer qui a changé quoi.
- **Base pour le multi-utilisateurs** : avec un serveur centralisé, plusieurs personnes peuvent consulter les mêmes données mises à jour en temps réel.
- **Express est déjà installé** : le projet a déjà la dépendance, la base technique est là.

### Points négatifs
- **Le serveur doit tourner en permanence** : si la machine hôte s'éteint ou si le processus Node.js plante, l'app ne peut plus sauvegarder. Il faut prévoir un redémarrage automatique (ex. `pm2`) et potentiellement un hébergement dédié.
- **Le fichier Excel doit être sur le serveur** : il n'est pas accessible directement sur le poste des utilisateurs. Pour le consulter ou le partager, il faut le télécharger depuis le serveur ou passer par un dossier réseau partagé.
- **Risque de conflits en écriture simultanée** : si deux utilisateurs modifient l'app en même temps, la dernière écriture peut écraser la précédente. Il faut gérer ce cas (verrouillage, fusion, ou règle "premier arrivé").
- **La structure Excel doit rester stable** : si quelqu'un modifie le fichier Excel manuellement en dehors de l'app (ajout d'une colonne, renommage d'un onglet), le serveur peut se désynchroniser ou planter à la prochaine lecture.
- **Charge de maintenance** : une infrastructure serveur implique des mises à jour, une surveillance, et une gestion des erreurs plus rigoureuse qu'une app statique.

---

## Recommandation selon le cas d'usage

| Situation | Recommandation |
|---|---|
| Usage solo, un seul poste | Option A avec localStorage pour ne pas perdre les données |
| Usage solo, besoin de traçabilité | Option B sur la même machine |
| Plusieurs utilisateurs sur un réseau académique | Option B sur un serveur partagé |
| Démo ou prototype | Option A |
