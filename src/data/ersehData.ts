/**
 * Annuaire ERSEH — types et export.
 * Les données sont dans ersehData.generated.ts (généré via scripts/importData.ts).
 */

export interface ErsehReferent {
  /** Code identifiant du secteur ERSEH, ex: "AIX_1", "VALLON_DES_PINS" */
  secteurCode: string;
  /** Libellé géographique du réseau, ex: "SAINTE VICTOIRE" */
  secteurLabel?: string;
  /** Circonscription ASH de rattachement, ex: "IEN ASH EST" */
  secteurAsh?: string;
  /** Circonscription IEN */
  circonscription?: string;
  nom: string;
  prenom: string;
  telephone?: string;
  mail: string;
  lieuImplantation?: string;
  ville?: string;
  publicPrive?: string;
}

export { ersehData, ersehBySecteur } from './ersehData.generated';
