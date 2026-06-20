# EduScope

Outil de pilotage des dispositifs d'inclusion scolaire (ULIS, ASH) pour les équipes de l'Académie d'Aix-Marseille.

Développé pour les **ERSEH** (Enseignants Référents Scolaires aux Élèves en situation de Handicap) et les **CPC** (Conseillers Pédagogiques de Circonscription) de la DSDEN 13.

---

## Fonctionnalités

- **Carte académique** — visualisation géographique des écoles et des dispositifs ULIS/ASH
- **Tableau de bord KPI** — taux de remplissage des dispositifs, statuts de commissions, résultats aux examens
- **Gestionnaire de tâches (Kanban)** — synchronisation des tâches inter-équipes via messagerie IMAP
- **Agenda** — suivi des échéances et interventions terrain
- **Fiche établissement** — consultation rapide des informations et indicateurs par école
- **Export PDF** — génération de rapports pour les revues administratives

---

## Stack technique

| Couche | Technologies |
|---|---|
| Frontend | React 19, TypeScript, Tailwind CSS 4 |
| Desktop | Electron 42 |
| Backend local | Express, IMAPFlow, Mailparser |
| Build | Vite 6, esbuild |

---

## Installation

**Prérequis :** Node.js 18+

```bash
# Installer les dépendances
npm install

# Copier et configurer les variables d'environnement
cp .env.example .env
```

Renseigner les variables dans le fichier `.env` (voir [.env.example](.env.example) pour la liste complète).

---

## Lancement

### Mode navigateur (développement)

```bash
npm run dev
```

L'application est accessible sur `http://localhost:3005`.

### Mode application desktop (Electron)

```bash
npm run electron:dev
```

### Build de production (installeur Windows)

```bash
npm run electron:build
```

L'installeur `.exe` et la version portable sont générés dans le dossier de sortie configuré.

---

## Structure du projet

```
eduscope/
├── electron/          # Processus principal et preload Electron
├── src/
│   ├── agenda/        # Module agenda
│   ├── components/    # Composants partagés (carte, filtres, KPIs, PDF…)
│   ├── data/          # Données structurées des établissements
│   └── kanban/        # Module Kanban et synchronisation IMAP
├── data/json/         # Référentiels JSON (établissements, capacités, référents)
├── scripts/           # Scripts d'import et de géocodage des données
└── server.ts          # Serveur Express (API locale + proxy IMAP)
```

---

## Contexte

EduScope est un outil interne conçu pour le pilotage opérationnel du secteur ASH de la DSDEN 13. Il s'inscrit dans le vocabulaire institutionnel de l'Académie d'Aix-Marseille et vise à réduire le temps nécessaire pour localiser un établissement, vérifier sa situation et déclencher une action à moins de deux minutes.
