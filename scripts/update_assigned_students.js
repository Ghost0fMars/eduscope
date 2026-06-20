/**
 * SCRIPT DÉSACTIVÉ — protection des données.
 *
 * Ce script mettait auparavant à jour assignedStudents à partir d'un export
 * nominatif AGESH (eleves_affectes_ulis.csv). Ce fichier a été retiré du
 * projet : l'application ne stocke plus aucune donnée individuelle d'élève.
 *
 * Pour mettre à jour les effectifs par dispositif, utilisez désormais
 * scripts/importData.ts, qui s'appuie uniquement sur des agrégats
 * (data/json/capacites_ulis_ecole.json, capacites_segpa.json).
 *
 * Usage : npx tsx scripts/importData.ts
 */

console.error(
  'Ce script est désactivé. Utilisez "npx tsx scripts/importData.ts" ' +
  '(agrégats uniquement, aucune donnée élève nominative).'
);
process.exit(1);
