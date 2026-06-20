// Auto-genere depuis les capacites ULIS/SEGPA (agregats uniquement - aucune donnee eleve)
// Enrichi : capacites_ulis_ecole.json, capacites_segpa.json, etablissements.json, directeurs_segpa.json
// Ne pas editer manuellement - regenerer via : npx tsx scripts/importData.ts

import type { School } from './schoolsData';

export const schoolsData: School[] = [
  {
    "id": "0130248z",
    "rne": "0130248Z",
    "name": "A.DAUDET (APPL)",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "Chemin du Four",
    "postalCode": "13100",
    "latitude": 43.535737,
    "longitude": 5.463497,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CATHERINE LE FRAPPER",
    "referentName": "MONNIER FRANCOIS",
    "secteurERSEH": "AIX_2",
    "cpcName": "",
    "email": "ce.0130248Z@ac-aix-marseille.fr",
    "phone": "442230660",
    "referentPhone": "06 21 54 53 00",
    "referentEmail": "ce.erseh13-aix2@ac-aix-marseille.fr"
  },
  {
    "id": "0131205p",
    "rne": "0131205P",
    "name": "ALBERIC LAURENT (APPL)",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "10 avenue DE GRASSI",
    "postalCode": "13100",
    "latitude": 43.532986,
    "longitude": 5.444031,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CELINE OUADAH",
    "referentName": "MONNIER FRANCOIS",
    "secteurERSEH": "AIX_2",
    "cpcName": "",
    "email": "ce.0131205P@ac-aix-marseille.fr",
    "phone": "442233032",
    "referentPhone": "06 21 54 53 00",
    "referentEmail": "ce.erseh13-aix2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0133390p",
    "rne": "0133390P",
    "name": "AUGUSTE BOYER",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "ZAC Saint-Joseph",
    "postalCode": "13290",
    "latitude": 43.506356,
    "longitude": 5.39207,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. FABIEN BRIDOUX",
    "referentName": "GOESSAERT NATHALIE",
    "secteurERSEH": "AIX_SUD_2",
    "cpcName": "",
    "email": "ce.0133390P@ac-aix-marseille.fr",
    "phone": "442392196",
    "referentPhone": "06 14 60 69 55",
    "referentEmail": "ce.erseh13-aixsud2@ac-aix-marseille.fr"
  },
  {
    "id": "0133332b",
    "rne": "0133332B",
    "name": "C.I.P.E.C.",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "Route de Bouc Bel Air",
    "postalCode": "13080",
    "latitude": 43.477064,
    "longitude": 5.422224,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Jill DELACEY-GALIGANI",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "info@cipec.com",
    "phone": "442608425",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131199h",
    "rne": "0131199H",
    "name": "CELONY",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "200 chemin des Platrières",
    "postalCode": "13100",
    "latitude": 43.557002,
    "longitude": 5.42021,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. LOUIS-PHILIPPE RODRIGUES",
    "referentName": "BAYEUX CONSTANCE",
    "secteurERSEH": "AIX_1",
    "cpcName": "",
    "email": "ce.0131199H@ac-aix-marseille.fr",
    "phone": "442235111",
    "referentPhone": "06 14 60 02 76",
    "referentEmail": "ce.erseh13-aix1@ac-aix-marseille.fr"
  },
  {
    "id": "0132898e",
    "rne": "0132898E",
    "name": "CHATEAU DOUBLE",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "Rue Abbé de l'Epée",
    "postalCode": "13090",
    "latitude": 43.53005,
    "longitude": 5.421021,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. LAURENT DAUMALIN",
    "referentName": "SPITERI THIERRY",
    "secteurERSEH": "AIX_3",
    "cpcName": "",
    "email": "ce.0132898E@ac-aix-marseille.fr",
    "phone": "442201882",
    "referentPhone": "06 21 54 65 85",
    "referentEmail": "ce.erseh13-aix3@ac-aix-marseille.fr"
  },
  {
    "id": "0130275d",
    "rne": "0130275D",
    "name": "COUTHERON FONTROUSSE",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "",
    "postalCode": "13100",
    "latitude": 43.599445,
    "longitude": 5.446534,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MURIEL RIFFARD",
    "referentName": "BAYEUX CONSTANCE",
    "secteurERSEH": "AIX_1",
    "cpcName": "",
    "email": "ce.0130275D@ac-aix-marseille.fr",
    "phone": "442921351",
    "referentPhone": "06 14 60 02 76",
    "referentEmail": "ce.erseh13-aix1@ac-aix-marseille.fr"
  },
  {
    "id": "0131567h",
    "rne": "0131567H",
    "name": "CUQUES (DE)",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "1 rue DE CUQUES",
    "postalCode": "13100",
    "latitude": 43.520204,
    "longitude": 5.453746,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. JEAN PIERRE PERROUD",
    "referentName": "BAYEUX CONSTANCE",
    "secteurERSEH": "AIX_1",
    "cpcName": "",
    "email": "ce.0131567H@ac-aix-marseille.fr",
    "phone": "442260836",
    "referentPhone": "06 14 60 02 76",
    "referentEmail": "ce.erseh13-aix1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132535k",
    "rne": "0132535K",
    "name": "DEUX ORMEAUX (LES)",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "Avenue Jules Payot",
    "postalCode": "13090",
    "latitude": 43.53205,
    "longitude": 5.414089,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CELINE LE BARAILLEC",
    "referentName": "MONNIER FRANCOIS",
    "secteurERSEH": "AIX_2",
    "cpcName": "",
    "email": "ce.0132535K@ac-aix-marseille.fr",
    "phone": "442201992",
    "referentPhone": "06 21 54 53 00",
    "referentEmail": "ce.erseh13-aix2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131206r",
    "rne": "0131206R",
    "name": "EDOUARD PEISSON",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "60 allées Serge Attard",
    "postalCode": "13080",
    "latitude": 43.481664,
    "longitude": 5.41964,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME PASCALE GALZIN",
    "referentName": "GOESSAERT NATHALIE",
    "secteurERSEH": "AIX_SUD_2",
    "cpcName": "",
    "email": "ce.0131206R@ac-aix-marseille.fr",
    "phone": "442240664",
    "referentPhone": "06 14 60 69 55",
    "referentEmail": "ce.erseh13-aixsud2@ac-aix-marseille.fr"
  },
  {
    "id": "0134027g",
    "rne": "0134027G",
    "name": "ES-EN-CIEL",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "31 chemin Saint-Martin",
    "postalCode": "13080",
    "latitude": 43.488987,
    "longitude": 5.435262,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME PATRICIA LAMAZOU",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ecoleesenciel@hotmail.com",
    "phone": "695959343",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0133676a",
    "rne": "0133676A",
    "name": "EUGENE BREMOND",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "Avenue Verte Campagne",
    "postalCode": "13540",
    "latitude": 43.578373,
    "longitude": 5.423364,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME DOMINIQUE CHASSEBOEUF",
    "referentName": "BAYEUX CONSTANCE",
    "secteurERSEH": "AIX_1",
    "cpcName": "",
    "email": "ce.0133676A@ac-aix-marseille.fr",
    "phone": "442286178",
    "referentPhone": "06 14 60 02 76",
    "referentEmail": "ce.erseh13-aix1@ac-aix-marseille.fr"
  },
  {
    "id": "0131201k",
    "rne": "0131201K",
    "name": "F.MISTRAL(APPL)",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "2 avenue Doyen Guyon",
    "postalCode": "13090",
    "latitude": 43.534341,
    "longitude": 5.43237,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME AURELIE CLEMENT",
    "referentName": "BAYEUX CONSTANCE",
    "secteurERSEH": "AIX_1",
    "cpcName": "",
    "email": "ce.0131201K@ac-aix-marseille.fr",
    "phone": "442644842",
    "referentPhone": "06 14 60 02 76",
    "referentEmail": "ce.erseh13-aix1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131203m",
    "rne": "0131203M",
    "name": "FENOUILLERES",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "41 avenue Henri Poncet",
    "postalCode": "13090",
    "latitude": 43.513813,
    "longitude": 5.443844,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VERONIQUE SARRAZIN",
    "referentName": "MARIGLIANO SYLVIE",
    "secteurERSEH": "AIX_SUD_3",
    "cpcName": "",
    "email": "ce.0131203M@ac-aix-marseille.fr",
    "phone": "442262845",
    "referentPhone": "06 21 54 16 75",
    "referentEmail": "ce.erseh13-aixsud3@ac-aix-marseille.fr"
  },
  {
    "id": "0132397k",
    "rne": "0132397K",
    "name": "FLORALIES (LES)",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "75 avenue Club Hippique",
    "postalCode": "13090",
    "latitude": 43.514934,
    "longitude": 5.4362,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. J FRANCOIS LONGO",
    "referentName": "MARIGLIANO SYLVIE",
    "secteurERSEH": "AIX_SUD_3",
    "cpcName": "",
    "email": "ce.0132397K@ac-aix-marseille.fr",
    "phone": "442591535",
    "referentPhone": "06 21 54 16 75",
    "referentEmail": "ce.erseh13-aixsud3@ac-aix-marseille.fr"
  },
  {
    "id": "0131909e",
    "rne": "0131909E",
    "name": "GIONO-SCHWEITZER",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "10 boulevard GERMAIN NOUVEAU",
    "postalCode": "13090",
    "latitude": 43.521664,
    "longitude": 5.430309,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SANDRINE ROMAIN",
    "referentName": "MARIGLIANO SYLVIE",
    "secteurERSEH": "AIX_SUD_3",
    "cpcName": "",
    "email": "ce.0131909E@ac-aix-marseille.fr",
    "phone": "442591236",
    "referentPhone": "06 21 54 16 75",
    "referentEmail": "ce.erseh13-aixsud3@ac-aix-marseille.fr"
  },
  {
    "id": "0131204n",
    "rne": "0131204N",
    "name": "GRANETTES (LES)",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "Chemin du Granet",
    "postalCode": "13090",
    "latitude": 43.537624,
    "longitude": 5.393872,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME AURELIE BOCHET",
    "referentName": "MARIGLIANO SYLVIE",
    "secteurERSEH": "AIX_SUD_3",
    "cpcName": "",
    "email": "ce.0131204N@ac-aix-marseille.fr",
    "phone": "442200080",
    "referentPhone": "06 21 54 16 75",
    "referentEmail": "ce.erseh13-aixsud3@ac-aix-marseille.fr"
  },
  {
    "id": "0132759d",
    "rne": "0132759D",
    "name": "HENRI WALLON",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "Rue Hugo Ely Jas de Bouffan",
    "postalCode": "13090",
    "latitude": 43.526002,
    "longitude": 5.419905,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. DANIEL ROYO",
    "referentName": "SPITERI THIERRY",
    "secteurERSEH": "AIX_3",
    "cpcName": "",
    "email": "ce.0132759D@ac-aix-marseille.fr",
    "phone": "442201950",
    "referentPhone": "06 21 54 65 85",
    "referentEmail": "ce.erseh13-aix3@ac-aix-marseille.fr"
  },
  {
    "id": "0133975a",
    "rne": "0133975A",
    "name": "IBS PRIMARY",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "600 route de Marseille",
    "postalCode": "13080",
    "latitude": 43.477491,
    "longitude": 5.414041,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. JOEL TROTEBAS",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ctambon@epim-mis.com",
    "phone": "nan",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132285n",
    "rne": "0132285N",
    "name": "JACQUES PREVERT",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "Avenue de Tubingen",
    "postalCode": "13090",
    "latitude": 43.525911,
    "longitude": 5.43291,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME GWENAELLE HUET",
    "referentName": "MARIGLIANO SYLVIE",
    "secteurERSEH": "AIX_SUD_3",
    "cpcName": "",
    "email": "ce.0132285N@ac-aix-marseille.fr",
    "phone": "442590175",
    "referentPhone": "06 21 54 16 75",
    "referentEmail": "ce.erseh13-aixsud3@ac-aix-marseille.fr"
  },
  {
    "id": "0130262p",
    "rne": "0130262P",
    "name": "JEAN JAURES 2",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "Rue des Nations",
    "postalCode": "13100",
    "latitude": 43.533417,
    "longitude": 5.444175,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME FREDERIQUE DADOIT",
    "referentName": "MONNIER FRANCOIS",
    "secteurERSEH": "AIX_2",
    "cpcName": "",
    "email": "ce.0130262P@ac-aix-marseille.fr",
    "phone": "442233243",
    "referentPhone": "06 21 54 53 00",
    "referentEmail": "ce.erseh13-aix2@ac-aix-marseille.fr"
  },
  {
    "id": "0132181a",
    "rne": "0132181A",
    "name": "JEAN MAUREL",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "Boulevard des Camus",
    "postalCode": "13540",
    "latitude": 43.583843,
    "longitude": 5.421265,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SANDRA SUARD",
    "referentName": "BAYEUX CONSTANCE",
    "secteurERSEH": "AIX_1",
    "cpcName": "",
    "email": "ce.0132181A@ac-aix-marseille.fr",
    "phone": "442921169",
    "referentPhone": "06 14 60 02 76",
    "referentEmail": "ce.erseh13-aix1@ac-aix-marseille.fr"
  },
  {
    "id": "0132012s",
    "rne": "0132012S",
    "name": "JEANNE D ARC",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "53 boulevard Carnot",
    "postalCode": "13080",
    "latitude": 43.483937,
    "longitude": 5.421724,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. Erwan VAN DEN BOOMGAERDE",
    "referentName": "",
    "secteurERSEH": "PRIVE_5 PAYS D AIX",
    "cpcName": "",
    "email": "ce.0132012S@ac-aix-marseille.fr",
    "phone": "442384581",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132579h",
    "rne": "0132579H",
    "name": "JOSEPH D'ARBAUD",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "Rue Charloun Rieu Zac",
    "postalCode": "13090",
    "latitude": 43.527424,
    "longitude": 5.41416,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME JULIE MALFATTO",
    "referentName": "SPITERI THIERRY",
    "secteurERSEH": "AIX_3",
    "cpcName": "",
    "email": "ce.0132579H@ac-aix-marseille.fr",
    "phone": "442201742",
    "referentPhone": "06 21 54 65 85",
    "referentEmail": "ce.erseh13-aix3@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131207s",
    "rne": "0131207S",
    "name": "JOSEPH ROUMANILLE",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "Avenue Albert Couton",
    "postalCode": "13290",
    "latitude": 43.502963,
    "longitude": 5.39089,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SARAH GIUSTI",
    "referentName": "GOESSAERT NATHALIE",
    "secteurERSEH": "AIX_SUD_2",
    "cpcName": "",
    "email": "ce.0131207S@ac-aix-marseille.fr",
    "phone": "442242185",
    "referentPhone": "06 14 60 69 55",
    "referentEmail": "ce.erseh13-aixsud2@ac-aix-marseille.fr"
  },
  {
    "id": "0133948w",
    "rne": "0133948W",
    "name": "JUIVE D'AIX EN PROVENCE (EJAP)",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "5 rue de Jérusalem",
    "postalCode": "13080",
    "latitude": 43.487865,
    "longitude": 5.413398,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME  ROSEIRA",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ce.0133948W@ac-aix-marseille.fr",
    "phone": "442545680",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130263r",
    "rne": "0130263R",
    "name": "JULES FERRY",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "15 rue Jules Ferry",
    "postalCode": "13100",
    "latitude": 43.521781,
    "longitude": 5.45003,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CECILE CROCE",
    "referentName": "BAYEUX CONSTANCE",
    "secteurERSEH": "AIX_1",
    "cpcName": "",
    "email": "ce.0130263R@ac-aix-marseille.fr",
    "phone": "442262829",
    "referentPhone": "06 14 60 02 76",
    "referentEmail": "ce.erseh13-aix1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130252d",
    "rne": "0130252D",
    "name": "JULES ISAAC",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "37 avenue Jules Isaac",
    "postalCode": "13100",
    "latitude": 43.541541,
    "longitude": 5.453395,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 10,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CLAUDIA MONTASTIER",
    "referentName": "MONNIER FRANCOIS",
    "secteurERSEH": "AIX_2",
    "cpcName": "",
    "email": "ce.0130252D@ac-aix-marseille.fr",
    "phone": "488717461",
    "referentPhone": "06 21 54 53 00",
    "referentEmail": "ce.erseh13-aix2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 10,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132710a",
    "rne": "0132710A",
    "name": "JULES PAYOT",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "Boulevard Grande Thumine ZAC",
    "postalCode": "13090",
    "latitude": 43.523075,
    "longitude": 5.413695,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. DAVID MASSAL",
    "referentName": "SPITERI THIERRY",
    "secteurERSEH": "AIX_3",
    "cpcName": "",
    "email": "ce.0132710A@ac-aix-marseille.fr",
    "phone": "442200061",
    "referentPhone": "06 21 54 65 85",
    "referentEmail": "ce.erseh13-aix3@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131527p",
    "rne": "0131527P",
    "name": "LAUVES",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "Avenue Paul Cézanne",
    "postalCode": "13090",
    "latitude": 43.54304,
    "longitude": 5.44577,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. FLORIAN BOUSCARLE",
    "referentName": "MONNIER FRANCOIS",
    "secteurERSEH": "AIX_2",
    "cpcName": "",
    "email": "ce.0131527P@ac-aix-marseille.fr",
    "phone": "465488730",
    "referentPhone": "06 21 54 53 00",
    "referentEmail": "ce.erseh13-aix2@ac-aix-marseille.fr"
  },
  {
    "id": "0134341y",
    "rne": "0134341Y",
    "name": "LES JARDINS D'IRISIA",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "11 avenue Jean et Marcel Fontena",
    "postalCode": "13100",
    "latitude": 43.525599,
    "longitude": 5.452719,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MAKI TAYA",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ce.0134341Y@ac-aix-marseille.fr",
    "phone": "698933554",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132166j",
    "rne": "0132166J",
    "name": "MARCEL PAGNOL",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "Avenue Jean Paul Coste",
    "postalCode": "13100",
    "latitude": 43.513904,
    "longitude": 5.455738,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CECILE NEGRE",
    "referentName": "MARIGLIANO SYLVIE",
    "secteurERSEH": "AIX_SUD_3",
    "cpcName": "",
    "email": "ce.0132166J@ac-aix-marseille.fr",
    "phone": "442266757",
    "referentPhone": "06 21 54 16 75",
    "referentEmail": "ce.erseh13-aixsud3@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132169m",
    "rne": "0132169M",
    "name": "MARESCHALE (LA)",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "Avenue Albert Baudouin",
    "postalCode": "13100",
    "latitude": 43.52514,
    "longitude": 5.433181,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LAURE MASSE",
    "referentName": "MARIGLIANO SYLVIE",
    "secteurERSEH": "AIX_SUD_3",
    "cpcName": "",
    "email": "ce.0132169M@ac-aix-marseille.fr",
    "phone": "442592477",
    "referentPhone": "06 21 54 16 75",
    "referentEmail": "ce.erseh13-aixsud3@ac-aix-marseille.fr"
  },
  {
    "id": "0130265t",
    "rne": "0130265T",
    "name": "MARIE MAURON",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "4 rue Frédéric Mistral,lesMilles",
    "postalCode": "13290",
    "latitude": 43.502691,
    "longitude": 5.390906,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSLA",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LAURENE SEILLAC",
    "referentName": "GOESSAERT NATHALIE",
    "secteurERSEH": "AIX_SUD_2",
    "cpcName": "",
    "email": "ce.0130265T@ac-aix-marseille.fr",
    "phone": "465488702",
    "referentPhone": "06 14 60 69 55",
    "referentEmail": "ce.erseh13-aixsud2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSLA",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132014u",
    "rne": "0132014U",
    "name": "NATIVITE (LA)",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "8 rue Andreani",
    "postalCode": "13090",
    "latitude": 43.51172,
    "longitude": 5.433028,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Agnès HOLTZHEYER",
    "referentName": "",
    "secteurERSEH": "PRIVE_5 PAYS D AIX",
    "cpcName": "",
    "email": "ce.0132014U@ac-aix-marseille.fr",
    "phone": "442934570",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0133232t",
    "rne": "0133232T",
    "name": "NOUVELLE ALLIANCE (LA)",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "",
    "postalCode": "13090",
    "latitude": 43.541369,
    "longitude": 5.406124,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. MEWTON ROBERT",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ecolenouvall@gmail.com",
    "phone": "442950819",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131911g",
    "rne": "0131911G",
    "name": "PAUL ARENE",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "Rue Léon Blum",
    "postalCode": "13090",
    "latitude": 43.52325,
    "longitude": 5.42883,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VINCIANE LAURIER",
    "referentName": "SPITERI THIERRY",
    "secteurERSEH": "AIX_3",
    "cpcName": "",
    "email": "ce.0131911G@ac-aix-marseille.fr",
    "phone": "442590587",
    "referentPhone": "06 21 54 65 85",
    "referentEmail": "ce.erseh13-aix3@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0133951z",
    "rne": "0133951Z",
    "name": "PIERRE GILLES DE GENNES",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "165 rue du Jas des Vaches",
    "postalCode": "13100",
    "latitude": 43.487061,
    "longitude": 5.344373,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME DELPHINE PERROUD DOMENACH",
    "referentName": "GOESSAERT NATHALIE",
    "secteurERSEH": "AIX_SUD_2",
    "cpcName": "",
    "email": "ce.0133951Z@ac-aix-marseille.fr",
    "phone": "442392042",
    "referentPhone": "06 14 60 69 55",
    "referentEmail": "ce.erseh13-aixsud2@ac-aix-marseille.fr"
  },
  {
    "id": "0130249a",
    "rne": "0130249A",
    "name": "PLATANES (DES)",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "Rue de l'Ecole",
    "postalCode": "13100",
    "latitude": 43.555671,
    "longitude": 5.460932,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME JULIE BOYER",
    "referentName": "BAYEUX CONSTANCE",
    "secteurERSEH": "AIX_1",
    "cpcName": "",
    "email": "ce.0130249A@ac-aix-marseille.fr",
    "phone": "442230612",
    "referentPhone": "06 14 60 02 76",
    "referentEmail": "ce.erseh13-aix1@ac-aix-marseille.fr"
  },
  {
    "id": "0130250b",
    "rne": "0130250B",
    "name": "PONT DE L'ARC (DU)",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "Route des Milles",
    "postalCode": "13090",
    "latitude": 43.508843,
    "longitude": 5.43855,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MARGAUX MAGNAN",
    "referentName": "MARIGLIANO SYLVIE",
    "secteurERSEH": "AIX_SUD_3",
    "cpcName": "",
    "email": "ce.0130250B@ac-aix-marseille.fr",
    "phone": "413912946",
    "referentPhone": "06 21 54 16 75",
    "referentEmail": "ce.erseh13-aixsud3@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFA",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132017x",
    "rne": "0132017X",
    "name": "SACRE-COEUR",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "71 avenue des Ecoles Militaires",
    "postalCode": "13080",
    "latitude": 43.483623,
    "longitude": 5.419438,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Claudie LUCAS",
    "referentName": "",
    "secteurERSEH": "PRIVE_5 PAYS D AIX",
    "cpcName": "",
    "email": "ce.0132017X@ac-aix-marseille.fr",
    "phone": "442384397",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132018y",
    "rne": "0132018Y",
    "name": "SAINT FRANCOIS D'ASSISE",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "813 chemin  des frères gris  Luy",
    "postalCode": "13080",
    "latitude": 43.486046,
    "longitude": 5.427768,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSLA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Laetitia PAOLINI",
    "referentName": "CHABOT MARIE",
    "secteurERSEH": "PRIVE_4",
    "cpcName": "",
    "email": "ce.0132018Y@ac-aix-marseille.fr",
    "phone": "442240284",
    "referentPhone": "06 28 58 88 97",
    "referentEmail": "ce.erseh13-prive4@ac-aix-marseille.fr"
  },
  {
    "id": "0132013t",
    "rne": "0132013T",
    "name": "SAINT JOSEPH",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "16 cours Cours Saint Louis",
    "postalCode": "13080",
    "latitude": 43.541369,
    "longitude": 5.406124,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Bérengère DUMEYNIOU",
    "referentName": "CHABOT MARIE",
    "secteurERSEH": "PRIVE_4",
    "cpcName": "",
    "email": "ce.0132013T@ac-aix-marseille.fr",
    "phone": "442230219",
    "referentPhone": "06 28 58 88 97",
    "referentEmail": "ce.erseh13-prive4@ac-aix-marseille.fr"
  },
  {
    "id": "0134120h",
    "rne": "0134120H",
    "name": "SAINT SER",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "10 avenue des liberateurs",
    "postalCode": "13080",
    "latitude": 43.483838,
    "longitude": 5.419934,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "nan",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "direction@ecole-ser.org",
    "phone": "623175108",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132021b",
    "rne": "0132021B",
    "name": "SAINTE BERNADETTE",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "5 rue de l'Eglise",
    "postalCode": "13080",
    "latitude": 43.485415,
    "longitude": 5.41683,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Corinne DINLAPORTAS",
    "referentName": "",
    "secteurERSEH": "PRIVE_5 PAYS D AIX",
    "cpcName": "",
    "email": "ce.0132021B@ac-aix-marseille.fr",
    "phone": "442242270",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132015v",
    "rne": "0132015V",
    "name": "SAINTE CATHERINE DE SIENNE",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "20 rue Mignet",
    "postalCode": "13100",
    "latitude": 43.530471,
    "longitude": 5.450839,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Marie METRAS",
    "referentName": "",
    "secteurERSEH": "PRIVE_5 PAYS D AIX",
    "cpcName": "",
    "email": "ce.0132015V@ac-aix-marseille.fr",
    "phone": "442234898",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132016w",
    "rne": "0132016W",
    "name": "SAINTE GENEVIEVE",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "11 rue DES ROBINIERS",
    "postalCode": "13090",
    "latitude": 43.534624,
    "longitude": 5.422707,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Isabelle CHAPELAND",
    "referentName": "",
    "secteurERSEH": "PRIVE_5 PAYS D AIX",
    "cpcName": "",
    "email": "ce.0132016W@ac-aix-marseille.fr",
    "phone": "442200756",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130253e",
    "rne": "0130253E",
    "name": "SALLIER",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "3 rue Sallier",
    "postalCode": "13100",
    "latitude": 43.524595,
    "longitude": 5.452686,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHRISTELLE CERVONI",
    "referentName": "MARIGLIANO SYLVIE",
    "secteurERSEH": "AIX_SUD_3",
    "cpcName": "",
    "email": "ce.0130253E@ac-aix-marseille.fr",
    "phone": "442383074",
    "referentPhone": "06 21 54 16 75",
    "referentEmail": "ce.erseh13-aixsud3@ac-aix-marseille.fr"
  },
  {
    "id": "0130271z",
    "rne": "0130271Z",
    "name": "SEXTIUS (APPL)",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "34 cours Sextius",
    "postalCode": "13100",
    "latitude": 43.529078,
    "longitude": 5.443151,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CATHERINE DEFENDINI",
    "referentName": "MONNIER FRANCOIS",
    "secteurERSEH": "AIX_2",
    "cpcName": "",
    "email": "ce.0130271Z@ac-aix-marseille.fr",
    "phone": "442262021",
    "referentPhone": "06 21 54 53 00",
    "referentEmail": "ce.erseh13-aix2@ac-aix-marseille.fr"
  },
  {
    "id": "0134232e",
    "rne": "0134232E",
    "name": "SIMONE VEIL",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "90 impasse DE LA DRAILLE",
    "postalCode": "13100",
    "latitude": 43.49648,
    "longitude": 5.352352,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SANDRINE MORENO",
    "referentName": "GOESSAERT NATHALIE",
    "secteurERSEH": "AIX_SUD_2",
    "cpcName": "",
    "email": "ce.0134232E@ac-aix-marseille.fr",
    "phone": "442930830",
    "referentPhone": "06 14 60 69 55",
    "referentEmail": "ce.erseh13-aixsud2@ac-aix-marseille.fr"
  },
  {
    "id": "0130254f",
    "rne": "0130254F",
    "name": "TORSE (LA)",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "Avenue des Ecoles Militaires",
    "postalCode": "13100",
    "latitude": 43.523985,
    "longitude": 5.46618,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME AMELIE MARCILLOUX",
    "referentName": "BAYEUX CONSTANCE",
    "secteurERSEH": "AIX_1",
    "cpcName": "",
    "email": "ce.0130254F@ac-aix-marseille.fr",
    "phone": "465488717",
    "referentPhone": "06 14 60 02 76",
    "referentEmail": "ce.erseh13-aix1@ac-aix-marseille.fr"
  },
  {
    "id": "0134030k",
    "rne": "0134030K",
    "name": "VAL SAINT ANDRE",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "19 avenue",
    "postalCode": "13080",
    "latitude": 43.485703,
    "longitude": 5.414759,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME JOELLE GUINDE",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ecolevsa@hotmail.fr",
    "phone": "442271447",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130255g",
    "rne": "0130255G",
    "name": "VAL SAINT ANDRE",
    "type": "elementaire",
    "city": "AIX-EN-PROVENCE",
    "address": "75 avenue Edmond Michelet",
    "postalCode": "13100",
    "latitude": 43.520045,
    "longitude": 5.466975,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. FRANCK LE BOURSICOT",
    "referentName": "BAYEUX CONSTANCE",
    "secteurERSEH": "AIX_1",
    "cpcName": "",
    "email": "ce.0130255G@ac-aix-marseille.fr",
    "phone": "442264680",
    "referentPhone": "06 14 60 02 76",
    "referentEmail": "ce.erseh13-aix1@ac-aix-marseille.fr"
  },
  {
    "id": "0130292x",
    "rne": "0130292X",
    "name": "CENTRE",
    "type": "elementaire",
    "city": "ALLAUCH",
    "address": "4 rue Léon Jouve",
    "postalCode": "13190",
    "latitude": 43.334516,
    "longitude": 5.484953,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. CHRISTOPHE COSENZA",
    "referentName": "FINO PATRICIA",
    "secteurERSEH": "PLAN_DE_CUQUES",
    "cpcName": "",
    "email": "ce.0130292X@ac-aix-marseille.fr",
    "phone": "486674691",
    "referentPhone": "06 21 54 11 31",
    "referentEmail": "ce.erseh13-pdecuques@ac-aix-marseille.fr"
  },
  {
    "id": "0134133x",
    "rne": "0134133X",
    "name": "GONAGUES (DES)",
    "type": "elementaire",
    "city": "ALLAUCH",
    "address": "Chemin Gonagues",
    "postalCode": "13190",
    "latitude": 43.351873,
    "longitude": 5.485399,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SANDRINE LAURENT",
    "referentName": "FINO PATRICIA",
    "secteurERSEH": "PLAN_DE_CUQUES",
    "cpcName": "",
    "email": "ce.0134133X@ac-aix-marseille.fr",
    "phone": "486674680",
    "referentPhone": "06 21 54 11 31",
    "referentEmail": "ce.erseh13-pdecuques@ac-aix-marseille.fr"
  },
  {
    "id": "0130293y",
    "rne": "0130293Y",
    "name": "LOGIS NEUF",
    "type": "elementaire",
    "city": "ALLAUCH",
    "address": "Avenue Lei Rima",
    "postalCode": "13190",
    "latitude": 43.357548,
    "longitude": 5.48694,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. GILLES GRUNWALD",
    "referentName": "FINO PATRICIA",
    "secteurERSEH": "PLAN_DE_CUQUES",
    "cpcName": "",
    "email": "ce.0130293Y@ac-aix-marseille.fr",
    "phone": "486674695",
    "referentPhone": "06 21 54 11 31",
    "referentEmail": "ce.erseh13-pdecuques@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130294z",
    "rne": "0130294Z",
    "name": "PIE D'AUTRY",
    "type": "elementaire",
    "city": "ALLAUCH",
    "address": "",
    "postalCode": "13190",
    "latitude": 43.34069,
    "longitude": 5.478407,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LISE SNIDARO",
    "referentName": "FINO PATRICIA",
    "secteurERSEH": "PLAN_DE_CUQUES",
    "cpcName": "",
    "email": "ce.0130294Z@ac-aix-marseille.fr",
    "phone": "486674685",
    "referentPhone": "06 21 54 11 31",
    "referentEmail": "ce.erseh13-pdecuques@ac-aix-marseille.fr"
  },
  {
    "id": "0130295a",
    "rne": "0130295A",
    "name": "POUNCHE (LA)",
    "type": "elementaire",
    "city": "ALLAUCH",
    "address": "Chemin de Milon",
    "postalCode": "13190",
    "latitude": 43.335497,
    "longitude": 5.467778,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME EVELYNE LUCOR",
    "referentName": "FINO PATRICIA",
    "secteurERSEH": "PLAN_DE_CUQUES",
    "cpcName": "",
    "email": "ce.0130295A@ac-aix-marseille.fr",
    "phone": "486674675",
    "referentPhone": "06 21 54 11 31",
    "referentEmail": "ce.erseh13-pdecuques@ac-aix-marseille.fr"
  },
  {
    "id": "0130291w",
    "rne": "0130291W",
    "name": "VAL FLEURI",
    "type": "elementaire",
    "city": "ALLAUCH",
    "address": "Rue des Oliviers Enco de Botte",
    "postalCode": "13190",
    "latitude": 43.320855,
    "longitude": 5.471325,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME REGINE COCHINI",
    "referentName": "FINO PATRICIA",
    "secteurERSEH": "PLAN_DE_CUQUES",
    "cpcName": "",
    "email": "ce.0130291W@ac-aix-marseille.fr",
    "phone": "491687009",
    "referentPhone": "06 21 54 11 31",
    "referentEmail": "ce.erseh13-pdecuques@ac-aix-marseille.fr"
  },
  {
    "id": "0130301g",
    "rne": "0130301G",
    "name": "VICTOR HUGO",
    "type": "elementaire",
    "city": "ALLEINS",
    "address": "Cours Victor Hugo",
    "postalCode": "13980",
    "latitude": 43.702968,
    "longitude": 5.160341,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME PHILIPINE D AUZAC DE LAMARTINI",
    "referentName": "LANKAMER MURIEL",
    "secteurERSEH": "SALON_3",
    "cpcName": "",
    "email": "ce.0130301G@ac-aix-marseille.fr",
    "phone": "490573813",
    "referentPhone": "06 14 60 29 97",
    "referentEmail": "ce.erseh13-salon3@ac-aix-marseille.fr"
  },
  {
    "id": "0130329m",
    "rne": "0130329M",
    "name": "ALBARON",
    "type": "elementaire",
    "city": "ARLES",
    "address": "Hameau Albaron",
    "postalCode": "13200",
    "latitude": 43.61209,
    "longitude": 4.474969,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "DELPHINE RICCI",
    "referentName": "ROBERT MELANIE",
    "secteurERSEH": "ARLES_2",
    "cpcName": "",
    "email": "ce.0130329m@ac-aix-marseille.fr",
    "phone": "490971035",
    "referentPhone": "06 14 60 31 27",
    "referentEmail": "ce.erseh13-arles2@ac-aix-marseille.fr"
  },
  {
    "id": "0131213y",
    "rne": "0131213Y",
    "name": "ALBERT CAMUS",
    "type": "elementaire",
    "city": "ARLES",
    "address": "Rue Vincent Scotto",
    "postalCode": "13200",
    "latitude": 43.694306,
    "longitude": 4.637529,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. CHRISTOPHE VASSEROT",
    "referentName": "ROBERT MELANIE",
    "secteurERSEH": "ARLES_2",
    "cpcName": "",
    "email": "ce.0131213Y@ac-aix-marseille.fr",
    "phone": "490939727",
    "referentPhone": "06 14 60 31 27",
    "referentEmail": "ce.erseh13-arles2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130311t",
    "rne": "0130311T",
    "name": "ALPHONSE DAUDET",
    "type": "elementaire",
    "city": "ARLES",
    "address": "Rue Fernand Léger",
    "postalCode": "13280",
    "latitude": 43.647382,
    "longitude": 4.71763,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SOPHIE PIET",
    "referentName": "DEMAEREL ISABELLE",
    "secteurERSEH": "SAINT_MARTIN_DE_CRAU",
    "cpcName": "",
    "email": "ce.0130311T@ac-aix-marseille.fr",
    "phone": "490984095",
    "referentPhone": "06 14 60 01 45",
    "referentEmail": "ce.erseh13-crau@ac-aix-marseille.fr"
  },
  {
    "id": "0130303j",
    "rne": "0130303J",
    "name": "ALYSCAMPS",
    "type": "elementaire",
    "city": "ARLES",
    "address": "1 rue FELIX GRAS",
    "postalCode": "13200",
    "latitude": 43.670627,
    "longitude": 4.638703,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME NATHALIE DURIEZ",
    "referentName": "ROBERT MELANIE",
    "secteurERSEH": "ARLES_2",
    "cpcName": "",
    "email": "ce.0130303J@ac-aix-marseille.fr",
    "phone": "490968927",
    "referentPhone": "06 14 60 31 27",
    "referentEmail": "ce.erseh13-arles2@ac-aix-marseille.fr"
  },
  {
    "id": "0130317z",
    "rne": "0130317Z",
    "name": "AMEDEE PICHOT",
    "type": "elementaire",
    "city": "ARLES",
    "address": "1 rue DU PETIT PUITS",
    "postalCode": "13200",
    "latitude": 43.680359,
    "longitude": 4.63205,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CECILE CREPIER",
    "referentName": "ROBERT MELANIE",
    "secteurERSEH": "ARLES_2",
    "cpcName": "",
    "email": "ce.0130317Z@ac-aix-marseille.fr",
    "phone": "490939729",
    "referentPhone": "06 14 60 31 27",
    "referentEmail": "ce.erseh13-arles2@ac-aix-marseille.fr"
  },
  {
    "id": "0130315x",
    "rne": "0130315X",
    "name": "ANDRE BENOIT",
    "type": "elementaire",
    "city": "ARLES",
    "address": "3 bis rue André Benoit",
    "postalCode": "13200",
    "latitude": 43.67936,
    "longitude": 4.6207,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SOIZIC NAVARRO",
    "referentName": "ROBERT MELANIE",
    "secteurERSEH": "ARLES_2",
    "cpcName": "",
    "email": "ce.0130315X@ac-aix-marseille.fr",
    "phone": "490968894",
    "referentPhone": "06 14 60 31 27",
    "referentEmail": "ce.erseh13-arles2@ac-aix-marseille.fr"
  },
  {
    "id": "0130310s",
    "rne": "0130310S",
    "name": "CYPRIEN PILLIOL",
    "type": "elementaire",
    "city": "ARLES",
    "address": "Route de la Coste-Basse",
    "postalCode": "13200",
    "latitude": 43.662834,
    "longitude": 4.651829,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. CHRISTIAN HUGUES",
    "referentName": "COHUAU QUENTIN",
    "secteurERSEH": "ARLES_1",
    "cpcName": "",
    "email": "ce.0130310S@ac-aix-marseille.fr",
    "phone": "490939731",
    "referentPhone": "06 14 60 59 94",
    "referentEmail": "ce.erseh13-arles1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0134129t",
    "rne": "0134129T",
    "name": "DOMAINE DU POSSIBLE",
    "type": "elementaire",
    "city": "ARLES",
    "address": "Route de la Volpelière",
    "postalCode": "13104",
    "latitude": 43.5773,
    "longitude": 4.722646,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "nan",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ce.0134129t@ac-aix-marseille.fr",
    "phone": "624019160",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130304k",
    "rne": "0130304K",
    "name": "EMILE LOUBET",
    "type": "elementaire",
    "city": "ARLES",
    "address": "1 rue de la Paix",
    "postalCode": "13200",
    "latitude": 43.674299,
    "longitude": 4.627173,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MURIEL ATTACHE",
    "referentName": "ROBERT MELANIE",
    "secteurERSEH": "ARLES_2",
    "cpcName": "",
    "email": "ce.0130304K@ac-aix-marseille.fr",
    "phone": "490968930",
    "referentPhone": "06 14 60 31 27",
    "referentEmail": "ce.erseh13-arles2@ac-aix-marseille.fr"
  },
  {
    "id": "0130332r",
    "rne": "0130332R",
    "name": "GAGERON",
    "type": "elementaire",
    "city": "ARLES",
    "address": "Hameau Gageron",
    "postalCode": "13200",
    "latitude": 43.609736,
    "longitude": 4.60699,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME NATALIE HEHNER",
    "referentName": "ROBERT MELANIE",
    "secteurERSEH": "ARLES_2",
    "cpcName": "",
    "email": "ce.0130332R@ac-aix-marseille.fr",
    "phone": "490970026",
    "referentPhone": "06 14 60 31 27",
    "referentEmail": "ce.erseh13-arles2@ac-aix-marseille.fr"
  },
  {
    "id": "0130333s",
    "rne": "0130333S",
    "name": "GIMEAUX",
    "type": "elementaire",
    "city": "ARLES",
    "address": "Hameau de Gimeaux",
    "postalCode": "13200",
    "latitude": 43.664801,
    "longitude": 4.575691,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. DAVID GIOVANINI",
    "referentName": "ROBERT MELANIE",
    "secteurERSEH": "ARLES_2",
    "cpcName": "",
    "email": "ce.0130333S@ac-aix-marseille.fr",
    "phone": "490493773",
    "referentPhone": "06 14 60 31 27",
    "referentEmail": "ce.erseh13-arles2@ac-aix-marseille.fr"
  },
  {
    "id": "0132536l",
    "rne": "0132536L",
    "name": "HENRI WALLON",
    "type": "elementaire",
    "city": "ARLES",
    "address": "Quartier Barriol",
    "postalCode": "13200",
    "latitude": 43.668162,
    "longitude": 4.6189,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. ANDRE BELPOMO",
    "referentName": "ROBERT MELANIE",
    "secteurERSEH": "ARLES_2",
    "cpcName": "",
    "email": "ce.0132536L@ac-aix-marseille.fr",
    "phone": "490968957",
    "referentPhone": "06 14 60 31 27",
    "referentEmail": "ce.erseh13-arles2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130323f",
    "rne": "0130323F",
    "name": "JULES VALLES",
    "type": "elementaire",
    "city": "ARLES",
    "address": "Rue du Docteur Schweitzer",
    "postalCode": "13200",
    "latitude": 43.676041,
    "longitude": 4.642841,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VIVIANE MARQUEZ",
    "referentName": "DEMAEREL ISABELLE",
    "secteurERSEH": "SAINT_MARTIN_DE_CRAU",
    "cpcName": "",
    "email": "ce.0130323F@ac-aix-marseille.fr",
    "phone": "490939733",
    "referentPhone": "06 14 60 01 45",
    "referentEmail": "ce.erseh13-crau@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132807f",
    "rne": "0132807F",
    "name": "LOUIS ARAGON",
    "type": "elementaire",
    "city": "ARLES",
    "address": "Plan du Bourg",
    "postalCode": "13200",
    "latitude": 43.662856,
    "longitude": 4.61868,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MANON ABRARD",
    "referentName": "ROBERT MELANIE",
    "secteurERSEH": "ARLES_2",
    "cpcName": "",
    "email": "ce.0132807F@ac-aix-marseille.fr",
    "phone": "490939697",
    "referentPhone": "06 14 60 31 27",
    "referentEmail": "ce.erseh13-arles2@ac-aix-marseille.fr"
  },
  {
    "id": "0132436c",
    "rne": "0132436C",
    "name": "LOUIS PERGAUD",
    "type": "elementaire",
    "city": "ARLES",
    "address": "",
    "postalCode": "13280",
    "latitude": 43.661839,
    "longitude": 4.724261,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "ROSINE ARANDA",
    "referentName": "DEMAEREL ISABELLE",
    "secteurERSEH": "SAINT_MARTIN_DE_CRAU",
    "cpcName": "",
    "email": "ce.0132436C@ac-aix-marseille.fr",
    "phone": "490984661",
    "referentPhone": "06 14 60 01 45",
    "referentEmail": "ce.erseh13-crau@ac-aix-marseille.fr"
  },
  {
    "id": "0130319b",
    "rne": "0130319B",
    "name": "MARIE CURIE",
    "type": "elementaire",
    "city": "ARLES",
    "address": "16 rue Laurent Bonnemant",
    "postalCode": "13200",
    "latitude": 43.676999,
    "longitude": 4.6227,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. MATHIEU ROUX",
    "referentName": "ROBERT MELANIE",
    "secteurERSEH": "ARLES_2",
    "cpcName": "",
    "email": "ce.0130319B@ac-aix-marseille.fr",
    "phone": "490939702",
    "referentPhone": "06 14 60 31 27",
    "referentEmail": "ce.erseh13-arles2@ac-aix-marseille.fr"
  },
  {
    "id": "0130321d",
    "rne": "0130321D",
    "name": "MARIE MAURON",
    "type": "elementaire",
    "city": "ARLES",
    "address": "4 rue Pierre Puget",
    "postalCode": "13200",
    "latitude": 43.686689,
    "longitude": 4.63987,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSLA",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LUCIE GLYNATSIS",
    "referentName": "ROBERT MELANIE",
    "secteurERSEH": "ARLES_2",
    "cpcName": "",
    "email": "ce.0130321D@ac-aix-marseille.fr",
    "phone": "490968938",
    "referentPhone": "06 14 60 31 27",
    "referentEmail": "ce.erseh13-arles2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSLA",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130306m",
    "rne": "0130306M",
    "name": "MARINETTE CARLETTI",
    "type": "elementaire",
    "city": "ARLES",
    "address": "Mas Thibert",
    "postalCode": "13104",
    "latitude": 43.557491,
    "longitude": 4.72804,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHRISTELLE CARCELES",
    "referentName": "HUGUERRE LADISLAS",
    "secteurERSEH": "PORT_SAINT_LOUIS_DU_RHONE",
    "cpcName": "",
    "email": "ce.0130306M@ac-aix-marseille.fr",
    "phone": "490987161",
    "referentPhone": "06 03 12 89 20",
    "referentEmail": "ce.erseh13-portsaintlouis@ac-aix-marseille.fr"
  },
  {
    "id": "0130307n",
    "rne": "0130307N",
    "name": "MONPLAISIR",
    "type": "elementaire",
    "city": "ARLES",
    "address": "1 rue IRENE JOLIOT CURIE",
    "postalCode": "13200",
    "latitude": 43.685011,
    "longitude": 4.63897,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SANDRINE PERRIN",
    "referentName": "ROBERT MELANIE",
    "secteurERSEH": "ARLES_2",
    "cpcName": "",
    "email": "ce.0130307N@ac-aix-marseille.fr",
    "phone": "490968937",
    "referentPhone": "06 14 60 31 27",
    "referentEmail": "ce.erseh13-arles2@ac-aix-marseille.fr"
  },
  {
    "id": "0130309r",
    "rne": "0130309R",
    "name": "MOULEYRES",
    "type": "elementaire",
    "city": "ARLES",
    "address": "9 rue de la Révolution",
    "postalCode": "13200",
    "latitude": 43.675267,
    "longitude": 4.64027,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. ANDRE PILI",
    "referentName": "DEMAEREL ISABELLE",
    "secteurERSEH": "SAINT_MARTIN_DE_CRAU",
    "cpcName": "",
    "email": "ce.0130309R@ac-aix-marseille.fr",
    "phone": "490968949",
    "referentPhone": "06 14 60 01 45",
    "referentEmail": "ce.erseh13-crau@ac-aix-marseille.fr"
  },
  {
    "id": "0132474u",
    "rne": "0132474U",
    "name": "PAUL LANGEVIN",
    "type": "elementaire",
    "city": "ARLES",
    "address": "Quartier Barriol",
    "postalCode": "13200",
    "latitude": 43.668287,
    "longitude": 4.618391,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. PHILIPPE RIVIERE",
    "referentName": "ROBERT MELANIE",
    "secteurERSEH": "ARLES_2",
    "cpcName": "",
    "email": "ce.0132474U@ac-aix-marseille.fr",
    "phone": "490939719",
    "referentPhone": "06 14 60 31 27",
    "referentEmail": "ce.erseh13-arles2@ac-aix-marseille.fr"
  },
  {
    "id": "0132028j",
    "rne": "0132028J",
    "name": "SAINT ETIENNE",
    "type": "elementaire",
    "city": "ARLES",
    "address": "Clos GUINOT-QU DES PRECHEURS",
    "postalCode": "13104",
    "latitude": 43.596721,
    "longitude": 4.645086,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Caroline NOVI",
    "referentName": "DE BRUYNE ISABELLE",
    "secteurERSEH": "ASH_OUEST_PRIVE_1",
    "cpcName": "",
    "email": "ce.0132028J@ac-aix-marseille.fr",
    "phone": "490968385",
    "referentPhone": "06 28 58 88 79",
    "referentEmail": "ce.erseh13-ashouest-prive1@ac-aix-marseille.fr"
  },
  {
    "id": "0132027h",
    "rne": "0132027H",
    "name": "SAINT VINCENT DE PAUL",
    "type": "elementaire",
    "city": "ARLES",
    "address": "9 bis rue du Séminaire",
    "postalCode": "13104",
    "latitude": 43.483372,
    "longitude": 4.788838,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME NATHALIE MACCHI",
    "referentName": "DE BRUYNE ISABELLE",
    "secteurERSEH": "ASH_OUEST_PRIVE_1",
    "cpcName": "",
    "email": "e.saintvincent-arles@wanadoo.fr",
    "phone": "490960428",
    "referentPhone": "06 28 58 88 79",
    "referentEmail": "ce.erseh13-ashouest-prive1@ac-aix-marseille.fr"
  },
  {
    "id": "0130313v",
    "rne": "0130313V",
    "name": "SALIN DE GIRAUD",
    "type": "elementaire",
    "city": "ARLES",
    "address": "Hameau de Salin de Giraud",
    "postalCode": "13129",
    "latitude": 43.413523,
    "longitude": 4.730681,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CATHERINE JAMBEL",
    "referentName": "HUGUERRE LADISLAS",
    "secteurERSEH": "PORT_SAINT_LOUIS_DU_RHONE",
    "cpcName": "",
    "email": "ce.0130313V@ac-aix-marseille.fr",
    "phone": "442868079",
    "referentPhone": "06 03 12 89 20",
    "referentEmail": "ce.erseh13-portsaintlouis@ac-aix-marseille.fr"
  },
  {
    "id": "0130314w",
    "rne": "0130314W",
    "name": "SAMBUC",
    "type": "elementaire",
    "city": "ARLES",
    "address": "Hameau du Sambuc",
    "postalCode": "13200",
    "latitude": 43.523632,
    "longitude": 4.7094,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. PHILIPPE MARTINEZ",
    "referentName": "ROBERT MELANIE",
    "secteurERSEH": "ARLES_2",
    "cpcName": "",
    "email": "ce.0130314W@ac-aix-marseille.fr",
    "phone": "490989034",
    "referentPhone": "06 14 60 31 27",
    "referentEmail": "ce.erseh13-arles2@ac-aix-marseille.fr"
  },
  {
    "id": "0130308p",
    "rne": "0130308P",
    "name": "YVES MONTAND",
    "type": "elementaire",
    "city": "ARLES",
    "address": "",
    "postalCode": "13280",
    "latitude": 43.656107,
    "longitude": 4.740099,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "AUDREY ROCHE",
    "referentName": "DEMAEREL ISABELLE",
    "secteurERSEH": "SAINT_MARTIN_DE_CRAU",
    "cpcName": "",
    "email": "ce.0130308P@ac-aix-marseille.fr",
    "phone": "490984441",
    "referentPhone": "06 14 60 01 45",
    "referentEmail": "ce.erseh13-crau@ac-aix-marseille.fr"
  },
  {
    "id": "0130344d",
    "rne": "0130344D",
    "name": "ANTIDE BOYER",
    "type": "elementaire",
    "city": "AUBAGNE",
    "address": "Avenue Antide Boyer",
    "postalCode": "13400",
    "latitude": 43.294932,
    "longitude": 5.565839,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ELSA BOURGEOIS TROUYET",
    "referentName": "BIANCHINI EDITH",
    "secteurERSEH": "AUBAGNE_3",
    "cpcName": "",
    "email": "ce.0130344D@ac-aix-marseille.fr",
    "phone": "442181663",
    "referentPhone": "06 46 35 40 06",
    "referentEmail": "ce.erseh13-aubagne3@ac-aix-marseille.fr"
  },
  {
    "id": "0130345e",
    "rne": "0130345E",
    "name": "BEAUDINARD",
    "type": "elementaire",
    "city": "AUBAGNE",
    "address": "Hameau de Beaudinard",
    "postalCode": "13400",
    "latitude": 43.315546,
    "longitude": 5.588163,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME AUDREY MOLINA",
    "referentName": "BIANCHINI EDITH",
    "secteurERSEH": "AUBAGNE_3",
    "cpcName": "",
    "email": "ce.0130345E@ac-aix-marseille.fr",
    "phone": "442821356",
    "referentPhone": "06 46 35 40 06",
    "referentEmail": "ce.erseh13-aubagne3@ac-aix-marseille.fr"
  },
  {
    "id": "0130346f",
    "rne": "0130346F",
    "name": "CAMP MAJOR",
    "type": "elementaire",
    "city": "AUBAGNE",
    "address": "Boulevard Maggy Barbaroux",
    "postalCode": "13400",
    "latitude": 43.285319,
    "longitude": 5.546069,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 10,
      "placesVacantes": 10,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME JOELLE MICHELET",
    "referentName": "BIANCHINI EDITH",
    "secteurERSEH": "AUBAGNE_3",
    "cpcName": "",
    "email": "ce.0130346F@ac-aix-marseille.fr",
    "phone": "442030404",
    "referentPhone": "06 46 35 40 06",
    "referentEmail": "ce.erseh13-aubagne3@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 10,
        "placesVacantes": 10,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130355r",
    "rne": "0130355R",
    "name": "CHAULAN",
    "type": "elementaire",
    "city": "AUBAGNE",
    "address": "Rue Chaulan",
    "postalCode": "13400",
    "latitude": 43.292093,
    "longitude": 5.570699,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. FLORIAN ORTUNO",
    "referentName": "PASSEREL AUDREY",
    "secteurERSEH": "AUBAGNE_2",
    "cpcName": "",
    "email": "ce.0130355R@ac-aix-marseille.fr",
    "phone": "442181743",
    "referentPhone": "06 21 54 19 12",
    "referentEmail": "ce.erseh13-aubagne2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0134001d",
    "rne": "0134001D",
    "name": "CLUB AMADEUS",
    "type": "elementaire",
    "city": "AUBAGNE",
    "address": "90 chemin LA CROIX DE GARLABAN",
    "postalCode": "13400",
    "latitude": 43.313179,
    "longitude": 5.563106,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CORRADI-ALLÉGATIÔRE SANDRINE",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "sandrinecorradi@hotmail.com",
    "phone": "442033921",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130349j",
    "rne": "0130349J",
    "name": "JEAN MERMOZ 1",
    "type": "elementaire",
    "city": "AUBAGNE",
    "address": "Rue Jean Mermoz",
    "postalCode": "13400",
    "latitude": 43.286844,
    "longitude": 5.575454,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CELINE BARTHELEMY",
    "referentName": "PASSEREL AUDREY",
    "secteurERSEH": "AUBAGNE_2",
    "cpcName": "",
    "email": "ce.0130349J@ac-aix-marseille.fr",
    "phone": "442700574",
    "referentPhone": "06 21 54 19 12",
    "referentEmail": "ce.erseh13-aubagne2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130356s",
    "rne": "0130356S",
    "name": "JEAN MERMOZ 2",
    "type": "elementaire",
    "city": "AUBAGNE",
    "address": "Rue Jean Mermoz",
    "postalCode": "13400",
    "latitude": 43.28644,
    "longitude": 5.575667,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SANDRINE GRAND",
    "referentName": "PASSEREL AUDREY",
    "secteurERSEH": "AUBAGNE_2",
    "cpcName": "",
    "email": "ce.0130356S@ac-aix-marseille.fr",
    "phone": "442821006",
    "referentPhone": "06 21 54 19 12",
    "referentEmail": "ce.erseh13-aubagne2@ac-aix-marseille.fr"
  },
  {
    "id": "0132388a",
    "rne": "0132388A",
    "name": "NELSON MANDELA",
    "type": "elementaire",
    "city": "AUBAGNE",
    "address": "ZAC du Charrel",
    "postalCode": "13400",
    "latitude": 43.280728,
    "longitude": 5.550225,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. DENIS GRANDJEAN",
    "referentName": "CART LAMY MARIE",
    "secteurERSEH": "AUBAGNE_1",
    "cpcName": "",
    "email": "ce.0132388A@ac-aix-marseille.fr",
    "phone": "442840608",
    "referentPhone": "06 21 54 90 90",
    "referentEmail": "ce.erseh13-aubagne@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131826p",
    "rne": "0131826P",
    "name": "PASSONS (LES)",
    "type": "elementaire",
    "city": "AUBAGNE",
    "address": "Rue du Château",
    "postalCode": "13400",
    "latitude": 43.293593,
    "longitude": 5.578078,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. PHILIPPE RECH",
    "referentName": "PASSEREL AUDREY",
    "secteurERSEH": "AUBAGNE_2",
    "cpcName": "",
    "email": "ce.0131826P@ac-aix-marseille.fr",
    "phone": "442181677",
    "referentPhone": "06 21 54 19 12",
    "referentEmail": "ce.erseh13-aubagne2@ac-aix-marseille.fr"
  },
  {
    "id": "0133181m",
    "rne": "0133181M",
    "name": "PAUL ELUARD",
    "type": "elementaire",
    "city": "AUBAGNE",
    "address": "Avenue Pierre Brossolette",
    "postalCode": "13400",
    "latitude": 43.287657,
    "longitude": 5.553705,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME GISELE POTOCNIK",
    "referentName": "CART LAMY MARIE",
    "secteurERSEH": "AUBAGNE_1",
    "cpcName": "",
    "email": "ce.0133181M@ac-aix-marseille.fr",
    "phone": "442181640",
    "referentPhone": "06 21 54 90 90",
    "referentEmail": "ce.erseh13-aubagne@ac-aix-marseille.fr"
  },
  {
    "id": "0130350k",
    "rne": "0130350K",
    "name": "PERUSSONNE",
    "type": "elementaire",
    "city": "AUBAGNE",
    "address": "Avenue des Aubépines",
    "postalCode": "13400",
    "latitude": 43.28143,
    "longitude": 5.541565,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. OLIVIER CHAPELIERE",
    "referentName": "CART LAMY MARIE",
    "secteurERSEH": "AUBAGNE_1",
    "cpcName": "",
    "email": "ce.0130350K@ac-aix-marseille.fr",
    "phone": "442031764",
    "referentPhone": "06 21 54 90 90",
    "referentEmail": "ce.erseh13-aubagne@ac-aix-marseille.fr"
  },
  {
    "id": "0130351l",
    "rne": "0130351L",
    "name": "PIN VERT",
    "type": "elementaire",
    "city": "AUBAGNE",
    "address": "Route de Roquevaire",
    "postalCode": "13400",
    "latitude": 43.301173,
    "longitude": 5.572094,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSLA",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. PHILIPPE SIGNORET",
    "referentName": "PASSEREL AUDREY",
    "secteurERSEH": "AUBAGNE_2",
    "cpcName": "",
    "email": "ce.0130351L@ac-aix-marseille.fr",
    "phone": "442034414",
    "referentPhone": "06 21 54 19 12",
    "referentEmail": "ce.erseh13-aubagne2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSLA",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132094f",
    "rne": "0132094F",
    "name": "SAINTE MARIE",
    "type": "elementaire",
    "city": "AUBAGNE",
    "address": "302 chemin de Riquet",
    "postalCode": "13400",
    "latitude": 43.290029,
    "longitude": 5.575798,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Joselyne BARTOLI",
    "referentName": "MEYRINNE-LAFORET JOSIANE",
    "secteurERSEH": "AURIOL",
    "cpcName": "",
    "email": "ce.0132094F@ac-aix-marseille.fr",
    "phone": "413921000",
    "referentPhone": "06 14 60 14 34",
    "referentEmail": "ce.erseh13-auriol@ac-aix-marseille.fr"
  },
  {
    "id": "0131660j",
    "rne": "0131660J",
    "name": "TOURTELLE (LA)",
    "type": "elementaire",
    "city": "AUBAGNE",
    "address": "Quartier Anjou",
    "postalCode": "13400",
    "latitude": 43.289166,
    "longitude": 5.554641,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME FLORENCE M GANGI MEZZELANI",
    "referentName": "CART LAMY MARIE",
    "secteurERSEH": "AUBAGNE_1",
    "cpcName": "",
    "email": "ce.0131660J@ac-aix-marseille.fr",
    "phone": "442181636",
    "referentPhone": "06 21 54 90 90",
    "referentEmail": "ce.erseh13-aubagne@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0133179k",
    "rne": "0133179K",
    "name": "VICTOR HUGO",
    "type": "elementaire",
    "city": "AUBAGNE",
    "address": "Rue Marcel Paul Qua Defensions",
    "postalCode": "13400",
    "latitude": 43.300526,
    "longitude": 5.574855,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ROSELYNE BRUNDU",
    "referentName": "PASSEREL AUDREY",
    "secteurERSEH": "AUBAGNE_2",
    "cpcName": "",
    "email": "ce.0133179K@ac-aix-marseille.fr",
    "phone": "442849448",
    "referentPhone": "06 21 54 19 12",
    "referentEmail": "ce.erseh13-aubagne2@ac-aix-marseille.fr"
  },
  {
    "id": "0130362y",
    "rne": "0130362Y",
    "name": "AUREILLE",
    "type": "elementaire",
    "city": "AUREILLE",
    "address": "",
    "postalCode": "13930",
    "latitude": 43.707187,
    "longitude": 4.94711,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME JULIE BRESSIEUX",
    "referentName": "PLANTIER MYRIAM",
    "secteurERSEH": "SALON_1",
    "cpcName": "",
    "email": "ce.0130362Y@ac-aix-marseille.fr",
    "phone": "490599713",
    "referentPhone": "06 14 60 18 89",
    "referentEmail": "ce.erseh13-salon1@ac-aix-marseille.fr"
  },
  {
    "id": "0133950y",
    "rne": "0133950Y",
    "name": "CLAIRE DAUPHIN",
    "type": "elementaire",
    "city": "AURIOL",
    "address": "Zone des Artauds",
    "postalCode": "13390",
    "latitude": 43.368057,
    "longitude": 5.64372,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ISABELLE NIVOIT",
    "referentName": "MEYRINNE-LAFORET JOSIANE",
    "secteurERSEH": "AURIOL",
    "cpcName": "",
    "email": "ce.0133950Y@ac-aix-marseille.fr",
    "phone": "442328213",
    "referentPhone": "06 14 60 14 34",
    "referentEmail": "ce.erseh13-auriol@ac-aix-marseille.fr"
  },
  {
    "id": "0130363z",
    "rne": "0130363Z",
    "name": "JEAN ROSTAND",
    "type": "elementaire",
    "city": "AURIOL",
    "address": "Rue de la République",
    "postalCode": "13390",
    "latitude": 43.368313,
    "longitude": 5.63278,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 10,
      "placesVacantes": 10,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MARLENE PORTAS",
    "referentName": "MEYRINNE-LAFORET JOSIANE",
    "secteurERSEH": "AURIOL",
    "cpcName": "",
    "email": "ce.0130363Z@ac-aix-marseille.fr",
    "phone": "442047097",
    "referentPhone": "06 14 60 14 34",
    "referentEmail": "ce.erseh13-auriol@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 10,
        "placesVacantes": 10,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130365b",
    "rne": "0130365B",
    "name": "JULES FERRY",
    "type": "elementaire",
    "city": "AURIOL",
    "address": "Hameau de Moulin de Redon",
    "postalCode": "13390",
    "latitude": 43.380817,
    "longitude": 5.68198,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME FLORENCE BOYER",
    "referentName": "MEYRINNE-LAFORET JOSIANE",
    "secteurERSEH": "AURIOL",
    "cpcName": "",
    "email": "ce.0130365B@ac-aix-marseille.fr",
    "phone": "442047512",
    "referentPhone": "06 14 60 14 34",
    "referentEmail": "ce.erseh13-auriol@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132760e",
    "rne": "0132760E",
    "name": "LOUIS ARAGON",
    "type": "elementaire",
    "city": "AURIOL",
    "address": "Hameau de la Bardeline",
    "postalCode": "13390",
    "latitude": 43.373056,
    "longitude": 5.64454,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MAGALI DJENIZIAN",
    "referentName": "MEYRINNE-LAFORET JOSIANE",
    "secteurERSEH": "AURIOL",
    "cpcName": "",
    "email": "ce.0132760E@ac-aix-marseille.fr",
    "phone": "442047905",
    "referentPhone": "06 14 60 14 34",
    "referentEmail": "ce.erseh13-auriol@ac-aix-marseille.fr"
  },
  {
    "id": "0130367d",
    "rne": "0130367D",
    "name": "AURONS",
    "type": "elementaire",
    "city": "AURONS",
    "address": "Avenue Gaston Cabrier",
    "postalCode": "13121",
    "latitude": 43.664908,
    "longitude": 5.15544,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. FABIEN CASCALES",
    "referentName": "LANKAMER MURIEL",
    "secteurERSEH": "SALON_3",
    "cpcName": "",
    "email": "ce.0130367D@ac-aix-marseille.fr",
    "phone": "490556220",
    "referentPhone": "06 14 60 29 97",
    "referentEmail": "ce.erseh13-salon3@ac-aix-marseille.fr"
  },
  {
    "id": "0132180z",
    "rne": "0132180Z",
    "name": "MOULINS (DES)",
    "type": "elementaire",
    "city": "BARBENTANE",
    "address": "765 chemin de la Côte",
    "postalCode": "13570",
    "latitude": 43.899555,
    "longitude": 4.747481,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MURIEL CHAY",
    "referentName": "PIRON FRANCOISE",
    "secteurERSEH": "SAINT_REMY_DE_PROVENCE",
    "cpcName": "",
    "email": "ce.0132180Z@ac-aix-marseille.fr",
    "phone": "490900709",
    "referentPhone": "06 21 54 11 24",
    "referentEmail": "ce.erseh13-stremy@ac-aix-marseille.fr"
  },
  {
    "id": "0132034r",
    "rne": "0132034R",
    "name": "NOTRE-DAME",
    "type": "elementaire",
    "city": "BARBENTANE",
    "address": "2 chemin des Ecoles",
    "postalCode": "13570",
    "latitude": 43.90068,
    "longitude": 4.749504,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Hélène CARLETTI-FAUCHE",
    "referentName": "DE BRUYNE ISABELLE",
    "secteurERSEH": "ASH_OUEST_PRIVE_1",
    "cpcName": "",
    "email": "direction@ecolenotredamebarbentane.fr",
    "phone": "757127148",
    "referentPhone": "06 28 58 88 79",
    "referentEmail": "ce.erseh13-ashouest-prive1@ac-aix-marseille.fr"
  },
  {
    "id": "0130372j",
    "rne": "0130372J",
    "name": "BEAURECUEIL",
    "type": "elementaire",
    "city": "BEAURECUEIL",
    "address": "Avenue Louis Sylvestre",
    "postalCode": "13100",
    "latitude": 43.51068,
    "longitude": 5.545,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MAGALI ESPOSITO",
    "referentName": "GOESSAERT NATHALIE",
    "secteurERSEH": "AIX_SUD_2",
    "cpcName": "",
    "email": "ce.0130372J@ac-aix-marseille.fr",
    "phone": "442668650",
    "referentPhone": "06 14 60 69 55",
    "referentEmail": "ce.erseh13-aixsud2@ac-aix-marseille.fr"
  },
  {
    "id": "0130373k",
    "rne": "0130373K",
    "name": "ELIANE D'AMORE",
    "type": "elementaire",
    "city": "BELCODENE",
    "address": "Avenue Roux",
    "postalCode": "13720",
    "latitude": 43.426008,
    "longitude": 5.58726,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CLARA BONNARD",
    "referentName": "REYNIER ELODIE",
    "secteurERSEH": "AIX_SUD_1",
    "cpcName": "",
    "email": "ce.0130373K@ac-aix-marseille.fr",
    "phone": "442706603",
    "referentPhone": "06 14 60 39 01",
    "referentEmail": "ce.erseh13-aixsud1@ac-aix-marseille.fr"
  },
  {
    "id": "0130374l",
    "rne": "0130374L",
    "name": "EMILE ZOLA",
    "type": "elementaire",
    "city": "BERRE-L'ETANG",
    "address": "Avenue de Sylvanes",
    "postalCode": "13130",
    "latitude": 43.487607,
    "longitude": 5.160507,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CECILE RABELLE",
    "referentName": "KIRCHER CORINNE",
    "secteurERSEH": "ROGNAC",
    "cpcName": "",
    "email": "ce.0130374L@ac-aix-marseille.fr",
    "phone": "442853844",
    "referentPhone": "06 10 90 52 60",
    "referentEmail": "ce.erseh13-rognac@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130376n",
    "rne": "0130376N",
    "name": "FREDERIC MISTRAL",
    "type": "elementaire",
    "city": "BERRE-L'ETANG",
    "address": "1  BOULEVARD FREDERIC MISTRAL",
    "postalCode": "13130",
    "latitude": 43.474042,
    "longitude": 5.169798,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHRISTINE BALZANO",
    "referentName": "KIRCHER CORINNE",
    "secteurERSEH": "ROGNAC",
    "cpcName": "",
    "email": "ce.0130376N@ac-aix-marseille.fr",
    "phone": "442783485",
    "referentPhone": "06 10 90 52 60",
    "referentEmail": "ce.erseh13-rognac@ac-aix-marseille.fr"
  },
  {
    "id": "0131216b",
    "rne": "0131216B",
    "name": "GEORGES DEZARNAUD",
    "type": "elementaire",
    "city": "BERRE-L'ETANG",
    "address": "Avenue de la Libération",
    "postalCode": "13130",
    "latitude": 43.481049,
    "longitude": 5.170179,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LAURIANE MICHEL",
    "referentName": "KIRCHER CORINNE",
    "secteurERSEH": "ROGNAC",
    "cpcName": "",
    "email": "ce.0131216B@ac-aix-marseille.fr",
    "phone": "442854030",
    "referentPhone": "06 10 90 52 60",
    "referentEmail": "ce.erseh13-rognac@ac-aix-marseille.fr"
  },
  {
    "id": "0132099l",
    "rne": "0132099L",
    "name": "NOTRE-DAME DE CADEROT",
    "type": "elementaire",
    "city": "BERRE-L'ETANG",
    "address": "Chemin de Caderot Quart Autin",
    "postalCode": "13130",
    "latitude": 43.509274,
    "longitude": 5.162227,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME sophie VALETTE",
    "referentName": "LEGRAND VERONIQUE",
    "secteurERSEH": "PRIVE_3",
    "cpcName": "",
    "email": "ce.0132099L@ac-aix-marseille.fr",
    "phone": "442854282",
    "referentPhone": "06 28 58 88 80",
    "referentEmail": "ce.erseh13-prive3@ac-aix-marseille.fr"
  },
  {
    "id": "0132355p",
    "rne": "0132355P",
    "name": "PABLO PICASSO",
    "type": "elementaire",
    "city": "BERRE-L'ETANG",
    "address": "36 avenue Henri Barbusse",
    "postalCode": "13130",
    "latitude": 43.486934,
    "longitude": 5.165503,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SYLVIE CAGNANO",
    "referentName": "KIRCHER CORINNE",
    "secteurERSEH": "ROGNAC",
    "cpcName": "",
    "email": "ce.0132355P@ac-aix-marseille.fr",
    "phone": "442854563",
    "referentPhone": "06 10 90 52 60",
    "referentEmail": "ce.erseh13-rognac@ac-aix-marseille.fr"
  },
  {
    "id": "0132990e",
    "rne": "0132990E",
    "name": "PAUL LANGEVIN",
    "type": "elementaire",
    "city": "BERRE-L'ETANG",
    "address": "Avenue Fernand Léger",
    "postalCode": "13130",
    "latitude": 43.488475,
    "longitude": 5.172023,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MARIELLE MERCIER",
    "referentName": "KIRCHER CORINNE",
    "secteurERSEH": "ROGNAC",
    "cpcName": "",
    "email": "ce.0132990E@ac-aix-marseille.fr",
    "phone": "442740212",
    "referentPhone": "06 10 90 52 60",
    "referentEmail": "ce.erseh13-rognac@ac-aix-marseille.fr"
  },
  {
    "id": "0131630b",
    "rne": "0131630B",
    "name": "VAILLANT-COUTURIER",
    "type": "elementaire",
    "city": "BERRE-L'ETANG",
    "address": "Avenue Jean Cristofol",
    "postalCode": "13130",
    "latitude": 43.480666,
    "longitude": 5.170317,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME NICOLE CHAZALMARTIN",
    "referentName": "KIRCHER CORINNE",
    "secteurERSEH": "ROGNAC",
    "cpcName": "",
    "email": "ce.0131630B@ac-aix-marseille.fr",
    "phone": "442854805",
    "referentPhone": "06 10 90 52 60",
    "referentEmail": "ce.erseh13-rognac@ac-aix-marseille.fr"
  },
  {
    "id": "0133040j",
    "rne": "0133040J",
    "name": "BERGERIE (LA)",
    "type": "elementaire",
    "city": "BOUC-BEL-AIR",
    "address": "",
    "postalCode": "13320",
    "latitude": 43.46349,
    "longitude": 5.416683,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MURIEL CARLES",
    "referentName": "GOESSAERT NATHALIE",
    "secteurERSEH": "AIX_SUD_2",
    "cpcName": "",
    "email": "ce.0133040J@ac-aix-marseille.fr",
    "phone": "442220050",
    "referentPhone": "06 14 60 69 55",
    "referentEmail": "ce.erseh13-aixsud2@ac-aix-marseille.fr"
  },
  {
    "id": "0130382v",
    "rne": "0130382V",
    "name": "CENTRE",
    "type": "elementaire",
    "city": "BOUC-BEL-AIR",
    "address": "Route de Gardanne",
    "postalCode": "13320",
    "latitude": 43.452783,
    "longitude": 5.417755,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LAURENCE CURIEN",
    "referentName": "GOESSAERT NATHALIE",
    "secteurERSEH": "AIX_SUD_2",
    "cpcName": "",
    "email": "ce.0130382V@ac-aix-marseille.fr",
    "phone": "442221104",
    "referentPhone": "06 14 60 69 55",
    "referentEmail": "ce.erseh13-aixsud2@ac-aix-marseille.fr"
  },
  {
    "id": "0134162d",
    "rne": "0134162D",
    "name": "POT-EN-CIEL",
    "type": "elementaire",
    "city": "BOUC-BEL-AIR",
    "address": "36 avenue de la babiole",
    "postalCode": "13320",
    "latitude": 43.436413,
    "longitude": 5.403222,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LARIVIERE DALPHINE",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ce.0134162D@ac-aix-marseille.fr",
    "phone": "624019160",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131998b",
    "rne": "0131998B",
    "name": "SALLE (LA)",
    "type": "elementaire",
    "city": "BOUC-BEL-AIR",
    "address": "Rue Victor Hugo",
    "postalCode": "13320",
    "latitude": 43.441053,
    "longitude": 5.421968,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MYRIAM BONNET",
    "referentName": "GOESSAERT NATHALIE",
    "secteurERSEH": "AIX_SUD_2",
    "cpcName": "",
    "email": "ce.0131998B@ac-aix-marseille.fr",
    "phone": "442220988",
    "referentPhone": "06 14 60 69 55",
    "referentEmail": "ce.erseh13-aixsud2@ac-aix-marseille.fr"
  },
  {
    "id": "0130383w",
    "rne": "0130383W",
    "name": "VIRGINIE DEDIEU",
    "type": "elementaire",
    "city": "BOUC-BEL-AIR",
    "address": "Chemin DE LA TRANHUMANCE",
    "postalCode": "13320",
    "latitude": 43.427891,
    "longitude": 5.39133,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHRISTEL ROSSIGNOL",
    "referentName": "GOESSAERT NATHALIE",
    "secteurERSEH": "AIX_SUD_2",
    "cpcName": "",
    "email": "ce.0130383W@ac-aix-marseille.fr",
    "phone": "442220893",
    "referentPhone": "06 14 60 69 55",
    "referentEmail": "ce.erseh13-aixsud2@ac-aix-marseille.fr"
  },
  {
    "id": "0130388b",
    "rne": "0130388B",
    "name": "SAULES (DES)",
    "type": "elementaire",
    "city": "BOULBON",
    "address": "2 chemin des Saules",
    "postalCode": "13150",
    "latitude": 43.860866,
    "longitude": 4.694272,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CATHERINE CARRERA",
    "referentName": "COHUAU QUENTIN",
    "secteurERSEH": "ARLES_1",
    "cpcName": "",
    "email": "ce.0130388B@ac-aix-marseille.fr",
    "phone": "490439936",
    "referentPhone": "06 14 60 59 94",
    "referentEmail": "ce.erseh13-arles1@ac-aix-marseille.fr"
  },
  {
    "id": "0130390d",
    "rne": "0130390D",
    "name": "CABANNES",
    "type": "elementaire",
    "city": "CABANNES",
    "address": "Place des Ecoles",
    "postalCode": "13440",
    "latitude": 43.861277,
    "longitude": 4.95186,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SANDRINE ARENAS",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ce.0130390D@ac-aix-marseille.fr",
    "phone": "490904044",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ],
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132107v",
    "rne": "0132107V",
    "name": "SAINTE MADELEINE",
    "type": "elementaire",
    "city": "CABANNES",
    "address": "2 avenue de Verdun",
    "postalCode": "13440",
    "latitude": 43.860487,
    "longitude": 4.945619,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME  PETIT",
    "referentName": "DE BRUYNE ISABELLE",
    "secteurERSEH": "ASH_OUEST_PRIVE_1",
    "cpcName": "",
    "email": "ce.0132107V@ac-aix-marseille.fr",
    "phone": "490952185",
    "referentPhone": "06 28 58 88 79",
    "referentEmail": "ce.erseh13-ashouest-prive1@ac-aix-marseille.fr"
  },
  {
    "id": "0130392f",
    "rne": "0130392F",
    "name": "AUGUSTE BENOIT",
    "type": "elementaire",
    "city": "CABRIES",
    "address": "Rue Saint Pierre",
    "postalCode": "13480",
    "latitude": 43.440731,
    "longitude": 5.380579,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME HELENE EPRON",
    "referentName": "GOESSAERT NATHALIE",
    "secteurERSEH": "AIX_SUD_2",
    "cpcName": "",
    "email": "ce.0130392F@ac-aix-marseille.fr",
    "phone": "442222391",
    "referentPhone": "06 14 60 69 55",
    "referentEmail": "ce.erseh13-aixsud2@ac-aix-marseille.fr"
  },
  {
    "id": "0130394h",
    "rne": "0130394H",
    "name": "LA TREBILLANE-RENE CASSIN",
    "type": "elementaire",
    "city": "CABRIES",
    "address": "Hameau de Calas",
    "postalCode": "13480",
    "latitude": 43.460681,
    "longitude": 5.356914,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. FREDERIC HERNANDEZ",
    "referentName": "GOESSAERT NATHALIE",
    "secteurERSEH": "AIX_SUD_2",
    "cpcName": "",
    "email": "ce.0130394H@ac-aix-marseille.fr",
    "phone": "442690210",
    "referentPhone": "06 14 60 69 55",
    "referentEmail": "ce.erseh13-aixsud2@ac-aix-marseille.fr"
  },
  {
    "id": "0134282j",
    "rne": "0134282J",
    "name": "MONTESSORI INTERNATIONALE DE C",
    "type": "elementaire",
    "city": "CABRIES",
    "address": "Avenue Raymond Martin",
    "postalCode": "13480",
    "latitude": 43.445839,
    "longitude": 5.355915,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME KARCHER PAQUITA",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ecolemontessoricabries@gmail.com",
    "phone": "610033078",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132511j",
    "rne": "0132511J",
    "name": "ZAC DU PETIT LAC",
    "type": "elementaire",
    "city": "CABRIES",
    "address": "ZAC du Petit Lac",
    "postalCode": "13480",
    "latitude": 43.466028,
    "longitude": 5.352379,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VERONIQUE DE RAEDT",
    "referentName": "GOESSAERT NATHALIE",
    "secteurERSEH": "AIX_SUD_2",
    "cpcName": "",
    "email": "ce.0132511J@ac-aix-marseille.fr",
    "phone": "442690166",
    "referentPhone": "06 14 60 69 55",
    "referentEmail": "ce.erseh13-aixsud2@ac-aix-marseille.fr"
  },
  {
    "id": "0130396k",
    "rne": "0130396K",
    "name": "JEAN MOULIN",
    "type": "elementaire",
    "city": "CADOLIVE",
    "address": "Place des Ecoles et de la Laïcit",
    "postalCode": "13950",
    "latitude": 43.396684,
    "longitude": 5.545138,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. BRUNO RONDEAU",
    "referentName": "MEYRINNE-LAFORET JOSIANE",
    "secteurERSEH": "AURIOL",
    "cpcName": "",
    "email": "ce.0130396K@ac-aix-marseille.fr",
    "phone": "442046666",
    "referentPhone": "06 14 60 14 34",
    "referentEmail": "ce.erseh13-auriol@ac-aix-marseille.fr"
  },
  {
    "id": "0131089n",
    "rne": "0131089N",
    "name": "FREDERIC MISTRAL",
    "type": "elementaire",
    "city": "CARNOUX-EN-PROVENCE",
    "address": "Avenue du Mail",
    "postalCode": "13470",
    "latitude": 43.254676,
    "longitude": 5.562774,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CATHERINE ROBERT GUAZA",
    "referentName": "GERMOND VALERIE",
    "secteurERSEH": "CASSIS",
    "cpcName": "",
    "email": "ce.0131089N@ac-aix-marseille.fr",
    "phone": "442734916",
    "referentPhone": "06 14 60 68 78",
    "referentEmail": "ce.erseh13-cassis@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131795f",
    "rne": "0131795F",
    "name": "SAINT AUGUSTIN",
    "type": "elementaire",
    "city": "CARNOUX-EN-PROVENCE",
    "address": "Avenue JEAN BART PROLONGEE",
    "postalCode": "13470",
    "latitude": 43.262791,
    "longitude": 5.565133,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Sandrine POMARES",
    "referentName": "GERMOND VALERIE",
    "secteurERSEH": "CASSIS",
    "cpcName": "",
    "email": "ce.0131795F@ac-aix-marseille.fr",
    "phone": "442737912",
    "referentPhone": "06 14 60 68 78",
    "referentEmail": "ce.erseh13-cassis@ac-aix-marseille.fr"
  },
  {
    "id": "0130399n",
    "rne": "0130399N",
    "name": "SIMONE THOULOUZE",
    "type": "elementaire",
    "city": "CARRY-LE-ROUET",
    "address": "Chemin des Diligences Jas Neuf",
    "postalCode": "13620",
    "latitude": 43.336352,
    "longitude": 5.155622,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ELODIE POMPEI",
    "referentName": "MOUISSON VIAL CELIA",
    "secteurERSEH": "SAUSSET",
    "cpcName": "",
    "email": "ce.0130399N@ac-aix-marseille.fr",
    "phone": "442447098",
    "referentPhone": "06 10 05 00 97",
    "referentEmail": "ce.erseh13-sausset@ac-aix-marseille.fr"
  },
  {
    "id": "0130401r",
    "rne": "0130401R",
    "name": "LERICHE MISTRAL",
    "type": "elementaire",
    "city": "CASSIS",
    "address": "1 allée ALBERT COULIN",
    "postalCode": "13260",
    "latitude": 43.216205,
    "longitude": 5.539372,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MARIE PANTEL",
    "referentName": "GERMOND VALERIE",
    "secteurERSEH": "CASSIS",
    "cpcName": "",
    "email": "ce.0130401R@ac-aix-marseille.fr",
    "phone": "442183562",
    "referentPhone": "06 14 60 68 78",
    "referentEmail": "ce.erseh13-cassis@ac-aix-marseille.fr"
  },
  {
    "id": "0132096h",
    "rne": "0132096H",
    "name": "SAINTE CLAIRE",
    "type": "elementaire",
    "city": "CASSIS",
    "address": "41 rue Victor Hugo",
    "postalCode": "13260",
    "latitude": 43.214853,
    "longitude": 5.539675,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ISABELLE BERGMANN",
    "referentName": "GERMOND VALERIE",
    "secteurERSEH": "CASSIS",
    "cpcName": "",
    "email": "contact@ecolesainteclaire.fr",
    "phone": "442017811",
    "referentPhone": "06 14 60 68 78",
    "referentEmail": "ce.erseh13-cassis@ac-aix-marseille.fr"
  },
  {
    "id": "0130403t",
    "rne": "0130403T",
    "name": "ALBERT BLANC",
    "type": "elementaire",
    "city": "CEYRESTE",
    "address": "Place Albert Blanc",
    "postalCode": "13600",
    "latitude": 43.214723,
    "longitude": 5.632657,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LAETICIA FERAUD",
    "referentName": "MAUNEAU LAURENT",
    "secteurERSEH": "LA_CIOTAT",
    "cpcName": "",
    "email": "ce.0130403T@ac-aix-marseille.fr",
    "phone": "442830038",
    "referentPhone": "06 21 54 28 09",
    "referentEmail": "ce.erseh13-laciotat@ac-aix-marseille.fr"
  },
  {
    "id": "0134229b",
    "rne": "0134229B",
    "name": "JEAN D'ORMESSON",
    "type": "elementaire",
    "city": "CEYRESTE",
    "address": "Impasse DE LA GRAND PIECE",
    "postalCode": "13600",
    "latitude": 43.211172,
    "longitude": 5.625536,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME PATRICIA CANOU",
    "referentName": "MAUNEAU LAURENT",
    "secteurERSEH": "LA_CIOTAT",
    "cpcName": "",
    "email": "ce.0134229B@ac-aix-marseille.fr",
    "phone": "442705860",
    "referentPhone": "06 21 54 28 09",
    "referentEmail": "ce.erseh13-laciotat@ac-aix-marseille.fr"
  },
  {
    "id": "0130405v",
    "rne": "0130405V",
    "name": "CHANTE PIE",
    "type": "elementaire",
    "city": "CHARLEVAL",
    "address": "Route Nationale",
    "postalCode": "13350",
    "latitude": 43.7201,
    "longitude": 5.24725,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. PATRICK MABILEAU",
    "referentName": "BIANCO MARIE-CHRISTINE",
    "secteurERSEH": "PUY_SAINTE_REPARADE",
    "cpcName": "",
    "email": "ce.0130405V@ac-aix-marseille.fr",
    "phone": "442284132",
    "referentPhone": "06 14 60 71 43",
    "referentEmail": "ce.erseh13-puystereparade@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130408y",
    "rne": "0130408Y",
    "name": "SAINTE VICTOIRE",
    "type": "elementaire",
    "city": "CHATEAUNEUF-LE-ROUGE",
    "address": "Allée Arsène Sari",
    "postalCode": "13790",
    "latitude": 43.488216,
    "longitude": 5.56568,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME NADINE BARBAU",
    "referentName": "REYNIER ELODIE",
    "secteurERSEH": "AIX_SUD_1",
    "cpcName": "",
    "email": "ce.0130408Y@ac-aix-marseille.fr",
    "phone": "442585381",
    "referentPhone": "06 14 60 39 01",
    "referentEmail": "ce.erseh13-aixsud1@ac-aix-marseille.fr"
  },
  {
    "id": "0134169l",
    "rne": "0134169L",
    "name": "COULEURS D'AVENIR",
    "type": "elementaire",
    "city": "CHATEAUNEUF-LES-MARTIGUES",
    "address": "1 avenue de l'homme à la fenêtre",
    "postalCode": "13220",
    "latitude": 43.391754,
    "longitude": 5.144413,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME BIAGI GÉRALDINE",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ce.0134169L@ac-aix-marseille.fr",
    "phone": "651959519",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130409z",
    "rne": "0130409Z",
    "name": "JEAN JAURES",
    "type": "elementaire",
    "city": "CHATEAUNEUF-LES-MARTIGUES",
    "address": "Place Jean Jaurès",
    "postalCode": "13220",
    "latitude": 43.382182,
    "longitude": 5.166022,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. ALAIN VALERO",
    "referentName": "CHAPUS FABIENNE",
    "secteurERSEH": "GIGNAC",
    "cpcName": "",
    "email": "ce.0130409Z@ac-aix-marseille.fr",
    "phone": "442798784",
    "referentPhone": "06 21 54 94 60",
    "referentEmail": "ce.erseh13-gignac@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0134043z",
    "rne": "0134043Z",
    "name": "MIREILLE FERAUD FOESSER",
    "type": "elementaire",
    "city": "CHATEAUNEUF-LES-MARTIGUES",
    "address": "Boulevard Mendès France",
    "postalCode": "13220",
    "latitude": 43.388405,
    "longitude": 5.17399,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CECILE GIRONIE-GUILLEMIN",
    "referentName": "CHAPUS FABIENNE",
    "secteurERSEH": "GIGNAC",
    "cpcName": "",
    "email": "ce.0134043Z@ac-aix-marseille.fr",
    "phone": "442742020",
    "referentPhone": "06 21 54 94 60",
    "referentEmail": "ce.erseh13-gignac@ac-aix-marseille.fr"
  },
  {
    "id": "0130410a",
    "rne": "0130410A",
    "name": "RENE PERRIN",
    "type": "elementaire",
    "city": "CHATEAUNEUF-LES-MARTIGUES",
    "address": "Avenue Emile Cotte",
    "postalCode": "13220",
    "latitude": 43.395866,
    "longitude": 5.117429,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CLOTILDE DOURLENS",
    "referentName": "CHAPUS FABIENNE",
    "secteurERSEH": "GIGNAC",
    "cpcName": "",
    "email": "ce.0130410A@ac-aix-marseille.fr",
    "phone": "442812957",
    "referentPhone": "06 21 54 94 60",
    "referentEmail": "ce.erseh13-gignac@ac-aix-marseille.fr"
  },
  {
    "id": "0130411b",
    "rne": "0130411B",
    "name": "ROGER SALENGRO",
    "type": "elementaire",
    "city": "CHATEAUNEUF-LES-MARTIGUES",
    "address": "5 rue de Patafloux",
    "postalCode": "13220",
    "latitude": 43.385047,
    "longitude": 5.161108,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LAURENCE GOSSIAUX",
    "referentName": "CHAPUS FABIENNE",
    "secteurERSEH": "GIGNAC",
    "cpcName": "",
    "email": "ce.0130411B@ac-aix-marseille.fr",
    "phone": "442798701",
    "referentPhone": "06 21 54 94 60",
    "referentEmail": "ce.erseh13-gignac@ac-aix-marseille.fr"
  },
  {
    "id": "0130414e",
    "rne": "0130414E",
    "name": "CRAU (LA)",
    "type": "elementaire",
    "city": "CHATEAURENARD",
    "address": "3180 route de la Crau",
    "postalCode": "13160",
    "latitude": 43.868736,
    "longitude": 4.835898,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME PASCALE TISSOT",
    "referentName": "PIRON FRANCOISE",
    "secteurERSEH": "SAINT_REMY_DE_PROVENCE",
    "cpcName": "",
    "email": "ce.0130414E@ac-aix-marseille.fr",
    "phone": "490900191",
    "referentPhone": "06 21 54 11 24",
    "referentEmail": "ce.erseh13-stremy@ac-aix-marseille.fr"
  },
  {
    "id": "0130417h",
    "rne": "0130417H",
    "name": "GABRIEL PERI",
    "type": "elementaire",
    "city": "CHATEAURENARD",
    "address": "Rue Gabriel Péri",
    "postalCode": "13160",
    "latitude": 43.88347,
    "longitude": 4.849664,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ISABELLE AUTHIER",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ce.0130417H@ac-aix-marseille.fr",
    "phone": "490268062",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ],
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130415f",
    "rne": "0130415F",
    "name": "PIC CHABAUD",
    "type": "elementaire",
    "city": "CHATEAURENARD",
    "address": "Avenue du Docteur Perrier",
    "postalCode": "13160",
    "latitude": 43.880292,
    "longitude": 4.854354,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. YANN BOISSET",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ce.0130415F@ac-aix-marseille.fr",
    "phone": "490243526",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ],
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132033p",
    "rne": "0132033P",
    "name": "SAINT DENYS-SAINT JOSEPH",
    "type": "elementaire",
    "city": "CHATEAURENARD",
    "address": "66 avenue du Général de Gaulle",
    "postalCode": "13160",
    "latitude": 43.884364,
    "longitude": 4.850811,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M.  DALVERNY",
    "referentName": "DE BRUYNE ISABELLE",
    "secteurERSEH": "ASH_OUEST_PRIVE_1",
    "cpcName": "",
    "email": "ce.0132033P@ac-aix-marseille.fr",
    "phone": "49094605",
    "referentPhone": "06 28 58 88 79",
    "referentEmail": "ce.erseh13-ashouest-prive1@ac-aix-marseille.fr"
  },
  {
    "id": "0130433a",
    "rne": "0130433A",
    "name": "IGOR MITORAJ",
    "type": "elementaire",
    "city": "CORNILLON-CONFOUX",
    "address": "",
    "postalCode": "13250",
    "latitude": 43.563237,
    "longitude": 5.071096,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME BENEDICTE GALLINE",
    "referentName": "PLANTIER MYRIAM",
    "secteurERSEH": "SALON_1",
    "cpcName": "",
    "email": "ce.0130433A@ac-aix-marseille.fr",
    "phone": "490504293",
    "referentPhone": "06 14 60 18 89",
    "referentEmail": "ce.erseh13-salon1@ac-aix-marseille.fr"
  },
  {
    "id": "0130434b",
    "rne": "0130434B",
    "name": "DANIELLE GERMOND",
    "type": "elementaire",
    "city": "COUDOUX",
    "address": "Rue Jean Giono",
    "postalCode": "13111",
    "latitude": 43.557098,
    "longitude": 5.250775,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME PRISCA LEZAUD STEFF",
    "referentName": "BROC DAMIEN",
    "secteurERSEH": "LA_FARE_LES_OLIVIERS",
    "cpcName": "",
    "email": "ce.0130434B@ac-aix-marseille.fr",
    "phone": "442528770",
    "referentPhone": "06 71 70 98 89",
    "referentEmail": "ce.ersh13-lafare@ac-aix-marseille.fr"
  },
  {
    "id": "0132266t",
    "rne": "0132266T",
    "name": "SIMONE VEIL",
    "type": "elementaire",
    "city": "CUGES-LES-PINS",
    "address": "Chemin des écoliers",
    "postalCode": "13780",
    "latitude": 43.275296,
    "longitude": 5.700753,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MARIE-CLAI JEUNET",
    "referentName": "GERMOND VALERIE",
    "secteurERSEH": "CASSIS",
    "cpcName": "",
    "email": "ce.0132266T@ac-aix-marseille.fr",
    "phone": "442727491",
    "referentPhone": "06 14 60 68 78",
    "referentEmail": "ce.erseh13-cassis@ac-aix-marseille.fr"
  },
  {
    "id": "0133994w",
    "rne": "0133994W",
    "name": "BOUTONS D'OR (LES) PED STEINER",
    "type": "elementaire",
    "city": "EGUILLES",
    "address": "385 rue SERPENTINE",
    "postalCode": "13510",
    "latitude": 43.546094,
    "longitude": 5.362653,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. DE KEMPENEER Christel",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "info@steiner-aix.org",
    "phone": "442241418",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0133325u",
    "rne": "0133325U",
    "name": "CROS (DU)",
    "type": "elementaire",
    "city": "EGUILLES",
    "address": "Chemin de la Croix",
    "postalCode": "13510",
    "latitude": 43.563468,
    "longitude": 5.35358,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. CYRILLE BONNET",
    "referentName": "GOESSAERT NATHALIE",
    "secteurERSEH": "AIX_SUD_2",
    "cpcName": "",
    "email": "ce.0133325U@ac-aix-marseille.fr",
    "phone": "961624271",
    "referentPhone": "06 14 60 69 55",
    "referentEmail": "ce.erseh13-aixsud2@ac-aix-marseille.fr"
  },
  {
    "id": "0130440h",
    "rne": "0130440H",
    "name": "LEONCE ARTAUD",
    "type": "elementaire",
    "city": "EGUILLES",
    "address": "Quartier Surville",
    "postalCode": "13510",
    "latitude": 43.573078,
    "longitude": 5.357203,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VALERIE MORATO",
    "referentName": "GOESSAERT NATHALIE",
    "secteurERSEH": "AIX_SUD_2",
    "cpcName": "",
    "email": "ce.0130440H@ac-aix-marseille.fr",
    "phone": "442665502",
    "referentPhone": "06 14 60 69 55",
    "referentEmail": "ce.erseh13-aixsud2@ac-aix-marseille.fr"
  },
  {
    "id": "0130442k",
    "rne": "0130442K",
    "name": "FREDERIC MISTRAL",
    "type": "elementaire",
    "city": "ENSUES-LA-REDONNE",
    "address": "Avenue de la Côte Bleue",
    "postalCode": "13820",
    "latitude": 43.357252,
    "longitude": 5.192371,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VERONIQUE DI NOLA",
    "referentName": "MOUISSON VIAL CELIA",
    "secteurERSEH": "SAUSSET",
    "cpcName": "",
    "email": "ce.0130442K@ac-aix-marseille.fr",
    "phone": "442448898",
    "referentPhone": "06 10 05 00 97",
    "referentEmail": "ce.erseh13-sausset@ac-aix-marseille.fr"
  },
  {
    "id": "0130444m",
    "rne": "0130444M",
    "name": "EYGALIERES",
    "type": "elementaire",
    "city": "EYGALIERES",
    "address": "Impasse des écoles",
    "postalCode": "13810",
    "latitude": 43.762115,
    "longitude": 4.947766,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME EMILIE CERESOLA",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ce.0130444M@ac-aix-marseille.fr",
    "phone": "490959008",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130447r",
    "rne": "0130447R",
    "name": "ANDRIEUX ET ANDRE GILOUS",
    "type": "elementaire",
    "city": "EYGUIERES",
    "address": "",
    "postalCode": "13430",
    "latitude": 43.691089,
    "longitude": 5.03173,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ISABELLE CHAZAL",
    "referentName": "VALANSOT CHRISTELLE",
    "secteurERSEH": "SALON_2",
    "cpcName": "",
    "email": "ce.0130447R@ac-aix-marseille.fr",
    "phone": "490578275",
    "referentPhone": "06 14 60 63 95",
    "referentEmail": "ce.erseh13-salon2@ac-aix-marseille.fr"
  },
  {
    "id": "0130446p",
    "rne": "0130446P",
    "name": "GABRIEL PERI",
    "type": "elementaire",
    "city": "EYGUIERES",
    "address": "Avenue Gabriel Péri",
    "postalCode": "13430",
    "latitude": 43.691614,
    "longitude": 5.03014,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. HUGUES ZUNINO",
    "referentName": "VALANSOT CHRISTELLE",
    "secteurERSEH": "SALON_2",
    "cpcName": "",
    "email": "ce.0130446P@ac-aix-marseille.fr",
    "phone": "490579082",
    "referentPhone": "06 14 60 63 95",
    "referentEmail": "ce.erseh13-salon2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130449t",
    "rne": "0130449T",
    "name": "GABRIEL PERI",
    "type": "elementaire",
    "city": "EYRAGUES",
    "address": "Rue Gabriel Péri",
    "postalCode": "13630",
    "latitude": 43.839392,
    "longitude": 4.84171,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. JEAN MICHEL AUBIN",
    "referentName": "PIRON FRANCOISE",
    "secteurERSEH": "SAINT_REMY_DE_PROVENCE",
    "cpcName": "",
    "email": "ce.0130449T@ac-aix-marseille.fr",
    "phone": "490941384",
    "referentPhone": "06 21 54 11 24",
    "referentEmail": "ce.erseh13-stremy@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130453x",
    "rne": "0130453X",
    "name": "YVAN AUDOUARD",
    "type": "elementaire",
    "city": "FONTVIEILLE",
    "address": "17 chemin du Stade",
    "postalCode": "13990",
    "latitude": 43.723208,
    "longitude": 4.706626,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME TAMARA CAPARROS",
    "referentName": "DEMAEREL ISABELLE",
    "secteurERSEH": "SAINT_MARTIN_DE_CRAU",
    "cpcName": "",
    "email": "ce.0130453X@ac-aix-marseille.fr",
    "phone": "490473449",
    "referentPhone": "06 14 60 01 45",
    "referentEmail": "ce.erseh13-crau@ac-aix-marseille.fr"
  },
  {
    "id": "0132989d",
    "rne": "0132989D",
    "name": "GILBERT DEL CORSO",
    "type": "elementaire",
    "city": "FOS-SUR-MER",
    "address": "",
    "postalCode": "13270",
    "latitude": 43.462951,
    "longitude": 4.937844,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VALERIE RODRIGUEZ",
    "referentName": "HUGUERRE LADISLAS",
    "secteurERSEH": "PORT_SAINT_LOUIS_DU_RHONE",
    "cpcName": "",
    "email": "ce.0132989D@ac-aix-marseille.fr",
    "phone": "442477096",
    "referentPhone": "06 03 12 89 20",
    "referentEmail": "ce.erseh13-portsaintlouis@ac-aix-marseille.fr"
  },
  {
    "id": "0130456a",
    "rne": "0130456A",
    "name": "JEAN GIONO",
    "type": "elementaire",
    "city": "FOS-SUR-MER",
    "address": "3 chemin de la Croix",
    "postalCode": "13270",
    "latitude": 43.43399,
    "longitude": 4.947178,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LUCILE ROUSSEAUX",
    "referentName": "HUGUERRE LADISLAS",
    "secteurERSEH": "PORT_SAINT_LOUIS_DU_RHONE",
    "cpcName": "",
    "email": "ce.0130456A@ac-aix-marseille.fr",
    "phone": "490588902",
    "referentPhone": "06 03 12 89 20",
    "referentEmail": "ce.erseh13-portsaintlouis@ac-aix-marseille.fr"
  },
  {
    "id": "0132332p",
    "rne": "0132332P",
    "name": "JOSEPH D'ARBAUD",
    "type": "elementaire",
    "city": "FOS-SUR-MER",
    "address": "",
    "postalCode": "13270",
    "latitude": 43.445853,
    "longitude": 4.943126,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CAROLE PEREZ",
    "referentName": "HUGUERRE LADISLAS",
    "secteurERSEH": "PORT_SAINT_LOUIS_DU_RHONE",
    "cpcName": "",
    "email": "ce.0132332P@ac-aix-marseille.fr",
    "phone": "442477155",
    "referentPhone": "06 03 12 89 20",
    "referentEmail": "ce.erseh13-portsaintlouis@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0133183p",
    "rne": "0133183P",
    "name": "MAZET (LE)",
    "type": "elementaire",
    "city": "FOS-SUR-MER",
    "address": "Rue du Mange Boue",
    "postalCode": "13270",
    "latitude": 43.459082,
    "longitude": 4.94463,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME AMANDINE DI LORENZO",
    "referentName": "HUGUERRE LADISLAS",
    "secteurERSEH": "PORT_SAINT_LOUIS_DU_RHONE",
    "cpcName": "",
    "email": "ce.0133183P@ac-aix-marseille.fr",
    "phone": "442477178",
    "referentPhone": "06 03 12 89 20",
    "referentEmail": "ce.erseh13-portsaintlouis@ac-aix-marseille.fr"
  },
  {
    "id": "0131914k",
    "rne": "0131914K",
    "name": "MICHEL GERACHIOS",
    "type": "elementaire",
    "city": "FOS-SUR-MER",
    "address": "Avenue Cantegrillet",
    "postalCode": "13270",
    "latitude": 43.455129,
    "longitude": 4.93852,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. GEOFFROY NORMAND",
    "referentName": "HUGUERRE LADISLAS",
    "secteurERSEH": "PORT_SAINT_LOUIS_DU_RHONE",
    "cpcName": "",
    "email": "ce.0131914K@ac-aix-marseille.fr",
    "phone": "442477001",
    "referentPhone": "06 03 12 89 20",
    "referentEmail": "ce.erseh13-portsaintlouis@ac-aix-marseille.fr"
  },
  {
    "id": "0133389n",
    "rne": "0133389N",
    "name": "ARTHUR RIMBAUD",
    "type": "elementaire",
    "city": "FUVEAU",
    "address": "Place Frédéric Mistral",
    "postalCode": "13710",
    "latitude": 43.454757,
    "longitude": 5.563555,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. JEAN FRANCOIS FA",
    "referentName": "REYNIER ELODIE",
    "secteurERSEH": "AIX_SUD_1",
    "cpcName": "",
    "email": "ce.0133389N@ac-aix-marseille.fr",
    "phone": "442656529",
    "referentPhone": "06 14 60 39 01",
    "referentEmail": "ce.erseh13-aixsud1@ac-aix-marseille.fr"
  },
  {
    "id": "0130461f",
    "rne": "0130461F",
    "name": "LA BARQUE",
    "type": "elementaire",
    "city": "FUVEAU",
    "address": "109 chemin de l'Adous",
    "postalCode": "13710",
    "latitude": 43.478751,
    "longitude": 5.53796,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VALERIE MATHERON",
    "referentName": "REYNIER ELODIE",
    "secteurERSEH": "AIX_SUD_1",
    "cpcName": "",
    "email": "ce.0130461F@ac-aix-marseille.fr",
    "phone": "442586766",
    "referentPhone": "06 14 60 39 01",
    "referentEmail": "ce.erseh13-aixsud1@ac-aix-marseille.fr"
  },
  {
    "id": "0134028h",
    "rne": "0134028H",
    "name": "LA ROQUE MARTINE",
    "type": "elementaire",
    "city": "FUVEAU",
    "address": "1 chemin LOU BEN DOU SOUDA",
    "postalCode": "13710",
    "latitude": 43.458079,
    "longitude": 5.56025,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VALERIE COUTAYAR",
    "referentName": "REYNIER ELODIE",
    "secteurERSEH": "AIX_SUD_1",
    "cpcName": "",
    "email": "ce.0134028H@ac-aix-marseille.fr",
    "phone": "442228037",
    "referentPhone": "06 14 60 39 01",
    "referentEmail": "ce.erseh13-aixsud1@ac-aix-marseille.fr"
  },
  {
    "id": "0132265s",
    "rne": "0132265S",
    "name": "OUVIERE",
    "type": "elementaire",
    "city": "FUVEAU",
    "address": "3 impasse Saint François",
    "postalCode": "13710",
    "latitude": 43.453026,
    "longitude": 5.553575,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME AUDREY BARRALIS",
    "referentName": "REYNIER ELODIE",
    "secteurERSEH": "AIX_SUD_1",
    "cpcName": "",
    "email": "ce.0132265S@ac-aix-marseille.fr",
    "phone": "442656561",
    "referentPhone": "06 14 60 39 01",
    "referentEmail": "ce.erseh13-aixsud1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132025f",
    "rne": "0132025F",
    "name": "SAINTE MARIE",
    "type": "elementaire",
    "city": "FUVEAU",
    "address": "Avenue Marc SCUDO",
    "postalCode": "13710",
    "latitude": 43.454254,
    "longitude": 5.559104,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Marie-Anne BEAUFILS",
    "referentName": "",
    "secteurERSEH": "PRIVE_5 PAYS D AIX",
    "cpcName": "",
    "email": "ce.0132025F@ac-aix-marseille.fr",
    "phone": "442587466",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0134062v",
    "rne": "0134062V",
    "name": "STE VICTOIRE INTER.SCHOOL",
    "type": "elementaire",
    "city": "FUVEAU",
    "address": "Domaine CHATEAU L'ARC",
    "postalCode": "13710",
    "latitude": 43.463309,
    "longitude": 5.602751,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. . MAFFI",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "info@svis.fr",
    "phone": "442265196",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130466l",
    "rne": "0130466L",
    "name": "ALBERT BAYET",
    "type": "elementaire",
    "city": "GARDANNE",
    "address": "Avenue Maurel Agricol",
    "postalCode": "13120",
    "latitude": 43.453298,
    "longitude": 5.47236,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. LIONEL HAON",
    "referentName": "BOUQUET SANDRINE",
    "secteurERSEH": "GARDANNE",
    "cpcName": "",
    "email": "ce.0130466L@ac-aix-marseille.fr",
    "phone": "442659323",
    "referentPhone": "06 21 54 84 62",
    "referentEmail": "ce.erseh13-gardanne@ac-aix-marseille.fr"
  },
  {
    "id": "0133103c",
    "rne": "0133103C",
    "name": "CHATEAU PITTY",
    "type": "elementaire",
    "city": "GARDANNE",
    "address": "ZAC Notre Dame",
    "postalCode": "13120",
    "latitude": 43.454174,
    "longitude": 5.48509,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME STEPHANIE LESEIGNEUR",
    "referentName": "BOUQUET SANDRINE",
    "secteurERSEH": "GARDANNE",
    "cpcName": "",
    "email": "ce.0133103C@ac-aix-marseille.fr",
    "phone": "442514586",
    "referentPhone": "06 21 54 84 62",
    "referentEmail": "ce.erseh13-gardanne@ac-aix-marseille.fr"
  },
  {
    "id": "0130465k",
    "rne": "0130465K",
    "name": "FREDERIC MISTRAL",
    "type": "elementaire",
    "city": "GARDANNE",
    "address": "Hameau de Biver",
    "postalCode": "13120",
    "latitude": 43.434573,
    "longitude": 5.464193,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MIRANDA CIRASARO",
    "referentName": "BOUQUET SANDRINE",
    "secteurERSEH": "GARDANNE",
    "cpcName": "",
    "email": "ce.0130465K@ac-aix-marseille.fr",
    "phone": "442511192",
    "referentPhone": "06 21 54 84 62",
    "referentEmail": "ce.erseh13-gardanne@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132900g",
    "rne": "0132900G",
    "name": "GEORGES BRASSENS",
    "type": "elementaire",
    "city": "GARDANNE",
    "address": "Avenue des Aires",
    "postalCode": "13120",
    "latitude": 43.452322,
    "longitude": 5.482057,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CECILE ARNAUD",
    "referentName": "BOUQUET SANDRINE",
    "secteurERSEH": "GARDANNE",
    "cpcName": "",
    "email": "ce.0132900G@ac-aix-marseille.fr",
    "phone": "442511373",
    "referentPhone": "06 21 54 84 62",
    "referentEmail": "ce.erseh13-gardanne@ac-aix-marseille.fr"
  },
  {
    "id": "0130464j",
    "rne": "0130464J",
    "name": "JACQUES PREVERT",
    "type": "elementaire",
    "city": "GARDANNE",
    "address": "Avenue de Toulon",
    "postalCode": "13120",
    "latitude": 43.453599,
    "longitude": 5.471543,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. FABIEN FUSCIELLO",
    "referentName": "BOUQUET SANDRINE",
    "secteurERSEH": "GARDANNE",
    "cpcName": "",
    "email": "ce.0130464J@ac-aix-marseille.fr",
    "phone": "442583394",
    "referentPhone": "06 21 54 84 62",
    "referentEmail": "ce.erseh13-gardanne@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131827r",
    "rne": "0131827R",
    "name": "LUCIE AUBRAC",
    "type": "elementaire",
    "city": "GARDANNE",
    "address": "Avenue Raoul Décoppet",
    "postalCode": "13120",
    "latitude": 43.453562,
    "longitude": 5.45306,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 10,
      "placesVacantes": 10,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CELINE GIORGI",
    "referentName": "BOUQUET SANDRINE",
    "secteurERSEH": "GARDANNE",
    "cpcName": "",
    "email": "ce.0131827R@ac-aix-marseille.fr",
    "phone": "442582858",
    "referentPhone": "06 21 54 84 62",
    "referentEmail": "ce.erseh13-gardanne@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 10,
        "placesVacantes": 10,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130463h",
    "rne": "0130463H",
    "name": "PAUL CEZANNE",
    "type": "elementaire",
    "city": "GARDANNE",
    "address": "Hameau de Biver",
    "postalCode": "13120",
    "latitude": 43.434144,
    "longitude": 5.464759,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 10,
      "placesVacantes": 10,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME JOHANNA SCHMITT",
    "referentName": "BOUQUET SANDRINE",
    "secteurERSEH": "GARDANNE",
    "cpcName": "",
    "email": "ce.0130463H@ac-aix-marseille.fr",
    "phone": "442582223",
    "referentPhone": "06 21 54 84 62",
    "referentEmail": "ce.erseh13-gardanne@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 10,
        "placesVacantes": 10,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132023d",
    "rne": "0132023D",
    "name": "SAINT JOSEPH",
    "type": "elementaire",
    "city": "GARDANNE",
    "address": "Quartier la Garde Route de Trets",
    "postalCode": "13120",
    "latitude": 43.457301,
    "longitude": 5.48627,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Sophie LEMBOURG",
    "referentName": "",
    "secteurERSEH": "PRIVE_5 PAYS D AIX",
    "cpcName": "",
    "email": "ce.0132023D@ac-aix-marseille.fr",
    "phone": "442584570",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0133022p",
    "rne": "0133022P",
    "name": "CULASSE (LA)",
    "type": "elementaire",
    "city": "GEMENOS",
    "address": "",
    "postalCode": "13420",
    "latitude": 43.303991,
    "longitude": 5.617963,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME JOSIANE PRATALI",
    "referentName": "PASSEREL AUDREY",
    "secteurERSEH": "AUBAGNE_2",
    "cpcName": "",
    "email": "ce.0133022P@ac-aix-marseille.fr",
    "phone": "442321213",
    "referentPhone": "06 21 54 19 12",
    "referentEmail": "ce.erseh13-aubagne2@ac-aix-marseille.fr"
  },
  {
    "id": "0130469p",
    "rne": "0130469P",
    "name": "VESSIOT",
    "type": "elementaire",
    "city": "GEMENOS",
    "address": "Boulevard Vessiot",
    "postalCode": "13420",
    "latitude": 43.293793,
    "longitude": 5.628554,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. OLIVIER CROUILLEBOIS",
    "referentName": "PASSEREL AUDREY",
    "secteurERSEH": "AUBAGNE_2",
    "cpcName": "",
    "email": "ce.0130469P@ac-aix-marseille.fr",
    "phone": "442322191",
    "referentPhone": "06 21 54 19 12",
    "referentEmail": "ce.erseh13-aubagne2@ac-aix-marseille.fr"
  },
  {
    "id": "0133058d",
    "rne": "0133058D",
    "name": "DAVID DOUILLET",
    "type": "elementaire",
    "city": "GIGNAC-LA-NERTHE",
    "address": "ZAC Marcel Paul",
    "postalCode": "13180",
    "latitude": 43.389618,
    "longitude": 5.234511,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LAURE SIBOIS",
    "referentName": "CHAPUS FABIENNE",
    "secteurERSEH": "GIGNAC",
    "cpcName": "",
    "email": "ce.0133058D@ac-aix-marseille.fr",
    "phone": "442304441",
    "referentPhone": "06 21 54 94 60",
    "referentEmail": "ce.erseh13-gignac@ac-aix-marseille.fr"
  },
  {
    "id": "0133185s",
    "rne": "0133185S",
    "name": "MARCEL PAGNOL",
    "type": "elementaire",
    "city": "GIGNAC-LA-NERTHE",
    "address": "",
    "postalCode": "13180",
    "latitude": 43.390916,
    "longitude": 5.23347,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": null,
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ANNABEL MARROT",
    "referentName": "CHAPUS FABIENNE",
    "secteurERSEH": "GIGNAC",
    "cpcName": "",
    "email": "ce.0133185S@ac-aix-marseille.fr",
    "phone": "442305222",
    "referentPhone": "06 21 54 94 60",
    "referentEmail": "ce.erseh13-gignac@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": null,
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0134270w",
    "rne": "0134270W",
    "name": "MARIE MAURON",
    "type": "elementaire",
    "city": "GIGNAC-LA-NERTHE",
    "address": "Avenue Jean Jaurès",
    "postalCode": "13180",
    "latitude": 43.393266,
    "longitude": 5.237238,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSLA",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME PAULINE ZONZON",
    "referentName": "CHAPUS FABIENNE",
    "secteurERSEH": "GIGNAC",
    "cpcName": "",
    "email": "ce.0134270W@ac-aix-marseille.fr",
    "phone": "786393890",
    "referentPhone": "06 21 54 94 60",
    "referentEmail": "ce.erseh13-gignac@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSLA",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0134271x",
    "rne": "0134271X",
    "name": "NELSON MANDELA",
    "type": "elementaire",
    "city": "GIGNAC-LA-NERTHE",
    "address": "1 chemin des Minots",
    "postalCode": "13180",
    "latitude": 43.391013,
    "longitude": 5.239019,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME AUDREY TCHELEKIAN",
    "referentName": "CHAPUS FABIENNE",
    "secteurERSEH": "GIGNAC",
    "cpcName": "",
    "email": "ce.0134271X@ac-aix-marseille.fr",
    "phone": "442311327",
    "referentPhone": "06 21 54 94 60",
    "referentEmail": "ce.erseh13-gignac@ac-aix-marseille.fr"
  },
  {
    "id": "0132102p",
    "rne": "0132102P",
    "name": "ST LOUIS",
    "type": "elementaire",
    "city": "GIGNAC-LA-NERTHE",
    "address": "Route NAT 568",
    "postalCode": "13180",
    "latitude": 43.390716,
    "longitude": 5.233848,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. Franck VERMET",
    "referentName": "LEGRAND VERONIQUE",
    "secteurERSEH": "PRIVE_3",
    "cpcName": "",
    "email": "ce.0132102P@ac-aix-marseille.fr",
    "phone": "442885122",
    "referentPhone": "06 28 58 88 80",
    "referentEmail": "ce.erseh13-prive3@ac-aix-marseille.fr"
  },
  {
    "id": "0132264r",
    "rne": "0132264R",
    "name": "GEORGES BRASSENS",
    "type": "elementaire",
    "city": "GRANS",
    "address": "8 boulevard Victor Jauffret",
    "postalCode": "13450",
    "latitude": 43.607846,
    "longitude": 5.065861,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MARAYAT PICARD",
    "referentName": "PLANTIER MYRIAM",
    "secteurERSEH": "SALON_1",
    "cpcName": "",
    "email": "ce.0132264R@ac-aix-marseille.fr",
    "phone": "490564837",
    "referentPhone": "06 14 60 18 89",
    "referentEmail": "ce.erseh13-salon1@ac-aix-marseille.fr"
  },
  {
    "id": "0130477y",
    "rne": "0130477Y",
    "name": "GRAVESON",
    "type": "elementaire",
    "city": "GRAVESON",
    "address": "3 rue Jeanne d'Arc",
    "postalCode": "13690",
    "latitude": 43.851601,
    "longitude": 4.77394,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME EMYLIE LE LOREC",
    "referentName": "PIRON FRANCOISE",
    "secteurERSEH": "SAINT_REMY_DE_PROVENCE",
    "cpcName": "",
    "email": "ce.0130477Y@ac-aix-marseille.fr",
    "phone": "490957246",
    "referentPhone": "06 21 54 11 24",
    "referentEmail": "ce.erseh13-stremy@ac-aix-marseille.fr"
  },
  {
    "id": "0132035s",
    "rne": "0132035S",
    "name": "JEANNE D'ARC",
    "type": "elementaire",
    "city": "GRAVESON",
    "address": "Rue Jeanne d'Arc",
    "postalCode": "13690",
    "latitude": 43.851695,
    "longitude": 4.774687,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Christine GHIRALDO",
    "referentName": "DE BRUYNE ISABELLE",
    "secteurERSEH": "ASH_OUEST_PRIVE_1",
    "cpcName": "",
    "email": "ce.0132035S@ac-aix-marseille.fr",
    "phone": "490957356",
    "referentPhone": "06 28 58 88 79",
    "referentEmail": "ce.erseh13-ashouest-prive1@ac-aix-marseille.fr"
  },
  {
    "id": "0132263p",
    "rne": "0132263P",
    "name": "SIMONE VEIL",
    "type": "elementaire",
    "city": "GREASQUE",
    "address": "Avenue du 8 Mai 1945",
    "postalCode": "13850",
    "latitude": 43.432445,
    "longitude": 5.544099,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ANNE LISE HINCHLIFFE",
    "referentName": "MEYRINNE-LAFORET JOSIANE",
    "secteurERSEH": "AURIOL",
    "cpcName": "",
    "email": "ce.0132263P@ac-aix-marseille.fr",
    "phone": "442538141",
    "referentPhone": "06 14 60 14 34",
    "referentEmail": "ce.erseh13-auriol@ac-aix-marseille.fr"
  },
  {
    "id": "0132590v",
    "rne": "0132590V",
    "name": "CAMILLE PIERRON",
    "type": "elementaire",
    "city": "ISTRES",
    "address": "Allée des Piboules Le Prepaou",
    "postalCode": "13800",
    "latitude": 43.493439,
    "longitude": 4.98427,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME GERALDINE SERENO",
    "referentName": "BASTIEN LAURENT",
    "secteurERSEH": "ISTRES",
    "cpcName": "",
    "email": "ce.0132590V@ac-aix-marseille.fr",
    "phone": "413295060",
    "referentPhone": "06 25 11 25 75",
    "referentEmail": "ce.erseh13-istres@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132766l",
    "rne": "0132766L",
    "name": "CLE DES CHAMPS (LA)",
    "type": "elementaire",
    "city": "ISTRES",
    "address": "Promenade Raymond Chevallier",
    "postalCode": "13118",
    "latitude": 43.597109,
    "longitude": 4.932395,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MARIE CHRISTINE FERULLO GIRAUD",
    "referentName": "DUSSERRE CLEMENCE",
    "secteurERSEH": "PORT_DE_BOUC",
    "cpcName": "",
    "email": "ce.0132766L@ac-aix-marseille.fr",
    "phone": "413295695",
    "referentPhone": "06 14 60 10 30",
    "referentEmail": "ce.erseh13-portdebouc@ac-aix-marseille.fr"
  },
  {
    "id": "0132711b",
    "rne": "0132711B",
    "name": "CLOS DE LA ROCHE",
    "type": "elementaire",
    "city": "ISTRES",
    "address": "Allée Joseph Roumanille",
    "postalCode": "13800",
    "latitude": 43.492844,
    "longitude": 4.978674,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME NADIA LUQUE",
    "referentName": "BASTIEN LAURENT",
    "secteurERSEH": "ISTRES",
    "cpcName": "",
    "email": "ce.0132711B@ac-aix-marseille.fr",
    "phone": "442555165",
    "referentPhone": "06 25 11 25 75",
    "referentEmail": "ce.erseh13-istres@ac-aix-marseille.fr"
  },
  {
    "id": "0132513l",
    "rne": "0132513L",
    "name": "ELISE ET JEAN MILLE",
    "type": "elementaire",
    "city": "ISTRES",
    "address": "Avenue des Cardalines",
    "postalCode": "13800",
    "latitude": 43.493164,
    "longitude": 4.98717,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": null,
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LAURIANNE DARRAS",
    "referentName": "BASTIEN LAURENT",
    "secteurERSEH": "ISTRES",
    "cpcName": "",
    "email": "ce.0132513L@ac-aix-marseille.fr",
    "phone": "442555162",
    "referentPhone": "06 25 11 25 75",
    "referentEmail": "ce.erseh13-istres@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": null,
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0133215z",
    "rne": "0133215Z",
    "name": "JACQUELINE AURIOL",
    "type": "elementaire",
    "city": "ISTRES",
    "address": "Rue Roquepin la Romaniquette",
    "postalCode": "13800",
    "latitude": 43.50823,
    "longitude": 4.997826,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LAURENCE COMBEL",
    "referentName": "BASTIEN LAURENT",
    "secteurERSEH": "ISTRES",
    "cpcName": "",
    "email": "ce.0133215Z@ac-aix-marseille.fr",
    "phone": "442555039",
    "referentPhone": "06 25 11 25 75",
    "referentEmail": "ce.erseh13-istres@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132806e",
    "rne": "0132806E",
    "name": "JEAN MOULIN",
    "type": "elementaire",
    "city": "ISTRES",
    "address": "Place Jean Moulin Qua des Salles",
    "postalCode": "13800",
    "latitude": 43.501909,
    "longitude": 4.989809,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ISABELLE RIEM",
    "referentName": "BASTIEN LAURENT",
    "secteurERSEH": "ISTRES",
    "cpcName": "",
    "email": "ce.0132806E@ac-aix-marseille.fr",
    "phone": "413295043",
    "referentPhone": "06 25 11 25 75",
    "referentEmail": "ce.erseh13-istres@ac-aix-marseille.fr"
  },
  {
    "id": "0130486h",
    "rne": "0130486H",
    "name": "JULES FERRY",
    "type": "elementaire",
    "city": "ISTRES",
    "address": "Chemin Barigoule ZAC Prepaou",
    "postalCode": "13800",
    "latitude": 43.494986,
    "longitude": 4.984039,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. BRUNO GASTAL",
    "referentName": "BASTIEN LAURENT",
    "secteurERSEH": "ISTRES",
    "cpcName": "",
    "email": "ce.0130486H@ac-aix-marseille.fr",
    "phone": "442555186",
    "referentPhone": "06 25 11 25 75",
    "referentEmail": "ce.erseh13-istres@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0134274a",
    "rne": "0134274A",
    "name": "MAURICE GOUIN",
    "type": "elementaire",
    "city": "ISTRES",
    "address": "Chemin de Capeau",
    "postalCode": "13800",
    "latitude": 43.509215,
    "longitude": 4.967575,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME BETTY GUILLAUME",
    "referentName": "BASTIEN LAURENT",
    "secteurERSEH": "ISTRES",
    "cpcName": "",
    "email": "ce.0134274A@ac-aix-marseille.fr",
    "phone": "413295693",
    "referentPhone": "06 25 11 25 75",
    "referentEmail": "ce.erseh13-istres@ac-aix-marseille.fr"
  },
  {
    "id": "0132762g",
    "rne": "0132762G",
    "name": "PIERRE ARMANET",
    "type": "elementaire",
    "city": "ISTRES",
    "address": "Avenue des Heures Claires",
    "postalCode": "13800",
    "latitude": 43.49178,
    "longitude": 4.99751,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. OLIVIER CLAUDE MARTIN",
    "referentName": "BASTIEN LAURENT",
    "secteurERSEH": "ISTRES",
    "cpcName": "",
    "email": "ce.0132762G@ac-aix-marseille.fr",
    "phone": "442555156",
    "referentPhone": "06 25 11 25 75",
    "referentEmail": "ce.erseh13-istres@ac-aix-marseille.fr"
  },
  {
    "id": "0133052x",
    "rne": "0133052X",
    "name": "PIERRE MENDES-FRANCE",
    "type": "elementaire",
    "city": "ISTRES",
    "address": "Place Marie Subil",
    "postalCode": "13800",
    "latitude": 43.500011,
    "longitude": 4.983631,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME FABIENNE SIMON",
    "referentName": "BASTIEN LAURENT",
    "secteurERSEH": "ISTRES",
    "cpcName": "",
    "email": "ce.0133052X@ac-aix-marseille.fr",
    "phone": "413295137",
    "referentPhone": "06 25 11 25 75",
    "referentEmail": "ce.erseh13-istres@ac-aix-marseille.fr"
  },
  {
    "id": "0131593l",
    "rne": "0131593L",
    "name": "RAOUL ORTOLLAN",
    "type": "elementaire",
    "city": "ISTRES",
    "address": "Allée Micocouliers",
    "postalCode": "13800",
    "latitude": 43.525899,
    "longitude": 4.95643,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ELZA ROSTAN",
    "referentName": "BASTIEN LAURENT",
    "secteurERSEH": "ISTRES",
    "cpcName": "",
    "email": "ce.0131593L@ac-aix-marseille.fr",
    "phone": "413295176",
    "referentPhone": "06 25 11 25 75",
    "referentEmail": "ce.erseh13-istres@ac-aix-marseille.fr"
  },
  {
    "id": "0130482d",
    "rne": "0130482D",
    "name": "REINE MARIE CASIMIR GOUIN",
    "type": "elementaire",
    "city": "ISTRES",
    "address": "Avenue Guynemer",
    "postalCode": "13800",
    "latitude": 43.517707,
    "longitude": 4.98162,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MAGALI LONGUET",
    "referentName": "BASTIEN LAURENT",
    "secteurERSEH": "ISTRES",
    "cpcName": "",
    "email": "ce.0130482D@ac-aix-marseille.fr",
    "phone": "413295180",
    "referentPhone": "06 25 11 25 75",
    "referentEmail": "ce.erseh13-istres@ac-aix-marseille.fr"
  },
  {
    "id": "0132437d",
    "rne": "0132437D",
    "name": "RENE CALAMAND",
    "type": "elementaire",
    "city": "ISTRES",
    "address": "Rue DE LA COMETE QUA BAUMES",
    "postalCode": "13800",
    "latitude": 43.50969,
    "longitude": 4.98322,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. ANTOINE TRIGAUX PETIT",
    "referentName": "BASTIEN LAURENT",
    "secteurERSEH": "ISTRES",
    "cpcName": "",
    "email": "ce.0132437D@ac-aix-marseille.fr",
    "phone": "413295191",
    "referentPhone": "06 25 11 25 75",
    "referentEmail": "ce.erseh13-istres@ac-aix-marseille.fr"
  },
  {
    "id": "0130490m",
    "rne": "0130490M",
    "name": "REPUBLIQUE",
    "type": "elementaire",
    "city": "JOUQUES",
    "address": "Impasse des Ecoles",
    "postalCode": "13490",
    "latitude": 43.636283,
    "longitude": 5.64099,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CORINNE BARBIER",
    "referentName": "BIANCO MARIE-CHRISTINE",
    "secteurERSEH": "PUY_SAINTE_REPARADE",
    "cpcName": "",
    "email": "ce.0130490M@ac-aix-marseille.fr",
    "phone": "442676243",
    "referentPhone": "06 14 60 71 43",
    "referentEmail": "ce.erseh13-puystereparade@ac-aix-marseille.fr"
  },
  {
    "id": "0130368e",
    "rne": "0130368E",
    "name": "PALAMEDE DE FORBIN",
    "type": "elementaire",
    "city": "LA BARBEN",
    "address": "",
    "postalCode": "13330",
    "latitude": 43.630597,
    "longitude": 5.17691,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME M GABRIELLE NICOLAS",
    "referentName": "LANKAMER MURIEL",
    "secteurERSEH": "SALON_3",
    "cpcName": "",
    "email": "ce.0130368E@ac-aix-marseille.fr",
    "phone": "967332071",
    "referentPhone": "06 14 60 29 97",
    "referentEmail": "ce.erseh13-salon3@ac-aix-marseille.fr"
  },
  {
    "id": "0133818e",
    "rne": "0133818E",
    "name": "HAMEAUX (DES)",
    "type": "elementaire",
    "city": "LA BOUILLADISSE",
    "address": "Quartier du Pigeonnier",
    "postalCode": "13720",
    "latitude": 43.40402,
    "longitude": 5.60987,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. LAURENT VIALE",
    "referentName": "BIANCHINI EDITH",
    "secteurERSEH": "AUBAGNE_3",
    "cpcName": "",
    "email": "ce.0133818E@ac-aix-marseille.fr",
    "phone": "442628231",
    "referentPhone": "06 46 35 40 06",
    "referentEmail": "ce.erseh13-aubagne3@ac-aix-marseille.fr"
  },
  {
    "id": "0130387a",
    "rne": "0130387A",
    "name": "PAUL ELUARD",
    "type": "elementaire",
    "city": "LA BOUILLADISSE",
    "address": "22 avenue de la Gare",
    "postalCode": "13720",
    "latitude": 43.39403,
    "longitude": 5.600506,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHRISTELLE MAHE",
    "referentName": "BIANCHINI EDITH",
    "secteurERSEH": "AUBAGNE_3",
    "cpcName": "",
    "email": "ce.0130387A@ac-aix-marseille.fr",
    "phone": "442629840",
    "referentPhone": "06 46 35 40 06",
    "referentEmail": "ce.erseh13-aubagne3@ac-aix-marseille.fr"
  },
  {
    "id": "0130420l",
    "rne": "0130420L",
    "name": "GARDE (LA)",
    "type": "elementaire",
    "city": "LA CIOTAT",
    "address": "281 avenue du Mugel",
    "postalCode": "13600",
    "latitude": 43.168036,
    "longitude": 5.602759,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ELSA BONNENFANT",
    "referentName": "GERMOND VALERIE",
    "secteurERSEH": "CASSIS",
    "cpcName": "",
    "email": "ce.0130420L@ac-aix-marseille.fr",
    "phone": "442084825",
    "referentPhone": "06 14 60 68 78",
    "referentEmail": "ce.erseh13-cassis@ac-aix-marseille.fr"
  },
  {
    "id": "0130427u",
    "rne": "0130427U",
    "name": "LOUIS MARIN",
    "type": "elementaire",
    "city": "LA CIOTAT",
    "address": "Place Louis Marin",
    "postalCode": "13600",
    "latitude": 43.176611,
    "longitude": 5.609864,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LAURENCE GHOZLAN",
    "referentName": "MAUNEAU LAURENT",
    "secteurERSEH": "LA_CIOTAT",
    "cpcName": "",
    "email": "ce.0130427U@ac-aix-marseille.fr",
    "phone": "442085381",
    "referentPhone": "06 21 54 28 09",
    "referentEmail": "ce.erseh13-laciotat@ac-aix-marseille.fr"
  },
  {
    "id": "0132261m",
    "rne": "0132261M",
    "name": "LOUIS PECOUT",
    "type": "elementaire",
    "city": "LA CIOTAT",
    "address": "Cité Fardeloup",
    "postalCode": "13600",
    "latitude": 43.186106,
    "longitude": 5.588463,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. JEROME PINCHON",
    "referentName": "GERMOND VALERIE",
    "secteurERSEH": "CASSIS",
    "cpcName": "",
    "email": "ce.0132261M@ac-aix-marseille.fr",
    "phone": "442085753",
    "referentPhone": "06 14 60 68 78",
    "referentEmail": "ce.erseh13-cassis@ac-aix-marseille.fr"
  },
  {
    "id": "0132761f",
    "rne": "0132761F",
    "name": "LOUIS VIGNOL",
    "type": "elementaire",
    "city": "LA CIOTAT",
    "address": "Chemin de Virebelle",
    "postalCode": "13600",
    "latitude": 43.185922,
    "longitude": 5.602349,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CATHERINE COULON",
    "referentName": "GERMOND VALERIE",
    "secteurERSEH": "CASSIS",
    "cpcName": "",
    "email": "ce.0132761F@ac-aix-marseille.fr",
    "phone": "442833883",
    "referentPhone": "06 14 60 68 78",
    "referentEmail": "ce.erseh13-cassis@ac-aix-marseille.fr"
  },
  {
    "id": "0130421m",
    "rne": "0130421M",
    "name": "MALTEMPS",
    "type": "elementaire",
    "city": "LA CIOTAT",
    "address": "Avenue Legrand",
    "postalCode": "13600",
    "latitude": 43.17778,
    "longitude": 5.603847,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. FREDERIC BLANC",
    "referentName": "GERMOND VALERIE",
    "secteurERSEH": "CASSIS",
    "cpcName": "",
    "email": "ce.0130421M@ac-aix-marseille.fr",
    "phone": "442084726",
    "referentPhone": "06 14 60 68 78",
    "referentEmail": "ce.erseh13-cassis@ac-aix-marseille.fr"
  },
  {
    "id": "0132763h",
    "rne": "0132763H",
    "name": "MARIA FABRY",
    "type": "elementaire",
    "city": "LA CIOTAT",
    "address": "Quartier des Séveriers",
    "postalCode": "13600",
    "latitude": 43.202353,
    "longitude": 5.606922,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHRISTINE PANFILOFF",
    "referentName": "MAUNEAU LAURENT",
    "secteurERSEH": "LA_CIOTAT",
    "cpcName": "",
    "email": "ce.0132763H@ac-aix-marseille.fr",
    "phone": "442831251",
    "referentPhone": "06 21 54 28 09",
    "referentEmail": "ce.erseh13-laciotat@ac-aix-marseille.fr"
  },
  {
    "id": "0132161d",
    "rne": "0132161D",
    "name": "PAUL BERT",
    "type": "elementaire",
    "city": "LA CIOTAT",
    "address": "Traverse de la Marine",
    "postalCode": "13600",
    "latitude": 43.180502,
    "longitude": 5.600649,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHRISTINE LIEBGOTT",
    "referentName": "MAUNEAU LAURENT",
    "secteurERSEH": "LA_CIOTAT",
    "cpcName": "",
    "email": "ce.0132161D@ac-aix-marseille.fr",
    "phone": "442833101",
    "referentPhone": "06 21 54 28 09",
    "referentEmail": "ce.erseh13-laciotat@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131854v",
    "rne": "0131854V",
    "name": "ROGER LE GUEREC",
    "type": "elementaire",
    "city": "LA CIOTAT",
    "address": "Avenue Camusso",
    "postalCode": "13600",
    "latitude": 43.178725,
    "longitude": 5.596632,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LAURENCE GAILLARD",
    "referentName": "GERMOND VALERIE",
    "secteurERSEH": "CASSIS",
    "cpcName": "",
    "email": "ce.0131854V@ac-aix-marseille.fr",
    "phone": "442085130",
    "referentPhone": "06 14 60 68 78",
    "referentEmail": "ce.erseh13-cassis@ac-aix-marseille.fr"
  },
  {
    "id": "0130419k",
    "rne": "0130419K",
    "name": "ROSY SANNA",
    "type": "elementaire",
    "city": "LA CIOTAT",
    "address": "Hameau de l'Abeille",
    "postalCode": "13600",
    "latitude": 43.195007,
    "longitude": 5.6177,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ISABELLE VERNAY",
    "referentName": "MAUNEAU LAURENT",
    "secteurERSEH": "LA_CIOTAT",
    "cpcName": "",
    "email": "ce.0130419K@ac-aix-marseille.fr",
    "phone": "442831670",
    "referentPhone": "06 21 54 28 09",
    "referentEmail": "ce.erseh13-laciotat@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130423p",
    "rne": "0130423P",
    "name": "SAINT JEAN",
    "type": "elementaire",
    "city": "LA CIOTAT",
    "address": "Hameau de Saint Jean",
    "postalCode": "13600",
    "latitude": 43.188996,
    "longitude": 5.630397,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VERONIQUE GONNELLI",
    "referentName": "MAUNEAU LAURENT",
    "secteurERSEH": "LA_CIOTAT",
    "cpcName": "",
    "email": "ce.0130423P@ac-aix-marseille.fr",
    "phone": "442831068",
    "referentPhone": "06 21 54 28 09",
    "referentEmail": "ce.erseh13-laciotat@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132097j",
    "rne": "0132097J",
    "name": "SAINTE ANNE",
    "type": "elementaire",
    "city": "LA CIOTAT",
    "address": "335 boulevard de la République",
    "postalCode": "13600",
    "latitude": 43.175345,
    "longitude": 5.605459,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSLA",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Mélissa BRUN",
    "referentName": "MAUNEAU LAURENT",
    "secteurERSEH": "LA_CIOTAT",
    "cpcName": "",
    "email": "ce.0132097J@ac-aix-marseille.fr",
    "phone": "486336586",
    "referentPhone": "06 21 54 28 09",
    "referentEmail": "ce.erseh13-laciotat@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSLA",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131217c",
    "rne": "0131217C",
    "name": "SALIS (LA)",
    "type": "elementaire",
    "city": "LA CIOTAT",
    "address": "Traverse Sécadou",
    "postalCode": "13600",
    "latitude": 43.184933,
    "longitude": 5.613366,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME FLORENCE BOYER",
    "referentName": "MAUNEAU LAURENT",
    "secteurERSEH": "LA_CIOTAT",
    "cpcName": "",
    "email": "ce.0131217C@ac-aix-marseille.fr",
    "phone": "442717507",
    "referentPhone": "06 21 54 28 09",
    "referentEmail": "ce.erseh13-laciotat@ac-aix-marseille.fr"
  },
  {
    "id": "0130438f",
    "rne": "0130438F",
    "name": "LA DESTROUSSE",
    "type": "elementaire",
    "city": "LA DESTROUSSE",
    "address": "Place de la Mairie",
    "postalCode": "13112",
    "latitude": 43.377203,
    "longitude": 5.605231,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CELINE JOPEK",
    "referentName": "MEYRINNE-LAFORET JOSIANE",
    "secteurERSEH": "AURIOL",
    "cpcName": "",
    "email": "ce.0130438F@ac-aix-marseille.fr",
    "phone": "442048084",
    "referentPhone": "06 14 60 14 34",
    "referentEmail": "ce.erseh13-auriol@ac-aix-marseille.fr"
  },
  {
    "id": "0130452w",
    "rne": "0130452W",
    "name": "OLIVIER GUIROU",
    "type": "elementaire",
    "city": "LA FARE-LES-OLIVIERS",
    "address": "55 chemin DE LA POMME DE PIN",
    "postalCode": "13580",
    "latitude": 43.550085,
    "longitude": 5.22147,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME INGRID WAGLER",
    "referentName": "BROC DAMIEN",
    "secteurERSEH": "LA_FARE_LES_OLIVIERS",
    "cpcName": "",
    "email": "ce.0130452W@ac-aix-marseille.fr",
    "phone": "490585808",
    "referentPhone": "06 71 70 98 89",
    "referentEmail": "ce.ersh13-lafare@ac-aix-marseille.fr"
  },
  {
    "id": "0130451v",
    "rne": "0130451V",
    "name": "PAUL DOUMER",
    "type": "elementaire",
    "city": "LA FARE-LES-OLIVIERS",
    "address": "Avenue Foch",
    "postalCode": "13580",
    "latitude": 43.550697,
    "longitude": 5.19133,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VALERIE GRESSIER",
    "referentName": "BROC DAMIEN",
    "secteurERSEH": "LA_FARE_LES_OLIVIERS",
    "cpcName": "",
    "email": "ce.0130451V@ac-aix-marseille.fr",
    "phone": "490426035",
    "referentPhone": "06 71 70 98 89",
    "referentEmail": "ce.ersh13-lafare@ac-aix-marseille.fr"
  },
  {
    "id": "0131234w",
    "rne": "0131234W",
    "name": "BEAUSOLEIL",
    "type": "elementaire",
    "city": "LA PENNE-SUR-HUVEAUNE",
    "address": "Allée de la Pinède",
    "postalCode": "13821",
    "latitude": 43.27707,
    "longitude": 5.517449,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CELINE PAMPANELLI",
    "referentName": "CART LAMY MARIE",
    "secteurERSEH": "AUBAGNE_1",
    "cpcName": "",
    "email": "ce.0131234W@ac-aix-marseille.fr",
    "phone": "491361370",
    "referentPhone": "06 21 54 90 90",
    "referentEmail": "ce.erseh13-aubagne@ac-aix-marseille.fr"
  },
  {
    "id": "0132585p",
    "rne": "0132585P",
    "name": "JACQUES PREVERT",
    "type": "elementaire",
    "city": "LA PENNE-SUR-HUVEAUNE",
    "address": "",
    "postalCode": "13821",
    "latitude": 43.280393,
    "longitude": 5.509115,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. THOMAS MICHEL",
    "referentName": "CART LAMY MARIE",
    "secteurERSEH": "AUBAGNE_1",
    "cpcName": "",
    "email": "ce.0132585P@ac-aix-marseille.fr",
    "phone": "491361766",
    "referentPhone": "06 21 54 90 90",
    "referentEmail": "ce.erseh13-aubagne@ac-aix-marseille.fr"
  },
  {
    "id": "0131029y",
    "rne": "0131029Y",
    "name": "PIERRE BROSSOLETTE",
    "type": "elementaire",
    "city": "LA PENNE-SUR-HUVEAUNE",
    "address": "Boulevard de la Gare",
    "postalCode": "13821",
    "latitude": 43.282659,
    "longitude": 5.515687,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SABRINA LEVENEUR",
    "referentName": "CART LAMY MARIE",
    "secteurERSEH": "AUBAGNE_1",
    "cpcName": "",
    "email": "ce.0131029Y@ac-aix-marseille.fr",
    "phone": "491361317",
    "referentPhone": "06 21 54 90 90",
    "referentEmail": "ce.erseh13-aubagne@ac-aix-marseille.fr"
  },
  {
    "id": "0131083g",
    "rne": "0131083G",
    "name": "JULES FERRY",
    "type": "elementaire",
    "city": "LA ROQUE-D'ANTHERON",
    "address": "Esplanade du Pijoret",
    "postalCode": "13640",
    "latitude": 43.714821,
    "longitude": 5.308875,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME FLORENCE HOLUIGUE",
    "referentName": "BIANCO MARIE-CHRISTINE",
    "secteurERSEH": "PUY_SAINTE_REPARADE",
    "cpcName": "",
    "email": "ce.0131083G@ac-aix-marseille.fr",
    "phone": "442504022",
    "referentPhone": "06 14 60 71 43",
    "referentEmail": "ce.erseh13-puystereparade@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131082f",
    "rne": "0131082F",
    "name": "VICTOR HUGO",
    "type": "elementaire",
    "city": "LA ROQUE-D'ANTHERON",
    "address": "Cours Foch",
    "postalCode": "13640",
    "latitude": 43.717485,
    "longitude": 5.309703,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CAROLINE RUFFINI",
    "referentName": "BIANCO MARIE-CHRISTINE",
    "secteurERSEH": "PUY_SAINTE_REPARADE",
    "cpcName": "",
    "email": "ce.0131082F@ac-aix-marseille.fr",
    "phone": "442504049",
    "referentPhone": "06 14 60 71 43",
    "referentEmail": "ce.erseh13-puystereparade@ac-aix-marseille.fr"
  },
  {
    "id": "0130494s",
    "rne": "0130494S",
    "name": "LAMANON",
    "type": "elementaire",
    "city": "LAMANON",
    "address": "Avenue de la Gare",
    "postalCode": "13113",
    "latitude": 43.700855,
    "longitude": 5.088051,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ADA TANGUY",
    "referentName": "LANKAMER MURIEL",
    "secteurERSEH": "SALON_3",
    "cpcName": "",
    "email": "ce.0130494S@ac-aix-marseille.fr",
    "phone": "490595130",
    "referentPhone": "06 14 60 29 97",
    "referentEmail": "ce.erseh13-salon3@ac-aix-marseille.fr"
  },
  {
    "id": "0130496u",
    "rne": "0130496U",
    "name": "JACQUES PREVERT",
    "type": "elementaire",
    "city": "LAMBESC",
    "address": "2 impasse Jacques Prévert",
    "postalCode": "13410",
    "latitude": 43.652297,
    "longitude": 5.26613,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MARIE LAURENCE MARCHETTO",
    "referentName": "BROC DAMIEN",
    "secteurERSEH": "LA_FARE_LES_OLIVIERS",
    "cpcName": "",
    "email": "ce.0130496U@ac-aix-marseille.fr",
    "phone": "442579178",
    "referentPhone": "06 71 70 98 89",
    "referentEmail": "ce.ersh13-lafare@ac-aix-marseille.fr"
  },
  {
    "id": "0132026g",
    "rne": "0132026G",
    "name": "JEANNE D'ARC",
    "type": "elementaire",
    "city": "LAMBESC",
    "address": "10 avenue Frédéric Mistral",
    "postalCode": "13410",
    "latitude": 43.652272,
    "longitude": 5.256312,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSLA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Marie-Françoise VIGNAL",
    "referentName": "DE BRUYNE ISABELLE",
    "secteurERSEH": "ASH_OUEST_PRIVE_1",
    "cpcName": "",
    "email": "ce.0132026G@ac-aix-marseille.fr",
    "phone": "442571686",
    "referentPhone": "06 28 58 88 79",
    "referentEmail": "ce.erseh13-ashouest-prive1@ac-aix-marseille.fr"
  },
  {
    "id": "0133041k",
    "rne": "0133041K",
    "name": "VINCENT VAN GOGH",
    "type": "elementaire",
    "city": "LAMBESC",
    "address": "Boulevard Jules Ferry",
    "postalCode": "13410",
    "latitude": 43.650106,
    "longitude": 5.265208,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SANDRA GUITON",
    "referentName": "BROC DAMIEN",
    "secteurERSEH": "LA_FARE_LES_OLIVIERS",
    "cpcName": "",
    "email": "ce.0133041K@ac-aix-marseille.fr",
    "phone": "442927834",
    "referentPhone": "06 71 70 98 89",
    "referentEmail": "ce.ersh13-lafare@ac-aix-marseille.fr"
  },
  {
    "id": "0130501z",
    "rne": "0130501Z",
    "name": "BAISSES",
    "type": "elementaire",
    "city": "LANCON-PROVENCE",
    "address": "Hameau les Baisses",
    "postalCode": "13680",
    "latitude": 43.541877,
    "longitude": 5.15105,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SONIA DUBOIS",
    "referentName": "PLANTIER MYRIAM",
    "secteurERSEH": "SALON_1",
    "cpcName": "",
    "email": "ce.0130501Z@ac-aix-marseille.fr",
    "phone": "490424118",
    "referentPhone": "06 14 60 18 89",
    "referentEmail": "ce.erseh13-salon1@ac-aix-marseille.fr"
  },
  {
    "id": "0130499x",
    "rne": "0130499X",
    "name": "MARIE MAURON",
    "type": "elementaire",
    "city": "LANCON-PROVENCE",
    "address": "Quartier Sainte Anne",
    "postalCode": "13680",
    "latitude": 43.589181,
    "longitude": 5.122828,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSLA",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME STEPHANIE SOTTILE",
    "referentName": "PLANTIER MYRIAM",
    "secteurERSEH": "SALON_1",
    "cpcName": "",
    "email": "ce.0130499X@ac-aix-marseille.fr",
    "phone": "490428522",
    "referentPhone": "06 14 60 18 89",
    "referentEmail": "ce.erseh13-salon1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSLA",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132444l",
    "rne": "0132444L",
    "name": "MOULIN DE LAURE",
    "type": "elementaire",
    "city": "LANCON-PROVENCE",
    "address": "Moulin de Laure",
    "postalCode": "13680",
    "latitude": 43.589248,
    "longitude": 5.13505,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME AURELIE GAUTHIER",
    "referentName": "PLANTIER MYRIAM",
    "secteurERSEH": "SALON_1",
    "cpcName": "",
    "email": "ce.0132444L@ac-aix-marseille.fr",
    "phone": "490427120",
    "referentPhone": "06 14 60 18 89",
    "referentEmail": "ce.erseh13-salon1@ac-aix-marseille.fr"
  },
  {
    "id": "0133949x",
    "rne": "0133949X",
    "name": "PINEDES (LES)",
    "type": "elementaire",
    "city": "LANCON-PROVENCE",
    "address": "Quartier Les Pinedes",
    "postalCode": "13680",
    "latitude": 43.596701,
    "longitude": 5.133975,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VALERIE LADAME",
    "referentName": "PLANTIER MYRIAM",
    "secteurERSEH": "SALON_1",
    "cpcName": "",
    "email": "ce.0133949X@ac-aix-marseille.fr",
    "phone": "490455045",
    "referentPhone": "06 14 60 18 89",
    "referentEmail": "ce.erseh13-salon1@ac-aix-marseille.fr"
  },
  {
    "id": "0133024s",
    "rne": "0133024S",
    "name": "VAL DE SIBOURG",
    "type": "elementaire",
    "city": "LANCON-PROVENCE",
    "address": "Vallée de Sibourg",
    "postalCode": "13680",
    "latitude": 43.584121,
    "longitude": 5.212454,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME FABIENNE LHUILLERY",
    "referentName": "PLANTIER MYRIAM",
    "secteurERSEH": "SALON_1",
    "cpcName": "",
    "email": "ce.0133024S@ac-aix-marseille.fr",
    "phone": "490576435",
    "referentPhone": "06 14 60 18 89",
    "referentEmail": "ce.erseh13-salon1@ac-aix-marseille.fr"
  },
  {
    "id": "0131071u",
    "rne": "0131071U",
    "name": "LA QUIHO",
    "type": "elementaire",
    "city": "LE PUY-SAINTE-REPARADE",
    "address": "22 avenue Anciens Combattants",
    "postalCode": "13610",
    "latitude": 43.663946,
    "longitude": 5.43783,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. PIERRE MANUGUERRA",
    "referentName": "BIANCO MARIE-CHRISTINE",
    "secteurERSEH": "PUY_SAINTE_REPARADE",
    "cpcName": "",
    "email": "ce.0131071U@ac-aix-marseille.fr",
    "phone": "442500803",
    "referentPhone": "06 14 60 71 43",
    "referentEmail": "ce.erseh13-puystereparade@ac-aix-marseille.fr"
  },
  {
    "id": "0131073w",
    "rne": "0131073W",
    "name": "SAINT CANADET",
    "type": "elementaire",
    "city": "LE PUY-SAINTE-REPARADE",
    "address": "Hameau de Saint Canadet",
    "postalCode": "13610",
    "latitude": 43.630797,
    "longitude": 5.45771,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CECILE PAILLART",
    "referentName": "BIANCO MARIE-CHRISTINE",
    "secteurERSEH": "PUY_SAINTE_REPARADE",
    "cpcName": "",
    "email": "ce.0131073W@ac-aix-marseille.fr",
    "phone": "442618675",
    "referentPhone": "06 14 60 71 43",
    "referentEmail": "ce.erseh13-puystereparade@ac-aix-marseille.fr"
  },
  {
    "id": "0132262n",
    "rne": "0132262N",
    "name": "FRANCOIS BESSOU",
    "type": "elementaire",
    "city": "LE ROVE",
    "address": "Rue Jacques Duclos Qua beau Logi",
    "postalCode": "13740",
    "latitude": 43.370258,
    "longitude": 5.253999,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SYLVIANE MEDINA",
    "referentName": "RABIER Mathieu",
    "secteurERSEH": "VITROLLES_2",
    "cpcName": "",
    "email": "ce.0132262N@ac-aix-marseille.fr",
    "phone": "491469470",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131172d",
    "rne": "0131172D",
    "name": "JEAN VINCENT",
    "type": "elementaire",
    "city": "LE THOLONET",
    "address": "Route 1718 RD 64C",
    "postalCode": "13100",
    "latitude": 43.521487,
    "longitude": 5.51283,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME HABARA LEPLAT",
    "referentName": "GOESSAERT NATHALIE",
    "secteurERSEH": "AIX_SUD_2",
    "cpcName": "",
    "email": "ce.0131172D@ac-aix-marseille.fr",
    "phone": "442668715",
    "referentPhone": "06 14 60 69 55",
    "referentEmail": "ce.erseh13-aixsud2@ac-aix-marseille.fr"
  },
  {
    "id": "0133048t",
    "rne": "0133048T",
    "name": "BOUROUMETTES (LES)",
    "type": "elementaire",
    "city": "LES PENNES-MIRABEAU",
    "address": "Chemin de Pierrefeu",
    "postalCode": "13170",
    "latitude": 43.393402,
    "longitude": 5.334938,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MAGALI NEGRI",
    "referentName": "BEAUME CLAUDINE",
    "secteurERSEH": "CADENAUX",
    "cpcName": "",
    "email": "ce.0133048T@ac-aix-marseille.fr",
    "phone": "491512509",
    "referentPhone": "06 25 11 01 00",
    "referentEmail": "ce.erseh13-cadenaux@ac-aix-marseille.fr"
  },
  {
    "id": "0131036f",
    "rne": "0131036F",
    "name": "CADENEAUX (LES)",
    "type": "elementaire",
    "city": "LES PENNES-MIRABEAU",
    "address": "Rue Jean Aicard",
    "postalCode": "13170",
    "latitude": 43.395189,
    "longitude": 5.341905,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME AMELIE FRIZET",
    "referentName": "BEAUME CLAUDINE",
    "secteurERSEH": "CADENAUX",
    "cpcName": "",
    "email": "ce.0131036F@ac-aix-marseille.fr",
    "phone": "491510918",
    "referentPhone": "06 25 11 01 00",
    "referentEmail": "ce.erseh13-cadenaux@ac-aix-marseille.fr"
  },
  {
    "id": "0131031a",
    "rne": "0131031A",
    "name": "CASTEL HELENE",
    "type": "elementaire",
    "city": "LES PENNES-MIRABEAU",
    "address": "Place Depeyres",
    "postalCode": "13170",
    "latitude": 43.409309,
    "longitude": 5.311611,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. DIDIER PARIS",
    "referentName": "BEAUME CLAUDINE",
    "secteurERSEH": "CADENAUX",
    "cpcName": "",
    "email": "ce.0131031A@ac-aix-marseille.fr",
    "phone": "442028180",
    "referentPhone": "06 25 11 01 00",
    "referentEmail": "ce.erseh13-cadenaux@ac-aix-marseille.fr"
  },
  {
    "id": "0131034d",
    "rne": "0131034D",
    "name": "CLAUDIE HAIGNERE",
    "type": "elementaire",
    "city": "LES PENNES-MIRABEAU",
    "address": "1 chemin de Val Sec - La Gavotte",
    "postalCode": "13170",
    "latitude": 43.380378,
    "longitude": 5.345809,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CAROLINE PELLEGRIN",
    "referentName": "BEAUME CLAUDINE",
    "secteurERSEH": "CADENAUX",
    "cpcName": "",
    "email": "ce.0131034D@ac-aix-marseille.fr",
    "phone": "491510689",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ],
    "referentPhone": "06 25 11 01 00",
    "referentEmail": "ce.erseh13-cadenaux@ac-aix-marseille.fr"
  },
  {
    "id": "0132259k",
    "rne": "0132259K",
    "name": "ISABELLE BLAIN - LES AMANDIERS",
    "type": "elementaire",
    "city": "LES PENNES-MIRABEAU",
    "address": "Quartier la Gavotte",
    "postalCode": "13170",
    "latitude": 43.386153,
    "longitude": 5.335779,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME KATIA DE CAMARET",
    "referentName": "BEAUME CLAUDINE",
    "secteurERSEH": "CADENAUX",
    "cpcName": "",
    "email": "ce.0132259K@ac-aix-marseille.fr",
    "phone": "491519391",
    "referentPhone": "06 25 11 01 00",
    "referentEmail": "ce.erseh13-cadenaux@ac-aix-marseille.fr"
  },
  {
    "id": "0134040w",
    "rne": "0134040W",
    "name": "L'UNIVERSITE DES PETITS",
    "type": "elementaire",
    "city": "LES PENNES-MIRABEAU",
    "address": "1 route de Septèmes",
    "postalCode": "13170",
    "latitude": 43.41462,
    "longitude": 5.374701,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME BARRIÔRE BRIGITTE",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "contact@universitedespetits.com",
    "phone": "491651923",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131035e",
    "rne": "0131035E",
    "name": "RENARDIERE (LA)",
    "type": "elementaire",
    "city": "LES PENNES-MIRABEAU",
    "address": "Chemin des Pinchinades",
    "postalCode": "13170",
    "latitude": 43.417762,
    "longitude": 5.299253,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. THIERRY MICALLEF",
    "referentName": "BEAUME CLAUDINE",
    "secteurERSEH": "CADENAUX",
    "cpcName": "",
    "email": "ce.0131035E@ac-aix-marseille.fr",
    "phone": "442025730",
    "referentPhone": "06 25 11 01 00",
    "referentEmail": "ce.erseh13-cadenaux@ac-aix-marseille.fr"
  },
  {
    "id": "0132105t",
    "rne": "0132105T",
    "name": "SAINTE ELISABETH",
    "type": "elementaire",
    "city": "LES PENNES-MIRABEAU",
    "address": "1 chemin DES FRAISES   GAVOTTE",
    "postalCode": "13170",
    "latitude": 43.384932,
    "longitude": 5.346133,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Muriel MALLIA",
    "referentName": "LEGRAND VERONIQUE",
    "secteurERSEH": "PRIVE_3",
    "cpcName": "",
    "email": "ce.0132105T@ac-aix-marseille.fr",
    "phone": "491513089",
    "referentPhone": "06 28 58 88 80",
    "referentEmail": "ce.erseh13-prive3@ac-aix-marseille.fr"
  },
  {
    "id": "0134244t",
    "rne": "0134244T",
    "name": "TERANGA MONTESSORI",
    "type": "elementaire",
    "city": "LES PENNES-MIRABEAU",
    "address": "387 avenue PLAN DE CAMPAGNE",
    "postalCode": "13170",
    "latitude": 43.410842,
    "longitude": 5.325559,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME GARCIA LUDIVINE",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "terangamontessori@gmail.com",
    "phone": "nan",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132439f",
    "rne": "0132439F",
    "name": "VOILERIE (LA)",
    "type": "elementaire",
    "city": "LES PENNES-MIRABEAU",
    "address": "Allée l'Ensouleiado",
    "postalCode": "13170",
    "latitude": 43.418645,
    "longitude": 5.338586,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SABRINA MOHAMED",
    "referentName": "BEAUME CLAUDINE",
    "secteurERSEH": "CADENAUX",
    "cpcName": "",
    "email": "ce.0132439F@ac-aix-marseille.fr",
    "phone": "442028663",
    "referentPhone": "06 25 11 01 00",
    "referentEmail": "ce.erseh13-cadenaux@ac-aix-marseille.fr"
  },
  {
    "id": "0130503b",
    "rne": "0130503B",
    "name": "FREDERIC MISTRAL (BILINGUE  OC",
    "type": "elementaire",
    "city": "MAILLANE",
    "address": "Rue Notre Dame",
    "postalCode": "13910",
    "latitude": 43.832076,
    "longitude": 4.776903,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. ERIC MAURIN",
    "referentName": "PIRON FRANCOISE",
    "secteurERSEH": "SAINT_REMY_DE_PROVENCE",
    "cpcName": "",
    "email": "ce.0130503B@ac-aix-marseille.fr",
    "phone": "490957211",
    "referentPhone": "06 21 54 11 24",
    "referentEmail": "ce.erseh13-stremy@ac-aix-marseille.fr"
  },
  {
    "id": "0132089a",
    "rne": "0132089A",
    "name": "N-D GRACE -ST JOSEPH",
    "type": "elementaire",
    "city": "MAILLANE",
    "address": "24 avenue Auguste Daillan",
    "postalCode": "13910",
    "latitude": 43.831489,
    "longitude": 4.780485,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MARIE GAUGAIN",
    "referentName": "DE BRUYNE ISABELLE",
    "secteurERSEH": "ASH_OUEST_PRIVE_1",
    "cpcName": "",
    "email": "ogec.ndg@orange.fr",
    "phone": "490957420",
    "referentPhone": "06 28 58 88 79",
    "referentEmail": "ce.erseh13-ashouest-prive1@ac-aix-marseille.fr"
  },
  {
    "id": "0133631b",
    "rne": "0133631B",
    "name": "CAMILLE CLAUDEL",
    "type": "elementaire",
    "city": "MALLEMORT",
    "address": "Avenue d'Agliana",
    "postalCode": "13370",
    "latitude": 43.726095,
    "longitude": 5.179612,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CAROLE HERIN MASSE",
    "referentName": "LANKAMER MURIEL",
    "secteurERSEH": "SALON_3",
    "cpcName": "",
    "email": "ce.0133631B@ac-aix-marseille.fr",
    "phone": "490591627",
    "referentPhone": "06 14 60 29 97",
    "referentEmail": "ce.erseh13-salon3@ac-aix-marseille.fr"
  },
  {
    "id": "0130505d",
    "rne": "0130505D",
    "name": "FREDERIC MISTRAL",
    "type": "elementaire",
    "city": "MALLEMORT",
    "address": "Avenue du Stade",
    "postalCode": "13370",
    "latitude": 43.726178,
    "longitude": 5.17926,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. SERGE MARINETTI",
    "referentName": "LANKAMER MURIEL",
    "secteurERSEH": "SALON_3",
    "cpcName": "",
    "email": "ce.0130505D@ac-aix-marseille.fr",
    "phone": "490574383",
    "referentPhone": "06 14 60 29 97",
    "referentEmail": "ce.erseh13-salon3@ac-aix-marseille.fr"
  },
  {
    "id": "0132106u",
    "rne": "0132106U",
    "name": "SAINT MICHEL",
    "type": "elementaire",
    "city": "MALLEMORT",
    "address": "Rond-point Rond Point de Pont Ro",
    "postalCode": "13370",
    "latitude": 43.722795,
    "longitude": 5.178247,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Marie Françoise VIGNAL",
    "referentName": "DE BRUYNE ISABELLE",
    "secteurERSEH": "ASH_OUEST_PRIVE_1",
    "cpcName": "",
    "email": "ce.0132106U@ac-aix-marseille.fr",
    "phone": "966937082",
    "referentPhone": "06 28 58 88 79",
    "referentEmail": "ce.erseh13-ashouest-prive1@ac-aix-marseille.fr"
  },
  {
    "id": "0131219e",
    "rne": "0131219E",
    "name": "ALBERT CAMUS",
    "type": "elementaire",
    "city": "MARIGNANE",
    "address": "Avenue de Lacanau",
    "postalCode": "13700",
    "latitude": 43.411601,
    "longitude": 5.22253,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LAURE GADDINI",
    "referentName": "RABIER Mathieu",
    "secteurERSEH": "VITROLLES_2",
    "cpcName": "",
    "email": "ce.0131219E@ac-aix-marseille.fr",
    "phone": "442885066",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132712c",
    "rne": "0132712C",
    "name": "CARESTIER (LE)",
    "type": "elementaire",
    "city": "MARIGNANE",
    "address": "1 rue G.BIDAULT",
    "postalCode": "13700",
    "latitude": 43.404704,
    "longitude": 5.22135,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CAROLINE REY",
    "referentName": "POT-DOMENECH HELENE",
    "secteurERSEH": "MARIGNANE",
    "cpcName": "",
    "email": "ce.0132712C@ac-aix-marseille.fr",
    "phone": "442885533",
    "referentPhone": "06 21 54 11 62",
    "referentEmail": "ce.erseh13-marignane@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131631c",
    "rne": "0131631C",
    "name": "CHAVE BOUCHER",
    "type": "elementaire",
    "city": "MARIGNANE",
    "address": "13 rue Alderic Chave",
    "postalCode": "13700",
    "latitude": 43.417263,
    "longitude": 5.213352,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CARINE SOLOMONDOS",
    "referentName": "RABIER Mathieu",
    "secteurERSEH": "VITROLLES_2",
    "cpcName": "",
    "email": "ce.0131631C@ac-aix-marseille.fr",
    "phone": "442097075",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132482c",
    "rne": "0132482C",
    "name": "FONTINELLES (LES)",
    "type": "elementaire",
    "city": "MARIGNANE",
    "address": "Boulevard de la Signore",
    "postalCode": "13700",
    "latitude": 43.417866,
    "longitude": 5.202072,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME BEATRICE TORNAMBE",
    "referentName": "POT-DOMENECH HELENE",
    "secteurERSEH": "MARIGNANE",
    "cpcName": "",
    "email": "ce.0132482C@ac-aix-marseille.fr",
    "phone": "442882734",
    "referentPhone": "06 21 54 11 62",
    "referentEmail": "ce.erseh13-marignane@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130509h",
    "rne": "0130509H",
    "name": "GUYNEMER",
    "type": "elementaire",
    "city": "MARIGNANE",
    "address": "Rue Chevillard",
    "postalCode": "13700",
    "latitude": 43.420731,
    "longitude": 5.21554,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CAROLINE DIEZ",
    "referentName": "RABIER Mathieu",
    "secteurERSEH": "VITROLLES_2",
    "cpcName": "",
    "email": "ce.0130509H@ac-aix-marseille.fr",
    "phone": "442097322",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ],
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131220f",
    "rne": "0131220F",
    "name": "JEAN MOULIN",
    "type": "elementaire",
    "city": "MARIGNANE",
    "address": "Boulevard Maurice Nogues",
    "postalCode": "13700",
    "latitude": 43.416798,
    "longitude": 5.22043,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME STEPHANIE GAILLARD",
    "referentName": "RABIER Mathieu",
    "secteurERSEH": "VITROLLES_2",
    "cpcName": "",
    "email": "ce.0131220F@ac-aix-marseille.fr",
    "phone": "442097282",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0133428f",
    "rne": "0133428F",
    "name": "MARCEL PAGNOL",
    "type": "elementaire",
    "city": "MARIGNANE",
    "address": "Avenue Lacanau",
    "postalCode": "13700",
    "latitude": 43.404543,
    "longitude": 5.25008,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME NICOLE SORRENTINO",
    "referentName": "RABIER Mathieu",
    "secteurERSEH": "VITROLLES_2",
    "cpcName": "",
    "email": "ce.0133428F@ac-aix-marseille.fr",
    "phone": "442890489",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131855w",
    "rne": "0131855W",
    "name": "MARIE CURIE",
    "type": "elementaire",
    "city": "MARIGNANE",
    "address": "Rue Didier Daurat",
    "postalCode": "13700",
    "latitude": 43.418773,
    "longitude": 5.20828,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LYSIANE VITTARI",
    "referentName": "POT-DOMENECH HELENE",
    "secteurERSEH": "MARIGNANE",
    "cpcName": "",
    "email": "ce.0131855W@ac-aix-marseille.fr",
    "phone": "442772842",
    "referentPhone": "06 21 54 11 62",
    "referentEmail": "ce.erseh13-marignane@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0133326v",
    "rne": "0133326V",
    "name": "MARIE MADELEINE FOURCADE",
    "type": "elementaire",
    "city": "MARIGNANE",
    "address": "ZAC de l'Estéou",
    "postalCode": "13700",
    "latitude": 43.417581,
    "longitude": 5.202026,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LAURENCE MOMOT",
    "referentName": "POT-DOMENECH HELENE",
    "secteurERSEH": "MARIGNANE",
    "cpcName": "",
    "email": "ce.0133326V@ac-aix-marseille.fr",
    "phone": "442887393",
    "referentPhone": "06 21 54 11 62",
    "referentEmail": "ce.erseh13-marignane@ac-aix-marseille.fr"
  },
  {
    "id": "0132103r",
    "rne": "0132103R",
    "name": "SAINT LOUIS SAINTE MARIE",
    "type": "elementaire",
    "city": "MARIGNANE",
    "address": "Avenue Calderon",
    "postalCode": "13700",
    "latitude": 43.411462,
    "longitude": 5.237483,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. Franck VERMET",
    "referentName": "LEGRAND VERONIQUE",
    "secteurERSEH": "PRIVE_3",
    "cpcName": "",
    "email": "ce.0132103R@ac-aix-marseille.fr",
    "phone": "442888990",
    "referentPhone": "06 28 58 88 80",
    "referentEmail": "ce.erseh13-prive3@ac-aix-marseille.fr"
  },
  {
    "id": "0130514n",
    "rne": "0130514N",
    "name": "ABBE DE L'EPEE",
    "type": "elementaire",
    "city": "MARSEILLE  5E  ARRONDISSEMENT",
    "address": "18 square Sidi Brahim",
    "postalCode": "13005",
    "latitude": 43.297207,
    "longitude": 5.399342,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME STEPHANIE DEGEMONT PORTE",
    "referentName": "GIRARD STEPHANIE",
    "secteurERSEH": "PUGET_4",
    "cpcName": "",
    "email": "ce.0130514N@ac-aix-marseille.fr",
    "phone": "491347270",
    "referentPhone": "06 14 60 78 10",
    "referentEmail": "ce.erseh13-puget4@ac-aix-marseille.fr"
  },
  {
    "id": "0130672k",
    "rne": "0130672K",
    "name": "ABEILLES (DES)",
    "type": "elementaire",
    "city": "MARSEILLE  1ER ARRONDISSEMENT",
    "address": "14 rue Flegier",
    "postalCode": "13001",
    "latitude": 43.301739,
    "longitude": 5.385,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. PHILIPPE GUYOT",
    "referentName": "FOISSET CHRISTINE",
    "secteurERSEH": "LONGCHAMP",
    "cpcName": "",
    "email": "ce.0130672K@ac-aix-marseille.fr",
    "phone": "491059025",
    "referentPhone": "06 21 54 57 10",
    "referentEmail": "ce.erseh13-longchamp@ac-aix-marseille.fr"
  },
  {
    "id": "0130515p",
    "rne": "0130515P",
    "name": "ACCATES LA VALENTINE",
    "type": "elementaire",
    "city": "MARSEILLE 11E  ARRONDISSEMENT",
    "address": "Chemin Les Accates la Valentine",
    "postalCode": "13011",
    "latitude": 43.302913,
    "longitude": 5.49283,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MANNICK BUISSON",
    "referentName": "BLEUZE MARIE",
    "secteurERSEH": "RUISSATEL",
    "cpcName": "",
    "email": "ce.0130515P@ac-aix-marseille.fr",
    "phone": "491430290",
    "referentPhone": "06 14 60 45 95",
    "referentEmail": "ce.erseh13-ruissatel@ac-aix-marseille.fr"
  },
  {
    "id": "0130753y",
    "rne": "0130753Y",
    "name": "ACCOULES (DES)",
    "type": "elementaire",
    "city": "MARSEILLE  2E  ARRONDISSEMENT",
    "address": "27 montée des Accoules",
    "postalCode": "13002",
    "latitude": 43.297554,
    "longitude": 5.36695,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MANON SGOLUPPI",
    "referentName": "GALAS FLORENCE",
    "secteurERSEH": "DSDEN_1",
    "cpcName": "",
    "email": "ce.0130753Y@ac-aix-marseille.fr",
    "phone": "491906651",
    "referentPhone": "06 14 60 65 74",
    "referentEmail": "ce.erseh13-dsden1@ac-aix-marseille.fr"
  },
  {
    "id": "0134095f",
    "rne": "0134095F",
    "name": "AHMED LITIM",
    "type": "elementaire",
    "city": "MARSEILLE  3E  ARRONDISSEMENT",
    "address": "12 rue Bugeaud",
    "postalCode": "13003",
    "latitude": 43.307176,
    "longitude": 5.3853,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 10,
      "placesVacantes": 10,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. YANNICK JOUVIN",
    "referentName": "FOISSET CHRISTINE",
    "secteurERSEH": "LONGCHAMP",
    "cpcName": "",
    "email": "ce.0134095F@ac-aix-marseille.fr",
    "phone": "491505284",
    "referentPhone": "06 21 54 57 10",
    "referentEmail": "ce.erseh13-longchamp@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 10,
        "placesVacantes": 10,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132428u",
    "rne": "0132428U",
    "name": "AIR BEL",
    "type": "elementaire",
    "city": "MARSEILLE 11E  ARRONDISSEMENT",
    "address": "Allée des Platanes",
    "postalCode": "13011",
    "latitude": 43.290829,
    "longitude": 5.42944,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. ROMAIN DEGRANGES",
    "referentName": "VINCENT ERIC",
    "secteurERSEH": "CAILLOLS_2",
    "cpcName": "",
    "email": "ce.0132428U@ac-aix-marseille.fr",
    "phone": "491352006",
    "referentPhone": "06 21 54 00 32",
    "referentEmail": "ce.erseh13-caillols2@ac-aix-marseille.fr"
  },
  {
    "id": "0130683x",
    "rne": "0130683X",
    "name": "ALBERT CHABANON",
    "type": "elementaire",
    "city": "MARSEILLE  6E  ARRONDISSEMENT",
    "address": "23 rue Albert Chabanon",
    "postalCode": "13006",
    "latitude": 43.29063,
    "longitude": 5.382776,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TED",
      "assignedStudents": 0,
      "capacity": 10,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME DELPHINE LEBRUN",
    "referentName": "GIRARD STEPHANIE",
    "secteurERSEH": "PUGET_4",
    "cpcName": "",
    "email": "ce.0130683X@ac-aix-marseille.fr",
    "phone": "491476794",
    "referentPhone": "06 14 60 78 10",
    "referentEmail": "ce.erseh13-puget4@ac-aix-marseille.fr"
  },
  {
    "id": "0130769r",
    "rne": "0130769R",
    "name": "ALLEE DES PINS LE CABOT",
    "type": "elementaire",
    "city": "MARSEILLE  9E  ARRONDISSEMENT",
    "address": "51 allée des Pins",
    "postalCode": "13009",
    "latitude": 43.253277,
    "longitude": 5.415437,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME KATIA ASCIONE",
    "referentName": "ICART CECILE",
    "secteurERSEH": "GYPTIS_1",
    "cpcName": "",
    "email": "ce.0130769R@ac-aix-marseille.fr",
    "phone": "491413454",
    "referentPhone": "06 25 11 81 66",
    "referentEmail": "ce.erseh13-gyptis1@ac-aix-marseille.fr"
  },
  {
    "id": "0130665c",
    "rne": "0130665C",
    "name": "AMEDEE AUTRAN",
    "type": "elementaire",
    "city": "MARSEILLE  7E  ARRONDISSEMENT",
    "address": "12 boulevard Amédée Autran",
    "postalCode": "13007",
    "latitude": 43.282227,
    "longitude": 5.366153,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME JEANNE VAYSSETTES",
    "referentName": "THIVANT ISABELLE",
    "secteurERSEH": "PUGET_2",
    "cpcName": "",
    "email": "ce.0130665C@ac-aix-marseille.fr",
    "phone": "491520593",
    "referentPhone": "06 14 60 39 97",
    "referentEmail": "ce.erseh13-puget2@ac-aix-marseille.fr"
  },
  {
    "id": "0134225x",
    "rne": "0134225X",
    "name": "ANDRE ALLAR",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "Rue André Allar",
    "postalCode": "13015",
    "latitude": 43.324266,
    "longitude": 5.36425,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. MARC BROUSSIER",
    "referentName": "BRUN SANDRINE",
    "secteurERSEH": "ROSA_PARKS_1",
    "cpcName": "",
    "email": "ce.0134225X@ac-aix-marseille.fr",
    "phone": "413948001",
    "referentPhone": "06 10 90 10 36",
    "referentEmail": "ce.erseh13-rosapark1@ac-aix-marseille.fr"
  },
  {
    "id": "0134320a",
    "rne": "0134320A",
    "name": "ANTOINE DE RUFFI",
    "type": "elementaire",
    "city": "MARSEILLE  2E  ARRONDISSEMENT",
    "address": "2 rue Urbain V",
    "postalCode": "13002",
    "latitude": 43.315827,
    "longitude": 5.369086,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. REDA GALOU",
    "referentName": "GALAS FLORENCE",
    "secteurERSEH": "DSDEN_1",
    "cpcName": "",
    "email": "ce.0134320A@ac-aix-marseille.fr",
    "phone": "413948011",
    "referentPhone": "06 14 60 65 74",
    "referentEmail": "ce.erseh13-dsden1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0133633d",
    "rne": "0133633D",
    "name": "ARENC BACHAS EXTERIEUR",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "61 lieu-dit Traverse du Bachas",
    "postalCode": "13015",
    "latitude": 43.320376,
    "longitude": 5.370532,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MARIE-PIERRE FRIGARA",
    "referentName": "BRUN SANDRINE",
    "secteurERSEH": "ROSA_PARKS_1",
    "cpcName": "",
    "email": "ce.0133633D@ac-aix-marseille.fr",
    "phone": "491627577",
    "referentPhone": "06 10 90 10 36",
    "referentEmail": "ce.erseh13-rosapark1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131238a",
    "rne": "0131238A",
    "name": "AYGALADES OASIS",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "Boulevard de la Padouane",
    "postalCode": "13015",
    "latitude": 43.3545,
    "longitude": 5.368613,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ISABELLE GARGANI",
    "referentName": "MEURANT OLIVIER",
    "secteurERSEH": "VALLON_DES_PINS",
    "cpcName": "",
    "email": "ce.0131238A@ac-aix-marseille.fr",
    "phone": "491601731",
    "referentPhone": "06 21 54 79 68",
    "referentEmail": "ce.erseh13-vallondespins@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130521w",
    "rne": "0130521W",
    "name": "BARASSE (LA)",
    "type": "elementaire",
    "city": "MARSEILLE 11E  ARRONDISSEMENT",
    "address": "25 boulevard Lucien Margaillan",
    "postalCode": "13011",
    "latitude": 43.283669,
    "longitude": 5.482002,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ISABELLE FERRARI",
    "referentName": "BEDJIDIAN LYDIA",
    "secteurERSEH": "FORBIN",
    "cpcName": "",
    "email": "ce.0130521W@ac-aix-marseille.fr",
    "phone": "491360371",
    "referentPhone": "06 14 60 43 08",
    "referentEmail": "ce.erseh13-forbin@ac-aix-marseille.fr"
  },
  {
    "id": "0132061v",
    "rne": "0132061V",
    "name": "BASTIDE (COURS)",
    "type": "elementaire",
    "city": "MARSEILLE  6E  ARRONDISSEMENT",
    "address": "50 rue Lodi",
    "postalCode": "13006",
    "latitude": 43.289704,
    "longitude": 5.386914,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME STEPHANIE BEVILACQUA",
    "referentName": "GIRARD STEPHANIE",
    "secteurERSEH": "PUGET_4",
    "cpcName": "",
    "email": "secretariat@coursbastide.fr",
    "phone": "491486796",
    "referentPhone": "06 14 60 78 10",
    "referentEmail": "ce.erseh13-puget4@ac-aix-marseille.fr"
  },
  {
    "id": "0130522x",
    "rne": "0130522X",
    "name": "BASTIDES (LES)",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "292 route Nationale Saint-Antoin",
    "postalCode": "13015",
    "latitude": 43.375737,
    "longitude": 5.356405,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHARLOTTE AMAT",
    "referentName": "MEURANT OLIVIER",
    "secteurERSEH": "VALLON_DES_PINS",
    "cpcName": "",
    "email": "ce.0130522X@ac-aix-marseille.fr",
    "phone": "491511596",
    "referentPhone": "06 21 54 79 68",
    "referentEmail": "ce.erseh13-vallondespins@ac-aix-marseille.fr"
  },
  {
    "id": "0132601g",
    "rne": "0132601G",
    "name": "BATARELLE (LA)",
    "type": "elementaire",
    "city": "MARSEILLE 14E  ARRONDISSEMENT",
    "address": "38 rue de Lissandre",
    "postalCode": "13014",
    "latitude": 43.35664,
    "longitude": 5.410268,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. ANTOINE ROULLET",
    "referentName": "TURCAT CLEMENCE",
    "secteurERSEH": "MALRAUX_4",
    "cpcName": "",
    "email": "ce.0132601G@ac-aix-marseille.fr",
    "phone": "491984380",
    "referentPhone": "06 21 54 55 44",
    "referentEmail": "ce.erseh13-malraux4@ac-aix-marseille.fr"
  },
  {
    "id": "0130523y",
    "rne": "0130523Y",
    "name": "BAUME (LA)",
    "type": "elementaire",
    "city": "MARSEILLE  9E  ARRONDISSEMENT",
    "address": "1 traverse COLGATE",
    "postalCode": "13009",
    "latitude": 43.234412,
    "longitude": 5.410759,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CLAIRE BERAUD",
    "referentName": "SAGET DOMINIQUE",
    "secteurERSEH": "ROY_D_ESPAGNE_2",
    "cpcName": "",
    "email": "ce.0130523Y@ac-aix-marseille.fr",
    "phone": "491400982",
    "referentPhone": "06 21 54 61 16",
    "referentEmail": "ce.erseh13-roydespagne2@ac-aix-marseille.fr"
  },
  {
    "id": "0130524z",
    "rne": "0130524Z",
    "name": "BEAUMONT BOMBARDIERE",
    "type": "elementaire",
    "city": "MARSEILLE 12E  ARRONDISSEMENT",
    "address": "213 rue Charles Kaddouz",
    "postalCode": "13012",
    "latitude": 43.318446,
    "longitude": 5.438283,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME STEPHANIE GAINLET",
    "referentName": "RAOUX GUILLAUME",
    "secteurERSEH": "FRAISSINET",
    "cpcName": "",
    "email": "ce.0130524Z@ac-aix-marseille.fr",
    "phone": "491931632",
    "referentPhone": "06 25 11 28 04",
    "referentEmail": "ce.erseh13-fraissinet@ac-aix-marseille.fr"
  },
  {
    "id": "0130527c",
    "rne": "0130527C",
    "name": "BERNARD CADENAT",
    "type": "elementaire",
    "city": "MARSEILLE  3E  ARRONDISSEMENT",
    "address": "3 place Bernard Cadenat",
    "postalCode": "13003",
    "latitude": 43.312048,
    "longitude": 5.388238,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. LAURENT PADOVANI",
    "referentName": "BAUME CECILE",
    "secteurERSEH": "MASSENET",
    "cpcName": "",
    "email": "ce.0130527C@ac-aix-marseille.fr",
    "phone": "491503738",
    "referentPhone": "06 21 54 13 51",
    "referentEmail": "ce.erseh13-massenet@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132185e",
    "rne": "0132185E",
    "name": "BOIS LEMAITRE",
    "type": "elementaire",
    "city": "MARSEILLE 12E  ARRONDISSEMENT",
    "address": "Avenue Jean Compadieu",
    "postalCode": "13012",
    "latitude": 43.321515,
    "longitude": 5.433867,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME NATHALIE DRACOS",
    "referentName": "RAOUX GUILLAUME",
    "secteurERSEH": "FRAISSINET",
    "cpcName": "",
    "email": "ce.0132185E@ac-aix-marseille.fr",
    "phone": "491930626",
    "referentPhone": "06 25 11 28 04",
    "referentEmail": "ce.erseh13-fraissinet@ac-aix-marseille.fr"
  },
  {
    "id": "0130687b",
    "rne": "0130687B",
    "name": "BOIS LUZY",
    "type": "elementaire",
    "city": "MARSEILLE 12E  ARRONDISSEMENT",
    "address": "Allée des Primevères",
    "postalCode": "13012",
    "latitude": 43.312698,
    "longitude": 5.426281,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. LIONEL CHEMOUNY",
    "referentName": "RAOUX GUILLAUME",
    "secteurERSEH": "FRAISSINET",
    "cpcName": "",
    "email": "ce.0130687B@ac-aix-marseille.fr",
    "phone": "491932127",
    "referentPhone": "06 25 11 28 04",
    "referentEmail": "ce.erseh13-fraissinet@ac-aix-marseille.fr"
  },
  {
    "id": "0130531g",
    "rne": "0130531G",
    "name": "BOISSON",
    "type": "elementaire",
    "city": "MARSEILLE  4E  ARRONDISSEMENT",
    "address": "127 boulevard Boisson",
    "postalCode": "13004",
    "latitude": 43.298212,
    "longitude": 5.404087,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ALEXANDRA HORODECKI",
    "referentName": "PARDO ALAIN",
    "secteurERSEH": "LONGCHAMP_2",
    "cpcName": "",
    "email": "ce.0130531G@ac-aix-marseille.fr",
    "phone": "491347391",
    "referentPhone": "06 25 11 56 03",
    "referentEmail": "ce.erseh13-longchamp2@ac-aix-marseille.fr"
  },
  {
    "id": "0130688c",
    "rne": "0130688C",
    "name": "BOMPARD",
    "type": "elementaire",
    "city": "MARSEILLE  7E  ARRONDISSEMENT",
    "address": "131 boulevard Bompard",
    "postalCode": "13007",
    "latitude": 43.279665,
    "longitude": 5.360789,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ANNE VENDASSI",
    "referentName": "THIVANT ISABELLE",
    "secteurERSEH": "PUGET_2",
    "cpcName": "",
    "email": "ce.0130688C@ac-aix-marseille.fr",
    "phone": "491526389",
    "referentPhone": "06 14 60 39 97",
    "referentEmail": "ce.erseh13-puget2@ac-aix-marseille.fr"
  },
  {
    "id": "0130532h",
    "rne": "0130532H",
    "name": "BONNEVEINE 1",
    "type": "elementaire",
    "city": "MARSEILLE 08E  ARRONDISSEMENT",
    "address": "52 boulevard du Sablier",
    "postalCode": "13008",
    "latitude": 43.251585,
    "longitude": 5.381163,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. ALAIN DEL VECCHIO",
    "referentName": "ADNOT LAURENCE",
    "secteurERSEH": "ROY_D_ESPAGNE_1",
    "cpcName": "",
    "email": "ce.0130532H@ac-aix-marseille.fr",
    "phone": "491734741",
    "referentPhone": "06 25 11 23 05",
    "referentEmail": "ce.erseh13-roydespagne1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0133124a",
    "rne": "0133124A",
    "name": "BONNEVEINE 2",
    "type": "elementaire",
    "city": "MARSEILLE 08E  ARRONDISSEMENT",
    "address": "52 boulevard du Sablier",
    "postalCode": "13008",
    "latitude": 43.251189,
    "longitude": 5.381028,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MARIE SWANNE FERRAT",
    "referentName": "ADNOT LAURENCE",
    "secteurERSEH": "ROY_D_ESPAGNE_1",
    "cpcName": "",
    "email": "ce.0133124A@ac-aix-marseille.fr",
    "phone": "491733145",
    "referentPhone": "06 25 11 23 05",
    "referentEmail": "ce.erseh13-roydespagne1@ac-aix-marseille.fr"
  },
  {
    "id": "0132758c",
    "rne": "0132758C",
    "name": "BONNEVEINE ZENATTI",
    "type": "elementaire",
    "city": "MARSEILLE 08E  ARRONDISSEMENT",
    "address": "109 avenue ANDRE ZENATTI",
    "postalCode": "13008",
    "latitude": 43.246416,
    "longitude": 5.390829,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MURIEL BORDA TERSO",
    "referentName": "THIVANT ISABELLE",
    "secteurERSEH": "PUGET_2",
    "cpcName": "",
    "email": "ce.0132758C@ac-aix-marseille.fr",
    "phone": "491721724",
    "referentPhone": "06 14 60 39 97",
    "referentEmail": "ce.erseh13-puget2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130533j",
    "rne": "0130533J",
    "name": "BORELS (LES)",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "3 boulevard Bellevue",
    "postalCode": "13015",
    "latitude": 43.362965,
    "longitude": 5.366763,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ANNE CLAIRE BALDACCINI",
    "referentName": "SOLEIL VIRGINIE",
    "secteurERSEH": "ROSA_PARKS_2",
    "cpcName": "",
    "email": "ce.0130533J@ac-aix-marseille.fr",
    "phone": "491609608",
    "referentPhone": "06 10 90 30 81",
    "referentEmail": "ce.erseh13-rosapark2@ac-aix-marseille.fr"
  },
  {
    "id": "0130705w",
    "rne": "0130705W",
    "name": "BOTINELLY",
    "type": "elementaire",
    "city": "MARSEILLE  4E  ARRONDISSEMENT",
    "address": "23 bis boulevard Louis Botinelly",
    "postalCode": "13004",
    "latitude": 43.301677,
    "longitude": 5.404785,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME PAULINE ROUFFIA",
    "referentName": "PARDO ALAIN",
    "secteurERSEH": "LONGCHAMP_2",
    "cpcName": "",
    "email": "ce.0130705W@ac-aix-marseille.fr",
    "phone": "491494916",
    "referentPhone": "06 25 11 56 03",
    "referentEmail": "ce.erseh13-longchamp2@ac-aix-marseille.fr"
  },
  {
    "id": "0131208t",
    "rne": "0131208T",
    "name": "BOUGE",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "41 avenue de St Jérôme",
    "postalCode": "13013",
    "latitude": 43.326382,
    "longitude": 5.412312,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SYLVIE FORGE",
    "referentName": "CRESCIONE LAURENCE",
    "secteurERSEH": "CHARTREUX_2",
    "cpcName": "",
    "email": "ce.0131208T@ac-aix-marseille.fr",
    "phone": "413948688",
    "referentPhone": "06 25 11 22 25",
    "referentEmail": "ce.erseh13-chartreux2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130691f",
    "rne": "0130691F",
    "name": "BRETEUIL",
    "type": "elementaire",
    "city": "MARSEILLE  6E  ARRONDISSEMENT",
    "address": "113 rue Breteuil",
    "postalCode": "13006",
    "latitude": 43.287301,
    "longitude": 5.377298,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME JULIE GRIEU",
    "referentName": "FINO HELENE",
    "secteurERSEH": "PUGET_1",
    "cpcName": "",
    "email": "ce.0130691F@ac-aix-marseille.fr",
    "phone": "491371026",
    "referentPhone": "06 21 54 03 57",
    "referentEmail": "ce.erseh13-puget1@ac-aix-marseille.fr"
  },
  {
    "id": "0132275c",
    "rne": "0132275C",
    "name": "BRICARDE",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "125 boulevard Barnier",
    "postalCode": "13015",
    "latitude": 43.370256,
    "longitude": 5.347602,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. ARNAUD LE CORRE",
    "referentName": "CARLIER CECILE",
    "secteurERSEH": "BARNIER",
    "cpcName": "",
    "email": "ce.0132275C@ac-aix-marseille.fr",
    "phone": "491512929",
    "referentPhone": "06 14 60 77 59",
    "referentEmail": "ce.erseh13-barnier@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130534k",
    "rne": "0130534K",
    "name": "BUSSERINE (LA)",
    "type": "elementaire",
    "city": "MARSEILLE 14E  ARRONDISSEMENT",
    "address": "Boulevard CHARLES MATTEI",
    "postalCode": "13014",
    "latitude": 43.331396,
    "longitude": 5.39499,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. OLLIVIER DRACIUS",
    "referentName": "GUIZIOU STEPHANIE",
    "secteurERSEH": "WALLON",
    "cpcName": "",
    "email": "ce.0130534K@ac-aix-marseille.fr",
    "phone": "491983296",
    "referentPhone": "06 25 11 50 07",
    "referentEmail": "ce.erseh13-wallon@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130693h",
    "rne": "0130693H",
    "name": "CABOT",
    "type": "elementaire",
    "city": "MARSEILLE  9E  ARRONDISSEMENT",
    "address": "Place Nazury",
    "postalCode": "13009",
    "latitude": 43.257888,
    "longitude": 5.418994,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SYLVIE GERVAIS DELPECH",
    "referentName": "ICART CECILE",
    "secteurERSEH": "GYPTIS_1",
    "cpcName": "",
    "email": "ce.0130693H@ac-aix-marseille.fr",
    "phone": "491820454",
    "referentPhone": "06 25 11 81 66",
    "referentEmail": "ce.erseh13-gyptis1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130536m",
    "rne": "0130536M",
    "name": "CABUCELLE (LA)",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "52 boulevard Viala",
    "postalCode": "13015",
    "latitude": 43.335185,
    "longitude": 5.360163,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ISABELLE TRETOLA",
    "referentName": "BRUN SANDRINE",
    "secteurERSEH": "ROSA_PARKS_1",
    "cpcName": "",
    "email": "ce.0130536M@ac-aix-marseille.fr",
    "phone": "491586415",
    "referentPhone": "06 10 90 10 36",
    "referentEmail": "ce.erseh13-rosapark1@ac-aix-marseille.fr"
  },
  {
    "id": "0130537n",
    "rne": "0130537N",
    "name": "CAILLOLS",
    "type": "elementaire",
    "city": "MARSEILLE 12E  ARRONDISSEMENT",
    "address": "32 chemin des Campanules",
    "postalCode": "13012",
    "latitude": 43.300551,
    "longitude": 5.447701,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VALERIE FONLUPT",
    "referentName": "LA ROCCA MYRTILLE",
    "secteurERSEH": "CAILLOLS_1",
    "cpcName": "",
    "email": "ce.0130537N@ac-aix-marseille.fr",
    "phone": "491932345",
    "referentPhone": "06 14 60 06 79",
    "referentEmail": "ce.erseh13-caillols1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130538p",
    "rne": "0130538P",
    "name": "CALADE",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "6 traverse Maritime",
    "postalCode": "13015",
    "latitude": 43.338727,
    "longitude": 5.354277,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME JEANNE CORAZE",
    "referentName": "STELLA DOMINIQUE",
    "secteurERSEH": "RIMBAUD",
    "cpcName": "",
    "email": "ce.0130538P@ac-aix-marseille.fr",
    "phone": "491605117",
    "referentPhone": "06 21 54 20 36",
    "referentEmail": "ce.erseh13-rimbaud@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130545x",
    "rne": "0130545X",
    "name": "CALANQUES DE SORMIOU",
    "type": "elementaire",
    "city": "MARSEILLE  9E  ARRONDISSEMENT",
    "address": "139 chemin de Sormiou",
    "postalCode": "13009",
    "latitude": 43.229757,
    "longitude": 5.401899,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME JULIE BOUKAIA",
    "referentName": "SAGET DOMINIQUE",
    "secteurERSEH": "ROY_D_ESPAGNE_2",
    "cpcName": "",
    "email": "ce.0130545X@ac-aix-marseille.fr",
    "phone": "491726103",
    "referentPhone": "06 21 54 61 16",
    "referentEmail": "ce.erseh13-roydespagne2@ac-aix-marseille.fr"
  },
  {
    "id": "0130539r",
    "rne": "0130539R",
    "name": "CAMOINS (LES)",
    "type": "elementaire",
    "city": "MARSEILLE 11E  ARRONDISSEMENT",
    "address": "",
    "postalCode": "13011",
    "latitude": 43.300951,
    "longitude": 5.511921,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LAURE VENDOME",
    "referentName": "BLEUZE MARIE",
    "secteurERSEH": "RUISSATEL",
    "cpcName": "",
    "email": "ce.0130539R@ac-aix-marseille.fr",
    "phone": "491431029",
    "referentPhone": "06 14 60 45 95",
    "referentEmail": "ce.erseh13-ruissatel@ac-aix-marseille.fr"
  },
  {
    "id": "0130540s",
    "rne": "0130540S",
    "name": "CANDOLLE",
    "type": "elementaire",
    "city": "MARSEILLE  7E  ARRONDISSEMENT",
    "address": "9 rue Candolle",
    "postalCode": "13007",
    "latitude": 43.28786,
    "longitude": 5.365846,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME AMELIE SICHI",
    "referentName": "THIVANT ISABELLE",
    "secteurERSEH": "PUGET_2",
    "cpcName": "",
    "email": "ce.0130540S@ac-aix-marseille.fr",
    "phone": "491524479",
    "referentPhone": "06 14 60 39 97",
    "referentEmail": "ce.erseh13-puget2@ac-aix-marseille.fr"
  },
  {
    "id": "0130541t",
    "rne": "0130541T",
    "name": "CANET AMBROSINI",
    "type": "elementaire",
    "city": "MARSEILLE 14E  ARRONDISSEMENT",
    "address": "Boulevard de la Maison Blanche",
    "postalCode": "13014",
    "latitude": 43.329968,
    "longitude": 5.375507,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. GILLES FAVIER",
    "referentName": "BRUN SANDRINE",
    "secteurERSEH": "ROSA_PARKS_1",
    "cpcName": "",
    "email": "ce.0130541T@ac-aix-marseille.fr",
    "phone": "491673653",
    "referentPhone": "06 10 90 10 36",
    "referentEmail": "ce.erseh13-rosapark1@ac-aix-marseille.fr"
  },
  {
    "id": "0130698n",
    "rne": "0130698N",
    "name": "CANET BARBES",
    "type": "elementaire",
    "city": "MARSEILLE 14E  ARRONDISSEMENT",
    "address": "21 boulevard Barbès",
    "postalCode": "13014",
    "latitude": 43.324261,
    "longitude": 5.374375,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. SEBASTIEN PALPACUER",
    "referentName": "BRUN SANDRINE",
    "secteurERSEH": "ROSA_PARKS_1",
    "cpcName": "",
    "email": "ce.0130698N@ac-aix-marseille.fr",
    "phone": "491673167",
    "referentPhone": "06 10 90 10 36",
    "referentEmail": "ce.erseh13-rosapark1@ac-aix-marseille.fr"
  },
  {
    "id": "0132179y",
    "rne": "0132179Y",
    "name": "CANET JEAN JAURES",
    "type": "elementaire",
    "city": "MARSEILLE 14E  ARRONDISSEMENT",
    "address": "20 rue du Muret",
    "postalCode": "13014",
    "latitude": 43.3318,
    "longitude": 5.381287,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHRISTELLE CABANE",
    "referentName": "BAUME CECILE",
    "secteurERSEH": "MASSENET",
    "cpcName": "",
    "email": "ce.0132179Y@ac-aix-marseille.fr",
    "phone": "491980069",
    "referentPhone": "06 21 54 13 51",
    "referentEmail": "ce.erseh13-massenet@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130542u",
    "rne": "0130542U",
    "name": "CANET LAROUSSE",
    "type": "elementaire",
    "city": "MARSEILLE 14E  ARRONDISSEMENT",
    "address": "Boulevard Larousse",
    "postalCode": "13014",
    "latitude": 43.329351,
    "longitude": 5.381005,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CELINE BOUCHIC",
    "referentName": "BRUN SANDRINE",
    "secteurERSEH": "ROSA_PARKS_1",
    "cpcName": "",
    "email": "ce.0130542U@ac-aix-marseille.fr",
    "phone": "491672155",
    "referentPhone": "06 10 90 10 36",
    "referentEmail": "ce.erseh13-rosapark1@ac-aix-marseille.fr"
  },
  {
    "id": "0130543v",
    "rne": "0130543V",
    "name": "CAPELETTE",
    "type": "elementaire",
    "city": "MARSEILLE 10E  ARRONDISSEMENT",
    "address": "2 rue Laugier",
    "postalCode": "13010",
    "latitude": 43.281903,
    "longitude": 5.406805,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MICHELE CARLIOZ",
    "referentName": "PARDO ALAIN",
    "secteurERSEH": "LONGCHAMP_2",
    "cpcName": "",
    "email": "ce.0130543V@ac-aix-marseille.fr",
    "phone": "491798224",
    "referentPhone": "06 25 11 56 03",
    "referentEmail": "ce.erseh13-longchamp2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0133896p",
    "rne": "0133896P",
    "name": "CAPELETTE CAP EST",
    "type": "elementaire",
    "city": "MARSEILLE 10E  ARRONDISSEMENT",
    "address": "45 rue Charles Cerrato",
    "postalCode": "13010",
    "latitude": 43.281711,
    "longitude": 5.397823,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CELINE NACCI",
    "referentName": "PARDO ALAIN",
    "secteurERSEH": "LONGCHAMP_2",
    "cpcName": "",
    "email": "ce.0133896P@ac-aix-marseille.fr",
    "phone": "491167220",
    "referentPhone": "06 25 11 56 03",
    "referentEmail": "ce.erseh13-longchamp2@ac-aix-marseille.fr"
  },
  {
    "id": "0130700r",
    "rne": "0130700R",
    "name": "CAPELETTE MIREILLE LAUZE",
    "type": "elementaire",
    "city": "MARSEILLE 10E  ARRONDISSEMENT",
    "address": "131 boulevard Mireille Lauze",
    "postalCode": "13010",
    "latitude": 43.283692,
    "longitude": 5.412064,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME AXELLE BUSUTTIL",
    "referentName": "PARDO ALAIN",
    "secteurERSEH": "LONGCHAMP_2",
    "cpcName": "",
    "email": "ce.0130700R@ac-aix-marseille.fr",
    "phone": "491795337",
    "referentPhone": "06 25 11 56 03",
    "referentEmail": "ce.erseh13-longchamp2@ac-aix-marseille.fr"
  },
  {
    "id": "0131285b",
    "rne": "0131285B",
    "name": "CASTELLAS LES LIONS",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "Groupe Le Castellas",
    "postalCode": "13015",
    "latitude": 43.34983,
    "longitude": 5.376832,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 10,
      "placesVacantes": 10,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CECILE MOYNAULT",
    "referentName": "SOLEIL VIRGINIE",
    "secteurERSEH": "ROSA_PARKS_2",
    "cpcName": "",
    "email": "ce.0131285B@ac-aix-marseille.fr",
    "phone": "491606989",
    "referentPhone": "06 10 90 30 81",
    "referentEmail": "ce.erseh13-rosapark2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 10,
        "placesVacantes": 10,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131642p",
    "rne": "0131642P",
    "name": "CHANTEPERDRIX",
    "type": "elementaire",
    "city": "MARSEILLE 10E  ARRONDISSEMENT",
    "address": "36 traverse CHANTEPERDRIX",
    "postalCode": "13010",
    "latitude": 43.275779,
    "longitude": 5.431271,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME NATHALIE INDELICATO",
    "referentName": "PIQUOT DELPHINE",
    "secteurERSEH": "LOUISE_MICHEL",
    "cpcName": "",
    "email": "ce.0131642P@ac-aix-marseille.fr",
    "phone": "491447701",
    "referentPhone": "06 14 60 73 17",
    "referentEmail": "ce.erseh13-louisemichel@ac-aix-marseille.fr"
  },
  {
    "id": "0134273z",
    "rne": "0134273Z",
    "name": "CHANTERELLE",
    "type": "elementaire",
    "city": "MARSEILLE  1ER ARRONDISSEMENT",
    "address": "33 rue Commandant Mages",
    "postalCode": "13001",
    "latitude": 43.303803,
    "longitude": 5.390073,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. NICOLAS CAMOIN",
    "referentName": "FOISSET CHRISTINE",
    "secteurERSEH": "LONGCHAMP",
    "cpcName": "",
    "email": "ce.0134273Z@ac-aix-marseille.fr",
    "phone": "413948003",
    "referentPhone": "06 21 54 57 10",
    "referentEmail": "ce.erseh13-longchamp@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130702t",
    "rne": "0130702T",
    "name": "CHARTREUX",
    "type": "elementaire",
    "city": "MARSEILLE  4E  ARRONDISSEMENT",
    "address": "117 avenue des Chartreux",
    "postalCode": "13004",
    "latitude": 43.307231,
    "longitude": 5.399295,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. NICOLAS SPOSITO",
    "referentName": "BEN HADJ OTHMAN ADEL",
    "secteurERSEH": "CHARTREUX_1",
    "cpcName": "",
    "email": "ce.0130702T@ac-aix-marseille.fr",
    "phone": "491505765",
    "referentPhone": "06 25 11 53 02",
    "referentEmail": "ce.erseh13-chartreux1@ac-aix-marseille.fr"
  },
  {
    "id": "0131529s",
    "rne": "0131529S",
    "name": "CHARTREUX EUGENE. CAS 1",
    "type": "elementaire",
    "city": "MARSEILLE  4E  ARRONDISSEMENT",
    "address": "217 avenue des Chartreux",
    "postalCode": "13004",
    "latitude": 43.312022,
    "longitude": 5.400608,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CLARISSE WESTPHAL",
    "referentName": "BEN HADJ OTHMAN ADEL",
    "secteurERSEH": "CHARTREUX_1",
    "cpcName": "",
    "email": "ce.0131529S@ac-aix-marseille.fr",
    "phone": "491080706",
    "referentPhone": "06 25 11 53 02",
    "referentEmail": "ce.erseh13-chartreux1@ac-aix-marseille.fr"
  },
  {
    "id": "0131530t",
    "rne": "0131530T",
    "name": "CHARTREUX EUGENE. CAS 2 (APPL)",
    "type": "elementaire",
    "city": "MARSEILLE  4E  ARRONDISSEMENT",
    "address": "217 avenue des Chartreux",
    "postalCode": "13004",
    "latitude": 43.312022,
    "longitude": 5.400608,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 10,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. FREDERIC BASTARD",
    "referentName": "BEN HADJ OTHMAN ADEL",
    "secteurERSEH": "CHARTREUX_1",
    "cpcName": "",
    "email": "ce.0131530T@ac-aix-marseille.fr",
    "phone": "491507558",
    "referentPhone": "06 25 11 53 02",
    "referentEmail": "ce.erseh13-chartreux1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 10,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130549b",
    "rne": "0130549B",
    "name": "CHATEAU GOMBERT",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "38 boulevard Durbec",
    "postalCode": "13013",
    "latitude": 43.350287,
    "longitude": 5.43799,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME EMILIE GUIGUES",
    "referentName": "BREUX GOBIN LAURENCE",
    "secteurERSEH": "MALRAUX_1",
    "cpcName": "",
    "email": "ce.0130549B@ac-aix-marseille.fr",
    "phone": "491680074",
    "referentPhone": "06 25 11 49 38",
    "referentEmail": "ce.erseh13-malraux1@ac-aix-marseille.fr"
  },
  {
    "id": "0133821h",
    "rne": "0133821H",
    "name": "CHATEAU GOMBERT ATHENA",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "13 rue Robert de Roux",
    "postalCode": "13013",
    "latitude": 43.337663,
    "longitude": 5.444857,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. EMMANUEL BARLES",
    "referentName": "BREUX GOBIN LAURENCE",
    "secteurERSEH": "MALRAUX_1",
    "cpcName": "",
    "email": "ce.0133821H@ac-aix-marseille.fr",
    "phone": "491618160",
    "referentPhone": "06 25 11 49 38",
    "referentEmail": "ce.erseh13-malraux1@ac-aix-marseille.fr"
  },
  {
    "id": "0131243f",
    "rne": "0131243F",
    "name": "CHATEAU SAINT CYR",
    "type": "elementaire",
    "city": "MARSEILLE 10E  ARRONDISSEMENT",
    "address": "Chemin de la Valbarelle",
    "postalCode": "13010",
    "latitude": 43.281617,
    "longitude": 5.440896,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFM",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME PASCALE ICARD",
    "referentName": "BEDJIDIAN LYDIA",
    "secteurERSEH": "FORBIN",
    "cpcName": "",
    "email": "ce.0131243F@ac-aix-marseille.fr",
    "phone": "491445713",
    "referentPhone": "06 14 60 43 08",
    "referentEmail": "ce.erseh13-forbin@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFM",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131532v",
    "rne": "0131532V",
    "name": "CHATEAU SEC",
    "type": "elementaire",
    "city": "MARSEILLE  9E  ARRONDISSEMENT",
    "address": "51 chemin Joseph Aiguier",
    "postalCode": "13009",
    "latitude": 43.25447,
    "longitude": 5.408579,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHLOE NOLIN",
    "referentName": "ICART CECILE",
    "secteurERSEH": "GYPTIS_1",
    "cpcName": "",
    "email": "ce.0131532V@ac-aix-marseille.fr",
    "phone": "491755092",
    "referentPhone": "06 25 11 81 66",
    "referentEmail": "ce.erseh13-gyptis1@ac-aix-marseille.fr"
  },
  {
    "id": "0130548a",
    "rne": "0130548A",
    "name": "CHATEAUBRIAND",
    "type": "elementaire",
    "city": "MARSEILLE  7E  ARRONDISSEMENT",
    "address": "46 rue Châteaubriand",
    "postalCode": "13007",
    "latitude": 43.286024,
    "longitude": 5.35889,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHRISTINE AMATE",
    "referentName": "THIVANT ISABELLE",
    "secteurERSEH": "PUGET_2",
    "cpcName": "",
    "email": "ce.0130548A@ac-aix-marseille.fr",
    "phone": "491520807",
    "referentPhone": "06 14 60 39 97",
    "referentEmail": "ce.erseh13-puget2@ac-aix-marseille.fr"
  },
  {
    "id": "0130550c",
    "rne": "0130550C",
    "name": "CHAVE",
    "type": "elementaire",
    "city": "MARSEILLE  5E  ARRONDISSEMENT",
    "address": "191 boulevard Chave",
    "postalCode": "13005",
    "latitude": 43.296249,
    "longitude": 5.398363,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ANNE LAURE MAZZIA",
    "referentName": "GIRARD STEPHANIE",
    "secteurERSEH": "PUGET_4",
    "cpcName": "",
    "email": "ce.0130550C@ac-aix-marseille.fr",
    "phone": "491422060",
    "referentPhone": "06 14 60 78 10",
    "referentEmail": "ce.erseh13-puget4@ac-aix-marseille.fr"
  },
  {
    "id": "0133998a",
    "rne": "0133998A",
    "name": "CHEVALIER PAUL",
    "type": "elementaire",
    "city": "MARSEILLE  2E  ARRONDISSEMENT",
    "address": "74 rue Chevalier Paul",
    "postalCode": "13002",
    "latitude": 43.309282,
    "longitude": 5.369711,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME DOMINIQUE SAURY",
    "referentName": "GALAS FLORENCE",
    "secteurERSEH": "DSDEN_1",
    "cpcName": "",
    "email": "ce.0133998A@ac-aix-marseille.fr",
    "phone": "491934751",
    "referentPhone": "06 14 60 65 74",
    "referentEmail": "ce.erseh13-dsden1@ac-aix-marseille.fr"
  },
  {
    "id": "0131796g",
    "rne": "0131796G",
    "name": "CHEVREUL-BLANCARDE",
    "type": "elementaire",
    "city": "MARSEILLE  4E  ARRONDISSEMENT",
    "address": "5 rue Antoine Pons",
    "postalCode": "13004",
    "latitude": 43.297155,
    "longitude": 5.401944,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Christine GIACOMOTTO",
    "referentName": "PENNETIER MANON",
    "secteurERSEH": "PRIVE_1",
    "cpcName": "",
    "email": "ce.0131796G@ac-aix-marseille.fr",
    "phone": "491491073",
    "referentPhone": "06 28 58 88 63",
    "referentEmail": "ce.erseh13-prive1@ac-aix-marseille.fr"
  },
  {
    "id": "0132060u",
    "rne": "0132060U",
    "name": "CHEVREUL-CHAMPAVIER",
    "type": "elementaire",
    "city": "MARSEILLE  5E  ARRONDISSEMENT",
    "address": "22 rue Brochier",
    "postalCode": "13005",
    "latitude": 43.290663,
    "longitude": 5.390615,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Eric FERRARI",
    "referentName": "PENNETIER MANON",
    "secteurERSEH": "PRIVE_1",
    "cpcName": "",
    "email": "ce.0132060U@ac-aix-marseille.fr",
    "phone": "496121200",
    "referentPhone": "06 28 58 88 63",
    "referentEmail": "ce.erseh13-prive1@ac-aix-marseille.fr"
  },
  {
    "id": "0131535y",
    "rne": "0131535Y",
    "name": "CITE AZOULAY",
    "type": "elementaire",
    "city": "MARSEILLE 08E  ARRONDISSEMENT",
    "address": "21 rue Raphaël",
    "postalCode": "13008",
    "latitude": 43.268316,
    "longitude": 5.392337,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LAETITIA BARTHELEMY",
    "referentName": "FINO HELENE",
    "secteurERSEH": "PUGET_1",
    "cpcName": "",
    "email": "ce.0131535Y@ac-aix-marseille.fr",
    "phone": "491778641",
    "referentPhone": "06 21 54 03 57",
    "referentEmail": "ce.erseh13-puget1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0134530d",
    "rne": "0134530D",
    "name": "CITE INTERNATIONALE JACQUES CH",
    "type": "elementaire",
    "city": "MARSEILLE  2E  ARRONDISSEMENT",
    "address": "Rue Urbain V",
    "postalCode": "13002",
    "latitude": 43.315749,
    "longitude": 5.367493,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LAETITIA MARCHESSOU",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ce.0134530D@ac-aix-marseille.fr",
    "phone": "486830940",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130551d",
    "rne": "0130551D",
    "name": "CITE MICHELIS 1",
    "type": "elementaire",
    "city": "MARSEILLE 11E  ARRONDISSEMENT",
    "address": "33 avenue du Pontet",
    "postalCode": "13011",
    "latitude": 43.284335,
    "longitude": 5.44839,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CECILE REY",
    "referentName": "BEDJIDIAN LYDIA",
    "secteurERSEH": "FORBIN",
    "cpcName": "",
    "email": "ce.0130551D@ac-aix-marseille.fr",
    "phone": "491447329",
    "referentPhone": "06 14 60 43 08",
    "referentEmail": "ce.erseh13-forbin@ac-aix-marseille.fr"
  },
  {
    "id": "0130706x",
    "rne": "0130706X",
    "name": "CITE MICHELIS 2",
    "type": "elementaire",
    "city": "MARSEILLE 11E  ARRONDISSEMENT",
    "address": "33 avenue du Pontet",
    "postalCode": "13011",
    "latitude": 43.284255,
    "longitude": 5.448912,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VALERIE NICOLAI",
    "referentName": "BEDJIDIAN LYDIA",
    "secteurERSEH": "FORBIN",
    "cpcName": "",
    "email": "ce.0130706X@ac-aix-marseille.fr",
    "phone": "491447050",
    "referentPhone": "06 14 60 43 08",
    "referentEmail": "ce.erseh13-forbin@ac-aix-marseille.fr"
  },
  {
    "id": "0130553f",
    "rne": "0130553F",
    "name": "CLAIR SOLEIL",
    "type": "elementaire",
    "city": "MARSEILLE 14E  ARRONDISSEMENT",
    "address": "Boulevard Charles Moretti",
    "postalCode": "13014",
    "latitude": 43.323909,
    "longitude": 5.384888,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VIRGINIE SEVE",
    "referentName": "BAUME CECILE",
    "secteurERSEH": "MASSENET",
    "cpcName": "",
    "email": "ce.0130553F@ac-aix-marseille.fr",
    "phone": "491672709",
    "referentPhone": "06 21 54 13 51",
    "referentEmail": "ce.erseh13-massenet@ac-aix-marseille.fr"
  },
  {
    "id": "0130864u",
    "rne": "0130864U",
    "name": "CLAIR SOLEIL A",
    "type": "elementaire",
    "city": "MARSEILLE 14E  ARRONDISSEMENT",
    "address": "Boulevard Charles Moretti",
    "postalCode": "13014",
    "latitude": 43.323766,
    "longitude": 5.386099,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. PASCAL GRAVIER",
    "referentName": "BAUME CECILE",
    "secteurERSEH": "MASSENET",
    "cpcName": "",
    "email": "ce.0130864U@ac-aix-marseille.fr",
    "phone": "491673774",
    "referentPhone": "06 21 54 13 51",
    "referentEmail": "ce.erseh13-massenet@ac-aix-marseille.fr"
  },
  {
    "id": "0130554g",
    "rne": "0130554G",
    "name": "COIN JOLI",
    "type": "elementaire",
    "city": "MARSEILLE  9E  ARRONDISSEMENT",
    "address": "12 avenue Alfred Nicolas",
    "postalCode": "13009",
    "latitude": 43.264931,
    "longitude": 5.403043,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. OLIVIER HAENEL",
    "referentName": "ICART CECILE",
    "secteurERSEH": "GYPTIS_1",
    "cpcName": "",
    "email": "ce.0130554G@ac-aix-marseille.fr",
    "phone": "491755200",
    "referentPhone": "06 25 11 81 66",
    "referentEmail": "ce.erseh13-gyptis1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132336u",
    "rne": "0132336U",
    "name": "COLLEL (DU)",
    "type": "elementaire",
    "city": "MARSEILLE 10E  ARRONDISSEMENT",
    "address": "43 chemin DU VALLON DE TOULOUSE",
    "postalCode": "13010",
    "latitude": 43.266913,
    "longitude": 5.424793,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME NAKACHE ODILE",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ecolecollel@gmail.com",
    "phone": "491752864",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130555h",
    "rne": "0130555H",
    "name": "CONVALESCENTS",
    "type": "elementaire",
    "city": "MARSEILLE  1ER ARRONDISSEMENT",
    "address": "13 rue Convalescents",
    "postalCode": "13001",
    "latitude": 43.300303,
    "longitude": 5.379506,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. JEAN LUIGI",
    "referentName": "FOISSET CHRISTINE",
    "secteurERSEH": "LONGCHAMP",
    "cpcName": "",
    "email": "ce.0130555H@ac-aix-marseille.fr",
    "phone": "491910693",
    "referentPhone": "06 21 54 57 10",
    "referentEmail": "ce.erseh13-longchamp@ac-aix-marseille.fr"
  },
  {
    "id": "0130710b",
    "rne": "0130710B",
    "name": "CORDERIE (APPL)",
    "type": "elementaire",
    "city": "MARSEILLE  7E  ARRONDISSEMENT",
    "address": "33 boulevard de la Corderie",
    "postalCode": "13007",
    "latitude": 43.290061,
    "longitude": 5.369121,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHRISTINE COURTOT",
    "referentName": "THIVANT ISABELLE",
    "secteurERSEH": "PUGET_2",
    "cpcName": "",
    "email": "ce.0130710B@ac-aix-marseille.fr",
    "phone": "491337060",
    "referentPhone": "06 14 60 39 97",
    "referentEmail": "ce.erseh13-puget2@ac-aix-marseille.fr"
  },
  {
    "id": "0134121j",
    "rne": "0134121J",
    "name": "COURS FREDERIC OZANAM",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "61 rue ALPHONSE  DAUDET",
    "postalCode": "13013",
    "latitude": 43.319306,
    "longitude": 5.408519,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. Valentin REIBEIX",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ecole@coursozanam.fr",
    "phone": "484269022",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132638x",
    "rne": "0132638X",
    "name": "COURS JULIEN",
    "type": "elementaire",
    "city": "MARSEILLE  6E  ARRONDISSEMENT",
    "address": "119 rue d'Aubagne",
    "postalCode": "13006",
    "latitude": 43.293182,
    "longitude": 5.382807,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. FABRICE BURSI",
    "referentName": "GIRARD STEPHANIE",
    "secteurERSEH": "PUGET_4",
    "cpcName": "",
    "email": "ce.0132638X@ac-aix-marseille.fr",
    "phone": "491471918",
    "referentPhone": "06 14 60 78 10",
    "referentEmail": "ce.erseh13-puget4@ac-aix-marseille.fr"
  },
  {
    "id": "0132530e",
    "rne": "0132530E",
    "name": "CROIX ROUGE CAMPAGNE",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "14 avenue Fournacle",
    "postalCode": "13013",
    "latitude": 43.331809,
    "longitude": 5.456289,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VANESSA NINO",
    "referentName": "FINO PATRICIA",
    "secteurERSEH": "PLAN_DE_CUQUES",
    "cpcName": "",
    "email": "ce.0132530E@ac-aix-marseille.fr",
    "phone": "491686991",
    "referentPhone": "06 21 54 11 31",
    "referentEmail": "ce.erseh13-pdecuques@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130556j",
    "rne": "0130556J",
    "name": "CROIX ROUGE VILLAGE",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "36 avenue Marcel Delprat",
    "postalCode": "13013",
    "latitude": 43.333723,
    "longitude": 5.454856,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME STEPHANIE TOUBON",
    "referentName": "FINO PATRICIA",
    "secteurERSEH": "PLAN_DE_CUQUES",
    "cpcName": "",
    "email": "ce.0130556J@ac-aix-marseille.fr",
    "phone": "491681232",
    "referentPhone": "06 21 54 11 31",
    "referentEmail": "ce.erseh13-pdecuques@ac-aix-marseille.fr"
  },
  {
    "id": "0130557k",
    "rne": "0130557K",
    "name": "DAHDAH",
    "type": "elementaire",
    "city": "MARSEILLE  4E  ARRONDISSEMENT",
    "address": "15 boulevard Dahdah",
    "postalCode": "13004",
    "latitude": 43.310803,
    "longitude": 5.394588,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME BAIA DJAADI",
    "referentName": "BEN HADJ OTHMAN ADEL",
    "secteurERSEH": "CHARTREUX_1",
    "cpcName": "",
    "email": "ce.0130557K@ac-aix-marseille.fr",
    "phone": "491059000",
    "referentPhone": "06 25 11 53 02",
    "referentEmail": "ce.erseh13-chartreux1@ac-aix-marseille.fr"
  },
  {
    "id": "0134163e",
    "rne": "0134163E",
    "name": "DE LA CULTURE ET DE L'EDUCATIO",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "5 place joseph lanibois",
    "postalCode": "13015",
    "latitude": 43.35872,
    "longitude": 5.357298,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. ABDOU LATIF Imani",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ce.0134163e@ac-aix-marseille.fr",
    "phone": "953974745",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0134444k",
    "rne": "0134444K",
    "name": "DENISE TOROS MARTER",
    "type": "elementaire",
    "city": "MARSEILLE  9E  ARRONDISSEMENT",
    "address": "Traverse Régny",
    "postalCode": "13009",
    "latitude": 43.263846,
    "longitude": 5.420814,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. SAMUEL KAMMER",
    "referentName": "ATTEIA CAROLINE",
    "secteurERSEH": "GYPTIS_2",
    "cpcName": "",
    "email": "ce.0134444K@ac-aix-marseille.fr",
    "phone": "413948017",
    "referentPhone": "06 21 54 77 71",
    "referentEmail": "ce.erseh13-gyptis2@ac-aix-marseille.fr"
  },
  {
    "id": "0130559m",
    "rne": "0130559M",
    "name": "EDOUARD VAILLANT(APPL)",
    "type": "elementaire",
    "city": "MARSEILLE  3E  ARRONDISSEMENT",
    "address": "16 rue Edouard Vaillant",
    "postalCode": "13003",
    "latitude": 43.316377,
    "longitude": 5.377875,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MURIEL PEROTTI",
    "referentName": "CHAVANT MARION",
    "secteurERSEH": "DSDEN_2",
    "cpcName": "",
    "email": "ce.0130559M@ac-aix-marseille.fr",
    "phone": "491026690",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ],
    "referentPhone": "06 14 60 35 34",
    "referentEmail": "ce.erseh13-dsden2@ac-aix-marseille.fr"
  },
  {
    "id": "0134539n",
    "rne": "0134539N",
    "name": "EE PR HC CERENE MARSEILLE",
    "type": "elementaire",
    "city": "MARSEILLE  6E  ARRONDISSEMENT",
    "address": "18 avenue Jules Cantini",
    "postalCode": "13006",
    "latitude": 43.284527,
    "longitude": 5.386218,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. Mamadou GOUDIABY",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "viescolaire13@cerene-education.fr",
    "phone": "484896119",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131641n",
    "rne": "0131641N",
    "name": "EMILE VAYSSIERE 1",
    "type": "elementaire",
    "city": "MARSEILLE 14E  ARRONDISSEMENT",
    "address": "5 rue de la Crau",
    "postalCode": "13014",
    "latitude": 43.334897,
    "longitude": 5.397549,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ALEXANDRA DONGUY",
    "referentName": "TURCAT CLEMENCE",
    "secteurERSEH": "MALRAUX_4",
    "cpcName": "",
    "email": "ce.0131641N@ac-aix-marseille.fr",
    "phone": "486940582",
    "referentPhone": "06 21 54 55 44",
    "referentEmail": "ce.erseh13-malraux4@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132637w",
    "rne": "0132637W",
    "name": "EMILE VAYSSIERE 2",
    "type": "elementaire",
    "city": "MARSEILLE 14E  ARRONDISSEMENT",
    "address": "Rue de la Crau",
    "postalCode": "13014",
    "latitude": 43.335643,
    "longitude": 5.397523,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSLA",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME AUDREY SALCEDO",
    "referentName": "TURCAT CLEMENCE",
    "secteurERSEH": "MALRAUX_4",
    "cpcName": "",
    "email": "ce.0132637W@ac-aix-marseille.fr",
    "phone": "491983917",
    "referentPhone": "06 21 54 55 44",
    "referentEmail": "ce.erseh13-malraux4@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSLA",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132069d",
    "rne": "0132069D",
    "name": "ENDOUME",
    "type": "elementaire",
    "city": "MARSEILLE  7E  ARRONDISSEMENT",
    "address": "22 boulevard Bensa",
    "postalCode": "13007",
    "latitude": 43.282724,
    "longitude": 5.353794,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. FRANCK BOUCHEREAU",
    "referentName": "THIVANT ISABELLE",
    "secteurERSEH": "PUGET_2",
    "cpcName": "",
    "email": "ecendoume@wanadoo.fr",
    "phone": "491527412",
    "referentPhone": "06 14 60 39 97",
    "referentEmail": "ce.erseh13-puget2@ac-aix-marseille.fr"
  },
  {
    "id": "0130560n",
    "rne": "0130560N",
    "name": "EOURES",
    "type": "elementaire",
    "city": "MARSEILLE 11E  ARRONDISSEMENT",
    "address": "22 boulevard Notre Dame",
    "postalCode": "13011",
    "latitude": 43.300326,
    "longitude": 5.519679,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SYLVIE MORALIA",
    "referentName": "BLEUZE MARIE",
    "secteurERSEH": "RUISSATEL",
    "cpcName": "",
    "email": "ce.0130560N@ac-aix-marseille.fr",
    "phone": "491430125",
    "referentPhone": "06 14 60 45 95",
    "referentEmail": "ce.erseh13-ruissatel@ac-aix-marseille.fr"
  },
  {
    "id": "0130561p",
    "rne": "0130561P",
    "name": "ESTAQUE GARE",
    "type": "elementaire",
    "city": "MARSEILLE 16E  ARRONDISSEMENT",
    "address": "33 boulevard Fenouil",
    "postalCode": "13016",
    "latitude": 43.360811,
    "longitude": 5.32048,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MARIELLE CANTILLON",
    "referentName": "SOLEIL VIRGINIE",
    "secteurERSEH": "ROSA_PARKS_2",
    "cpcName": "",
    "email": "ce.0130561P@ac-aix-marseille.fr",
    "phone": "491036655",
    "referentPhone": "06 10 90 30 81",
    "referentEmail": "ce.erseh13-rosapark2@ac-aix-marseille.fr"
  },
  {
    "id": "0130562r",
    "rne": "0130562R",
    "name": "ESTAQUE PLAGE",
    "type": "elementaire",
    "city": "MARSEILLE 16E  ARRONDISSEMENT",
    "address": "2 rue de la Convention",
    "postalCode": "13016",
    "latitude": 43.361973,
    "longitude": 5.314664,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. SEBASTIEN MOSA",
    "referentName": "SOLEIL VIRGINIE",
    "secteurERSEH": "ROSA_PARKS_2",
    "cpcName": "",
    "email": "ce.0130562R@ac-aix-marseille.fr",
    "phone": "491461266",
    "referentPhone": "06 10 90 30 81",
    "referentEmail": "ce.erseh13-rosapark2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130563s",
    "rne": "0130563S",
    "name": "ETIENNE MILAN",
    "type": "elementaire",
    "city": "MARSEILLE 08E  ARRONDISSEMENT",
    "address": "4 rue Etienne Milan",
    "postalCode": "13008",
    "latitude": 43.264743,
    "longitude": 5.386558,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ELISABETH SCHIANO DI FERRUZZO",
    "referentName": "ADNOT LAURENCE",
    "secteurERSEH": "ROY_D_ESPAGNE_1",
    "cpcName": "",
    "email": "ce.0130563S@ac-aix-marseille.fr",
    "phone": "491763637",
    "referentPhone": "06 25 11 23 05",
    "referentEmail": "ce.erseh13-roydespagne1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131809w",
    "rne": "0131809W",
    "name": "EXTERNAT ST FRANCOIS D'ASSISE",
    "type": "elementaire",
    "city": "MARSEILLE  3E  ARRONDISSEMENT",
    "address": "8 boulevard Boyer",
    "postalCode": "13003",
    "latitude": 43.312728,
    "longitude": 5.386192,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Jessica ESTORACH",
    "referentName": "PENNETIER MANON",
    "secteurERSEH": "PRIVE_1",
    "cpcName": "",
    "email": "secretariat.jeannedarc@gmail.com",
    "phone": "491642154",
    "referentPhone": "06 28 58 88 63",
    "referentEmail": "ce.erseh13-prive1@ac-aix-marseille.fr"
  },
  {
    "id": "0130565u",
    "rne": "0130565U",
    "name": "EYDOUX",
    "type": "elementaire",
    "city": "MARSEILLE  6E  ARRONDISSEMENT",
    "address": "20 rue Eydoux",
    "postalCode": "13006",
    "latitude": 43.290423,
    "longitude": 5.38708,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. FRANCOIS MOLLARD",
    "referentName": "GIRARD STEPHANIE",
    "secteurERSEH": "PUGET_4",
    "cpcName": "",
    "email": "ce.0130565U@ac-aix-marseille.fr",
    "phone": "491485842",
    "referentPhone": "06 14 60 78 10",
    "referentEmail": "ce.erseh13-puget4@ac-aix-marseille.fr"
  },
  {
    "id": "0130566v",
    "rne": "0130566V",
    "name": "FELIX PYAT",
    "type": "elementaire",
    "city": "MARSEILLE  3E  ARRONDISSEMENT",
    "address": "54 rue Félix Pyat",
    "postalCode": "13003",
    "latitude": 43.315131,
    "longitude": 5.375354,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ZAWAD LAURE SAID MOHAMED",
    "referentName": "CHAVANT MARION",
    "secteurERSEH": "DSDEN_2",
    "cpcName": "",
    "email": "ce.0130566V@ac-aix-marseille.fr",
    "phone": "491501124",
    "referentPhone": "06 14 60 35 34",
    "referentEmail": "ce.erseh13-dsden2@ac-aix-marseille.fr"
  },
  {
    "id": "0130567w",
    "rne": "0130567W",
    "name": "FEUILLERAIE (LA)",
    "type": "elementaire",
    "city": "MARSEILLE  4E  ARRONDISSEMENT",
    "address": "87 boulevard de Roux",
    "postalCode": "13004",
    "latitude": 43.307434,
    "longitude": 5.408306,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME AURELIE FLINOIS",
    "referentName": "RAOUX GUILLAUME",
    "secteurERSEH": "FRAISSINET",
    "cpcName": "",
    "email": "ce.0130567W@ac-aix-marseille.fr",
    "phone": "491496604",
    "referentPhone": "06 25 11 28 04",
    "referentEmail": "ce.erseh13-fraissinet@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131272m",
    "rne": "0131272M",
    "name": "FLOTTE",
    "type": "elementaire",
    "city": "MARSEILLE 08E  ARRONDISSEMENT",
    "address": "2 avenue Ferdinand Flotte",
    "postalCode": "13008",
    "latitude": 43.275277,
    "longitude": 5.380474,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VALERIE LEPORATI",
    "referentName": "THIVANT ISABELLE",
    "secteurERSEH": "PUGET_2",
    "cpcName": "",
    "email": "ce.0131272M@ac-aix-marseille.fr",
    "phone": "491772759",
    "referentPhone": "06 14 60 39 97",
    "referentEmail": "ce.erseh13-puget2@ac-aix-marseille.fr"
  },
  {
    "id": "0131543g",
    "rne": "0131543G",
    "name": "FONT VERT",
    "type": "elementaire",
    "city": "MARSEILLE 14E  ARRONDISSEMENT",
    "address": "Chemin de Sainte Marthe",
    "postalCode": "13014",
    "latitude": 43.328281,
    "longitude": 5.390289,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. CHRISTOPHE OLIVIER",
    "referentName": "BAUME CECILE",
    "secteurERSEH": "MASSENET",
    "cpcName": "",
    "email": "ce.0131543G@ac-aix-marseille.fr",
    "phone": "491022289",
    "referentPhone": "06 21 54 13 51",
    "referentEmail": "ce.erseh13-massenet@ac-aix-marseille.fr"
  },
  {
    "id": "0130633t",
    "rne": "0130633T",
    "name": "FOURRAGERE (LA)",
    "type": "elementaire",
    "city": "MARSEILLE 12E  ARRONDISSEMENT",
    "address": "Traverse de la Fourragère",
    "postalCode": "13012",
    "latitude": 43.300546,
    "longitude": 5.428014,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. OLIVIER PONZI",
    "referentName": "LA ROCCA MYRTILLE",
    "secteurERSEH": "CAILLOLS_1",
    "cpcName": "",
    "email": "ce.0130633T@ac-aix-marseille.fr",
    "phone": "491930057",
    "referentPhone": "06 14 60 06 79",
    "referentEmail": "ce.erseh13-caillols1@ac-aix-marseille.fr"
  },
  {
    "id": "0130568x",
    "rne": "0130568X",
    "name": "FRAISSINET",
    "type": "elementaire",
    "city": "MARSEILLE  5E  ARRONDISSEMENT",
    "address": "208 rue Saint Pierre",
    "postalCode": "13005",
    "latitude": 43.292337,
    "longitude": 5.398841,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME JULIE FLOUCAT",
    "referentName": "RAOUX GUILLAUME",
    "secteurERSEH": "FRAISSINET",
    "cpcName": "",
    "email": "ce.0130568X@ac-aix-marseille.fr",
    "phone": "491480731",
    "referentPhone": "06 25 11 28 04",
    "referentEmail": "ce.erseh13-fraissinet@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130569y",
    "rne": "0130569Y",
    "name": "FRANCOIS MOISSON",
    "type": "elementaire",
    "city": "MARSEILLE  2E  ARRONDISSEMENT",
    "address": "17 rue François Moisson",
    "postalCode": "13002",
    "latitude": 43.301017,
    "longitude": 5.369016,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME EMILIE GUAY",
    "referentName": "GALAS FLORENCE",
    "secteurERSEH": "DSDEN_1",
    "cpcName": "",
    "email": "ce.0130569Y@ac-aix-marseille.fr",
    "phone": "491910254",
    "referentPhone": "06 14 60 65 74",
    "referentEmail": "ce.erseh13-dsden1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130659w",
    "rne": "0130659W",
    "name": "FRANKLIN ROOSEVELT",
    "type": "elementaire",
    "city": "MARSEILLE  5E  ARRONDISSEMENT",
    "address": "5 rue Tivoli",
    "postalCode": "13005",
    "latitude": 43.298454,
    "longitude": 5.389316,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME GAELLE GOURVENNEC BRETON",
    "referentName": "FOISSET CHRISTINE",
    "secteurERSEH": "LONGCHAMP",
    "cpcName": "",
    "email": "ce.0130659W@ac-aix-marseille.fr",
    "phone": "491472252",
    "referentPhone": "06 21 54 57 10",
    "referentEmail": "ce.erseh13-longchamp@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130725t",
    "rne": "0130725T",
    "name": "FRIEDLAND",
    "type": "elementaire",
    "city": "MARSEILLE  6E  ARRONDISSEMENT",
    "address": "13 rue Friedland",
    "postalCode": "13006",
    "latitude": 43.286474,
    "longitude": 5.388714,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME FABIENNE NICOLAI",
    "referentName": "DANIEL CAROLINE",
    "secteurERSEH": "PUGET_3",
    "cpcName": "",
    "email": "ce.0130725T@ac-aix-marseille.fr",
    "phone": "491786862",
    "referentPhone": "06 03 12 82 61",
    "referentEmail": "ce.erseh13-puget3@ac-aix-marseille.fr"
  },
  {
    "id": "0133202k",
    "rne": "0133202K",
    "name": "GAN AMI",
    "type": "elementaire",
    "city": "MARSEILLE  6E  ARRONDISSEMENT",
    "address": "47 rue Saint Suffren",
    "postalCode": "13006",
    "latitude": 43.287151,
    "longitude": 5.381603,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. Guil ZENOU",
    "referentName": "FINO HELENE",
    "secteurERSEH": "PUGET_1",
    "cpcName": "",
    "email": "ce.0133202K@ac-aix-marseille.fr",
    "phone": "496100850",
    "referentPhone": "06 21 54 03 57",
    "referentEmail": "ce.erseh13-puget1@ac-aix-marseille.fr"
  },
  {
    "id": "0133660h",
    "rne": "0133660H",
    "name": "GAN M. MORDEKHAI",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "112 boulevard Barry",
    "postalCode": "13013",
    "latitude": 43.31982,
    "longitude": 5.413289,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Dina Esther BITOUN",
    "referentName": "CRESCIONE LAURENCE",
    "secteurERSEH": "CHARTREUX_2",
    "cpcName": "",
    "email": "ce.0133660H@ac-aix-marseille.fr",
    "phone": "491060209",
    "referentPhone": "06 25 11 22 25",
    "referentEmail": "ce.erseh13-chartreux2@ac-aix-marseille.fr"
  },
  {
    "id": "0132286p",
    "rne": "0132286P",
    "name": "GRANADOS ROY D'ESPAGNE",
    "type": "elementaire",
    "city": "MARSEILLE  9E  ARRONDISSEMENT",
    "address": "Allée Granados",
    "postalCode": "13009",
    "latitude": 43.237083,
    "longitude": 5.39196,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CAMILLE JOUFFRE",
    "referentName": "SAGET DOMINIQUE",
    "secteurERSEH": "ROY_D_ESPAGNE_2",
    "cpcName": "",
    "email": "ce.0132286P@ac-aix-marseille.fr",
    "phone": "491733651",
    "referentPhone": "06 21 54 61 16",
    "referentEmail": "ce.erseh13-roydespagne2@ac-aix-marseille.fr"
  },
  {
    "id": "0130571a",
    "rne": "0130571A",
    "name": "GRAND SAINT GINIEZ",
    "type": "elementaire",
    "city": "MARSEILLE 08E  ARRONDISSEMENT",
    "address": "257 avenue de Mazargues",
    "postalCode": "13008",
    "latitude": 43.263909,
    "longitude": 5.393617,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME DELPHINE ZECCHINI",
    "referentName": "ADNOT LAURENCE",
    "secteurERSEH": "ROY_D_ESPAGNE_1",
    "cpcName": "",
    "email": "ce.0130571A@ac-aix-marseille.fr",
    "phone": "491762331",
    "referentPhone": "06 25 11 23 05",
    "referentEmail": "ce.erseh13-roydespagne1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130608r",
    "rne": "0130608R",
    "name": "GRANDE BASTIDE CAZAULX",
    "type": "elementaire",
    "city": "MARSEILLE 12E  ARRONDISSEMENT",
    "address": "Avenue Bouyala d'Arnaud",
    "postalCode": "13012",
    "latitude": 43.298089,
    "longitude": 5.442149,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MURIEL THOMAS",
    "referentName": "LA ROCCA MYRTILLE",
    "secteurERSEH": "CAILLOLS_1",
    "cpcName": "",
    "email": "ce.0130608R@ac-aix-marseille.fr",
    "phone": "491932542",
    "referentPhone": "06 14 60 06 79",
    "referentEmail": "ce.erseh13-caillols1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131595n",
    "rne": "0131595N",
    "name": "GROGNARDE (LA)",
    "type": "elementaire",
    "city": "MARSEILLE 11E  ARRONDISSEMENT",
    "address": "Boulevard Soult",
    "postalCode": "13011",
    "latitude": 43.293252,
    "longitude": 5.436244,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SYLVIE GODARD",
    "referentName": "LA ROCCA MYRTILLE",
    "secteurERSEH": "CAILLOLS_1",
    "cpcName": "",
    "email": "ce.0131595N@ac-aix-marseille.fr",
    "phone": "491445244",
    "referentPhone": "06 14 60 06 79",
    "referentEmail": "ce.erseh13-caillols1@ac-aix-marseille.fr"
  },
  {
    "id": "0130572b",
    "rne": "0130572B",
    "name": "GROTTE ROLLAND",
    "type": "elementaire",
    "city": "MARSEILLE 08E  ARRONDISSEMENT",
    "address": "24 boulevard des Salyens",
    "postalCode": "13008",
    "latitude": 43.2351,
    "longitude": 5.36603,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MORGANE RIBOT",
    "referentName": "SAGET DOMINIQUE",
    "secteurERSEH": "ROY_D_ESPAGNE_2",
    "cpcName": "",
    "email": "ce.0130572B@ac-aix-marseille.fr",
    "phone": "491733484",
    "referentPhone": "06 21 54 61 16",
    "referentEmail": "ce.erseh13-roydespagne2@ac-aix-marseille.fr"
  },
  {
    "id": "0133811x",
    "rne": "0133811X",
    "name": "GSBE",
    "type": "elementaire",
    "city": "MARSEILLE  9E  ARRONDISSEMENT",
    "address": "329 boulevard Michelet",
    "postalCode": "13009",
    "latitude": 43.257635,
    "longitude": 5.400021,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME StÂ‚phanie SCHEMBRI",
    "referentName": "ADNOT LAURENCE",
    "secteurERSEH": "ROY_D_ESPAGNE_1",
    "cpcName": "",
    "email": "administratif@bneielazar.fr",
    "phone": "491320520",
    "referentPhone": "06 25 11 23 05",
    "referentEmail": "ce.erseh13-roydespagne1@ac-aix-marseille.fr"
  },
  {
    "id": "0130729x",
    "rne": "0130729X",
    "name": "GUADELOUPE (LA)",
    "type": "elementaire",
    "city": "MARSEILLE  6E  ARRONDISSEMENT",
    "address": "7 rue de la Guadeloupe",
    "postalCode": "13006",
    "latitude": 43.282049,
    "longitude": 5.374455,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME INGRID POTTIE-MARTRE",
    "referentName": "FINO HELENE",
    "secteurERSEH": "PUGET_1",
    "cpcName": "",
    "email": "ce.0130729X@ac-aix-marseille.fr",
    "phone": "491372213",
    "referentPhone": "06 21 54 03 57",
    "referentEmail": "ce.erseh13-puget1@ac-aix-marseille.fr"
  },
  {
    "id": "0133263b",
    "rne": "0133263B",
    "name": "HAMASKAINE",
    "type": "elementaire",
    "city": "MARSEILLE 12E  ARRONDISSEMENT",
    "address": "60 boulevard Pinatel",
    "postalCode": "13012",
    "latitude": 43.314902,
    "longitude": 5.441458,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Hélène MARDIROSSIAN",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ce.0133263B@ac-aix-marseille.fr",
    "phone": "491937525",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0133559y",
    "rne": "0133559Y",
    "name": "HAYA MOUCHKA",
    "type": "elementaire",
    "city": "MARSEILLE 10E  ARRONDISSEMENT",
    "address": "77 rue PIERRE DOIZE",
    "postalCode": "13010",
    "latitude": 43.278615,
    "longitude": 5.428257,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME UZAN ANNIE",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ecoleh.m@gmail.com",
    "phone": "491453334",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0134554e",
    "rne": "0134554E",
    "name": "HEDER KEHILA LECHEM",
    "type": "elementaire",
    "city": "MARSEILLE  6E  ARRONDISSEMENT",
    "address": "177 rue Paradis",
    "postalCode": "13006",
    "latitude": 43.285447,
    "longitude": 5.380242,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHALEM ORLY",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": null,
    "phone": "484188953",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132112a",
    "rne": "0132112A",
    "name": "HENRI MARGALHAN",
    "type": "elementaire",
    "city": "MARSEILLE 14E  ARRONDISSEMENT",
    "address": "11 chemin du Four de Buze",
    "postalCode": "13014",
    "latitude": 43.346149,
    "longitude": 5.399415,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SÂ‚VERINE AZEMA",
    "referentName": "TURCAT CLEMENCE",
    "secteurERSEH": "MALRAUX_4",
    "cpcName": "",
    "email": "secretariat@margalhan.com",
    "phone": "491101840",
    "referentPhone": "06 21 54 55 44",
    "referentEmail": "ce.erseh13-malraux4@ac-aix-marseille.fr"
  },
  {
    "id": "0130574d",
    "rne": "0130574D",
    "name": "HOZIER",
    "type": "elementaire",
    "city": "MARSEILLE  2E  ARRONDISSEMENT",
    "address": "2 rue d'Hozier",
    "postalCode": "13002",
    "latitude": 43.3045,
    "longitude": 5.370246,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ANNE VOLPI",
    "referentName": "GALAS FLORENCE",
    "secteurERSEH": "DSDEN_1",
    "cpcName": "",
    "email": "ce.0130574D@ac-aix-marseille.fr",
    "phone": "491905350",
    "referentPhone": "06 14 60 65 74",
    "referentEmail": "ce.erseh13-dsden1@ac-aix-marseille.fr"
  },
  {
    "id": "0132999p",
    "rne": "0132999P",
    "name": "INSTITUTION FRANCO-HEBRAIQUE",
    "type": "elementaire",
    "city": "MARSEILLE  9E  ARRONDISSEMENT",
    "address": "13 boulevard du Redon",
    "postalCode": "13009",
    "latitude": 43.249837,
    "longitude": 5.42317,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Ophelie PEREZ",
    "referentName": "ADNOT LAURENCE",
    "secteurERSEH": "ROY_D_ESPAGNE_1",
    "cpcName": "",
    "email": "ce.0132999P@ac-aix-marseille.fr",
    "phone": "491752098",
    "referentPhone": "06 25 11 23 05",
    "referentEmail": "ce.erseh13-roydespagne1@ac-aix-marseille.fr"
  },
  {
    "id": "0133829s",
    "rne": "0133829S",
    "name": "INTERNATIONAL SCHOOL OF MARSEI",
    "type": "elementaire",
    "city": "MARSEILLE  7E  ARRONDISSEMENT",
    "address": "27 boulevard DE LA CORDERIE",
    "postalCode": "13007",
    "latitude": 43.290333,
    "longitude": 5.369971,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. JOEL TROTEBAS",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "schazot@ismarseille.com",
    "phone": "491530000",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0134423m",
    "rne": "0134423M",
    "name": "JEAN BAPTISTE FOUQUE (AFEM)",
    "type": "elementaire",
    "city": "MARSEILLE  4E  ARRONDISSEMENT",
    "address": "14 rue Elemir Bourges",
    "postalCode": "13004",
    "latitude": 43.298807,
    "longitude": 5.40171,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Géraldine CHABAUD",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "gc.chabaud@ecole-abbefouque.fr",
    "phone": "630867803",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130558l",
    "rne": "0130558L",
    "name": "JEAN FIOLLE",
    "type": "elementaire",
    "city": "MARSEILLE  6E  ARRONDISSEMENT",
    "address": "63 rue Docteur Jean-Fiolle",
    "postalCode": "13006",
    "latitude": 43.283639,
    "longitude": 5.380221,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VIRGINIE GUAZZELLI",
    "referentName": "DANIEL CAROLINE",
    "secteurERSEH": "PUGET_3",
    "cpcName": "",
    "email": "ce.0130558L@ac-aix-marseille.fr",
    "phone": "491377802",
    "referentPhone": "06 03 12 82 61",
    "referentEmail": "ce.erseh13-puget3@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130576f",
    "rne": "0130576F",
    "name": "JEAN MERMOZ",
    "type": "elementaire",
    "city": "MARSEILLE 08E  ARRONDISSEMENT",
    "address": "138 rue Jean Mermoz",
    "postalCode": "13008",
    "latitude": 43.272344,
    "longitude": 5.386611,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME NATHALIE BESSON LAURETTE",
    "referentName": "FINO HELENE",
    "secteurERSEH": "PUGET_1",
    "cpcName": "",
    "email": "ce.0130576F@ac-aix-marseille.fr",
    "phone": "491761517",
    "referentPhone": "06 21 54 03 57",
    "referentEmail": "ce.erseh13-puget1@ac-aix-marseille.fr"
  },
  {
    "id": "0132039w",
    "rne": "0132039W",
    "name": "JEANNE D'ARC",
    "type": "elementaire",
    "city": "MARSEILLE 08E  ARRONDISSEMENT",
    "address": "43 rue Jean Mermoz",
    "postalCode": "13008",
    "latitude": 43.276454,
    "longitude": 5.387182,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Eve LENEVEU",
    "referentName": "FINO HELENE",
    "secteurERSEH": "PUGET_1",
    "cpcName": "",
    "email": "ce.0132039W@ac-aix-marseille.fr",
    "phone": "496101230",
    "referentPhone": "06 21 54 03 57",
    "referentEmail": "ce.erseh13-puget1@ac-aix-marseille.fr"
  },
  {
    "id": "0130735d",
    "rne": "0130735D",
    "name": "KLEBER",
    "type": "elementaire",
    "city": "MARSEILLE  3E  ARRONDISSEMENT",
    "address": "26 rue Kléber",
    "postalCode": "13003",
    "latitude": 43.30762,
    "longitude": 5.375006,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. HAKIM TRAIKIA",
    "referentName": "CHAVANT MARION",
    "secteurERSEH": "DSDEN_2",
    "cpcName": "",
    "email": "ce.0130735D@ac-aix-marseille.fr",
    "phone": "491508334",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ],
    "referentPhone": "06 14 60 35 34",
    "referentEmail": "ce.erseh13-dsden2@ac-aix-marseille.fr"
  },
  {
    "id": "0132079p",
    "rne": "0132079P",
    "name": "LACORDAIRE",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "7 boulevard Lacordaire",
    "postalCode": "13013",
    "latitude": 43.319764,
    "longitude": 5.405735,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ANNE SOPHIE GUILLE",
    "referentName": "BEN HADJ OTHMAN ADEL",
    "secteurERSEH": "CHARTREUX_1",
    "cpcName": "",
    "email": "ce.0132079P@ac-aix-marseille.fr",
    "phone": "491122080",
    "referentPhone": "06 25 11 53 02",
    "referentEmail": "ce.erseh13-chartreux1@ac-aix-marseille.fr"
  },
  {
    "id": "0130736e",
    "rne": "0130736E",
    "name": "LAPIN BLANC",
    "type": "elementaire",
    "city": "MARSEILLE 08E  ARRONDISSEMENT",
    "address": "70 avenue André Zenatti",
    "postalCode": "13008",
    "latitude": 43.245905,
    "longitude": 5.386741,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ISABELLE MEUNIER TREGLIA",
    "referentName": "SAGET DOMINIQUE",
    "secteurERSEH": "ROY_D_ESPAGNE_2",
    "cpcName": "",
    "email": "ce.0130736E@ac-aix-marseille.fr",
    "phone": "491733286",
    "referentPhone": "06 21 54 61 16",
    "referentEmail": "ce.erseh13-roydespagne2@ac-aix-marseille.fr"
  },
  {
    "id": "0130577g",
    "rne": "0130577G",
    "name": "LAPIN BLANC DES NEIGES",
    "type": "elementaire",
    "city": "MARSEILLE 08E  ARRONDISSEMENT",
    "address": "131 chemin du Sablier",
    "postalCode": "13008",
    "latitude": 43.24823,
    "longitude": 5.381894,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHRISTINE RYCHEN",
    "referentName": "ADNOT LAURENCE",
    "secteurERSEH": "ROY_D_ESPAGNE_1",
    "cpcName": "",
    "email": "ce.0130577G@ac-aix-marseille.fr",
    "phone": "491732750",
    "referentPhone": "06 25 11 23 05",
    "referentEmail": "ce.erseh13-roydespagne1@ac-aix-marseille.fr"
  },
  {
    "id": "0134545v",
    "rne": "0134545V",
    "name": "LES FABRIQUES",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "2 rue Pascal POSADO",
    "postalCode": "13015",
    "latitude": 43.325063,
    "longitude": 5.366354,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME AICHA HADJ-OTHMANE",
    "referentName": "BRUN SANDRINE",
    "secteurERSEH": "ROSA_PARKS_1",
    "cpcName": "",
    "email": "ce.0134545V@ac-aix-marseille.fr",
    "phone": "488492019",
    "referentPhone": "06 10 90 10 36",
    "referentEmail": "ce.erseh13-rosapark1@ac-aix-marseille.fr"
  },
  {
    "id": "0134238l",
    "rne": "0134238L",
    "name": "LES GRAINES D'ARC EN SIECLE",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "21 rue COUGIT",
    "postalCode": "13015",
    "latitude": 43.321866,
    "longitude": 5.368885,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME DJEBASSI LIZA",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ce.0134238L@ac-aix-marseille.fr",
    "phone": "nan",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0134279f",
    "rne": "0134279F",
    "name": "LES GRAINES DU SAVOIR",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "29 boulevard Jean barbieri",
    "postalCode": "13015",
    "latitude": 43.349308,
    "longitude": 5.357327,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Natacha SOLIHI",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ce.0134279F@ac-aix-marseille.fr",
    "phone": "769182050",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130578h",
    "rne": "0130578H",
    "name": "LEVERRIER",
    "type": "elementaire",
    "city": "MARSEILLE  4E  ARRONDISSEMENT",
    "address": "6 place Leverrier",
    "postalCode": "13004",
    "latitude": 43.3064,
    "longitude": 5.393551,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MAGALIE OLLIVE",
    "referentName": "FOISSET CHRISTINE",
    "secteurERSEH": "LONGCHAMP",
    "cpcName": "",
    "email": "ce.0130578H@ac-aix-marseille.fr",
    "phone": "491507926",
    "referentPhone": "06 21 54 57 10",
    "referentEmail": "ce.erseh13-longchamp@ac-aix-marseille.fr"
  },
  {
    "id": "0130579j",
    "rne": "0130579J",
    "name": "LODI",
    "type": "elementaire",
    "city": "MARSEILLE  6E  ARRONDISSEMENT",
    "address": "127 rue de Lodi",
    "postalCode": "13006",
    "latitude": 43.286985,
    "longitude": 5.389908,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME TANIA ARSENE",
    "referentName": "DANIEL CAROLINE",
    "secteurERSEH": "PUGET_3",
    "cpcName": "",
    "email": "ce.0130579J@ac-aix-marseille.fr",
    "phone": "491782161",
    "referentPhone": "06 03 12 82 61",
    "referentEmail": "ce.erseh13-puget3@ac-aix-marseille.fr"
  },
  {
    "id": "0133762u",
    "rne": "0133762U",
    "name": "L'OLIVIER",
    "type": "elementaire",
    "city": "MARSEILLE 14E  ARRONDISSEMENT",
    "address": "5 boulevard Giraud",
    "postalCode": "13014",
    "latitude": 43.32518,
    "longitude": 5.375493,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Sara HSIAOUI-AGGOUNE",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ecole.olivier@sfr.fr",
    "phone": "491581753",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130580k",
    "rne": "0130580K",
    "name": "LOUBIERE",
    "type": "elementaire",
    "city": "MARSEILLE  5E  ARRONDISSEMENT",
    "address": "97 rue de la Loubière",
    "postalCode": "13005",
    "latitude": 43.289814,
    "longitude": 5.391548,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MATHILDE PEYSSON",
    "referentName": "GIRARD STEPHANIE",
    "secteurERSEH": "PUGET_4",
    "cpcName": "",
    "email": "ce.0130580K@ac-aix-marseille.fr",
    "phone": "491422137",
    "referentPhone": "06 14 60 78 10",
    "referentEmail": "ce.erseh13-puget4@ac-aix-marseille.fr"
  },
  {
    "id": "0133223h",
    "rne": "0133223H",
    "name": "LOUISE DE MARILLAC",
    "type": "elementaire",
    "city": "MARSEILLE 11E  ARRONDISSEMENT",
    "address": "Route d'Allauch Impasse Pont la",
    "postalCode": "13011",
    "latitude": 43.304062,
    "longitude": 5.501127,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. Eric MARTELLI",
    "referentName": "BLEUZE MARIE",
    "secteurERSEH": "RUISSATEL",
    "cpcName": "",
    "email": "ce.0133223H@ac-aix-marseille.fr",
    "phone": "491431293",
    "referentPhone": "06 14 60 45 95",
    "referentEmail": "ce.erseh13-ruissatel@ac-aix-marseille.fr"
  },
  {
    "id": "0130739h",
    "rne": "0130739H",
    "name": "MADRAGUE MONTREDON",
    "type": "elementaire",
    "city": "MARSEILLE 08E  ARRONDISSEMENT",
    "address": "34 boulevard de la Verrerie",
    "postalCode": "13008",
    "latitude": 43.231985,
    "longitude": 5.361473,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MANON MORAND",
    "referentName": "SAGET DOMINIQUE",
    "secteurERSEH": "ROY_D_ESPAGNE_2",
    "cpcName": "",
    "email": "ce.0130739H@ac-aix-marseille.fr",
    "phone": "491733923",
    "referentPhone": "06 21 54 61 16",
    "referentEmail": "ce.erseh13-roydespagne2@ac-aix-marseille.fr"
  },
  {
    "id": "0134231d",
    "rne": "0134231D",
    "name": "MADRAGUE VILLE ODDO",
    "type": "elementaire",
    "city": "MARSEILLE  2E  ARRONDISSEMENT",
    "address": "141 chemin de la Madrague Ville",
    "postalCode": "13002",
    "latitude": 43.326976,
    "longitude": 5.360132,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. JEAN-LUC BERGE",
    "referentName": "BRUN SANDRINE",
    "secteurERSEH": "ROSA_PARKS_1",
    "cpcName": "",
    "email": "ce.0134231D@ac-aix-marseille.fr",
    "phone": "491580071",
    "referentPhone": "06 10 90 10 36",
    "referentEmail": "ce.erseh13-rosapark1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130741k",
    "rne": "0130741K",
    "name": "MAJOR",
    "type": "elementaire",
    "city": "MARSEILLE  2E  ARRONDISSEMENT",
    "address": "41 A rue de l'Evêché",
    "postalCode": "13002",
    "latitude": 43.300785,
    "longitude": 5.366403,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. BENJAMIN MERCADAL",
    "referentName": "GALAS FLORENCE",
    "secteurERSEH": "DSDEN_1",
    "cpcName": "",
    "email": "ce.0130741K@ac-aix-marseille.fr",
    "phone": "491912151",
    "referentPhone": "06 14 60 65 74",
    "referentEmail": "ce.erseh13-dsden1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130583n",
    "rne": "0130583N",
    "name": "MALPASSE",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "16 rue du Docteur Grenier",
    "postalCode": "13013",
    "latitude": 43.320758,
    "longitude": 5.415023,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CAMILLE LAVIGNON",
    "referentName": "BEN HADJ OTHMAN ADEL",
    "secteurERSEH": "CHARTREUX_1",
    "cpcName": "",
    "email": "ce.0130583N@ac-aix-marseille.fr",
    "phone": "491661018",
    "referentPhone": "06 25 11 53 02",
    "referentEmail": "ce.erseh13-chartreux1@ac-aix-marseille.fr"
  },
  {
    "id": "0132274b",
    "rne": "0132274B",
    "name": "MALPASSE LES LAURIERS",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "9 rue de Marathon",
    "postalCode": "13013",
    "latitude": 43.32715,
    "longitude": 5.413181,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. ALEXANDRE BALAYN",
    "referentName": "CRESCIONE LAURENCE",
    "secteurERSEH": "CHARTREUX_2",
    "cpcName": "",
    "email": "ce.0132274B@ac-aix-marseille.fr",
    "phone": "491700247",
    "referentPhone": "06 25 11 22 25",
    "referentEmail": "ce.erseh13-chartreux2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131856x",
    "rne": "0131856X",
    "name": "MALPASSE LES OLIVIERS",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "Avenue Saint Paul",
    "postalCode": "13013",
    "latitude": 43.328801,
    "longitude": 5.40632,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LEA SAMIA LARIDHI",
    "referentName": "CRESCIONE LAURENCE",
    "secteurERSEH": "CHARTREUX_2",
    "cpcName": "",
    "email": "ce.0131856X@ac-aix-marseille.fr",
    "phone": "413948680",
    "referentPhone": "06 25 11 22 25",
    "referentEmail": "ce.erseh13-chartreux2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130743m",
    "rne": "0130743M",
    "name": "MARIUS THOMAS",
    "type": "elementaire",
    "city": "MARSEILLE  7E  ARRONDISSEMENT",
    "address": "21 boulevard Marius Thomas",
    "postalCode": "13007",
    "latitude": 43.28489,
    "longitude": 5.361668,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CELINE FALK",
    "referentName": "THIVANT ISABELLE",
    "secteurERSEH": "PUGET_2",
    "cpcName": "",
    "email": "ce.0130743M@ac-aix-marseille.fr",
    "phone": "491520308",
    "referentPhone": "06 14 60 39 97",
    "referentEmail": "ce.erseh13-puget2@ac-aix-marseille.fr"
  },
  {
    "id": "0130584p",
    "rne": "0130584P",
    "name": "MARTEGAUX (LES)",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "5 chemin des Martégaux",
    "postalCode": "13013",
    "latitude": 43.326132,
    "longitude": 5.440885,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ISABELLE ELBAZ",
    "referentName": "CRESCIONE LAURENCE",
    "secteurERSEH": "CHARTREUX_2",
    "cpcName": "",
    "email": "ce.0130584P@ac-aix-marseille.fr",
    "phone": "491664088",
    "referentPhone": "06 25 11 22 25",
    "referentEmail": "ce.erseh13-chartreux2@ac-aix-marseille.fr"
  },
  {
    "id": "0131224k",
    "rne": "0131224K",
    "name": "MAURELETTE",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "Boulevard Simon Bolivar",
    "postalCode": "13015",
    "latitude": 43.344933,
    "longitude": 5.375883,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. GILLES RICHARD",
    "referentName": "SOLEIL VIRGINIE",
    "secteurERSEH": "ROSA_PARKS_2",
    "cpcName": "",
    "email": "ce.0131224K@ac-aix-marseille.fr",
    "phone": "491607562",
    "referentPhone": "06 10 90 30 81",
    "referentEmail": "ce.erseh13-rosapark2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130585r",
    "rne": "0130585R",
    "name": "MAURELLE BOMBARDIERE",
    "type": "elementaire",
    "city": "MARSEILLE 12E  ARRONDISSEMENT",
    "address": "213 traverse Charles Kaddouz",
    "postalCode": "13012",
    "latitude": 43.318627,
    "longitude": 5.438943,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME KARINE BIANCO",
    "referentName": "AGRESTI SYLVIE",
    "secteurERSEH": "MALRAUX_3",
    "cpcName": "",
    "email": "ce.0130585R@ac-aix-marseille.fr",
    "phone": "491930646",
    "referentPhone": "06 21 54 36 79",
    "referentEmail": "ce.erseh13-malraux3@ac-aix-marseille.fr"
  },
  {
    "id": "0133655c",
    "rne": "0133655C",
    "name": "MAURICE KORSEC",
    "type": "elementaire",
    "city": "MARSEILLE  1ER ARRONDISSEMENT",
    "address": "2 rue Maurice Korsec",
    "postalCode": "13001",
    "latitude": 43.300767,
    "longitude": 5.379606,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME GENEVIEVE URBANI",
    "referentName": "FOISSET CHRISTINE",
    "secteurERSEH": "LONGCHAMP",
    "cpcName": "",
    "email": "ce.0133655C@ac-aix-marseille.fr",
    "phone": "491901576",
    "referentPhone": "06 21 54 57 10",
    "referentEmail": "ce.erseh13-longchamp@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130747s",
    "rne": "0130747S",
    "name": "MAZARGUES",
    "type": "elementaire",
    "city": "MARSEILLE  9E  ARRONDISSEMENT",
    "address": "3 rue François Blanc",
    "postalCode": "13009",
    "latitude": 43.24933,
    "longitude": 5.401418,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MARJORIE MATHIEU",
    "referentName": "ICART CECILE",
    "secteurERSEH": "GYPTIS_1",
    "cpcName": "",
    "email": "ce.0130747S@ac-aix-marseille.fr",
    "phone": "491400186",
    "referentPhone": "06 25 11 81 66",
    "referentEmail": "ce.erseh13-gyptis1@ac-aix-marseille.fr"
  },
  {
    "id": "0130587t",
    "rne": "0130587T",
    "name": "MAZARGUES BEAUCHENE",
    "type": "elementaire",
    "city": "MARSEILLE  9E  ARRONDISSEMENT",
    "address": "5 avenue Marie Balajat",
    "postalCode": "13009",
    "latitude": 43.250166,
    "longitude": 5.405393,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MARION ROLLAND",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ce.0130587T@ac-aix-marseille.fr",
    "phone": "491401289",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131692u",
    "rne": "0131692U",
    "name": "MAZARGUES VACCARO",
    "type": "elementaire",
    "city": "MARSEILLE  9E  ARRONDISSEMENT",
    "address": "Boulevard Maréchal Koenig",
    "postalCode": "13009",
    "latitude": 43.241915,
    "longitude": 5.410295,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. ALAIN KRIER",
    "referentName": "ADNOT LAURENCE",
    "secteurERSEH": "ROY_D_ESPAGNE_1",
    "cpcName": "",
    "email": "ce.0131692U@ac-aix-marseille.fr",
    "phone": "491401513",
    "referentPhone": "06 25 11 23 05",
    "referentEmail": "ce.erseh13-roydespagne1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0134097h",
    "rne": "0134097H",
    "name": "MELINEE ET MISSAK MANOUCHIAN",
    "type": "elementaire",
    "city": "MARSEILLE 10E  ARRONDISSEMENT",
    "address": "Rue Edouard Alexander",
    "postalCode": "13010",
    "latitude": 43.271238,
    "longitude": 5.406123,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME AMANDINE CONESA",
    "referentName": "ATTEIA CAROLINE",
    "secteurERSEH": "GYPTIS_2",
    "cpcName": "",
    "email": "ce.0134097H@ac-aix-marseille.fr",
    "phone": "413948018",
    "referentPhone": "06 21 54 77 71",
    "referentEmail": "ce.erseh13-gyptis2@ac-aix-marseille.fr"
  },
  {
    "id": "0130589v",
    "rne": "0130589V",
    "name": "MENPENTI",
    "type": "elementaire",
    "city": "MARSEILLE 10E  ARRONDISSEMENT",
    "address": "161 avenue de Toulon",
    "postalCode": "13010",
    "latitude": 43.28407,
    "longitude": 5.396402,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SABINE BACH PUGLISI",
    "referentName": "PARDO ALAIN",
    "secteurERSEH": "LONGCHAMP_2",
    "cpcName": "",
    "email": "ce.0130589V@ac-aix-marseille.fr",
    "phone": "491797951",
    "referentPhone": "06 25 11 56 03",
    "referentEmail": "ce.erseh13-longchamp2@ac-aix-marseille.fr"
  },
  {
    "id": "0130751w",
    "rne": "0130751W",
    "name": "MERLAN",
    "type": "elementaire",
    "city": "MARSEILLE 14E  ARRONDISSEMENT",
    "address": "70 avenue du Merlan",
    "postalCode": "13014",
    "latitude": 43.338521,
    "longitude": 5.408309,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CORALIE GRAU",
    "referentName": "TURCAT CLEMENCE",
    "secteurERSEH": "MALRAUX_4",
    "cpcName": "",
    "email": "ce.0130751W@ac-aix-marseille.fr",
    "phone": "491982505",
    "referentPhone": "06 21 54 55 44",
    "referentEmail": "ce.erseh13-malraux4@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130590w",
    "rne": "0130590W",
    "name": "MERLAN CERISAIE",
    "type": "elementaire",
    "city": "MARSEILLE 14E  ARRONDISSEMENT",
    "address": "23 avenue Notre Dame Santa Cruz",
    "postalCode": "13014",
    "latitude": 43.339797,
    "longitude": 5.405461,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. DIDIER DODERO",
    "referentName": "TURCAT CLEMENCE",
    "secteurERSEH": "MALRAUX_4",
    "cpcName": "",
    "email": "ce.0130590W@ac-aix-marseille.fr",
    "phone": "491982358",
    "referentPhone": "06 21 54 55 44",
    "referentEmail": "ce.erseh13-malraux4@ac-aix-marseille.fr"
  },
  {
    "id": "0134096g",
    "rne": "0134096G",
    "name": "MICHELET FOCH",
    "type": "elementaire",
    "city": "MARSEILLE  4E  ARRONDISSEMENT",
    "address": "21 avenue Maréchal Foch",
    "postalCode": "13004",
    "latitude": 43.301224,
    "longitude": 5.399176,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VALERIE MERLONGHI",
    "referentName": "GIRARD STEPHANIE",
    "secteurERSEH": "PUGET_4",
    "cpcName": "",
    "email": "ce.0134096G@ac-aix-marseille.fr",
    "phone": "491099628",
    "referentPhone": "06 14 60 78 10",
    "referentEmail": "ce.erseh13-puget4@ac-aix-marseille.fr"
  },
  {
    "id": "0130591x",
    "rne": "0130591X",
    "name": "MILLIERE (LA)",
    "type": "elementaire",
    "city": "MARSEILLE 11E  ARRONDISSEMENT",
    "address": "82 boulevard Albert Sauze",
    "postalCode": "13011",
    "latitude": 43.281685,
    "longitude": 5.50087,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME HELENE CARBLANC",
    "referentName": "BEDJIDIAN LYDIA",
    "secteurERSEH": "FORBIN",
    "cpcName": "",
    "email": "ce.0130591X@ac-aix-marseille.fr",
    "phone": "491361372",
    "referentPhone": "06 14 60 43 08",
    "referentEmail": "ce.erseh13-forbin@ac-aix-marseille.fr"
  },
  {
    "id": "0134235h",
    "rne": "0134235H",
    "name": "MONTESSORI 21 MARSEILLE",
    "type": "elementaire",
    "city": "MARSEILLE  6E  ARRONDISSEMENT",
    "address": "47 rue FALQUE",
    "postalCode": "13006",
    "latitude": 43.284013,
    "longitude": 5.381543,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME BEVALDI Véronique",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "christelle.zeller@montessouri21.org",
    "phone": "nan",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0134157y",
    "rne": "0134157Y",
    "name": "MONTESSORI INTERNATIONAL MARSE",
    "type": "elementaire",
    "city": "MARSEILLE 12E  ARRONDISSEMENT",
    "address": "7 rue gaston de flotte",
    "postalCode": "13012",
    "latitude": 43.295912,
    "longitude": 5.423662,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "nan",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "marseille@montessoriesclaibes.com",
    "phone": "648721829",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132184d",
    "rne": "0132184D",
    "name": "MONTOLIVET",
    "type": "elementaire",
    "city": "MARSEILLE 12E  ARRONDISSEMENT",
    "address": "117 boulevard de l'Aiguillette",
    "postalCode": "13012",
    "latitude": 43.317406,
    "longitude": 5.427762,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME PATRICIA DE JESUS",
    "referentName": "RAOUX GUILLAUME",
    "secteurERSEH": "FRAISSINET",
    "cpcName": "",
    "email": "ce.0132184D@ac-aix-marseille.fr",
    "phone": "491930627",
    "referentPhone": "06 25 11 28 04",
    "referentEmail": "ce.erseh13-fraissinet@ac-aix-marseille.fr"
  },
  {
    "id": "0130595b",
    "rne": "0130595B",
    "name": "NATIONAL",
    "type": "elementaire",
    "city": "MARSEILLE  3E  ARRONDISSEMENT",
    "address": "3 rue Masséna",
    "postalCode": "13003",
    "latitude": 43.308709,
    "longitude": 5.380168,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. GERMAIN COURTOT",
    "referentName": "CHAVANT MARION",
    "secteurERSEH": "DSDEN_2",
    "cpcName": "",
    "email": "ce.0130595B@ac-aix-marseille.fr",
    "phone": "491505484",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ],
    "referentPhone": "06 14 60 35 34",
    "referentEmail": "ce.erseh13-dsden2@ac-aix-marseille.fr"
  },
  {
    "id": "0132605l",
    "rne": "0132605L",
    "name": "NEREIDES (LES)",
    "type": "elementaire",
    "city": "MARSEILLE 11E  ARRONDISSEMENT",
    "address": "113 rue Granière",
    "postalCode": "13011",
    "latitude": 43.2843,
    "longitude": 5.460845,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LUCIE IGLESIAS",
    "referentName": "BEDJIDIAN LYDIA",
    "secteurERSEH": "FORBIN",
    "cpcName": "",
    "email": "ce.0132605L@ac-aix-marseille.fr",
    "phone": "491353801",
    "referentPhone": "06 14 60 43 08",
    "referentEmail": "ce.erseh13-forbin@ac-aix-marseille.fr"
  },
  {
    "id": "0132063x",
    "rne": "0132063X",
    "name": "NOTRE DAME DE LA PAIX",
    "type": "elementaire",
    "city": "MARSEILLE  6E  ARRONDISSEMENT",
    "address": "55 rue Saint Sébastien",
    "postalCode": "13006",
    "latitude": 43.282835,
    "longitude": 5.384131,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Pascale ROCHE",
    "referentName": "FINO HELENE",
    "secteurERSEH": "PUGET_1",
    "cpcName": "",
    "email": "secretariat@ecolendlp.com",
    "phone": "491377816",
    "referentPhone": "06 21 54 03 57",
    "referentEmail": "ce.erseh13-puget1@ac-aix-marseille.fr"
  },
  {
    "id": "0131638k",
    "rne": "0131638K",
    "name": "NOTRE DAME LIMITE JEAN PERRIN",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "Chemin des Bourrely",
    "postalCode": "13015",
    "latitude": 43.384184,
    "longitude": 5.36175,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CELINE FLOCHLAY",
    "referentName": "STELLA DOMINIQUE",
    "secteurERSEH": "RIMBAUD",
    "cpcName": "",
    "email": "ce.0131638K@ac-aix-marseille.fr",
    "phone": "491511184",
    "referentPhone": "06 21 54 20 36",
    "referentEmail": "ce.erseh13-rimbaud@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131636h",
    "rne": "0131636H",
    "name": "NOTRE.DAME LIMITE LES FABRETTE",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "8 traverse de l'Arlésienne",
    "postalCode": "13015",
    "latitude": 43.382976,
    "longitude": 5.359041,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME JESSICA CRONENBERGER",
    "referentName": "MEURANT OLIVIER",
    "secteurERSEH": "VALLON_DES_PINS",
    "cpcName": "",
    "email": "ce.0131636H@ac-aix-marseille.fr",
    "phone": "491510382",
    "referentPhone": "06 21 54 79 68",
    "referentEmail": "ce.erseh13-vallondespins@ac-aix-marseille.fr"
  },
  {
    "id": "0132068c",
    "rne": "0132068C",
    "name": "NOTRE-DAME",
    "type": "elementaire",
    "city": "MARSEILLE  6E  ARRONDISSEMENT",
    "address": "15 rue Edouard Delanglade",
    "postalCode": "13006",
    "latitude": 43.288976,
    "longitude": 5.374618,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Magalie MOURRE",
    "referentName": "FINO HELENE",
    "secteurERSEH": "PUGET_1",
    "cpcName": "",
    "email": "ce.0132068C@ac-aix-marseille.fr",
    "phone": "491377560",
    "referentPhone": "06 21 54 03 57",
    "referentEmail": "ce.erseh13-puget1@ac-aix-marseille.fr"
  },
  {
    "id": "0132055n",
    "rne": "0132055N",
    "name": "NOTRE-DAME DE LA JEUNESSE",
    "type": "elementaire",
    "city": "MARSEILLE 11E  ARRONDISSEMENT",
    "address": "61 avenue Saint-Menet Château Ré",
    "postalCode": "13011",
    "latitude": 43.289123,
    "longitude": 5.500038,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. David GARCIA",
    "referentName": "BLEUZE MARIE",
    "secteurERSEH": "RUISSATEL",
    "cpcName": "",
    "email": "ce.0132055N@ac-aix-marseille.fr",
    "phone": "491430332",
    "referentPhone": "06 14 60 45 95",
    "referentEmail": "ce.erseh13-ruissatel@ac-aix-marseille.fr"
  },
  {
    "id": "0131812z",
    "rne": "0131812Z",
    "name": "NOTRE-DAME DE LA MAJOR",
    "type": "elementaire",
    "city": "MARSEILLE  2E  ARRONDISSEMENT",
    "address": "31 montée des Accoules",
    "postalCode": "13002",
    "latitude": 43.297708,
    "longitude": 5.36623,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Flore ANGELIER",
    "referentName": "PENNETIER MANON",
    "secteurERSEH": "PRIVE_1",
    "cpcName": "",
    "email": "ce.0131812Z@ac-aix-marseille.fr",
    "phone": "491902819",
    "referentPhone": "06 28 58 88 63",
    "referentEmail": "ce.erseh13-prive1@ac-aix-marseille.fr"
  },
  {
    "id": "0132040x",
    "rne": "0132040X",
    "name": "NOTRE-DAME DE L'HUVEAUNE",
    "type": "elementaire",
    "city": "MARSEILLE 08E  ARRONDISSEMENT",
    "address": "23 boulevard Emile Sicard",
    "postalCode": "13008",
    "latitude": 43.270429,
    "longitude": 5.385027,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Audrey BENOIT",
    "referentName": "ADNOT LAURENCE",
    "secteurERSEH": "ROY_D_ESPAGNE_1",
    "cpcName": "",
    "email": "ce.0132040X@ac-aix-marseille.fr",
    "phone": "491779407",
    "referentPhone": "06 25 11 23 05",
    "referentEmail": "ce.erseh13-roydespagne1@ac-aix-marseille.fr"
  },
  {
    "id": "0131800l",
    "rne": "0131800L",
    "name": "NOTRE-DAME SAINT THEODORE",
    "type": "elementaire",
    "city": "MARSEILLE  1ER ARRONDISSEMENT",
    "address": "46 rue des Dominicaines",
    "postalCode": "13001",
    "latitude": 43.300366,
    "longitude": 5.37879,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Estelle BRIVADIS",
    "referentName": "PETIT FRANCOISE",
    "secteurERSEH": "PRIVE_2",
    "cpcName": "",
    "email": "ce.0131800L@ac-aix-marseille.fr",
    "phone": "491901090",
    "referentPhone": "06 28 58 88 72",
    "referentEmail": "ce.erseh13-prive2@ac-aix-marseille.fr"
  },
  {
    "id": "0131797h",
    "rne": "0131797H",
    "name": "NOTRE-DAME-DU-SACRE-COEUR",
    "type": "elementaire",
    "city": "MARSEILLE 12E  ARRONDISSEMENT",
    "address": "167 avenue des Caillols",
    "postalCode": "13012",
    "latitude": 43.303231,
    "longitude": 5.438774,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Virginie BALEGE",
    "referentName": "PETIT FRANCOISE",
    "secteurERSEH": "PRIVE_2",
    "cpcName": "",
    "email": "ce.0131797H@ac-aix-marseille.fr",
    "phone": "977690478",
    "referentPhone": "06 28 58 88 72",
    "referentEmail": "ce.erseh13-prive2@ac-aix-marseille.fr"
  },
  {
    "id": "0130597d",
    "rne": "0130597D",
    "name": "ODDO",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "1 place EDGAR TARQUIN",
    "postalCode": "13015",
    "latitude": 43.328516,
    "longitude": 5.361842,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ANGELIQUE MAROTTA",
    "referentName": "BRUN SANDRINE",
    "secteurERSEH": "ROSA_PARKS_1",
    "cpcName": "",
    "email": "ce.0130597D@ac-aix-marseille.fr",
    "phone": "491580042",
    "referentPhone": "06 10 90 10 36",
    "referentEmail": "ce.erseh13-rosapark1@ac-aix-marseille.fr"
  },
  {
    "id": "0130598e",
    "rne": "0130598E",
    "name": "OLIVES (LES)",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "147 avenue des Poilus",
    "postalCode": "13013",
    "latitude": 43.322376,
    "longitude": 5.457785,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME NATHALIE GOMEZ",
    "referentName": "BREUX GOBIN LAURENCE",
    "secteurERSEH": "MALRAUX_1",
    "cpcName": "",
    "email": "ce.0130598E@ac-aix-marseille.fr",
    "phone": "491662760",
    "referentPhone": "06 25 11 49 38",
    "referentEmail": "ce.erseh13-malraux1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130570z",
    "rne": "0130570Z",
    "name": "OLIVIER GILLIBERT",
    "type": "elementaire",
    "city": "MARSEILLE  5E  ARRONDISSEMENT",
    "address": "46 rue Gillibert",
    "postalCode": "13005",
    "latitude": 43.294345,
    "longitude": 5.393333,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME FABIENNE PRONESTI",
    "referentName": "GIRARD STEPHANIE",
    "secteurERSEH": "PUGET_4",
    "cpcName": "",
    "email": "ce.0130570Z@ac-aix-marseille.fr",
    "phone": "491422118",
    "referentPhone": "06 14 60 78 10",
    "referentEmail": "ce.erseh13-puget4@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130528d",
    "rne": "0130528D",
    "name": "OLYMPE DE GOUGES",
    "type": "elementaire",
    "city": "MARSEILLE 12E  ARRONDISSEMENT",
    "address": "74 rue Beau",
    "postalCode": "13012",
    "latitude": 43.301208,
    "longitude": 5.411275,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. MARC BURLAT",
    "referentName": "RAOUX GUILLAUME",
    "secteurERSEH": "FRAISSINET",
    "cpcName": "",
    "email": "ce.0130528D@ac-aix-marseille.fr",
    "phone": "491490848",
    "referentPhone": "06 25 11 28 04",
    "referentEmail": "ce.erseh13-fraissinet@ac-aix-marseille.fr"
  },
  {
    "id": "0130599f",
    "rne": "0130599F",
    "name": "PAIX",
    "type": "elementaire",
    "city": "MARSEILLE  6E  ARRONDISSEMENT",
    "address": "56 rue de la Paix",
    "postalCode": "13006",
    "latitude": 43.291053,
    "longitude": 5.373067,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VIRGINIE MONTEBELLO",
    "referentName": "FOISSET CHRISTINE",
    "secteurERSEH": "LONGCHAMP",
    "cpcName": "",
    "email": "ce.0130599F@ac-aix-marseille.fr",
    "phone": "491546918",
    "referentPhone": "06 21 54 57 10",
    "referentEmail": "ce.erseh13-longchamp@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132603j",
    "rne": "0132603J",
    "name": "PARADE",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "Chemin de Palama",
    "postalCode": "13013",
    "latitude": 43.35732,
    "longitude": 5.439526,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LAURENCE SARRAZIN",
    "referentName": "BREUX GOBIN LAURENCE",
    "secteurERSEH": "MALRAUX_1",
    "cpcName": "",
    "email": "ce.0132603J@ac-aix-marseille.fr",
    "phone": "491685000",
    "referentPhone": "06 25 11 49 38",
    "referentEmail": "ce.erseh13-malraux1@ac-aix-marseille.fr"
  },
  {
    "id": "0130518t",
    "rne": "0130518T",
    "name": "PARC  BELLEVUE",
    "type": "elementaire",
    "city": "MARSEILLE  3E  ARRONDISSEMENT",
    "address": "40 rue Loubon",
    "postalCode": "13003",
    "latitude": 43.317622,
    "longitude": 5.373522,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. DAVID FORTIER",
    "referentName": "BRUN SANDRINE",
    "secteurERSEH": "ROSA_PARKS_1",
    "cpcName": "",
    "email": "ce.0130518T@ac-aix-marseille.fr",
    "phone": "491582686",
    "referentPhone": "06 10 90 10 36",
    "referentEmail": "ce.erseh13-rosapark1@ac-aix-marseille.fr"
  },
  {
    "id": "0130600g",
    "rne": "0130600G",
    "name": "PARC DROMEL",
    "type": "elementaire",
    "city": "MARSEILLE  9E  ARRONDISSEMENT",
    "address": "11 boulevard Dromel",
    "postalCode": "13009",
    "latitude": 43.270661,
    "longitude": 5.405962,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MAGALI BOURDET",
    "referentName": "ATTEIA CAROLINE",
    "secteurERSEH": "GYPTIS_2",
    "cpcName": "",
    "email": "ce.0130600g@ac-aix-marseille.fr",
    "phone": "413948007",
    "referentPhone": "06 21 54 77 71",
    "referentEmail": "ce.erseh13-gyptis2@ac-aix-marseille.fr"
  },
  {
    "id": "0131637j",
    "rne": "0131637J",
    "name": "PARC KALLISTE",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "Chemin des Bourrely",
    "postalCode": "13015",
    "latitude": 43.386259,
    "longitude": 5.365117,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. JEAN FRANCOIS BIENAIME",
    "referentName": "MEURANT OLIVIER",
    "secteurERSEH": "VALLON_DES_PINS",
    "cpcName": "",
    "email": "ce.0131637J@ac-aix-marseille.fr",
    "phone": "491511842",
    "referentPhone": "06 21 54 79 68",
    "referentEmail": "ce.erseh13-vallondespins@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130601h",
    "rne": "0130601H",
    "name": "PARETTE MAZENODE",
    "type": "elementaire",
    "city": "MARSEILLE 11E  ARRONDISSEMENT",
    "address": "427 boulevard Mireille Lauze",
    "postalCode": "13011",
    "latitude": 43.287305,
    "longitude": 5.430392,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSLA",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MURIELLE GAIARSA",
    "referentName": "ATTEIA CAROLINE",
    "secteurERSEH": "GYPTIS_2",
    "cpcName": "",
    "email": "ce.0130601H@ac-aix-marseille.fr",
    "phone": "491449891",
    "referentPhone": "06 21 54 77 71",
    "referentEmail": "ce.erseh13-gyptis2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSLA",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132044b",
    "rne": "0132044B",
    "name": "PASTRE GRANDE BASTIDE",
    "type": "elementaire",
    "city": "MARSEILLE  9E  ARRONDISSEMENT",
    "address": "32 traverse Pastré",
    "postalCode": "13009",
    "latitude": 43.261805,
    "longitude": 5.420748,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MÂ‚lanie LE ROUVILLOIS",
    "referentName": "ATTEIA CAROLINE",
    "secteurERSEH": "GYPTIS_2",
    "cpcName": "",
    "email": "ce.0132044B@ac-aix-marseille.fr",
    "phone": "496190606",
    "referentPhone": "06 21 54 77 71",
    "referentEmail": "ce.erseh13-gyptis2@ac-aix-marseille.fr"
  },
  {
    "id": "0130603k",
    "rne": "0130603K",
    "name": "PAULINE (LA)",
    "type": "elementaire",
    "city": "MARSEILLE  9E  ARRONDISSEMENT",
    "address": "343 boulevard Romain Rolland",
    "postalCode": "13009",
    "latitude": 43.271437,
    "longitude": 5.410074,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CELINE ROQUE",
    "referentName": "ATTEIA CAROLINE",
    "secteurERSEH": "GYPTIS_2",
    "cpcName": "",
    "email": "ce.0130603K@ac-aix-marseille.fr",
    "phone": "491755255",
    "referentPhone": "06 21 54 77 71",
    "referentEmail": "ce.erseh13-gyptis2@ac-aix-marseille.fr"
  },
  {
    "id": "0130604l",
    "rne": "0130604L",
    "name": "PETIT BOSQUET",
    "type": "elementaire",
    "city": "MARSEILLE 12E  ARRONDISSEMENT",
    "address": "181 avenue de Montolivet",
    "postalCode": "13012",
    "latitude": 43.312442,
    "longitude": 5.411215,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SOLANGE PRADOURA",
    "referentName": "BEN HADJ OTHMAN ADEL",
    "secteurERSEH": "CHARTREUX_1",
    "cpcName": "",
    "email": "ce.0130604L@ac-aix-marseille.fr",
    "phone": "491663964",
    "referentPhone": "06 25 11 53 02",
    "referentEmail": "ce.erseh13-chartreux1@ac-aix-marseille.fr"
  },
  {
    "id": "0131537a",
    "rne": "0131537A",
    "name": "PEYSSONNEL 1",
    "type": "elementaire",
    "city": "MARSEILLE  3E  ARRONDISSEMENT",
    "address": "22 rue Peyssonnel",
    "postalCode": "13003",
    "latitude": 43.307732,
    "longitude": 5.373117,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME RACHEL GERVASONI",
    "referentName": "CHAVANT MARION",
    "secteurERSEH": "DSDEN_2",
    "cpcName": "",
    "email": "ce.0131537A@ac-aix-marseille.fr",
    "phone": "491503762",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ],
    "referentPhone": "06 14 60 35 34",
    "referentEmail": "ce.erseh13-dsden2@ac-aix-marseille.fr"
  },
  {
    "id": "0131538b",
    "rne": "0131538B",
    "name": "PEYSSONNEL 2",
    "type": "elementaire",
    "city": "MARSEILLE  3E  ARRONDISSEMENT",
    "address": "26 rue Peyssonnel",
    "postalCode": "13003",
    "latitude": 43.307896,
    "longitude": 5.37281,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHRISTINE VILLETE",
    "referentName": "CHAVANT MARION",
    "secteurERSEH": "DSDEN_2",
    "cpcName": "",
    "email": "ce.0131538B@ac-aix-marseille.fr",
    "phone": "491507623",
    "referentPhone": "06 14 60 35 34",
    "referentEmail": "ce.erseh13-dsden2@ac-aix-marseille.fr"
  },
  {
    "id": "0130605m",
    "rne": "0130605M",
    "name": "PHARO CATALANS",
    "type": "elementaire",
    "city": "MARSEILLE  7E  ARRONDISSEMENT",
    "address": "Rue des Catalans",
    "postalCode": "13007",
    "latitude": 43.292507,
    "longitude": 5.355185,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME PASCALE PILA",
    "referentName": "THIVANT ISABELLE",
    "secteurERSEH": "PUGET_2",
    "cpcName": "",
    "email": "ce.0130605M@ac-aix-marseille.fr",
    "phone": "491523732",
    "referentPhone": "06 14 60 39 97",
    "referentEmail": "ce.erseh13-puget2@ac-aix-marseille.fr"
  },
  {
    "id": "0132155x",
    "rne": "0132155X",
    "name": "PLAN D'AOU",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "1 bd du commandant Robert Thollo",
    "postalCode": "13015",
    "latitude": 43.369335,
    "longitude": 5.354832,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ANNE COLLET",
    "referentName": "CARLIER CECILE",
    "secteurERSEH": "BARNIER",
    "cpcName": "",
    "email": "ce.0132155X@ac-aix-marseille.fr",
    "phone": "491512737",
    "referentPhone": "06 14 60 77 59",
    "referentEmail": "ce.erseh13-barnier@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130606n",
    "rne": "0130606N",
    "name": "POINTE ROUGE",
    "type": "elementaire",
    "city": "MARSEILLE 08E  ARRONDISSEMENT",
    "address": "10 boulevard PIOT",
    "postalCode": "13008",
    "latitude": 43.243081,
    "longitude": 5.371619,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME EMMEANUELLE MARTIN-CASSAR",
    "referentName": "SAGET DOMINIQUE",
    "secteurERSEH": "ROY_D_ESPAGNE_2",
    "cpcName": "",
    "email": "ce.0130606N@ac-aix-marseille.fr",
    "phone": "491733566",
    "referentPhone": "06 21 54 61 16",
    "referentEmail": "ce.erseh13-roydespagne2@ac-aix-marseille.fr"
  },
  {
    "id": "0130766m",
    "rne": "0130766M",
    "name": "POMME HECKEL",
    "type": "elementaire",
    "city": "MARSEILLE 11E  ARRONDISSEMENT",
    "address": "28 avenue du Docteur Heckel",
    "postalCode": "13011",
    "latitude": 43.288937,
    "longitude": 5.440947,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SOPHIE KERMOAL",
    "referentName": "BEDJIDIAN LYDIA",
    "secteurERSEH": "FORBIN",
    "cpcName": "",
    "email": "ce.0130766M@ac-aix-marseille.fr",
    "phone": "491351527",
    "referentPhone": "06 14 60 43 08",
    "referentEmail": "ce.erseh13-forbin@ac-aix-marseille.fr"
  },
  {
    "id": "0132485f",
    "rne": "0132485F",
    "name": "POMME SAINTE MADELEINE",
    "type": "elementaire",
    "city": "MARSEILLE 11E  ARRONDISSEMENT",
    "address": "Avenue Bernard Lecache",
    "postalCode": "13011",
    "latitude": 43.29469,
    "longitude": 5.448165,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. BERTRAND LACHAUD",
    "referentName": "LA ROCCA MYRTILLE",
    "secteurERSEH": "CAILLOLS_1",
    "cpcName": "",
    "email": "ce.0132485F@ac-aix-marseille.fr",
    "phone": "491447960",
    "referentPhone": "06 14 60 06 79",
    "referentEmail": "ce.erseh13-caillols1@ac-aix-marseille.fr"
  },
  {
    "id": "0130914y",
    "rne": "0130914Y",
    "name": "POMMIER",
    "type": "elementaire",
    "city": "MARSEILLE  3E  ARRONDISSEMENT",
    "address": "6 rue Pommier",
    "postalCode": "13003",
    "latitude": 43.309246,
    "longitude": 5.381124,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME EMMEANUELLE QUETTE",
    "referentName": "CHAVANT MARION",
    "secteurERSEH": "DSDEN_2",
    "cpcName": "",
    "email": "ce.0130914Y@ac-aix-marseille.fr",
    "phone": "491640358",
    "referentPhone": "06 14 60 35 34",
    "referentEmail": "ce.erseh13-dsden2@ac-aix-marseille.fr"
  },
  {
    "id": "0130609s",
    "rne": "0130609S",
    "name": "PONT DE VIVAUX SACCOMAN",
    "type": "elementaire",
    "city": "MARSEILLE 10E  ARRONDISSEMENT",
    "address": "200 boulevard Romain Rolland",
    "postalCode": "13010",
    "latitude": 43.275869,
    "longitude": 5.416232,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CATHERINE LOMBARDO PAOLI",
    "referentName": "PIQUOT DELPHINE",
    "secteurERSEH": "LOUISE_MICHEL",
    "cpcName": "",
    "email": "ce.0130609S@ac-aix-marseille.fr",
    "phone": "491796659",
    "referentPhone": "06 14 60 73 17",
    "referentEmail": "ce.erseh13-louisemichel@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0133188v",
    "rne": "0133188V",
    "name": "PRADO PLAGE",
    "type": "elementaire",
    "city": "MARSEILLE 08E  ARRONDISSEMENT",
    "address": "122 rue Commandant Rolland",
    "postalCode": "13008",
    "latitude": 43.269439,
    "longitude": 5.378836,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. SYLVAIN ROSATI",
    "referentName": "THIVANT ISABELLE",
    "secteurERSEH": "PUGET_2",
    "cpcName": "",
    "email": "ce.0133188V@ac-aix-marseille.fr",
    "phone": "491773797",
    "referentPhone": "06 14 60 39 97",
    "referentEmail": "ce.erseh13-puget2@ac-aix-marseille.fr"
  },
  {
    "id": "0132074j",
    "rne": "0132074J",
    "name": "PROTESTANTE D'ENDOUME",
    "type": "elementaire",
    "city": "MARSEILLE  7E  ARRONDISSEMENT",
    "address": "29 avenue David Dellepiane",
    "postalCode": "13007",
    "latitude": 43.284941,
    "longitude": 5.363744,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME  SUMIAN",
    "referentName": "THIVANT ISABELLE",
    "secteurERSEH": "PUGET_2",
    "cpcName": "",
    "email": "ce.0132074J@ac-aix-marseille.fr",
    "phone": "491526501",
    "referentPhone": "06 14 60 39 97",
    "referentEmail": "ce.erseh13-puget2@ac-aix-marseille.fr"
  },
  {
    "id": "0132038v",
    "rne": "0132038V",
    "name": "PROVENCE",
    "type": "elementaire",
    "city": "MARSEILLE 08E  ARRONDISSEMENT",
    "address": "42 boulevard Emile Sicard",
    "postalCode": "13008",
    "latitude": 43.270277,
    "longitude": 5.384506,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. Eric MARTELLI",
    "referentName": "ADNOT LAURENCE",
    "secteurERSEH": "ROY_D_ESPAGNE_1",
    "cpcName": "",
    "email": "ce.0132038V@ac-aix-marseille.fr",
    "phone": "491772846",
    "referentPhone": "06 25 11 23 05",
    "referentEmail": "ce.erseh13-roydespagne1@ac-aix-marseille.fr"
  },
  {
    "id": "0131552s",
    "rne": "0131552S",
    "name": "RAYMOND TEISSEIRE",
    "type": "elementaire",
    "city": "MARSEILLE 08E  ARRONDISSEMENT",
    "address": "64 boulevard Rabatau",
    "postalCode": "13008",
    "latitude": 43.275393,
    "longitude": 5.397438,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. OLIVIER LABARSOUQUE",
    "referentName": "PARDO ALAIN",
    "secteurERSEH": "LONGCHAMP_2",
    "cpcName": "",
    "email": "ce.0131552S@ac-aix-marseille.fr",
    "phone": "491794306",
    "referentPhone": "06 25 11 56 03",
    "referentEmail": "ce.erseh13-longchamp2@ac-aix-marseille.fr"
  },
  {
    "id": "0131640m",
    "rne": "0131640M",
    "name": "REVOLUTION",
    "type": "elementaire",
    "city": "MARSEILLE  3E  ARRONDISSEMENT",
    "address": "38 rue du Jet d'Eau",
    "postalCode": "13003",
    "latitude": 43.314754,
    "longitude": 5.382577,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. DENIS SOTO",
    "referentName": "CHAVANT MARION",
    "secteurERSEH": "DSDEN_2",
    "cpcName": "",
    "email": "ce.0131640M@ac-aix-marseille.fr",
    "phone": "491501792",
    "referentPhone": "06 14 60 35 34",
    "referentEmail": "ce.erseh13-dsden2@ac-aix-marseille.fr"
  },
  {
    "id": "0134240n",
    "rne": "0134240N",
    "name": "REVOLUTION VAILLANT",
    "type": "elementaire",
    "city": "MARSEILLE  3E  ARRONDISSEMENT",
    "address": "45 rue Edouard Vaillant",
    "postalCode": "13003",
    "latitude": 43.315873,
    "longitude": 5.379824,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. HEINS-XAVIER CRENER",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ce.0134240N@ac-aix-marseille.fr",
    "phone": "491478172",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0133936h",
    "rne": "0133936H",
    "name": "ROBERT SCHUMAN",
    "type": "elementaire",
    "city": "MARSEILLE  3E  ARRONDISSEMENT",
    "address": "128 rue PEYSSONNEL",
    "postalCode": "13003",
    "latitude": 43.313523,
    "longitude": 5.369349,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Françoise MAZZONETTO",
    "referentName": "PENNETIER MANON",
    "secteurERSEH": "PRIVE_1",
    "cpcName": "",
    "email": "ce.0133936H@ac-aix-marseille.fr",
    "phone": "964449480",
    "referentPhone": "06 28 58 88 63",
    "referentEmail": "ce.erseh13-prive1@ac-aix-marseille.fr"
  },
  {
    "id": "0130613w",
    "rne": "0130613W",
    "name": "ROSE CASTORS",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "Parc des Vieux Cyprès",
    "postalCode": "13013",
    "latitude": 43.337678,
    "longitude": 5.433348,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CELINE JACQUIN",
    "referentName": "TURCAT CLEMENCE",
    "secteurERSEH": "MALRAUX_4",
    "cpcName": "",
    "email": "ce.0130613W@ac-aix-marseille.fr",
    "phone": "491663908",
    "referentPhone": "06 21 54 55 44",
    "referentEmail": "ce.erseh13-malraux4@ac-aix-marseille.fr"
  },
  {
    "id": "0130773v",
    "rne": "0130773V",
    "name": "ROSE FRAIS VALLON NORD",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "39 avenue de Frais Vallon",
    "postalCode": "13013",
    "latitude": 43.325197,
    "longitude": 5.426701,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. JEAN MARC BIAGINI FABRE",
    "referentName": "AGRESTI SYLVIE",
    "secteurERSEH": "MALRAUX_3",
    "cpcName": "",
    "email": "ce.0130773V@ac-aix-marseille.fr",
    "phone": "491662716",
    "referentPhone": "06 21 54 36 79",
    "referentEmail": "ce.erseh13-malraux3@ac-aix-marseille.fr"
  },
  {
    "id": "0132183c",
    "rne": "0132183C",
    "name": "ROSE FRAIS VALLON SUD",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "Avenue de Frais Vallon",
    "postalCode": "13013",
    "latitude": 43.325622,
    "longitude": 5.42828,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. PHILIPPE PAGNI",
    "referentName": "AGRESTI SYLVIE",
    "secteurERSEH": "MALRAUX_3",
    "cpcName": "",
    "email": "ce.0132183C@ac-aix-marseille.fr",
    "phone": "491661496",
    "referentPhone": "06 21 54 36 79",
    "referentEmail": "ce.erseh13-malraux3@ac-aix-marseille.fr"
  },
  {
    "id": "0132267u",
    "rne": "0132267U",
    "name": "ROSE LA GARDE",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "Rue Augustin Merlhou",
    "postalCode": "13013",
    "latitude": 43.332528,
    "longitude": 5.42797,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CAROLINE VITALI",
    "referentName": "AGRESTI SYLVIE",
    "secteurERSEH": "MALRAUX_3",
    "cpcName": "",
    "email": "ce.0132267U@ac-aix-marseille.fr",
    "phone": "491661305",
    "referentPhone": "06 21 54 36 79",
    "referentEmail": "ce.erseh13-malraux3@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130616z",
    "rne": "0130616Z",
    "name": "ROSE PLACE",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "Place de la Rose",
    "postalCode": "13013",
    "latitude": 43.328662,
    "longitude": 5.428229,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. DAVID HEBERT",
    "referentName": "AGRESTI SYLVIE",
    "secteurERSEH": "MALRAUX_3",
    "cpcName": "",
    "email": "ce.0130616Z@ac-aix-marseille.fr",
    "phone": "491662171",
    "referentPhone": "06 21 54 36 79",
    "referentEmail": "ce.erseh13-malraux3@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130618b",
    "rne": "0130618B",
    "name": "ROSE SAINT THEODORE (LA)",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "5 allée des Chardonnerets",
    "postalCode": "13013",
    "latitude": 43.330625,
    "longitude": 5.433924,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ELODIE POULET",
    "referentName": "TURCAT CLEMENCE",
    "secteurERSEH": "MALRAUX_4",
    "cpcName": "",
    "email": "ce.0130618B@ac-aix-marseille.fr",
    "phone": "491660087",
    "referentPhone": "06 21 54 55 44",
    "referentEmail": "ce.erseh13-malraux4@ac-aix-marseille.fr"
  },
  {
    "id": "0130617a",
    "rne": "0130617A",
    "name": "ROSE SAUVAGINE",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "Avenue Merleau Ponty",
    "postalCode": "13013",
    "latitude": 43.335034,
    "longitude": 5.426629,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHRISTEL FERRY",
    "referentName": "AGRESTI SYLVIE",
    "secteurERSEH": "MALRAUX_3",
    "cpcName": "",
    "email": "ce.0130617A@ac-aix-marseille.fr",
    "phone": "491663832",
    "referentPhone": "06 21 54 36 79",
    "referentEmail": "ce.erseh13-malraux3@ac-aix-marseille.fr"
  },
  {
    "id": "0131227n",
    "rne": "0131227N",
    "name": "ROSE VAL PLAN",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "77 avenue de la Croix Rouge",
    "postalCode": "13013",
    "latitude": 43.332821,
    "longitude": 5.433967,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. DIDIER GRUT",
    "referentName": "BREUX GOBIN LAURENCE",
    "secteurERSEH": "MALRAUX_1",
    "cpcName": "",
    "email": "ce.0131227N@ac-aix-marseille.fr",
    "phone": "491664389",
    "referentPhone": "06 25 11 49 38",
    "referentEmail": "ce.erseh13-malraux1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130619c",
    "rne": "0130619C",
    "name": "ROSERAIE (LA)",
    "type": "elementaire",
    "city": "MARSEILLE  7E  ARRONDISSEMENT",
    "address": "6 rue Pierre Mouren",
    "postalCode": "13007",
    "latitude": 43.28275,
    "longitude": 5.352214,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME STEPHANIE BENZAIM",
    "referentName": "THIVANT ISABELLE",
    "secteurERSEH": "PUGET_2",
    "cpcName": "",
    "email": "ce.0130619C@ac-aix-marseille.fr",
    "phone": "491521216",
    "referentPhone": "06 14 60 39 97",
    "referentEmail": "ce.erseh13-puget2@ac-aix-marseille.fr"
  },
  {
    "id": "0130620d",
    "rne": "0130620D",
    "name": "ROSIERE FIGONE",
    "type": "elementaire",
    "city": "MARSEILLE 12E  ARRONDISSEMENT",
    "address": "Avenue de la Figone",
    "postalCode": "13012",
    "latitude": 43.306014,
    "longitude": 5.438592,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 10,
      "placesVacantes": 10,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CORINNE DI STEFANO",
    "referentName": "VINCENT ERIC",
    "secteurERSEH": "CAILLOLS_2",
    "cpcName": "",
    "email": "ce.0130620D@ac-aix-marseille.fr",
    "phone": "491930088",
    "referentPhone": "06 21 54 00 32",
    "referentEmail": "ce.erseh13-caillols2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 10,
        "placesVacantes": 10,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130918c",
    "rne": "0130918C",
    "name": "ROUCAS BLANC",
    "type": "elementaire",
    "city": "MARSEILLE  7E  ARRONDISSEMENT",
    "address": "44 chemin du Roucas Blanc",
    "postalCode": "13007",
    "latitude": 43.286771,
    "longitude": 5.366164,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CATHERINE PILA",
    "referentName": "THIVANT ISABELLE",
    "secteurERSEH": "PUGET_2",
    "cpcName": "",
    "email": "ce.0130918C@ac-aix-marseille.fr",
    "phone": "491526926",
    "referentPhone": "06 14 60 39 97",
    "referentEmail": "ce.erseh13-puget2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130621e",
    "rne": "0130621E",
    "name": "ROUET (LE)",
    "type": "elementaire",
    "city": "MARSEILLE 08E  ARRONDISSEMENT",
    "address": "10 rue SAINTE FAMILLE",
    "postalCode": "13008",
    "latitude": 43.277973,
    "longitude": 5.393416,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. PATRICK LEFRANCOIS",
    "referentName": "PARDO ALAIN",
    "secteurERSEH": "LONGCHAMP_2",
    "cpcName": "",
    "email": "ce.0130621E@ac-aix-marseille.fr",
    "phone": "491791641",
    "referentPhone": "06 25 11 56 03",
    "referentEmail": "ce.erseh13-longchamp2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0134167j",
    "rne": "0134167J",
    "name": "ROUET CHARLES ALLE",
    "type": "elementaire",
    "city": "MARSEILLE 08E  ARRONDISSEMENT",
    "address": "2 place Louis Ducreux",
    "postalCode": "13008",
    "latitude": 43.279747,
    "longitude": 5.392141,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 10,
      "placesVacantes": 10,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SANDRA ISOARD",
    "referentName": "FINO HELENE",
    "secteurERSEH": "PUGET_1",
    "cpcName": "",
    "email": "ce.0134167J@ac-aix-marseille.fr",
    "phone": "496190815",
    "referentPhone": "06 21 54 03 57",
    "referentEmail": "ce.erseh13-puget1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 10,
        "placesVacantes": 10,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130622f",
    "rne": "0130622F",
    "name": "ROUGUIERE (LA)",
    "type": "elementaire",
    "city": "MARSEILLE 11E  ARRONDISSEMENT",
    "address": "Allée de la Rouguière",
    "postalCode": "13011",
    "latitude": 43.295251,
    "longitude": 5.459954,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. SEBASTIEN FELIUS",
    "referentName": "LA ROCCA MYRTILLE",
    "secteurERSEH": "CAILLOLS_1",
    "cpcName": "",
    "email": "ce.0130622F@ac-aix-marseille.fr",
    "phone": "491894683",
    "referentPhone": "06 14 60 06 79",
    "referentEmail": "ce.erseh13-caillols1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130623g",
    "rne": "0130623G",
    "name": "ROUVIERE (LA)",
    "type": "elementaire",
    "city": "MARSEILLE  9E  ARRONDISSEMENT",
    "address": "83 boulevard du Redon",
    "postalCode": "13009",
    "latitude": 43.251364,
    "longitude": 5.423726,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SANDRINE TROUILLET",
    "referentName": "ICART CECILE",
    "secteurERSEH": "GYPTIS_1",
    "cpcName": "",
    "email": "ce.0130623G@ac-aix-marseille.fr",
    "phone": "491413489",
    "referentPhone": "06 25 11 81 66",
    "referentEmail": "ce.erseh13-gyptis1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131209u",
    "rne": "0131209U",
    "name": "ROY D'ESPAGNE",
    "type": "elementaire",
    "city": "MARSEILLE 08E  ARRONDISSEMENT",
    "address": "1 allée EMMANUEL CHABRIER",
    "postalCode": "13008",
    "latitude": 43.2397,
    "longitude": 5.386075,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME TATIANA MATHIEUX",
    "referentName": "SAGET DOMINIQUE",
    "secteurERSEH": "ROY_D_ESPAGNE_2",
    "cpcName": "",
    "email": "ce.0131209U@ac-aix-marseille.fr",
    "phone": "491732213",
    "referentPhone": "06 21 54 61 16",
    "referentEmail": "ce.erseh13-roydespagne2@ac-aix-marseille.fr"
  },
  {
    "id": "0132080r",
    "rne": "0132080R",
    "name": "SACRE-COEUR",
    "type": "elementaire",
    "city": "MARSEILLE  1ER ARRONDISSEMENT",
    "address": "22 rue Barthélémy",
    "postalCode": "13001",
    "latitude": 43.297313,
    "longitude": 5.386443,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME  LEROMAN",
    "referentName": "LEVY GHISLAINE",
    "secteurERSEH": "PRIVE_7",
    "cpcName": "",
    "email": "ce.0132080R@ac-aix-marseille.fr",
    "phone": "491480592",
    "referentPhone": "06 12 97 29 60",
    "referentEmail": "ce.erseh13-prive7@ac-aix-marseille.fr"
  },
  {
    "id": "0132919c",
    "rne": "0132919C",
    "name": "SACRE-COEUR-ROUCAS-BLANC",
    "type": "elementaire",
    "city": "MARSEILLE  7E  ARRONDISSEMENT",
    "address": "244 chemin du Roucas Blanc",
    "postalCode": "13007",
    "latitude": 43.279468,
    "longitude": 5.368325,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MARIE CROCQUET",
    "referentName": "THIVANT ISABELLE",
    "secteurERSEH": "PUGET_2",
    "cpcName": "",
    "email": "sacre.coeur.roucas@numericable.fr",
    "phone": "491526088",
    "referentPhone": "06 14 60 39 97",
    "referentEmail": "ce.erseh13-puget2@ac-aix-marseille.fr"
  },
  {
    "id": "0132176v",
    "rne": "0132176V",
    "name": "SAINT ANDRE BARNIER",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "274 boulevard Barnier",
    "postalCode": "13015",
    "latitude": 43.364812,
    "longitude": 5.341724,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TED",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. OLIVIER MORIN",
    "referentName": "CARLIER CECILE",
    "secteurERSEH": "BARNIER",
    "cpcName": "",
    "email": "ce.0132176V@ac-aix-marseille.fr",
    "phone": "491460583",
    "referentPhone": "06 14 60 77 59",
    "referentEmail": "ce.erseh13-barnier@ac-aix-marseille.fr"
  },
  {
    "id": "0130783f",
    "rne": "0130783F",
    "name": "SAINT ANDRE CONDORCET",
    "type": "elementaire",
    "city": "MARSEILLE 16E  ARRONDISSEMENT",
    "address": "64 rue Condorcet",
    "postalCode": "13016",
    "latitude": 43.357736,
    "longitude": 5.341644,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSLA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. JEAN BAPTISTE JAMPY",
    "referentName": "CARLIER CECILE",
    "secteurERSEH": "BARNIER",
    "cpcName": "",
    "email": "ce.0130783F@ac-aix-marseille.fr",
    "phone": "491460392",
    "referentPhone": "06 14 60 77 59",
    "referentEmail": "ce.erseh13-barnier@ac-aix-marseille.fr"
  },
  {
    "id": "0131821j",
    "rne": "0131821J",
    "name": "SAINT ANDRE LA CASTELLANE",
    "type": "elementaire",
    "city": "MARSEILLE 16E  ARRONDISSEMENT",
    "address": "66 chemin de Bernex",
    "postalCode": "13016",
    "latitude": 43.369104,
    "longitude": 5.340782,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MARJORIE FLOSI MELANCHON",
    "referentName": "CARLIER CECILE",
    "secteurERSEH": "BARNIER",
    "cpcName": "",
    "email": "ce.0131821J@ac-aix-marseille.fr",
    "phone": "491460431",
    "referentPhone": "06 14 60 77 59",
    "referentEmail": "ce.erseh13-barnier@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130626k",
    "rne": "0130626K",
    "name": "SAINT ANTOINE PALANQUE",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "Chemin de la Martine",
    "postalCode": "13015",
    "latitude": 43.37341,
    "longitude": 5.364111,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CARINE CAYRIER-JULES",
    "referentName": "SOLEIL VIRGINIE",
    "secteurERSEH": "ROSA_PARKS_2",
    "cpcName": "",
    "email": "ce.0130626K@ac-aix-marseille.fr",
    "phone": "491656270",
    "referentPhone": "06 10 90 30 81",
    "referentEmail": "ce.erseh13-rosapark2@ac-aix-marseille.fr"
  },
  {
    "id": "0132082t",
    "rne": "0132082T",
    "name": "SAINT BARNABE",
    "type": "elementaire",
    "city": "MARSEILLE 12E  ARRONDISSEMENT",
    "address": "2 rue Léon Meisserel",
    "postalCode": "13012",
    "latitude": 43.304623,
    "longitude": 5.418603,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 10,
      "placesVacantes": 10,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Isabelle MARTELLI",
    "referentName": "PENNETIER MANON",
    "secteurERSEH": "PRIVE_1",
    "cpcName": "",
    "email": "ce.0132082T@ac-aix-marseille.fr",
    "phone": "491496930",
    "referentPhone": "06 28 58 88 63",
    "referentEmail": "ce.erseh13-prive1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 10,
        "placesVacantes": 10,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130627l",
    "rne": "0130627L",
    "name": "SAINT BARNABE",
    "type": "elementaire",
    "city": "MARSEILLE 12E  ARRONDISSEMENT",
    "address": "27 rue Docteur Cauvin",
    "postalCode": "13012",
    "latitude": 43.302366,
    "longitude": 5.417674,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 10,
      "placesVacantes": 10,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VALERIE DOMERGUE",
    "referentName": "VINCENT ERIC",
    "secteurERSEH": "CAILLOLS_2",
    "cpcName": "",
    "email": "ce.0130627L@ac-aix-marseille.fr",
    "phone": "491490654",
    "referentPhone": "06 21 54 00 32",
    "referentEmail": "ce.erseh13-caillols2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 10,
        "placesVacantes": 10,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132429v",
    "rne": "0132429V",
    "name": "SAINT BARTHELEMY FLAMANTS",
    "type": "elementaire",
    "city": "MARSEILLE 14E  ARRONDISSEMENT",
    "address": "64 avenue Alexandre Ansaldi",
    "postalCode": "13014",
    "latitude": 43.33067,
    "longitude": 5.40347,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MYRIAM HILAIRE",
    "referentName": "TURCAT CLEMENCE",
    "secteurERSEH": "MALRAUX_4",
    "cpcName": "",
    "email": "ce.0132429V@ac-aix-marseille.fr",
    "phone": "491981184",
    "referentPhone": "06 21 54 55 44",
    "referentEmail": "ce.erseh13-malraux4@ac-aix-marseille.fr"
  },
  {
    "id": "0130629n",
    "rne": "0130629N",
    "name": "SAINT BARTHELEMY SNCF",
    "type": "elementaire",
    "city": "MARSEILLE 14E  ARRONDISSEMENT",
    "address": "Chemin de Sainte Marthe",
    "postalCode": "13014",
    "latitude": 43.323576,
    "longitude": 5.391183,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. LAURENT PERSINI",
    "referentName": "GUIZIOU STEPHANIE",
    "secteurERSEH": "WALLON",
    "cpcName": "",
    "email": "ce.0130629N@ac-aix-marseille.fr",
    "phone": "491981910",
    "referentPhone": "06 25 11 50 07",
    "referentEmail": "ce.erseh13-wallon@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130630p",
    "rne": "0130630P",
    "name": "SAINT CHARLES 1 (APPL)",
    "type": "elementaire",
    "city": "MARSEILLE  3E  ARRONDISSEMENT",
    "address": "49 rue Lucien Rolmer",
    "postalCode": "13003",
    "latitude": 43.306758,
    "longitude": 5.376965,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. PHILIPPE LUCCHESI",
    "referentName": "FOISSET CHRISTINE",
    "secteurERSEH": "LONGCHAMP",
    "cpcName": "",
    "email": "ce.0130630P@ac-aix-marseille.fr",
    "phone": "491502486",
    "referentPhone": "06 21 54 57 10",
    "referentEmail": "ce.erseh13-longchamp@ac-aix-marseille.fr"
  },
  {
    "id": "0130788l",
    "rne": "0130788L",
    "name": "SAINT CHARLES 2",
    "type": "elementaire",
    "city": "MARSEILLE  3E  ARRONDISSEMENT",
    "address": "36 rue du 141ème RIA",
    "postalCode": "13003",
    "latitude": 43.306826,
    "longitude": 5.379946,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. BRUNO GIRY FAVARD",
    "referentName": "FOISSET CHRISTINE",
    "secteurERSEH": "LONGCHAMP",
    "cpcName": "",
    "email": "ce.0130788L@ac-aix-marseille.fr",
    "phone": "491503953",
    "referentPhone": "06 21 54 57 10",
    "referentEmail": "ce.erseh13-longchamp@ac-aix-marseille.fr"
  },
  {
    "id": "0132064y",
    "rne": "0132064Y",
    "name": "SAINT CHARLES CAMAS",
    "type": "elementaire",
    "city": "MARSEILLE  5E  ARRONDISSEMENT",
    "address": "21 rue du Camas",
    "postalCode": "13005",
    "latitude": 43.298438,
    "longitude": 5.392628,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Muriel PRUVOT",
    "referentName": "LEVY GHISLAINE",
    "secteurERSEH": "PRIVE_7",
    "cpcName": "",
    "email": "ce.0132064Y@ac-aix-marseille.fr",
    "phone": "495081240",
    "referentPhone": "06 12 97 29 60",
    "referentEmail": "ce.erseh13-prive7@ac-aix-marseille.fr"
  },
  {
    "id": "0133208s",
    "rne": "0133208S",
    "name": "SAINT FERREOL",
    "type": "elementaire",
    "city": "MARSEILLE 12E  ARRONDISSEMENT",
    "address": "40 chemin DE FONDACLE",
    "postalCode": "13012",
    "latitude": 43.316912,
    "longitude": 5.448992,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Anne GOILLOT",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "13e.marseille@fsspx.fr",
    "phone": "491870050",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130631r",
    "rne": "0130631R",
    "name": "SAINT GABRIEL",
    "type": "elementaire",
    "city": "MARSEILLE 14E  ARRONDISSEMENT",
    "address": "22 boulevard Kraemer",
    "postalCode": "13014",
    "latitude": 43.321255,
    "longitude": 5.383353,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME STEPHANIE THIERS",
    "referentName": "BAUME CECILE",
    "secteurERSEH": "MASSENET",
    "cpcName": "",
    "email": "ce.0130631R@ac-aix-marseille.fr",
    "phone": "491672608",
    "referentPhone": "06 21 54 13 51",
    "referentEmail": "ce.erseh13-massenet@ac-aix-marseille.fr"
  },
  {
    "id": "0132075k",
    "rne": "0132075K",
    "name": "SAINT GEORGES",
    "type": "elementaire",
    "city": "MARSEILLE  7E  ARRONDISSEMENT",
    "address": "6 rue Capitaine Dessemond",
    "postalCode": "13007",
    "latitude": 43.288432,
    "longitude": 5.357527,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME  BACCI-LIGUORI",
    "referentName": "THIVANT ISABELLE",
    "secteurERSEH": "PUGET_2",
    "cpcName": "",
    "email": "ce.0132075K@ac-aix-marseille.fr",
    "phone": "491527834",
    "referentPhone": "06 14 60 39 97",
    "referentEmail": "ce.erseh13-puget2@ac-aix-marseille.fr"
  },
  {
    "id": "0130632s",
    "rne": "0130632S",
    "name": "SAINT HENRI RABELAIS 2",
    "type": "elementaire",
    "city": "MARSEILLE 16E  ARRONDISSEMENT",
    "address": "95 rue Rabelais",
    "postalCode": "13016",
    "latitude": 43.358473,
    "longitude": 5.333995,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VIRGINIE KLAKIEWICZ",
    "referentName": "SOLEIL VIRGINIE",
    "secteurERSEH": "ROSA_PARKS_2",
    "cpcName": "",
    "email": "ce.0130632S@ac-aix-marseille.fr",
    "phone": "491460103",
    "referentPhone": "06 10 90 30 81",
    "referentEmail": "ce.erseh13-rosapark2@ac-aix-marseille.fr"
  },
  {
    "id": "0130790n",
    "rne": "0130790N",
    "name": "SAINT HENRI RAPHEL 1",
    "type": "elementaire",
    "city": "MARSEILLE 16E  ARRONDISSEMENT",
    "address": "Place Raphel",
    "postalCode": "13016",
    "latitude": 43.361443,
    "longitude": 5.331232,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. DAVID GUEVARA",
    "referentName": "SOLEIL VIRGINIE",
    "secteurERSEH": "ROSA_PARKS_2",
    "cpcName": "",
    "email": "ce.0130790N@ac-aix-marseille.fr",
    "phone": "491460922",
    "referentPhone": "06 10 90 30 81",
    "referentEmail": "ce.erseh13-rosapark2@ac-aix-marseille.fr"
  },
  {
    "id": "0132042z",
    "rne": "0132042Z",
    "name": "SAINT JEAN BAPTISTE",
    "type": "elementaire",
    "city": "MARSEILLE  9E  ARRONDISSEMENT",
    "address": "14 rue de la Gendarmerie",
    "postalCode": "13009",
    "latitude": 43.246057,
    "longitude": 5.405184,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Marine TOURNIERES",
    "referentName": "ICART CECILE",
    "secteurERSEH": "GYPTIS_1",
    "cpcName": "",
    "email": "ce.0132042Z@ac-aix-marseille.fr",
    "phone": "491402857",
    "referentPhone": "06 25 11 81 66",
    "referentEmail": "ce.erseh13-gyptis1@ac-aix-marseille.fr"
  },
  {
    "id": "0131652a",
    "rne": "0131652A",
    "name": "SAINT JEROME LES LILAS",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "2 rue Fernand Léger",
    "postalCode": "13013",
    "latitude": 43.331232,
    "longitude": 5.411414,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 10,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MICHELE CANTIN",
    "referentName": "CRESCIONE LAURENCE",
    "secteurERSEH": "CHARTREUX_2",
    "cpcName": "",
    "email": "ce.0131652A@ac-aix-marseille.fr",
    "phone": "491981105",
    "referentPhone": "06 25 11 22 25",
    "referentEmail": "ce.erseh13-chartreux2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 10,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130634u",
    "rne": "0130634U",
    "name": "SAINT JEROME VILLAGE 1",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "15 avenue Saint Jérôme",
    "postalCode": "13013",
    "latitude": 43.329868,
    "longitude": 5.417672,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME NATHALIE BIACHE",
    "referentName": "CARRERA JONATHAN",
    "secteurERSEH": "MALRAUX_2",
    "cpcName": "",
    "email": "ce.0130634U@ac-aix-marseille.fr",
    "phone": "491664212",
    "referentPhone": "06 21 54 70 18",
    "referentEmail": "ce.erseh13-malraux2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130792r",
    "rne": "0130792R",
    "name": "SAINT JEROME VILLAGE 2",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "41 avenue de Saint Jérôme",
    "postalCode": "13013",
    "latitude": 43.329922,
    "longitude": 5.417412,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CLAUDE BERAHIA",
    "referentName": "CARRERA JONATHAN",
    "secteurERSEH": "MALRAUX_2",
    "cpcName": "",
    "email": "ce.0130792R@ac-aix-marseille.fr",
    "phone": "413948033",
    "referentPhone": "06 21 54 70 18",
    "referentEmail": "ce.erseh13-malraux2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131818f",
    "rne": "0131818F",
    "name": "SAINT JOSEPH",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "61 boulevard Viala",
    "postalCode": "13015",
    "latitude": 43.334872,
    "longitude": 5.360398,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Céline HERZOG",
    "referentName": "PETIT FRANCOISE",
    "secteurERSEH": "PRIVE_2",
    "cpcName": "",
    "email": "ce.0131818F@ac-aix-marseille.fr",
    "phone": "491586140",
    "referentPhone": "06 28 58 88 72",
    "referentEmail": "ce.erseh13-prive2@ac-aix-marseille.fr"
  },
  {
    "id": "0132011r",
    "rne": "0132011R",
    "name": "SAINT JOSEPH",
    "type": "elementaire",
    "city": "MARSEILLE 16E  ARRONDISSEMENT",
    "address": "27 chemin de la Nerthe",
    "postalCode": "13016",
    "latitude": 43.363284,
    "longitude": 5.314437,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Estelle BRIVADIS",
    "referentName": "LEVY GHISLAINE",
    "secteurERSEH": "PRIVE_7",
    "cpcName": "",
    "email": "ce.0132011R@ac-aix-marseille.fr",
    "phone": "491460355",
    "referentPhone": "06 12 97 29 60",
    "referentEmail": "ce.erseh13-prive7@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132192m",
    "rne": "0132192M",
    "name": "SAINT JOSEPH LES MICOCOULIERS",
    "type": "elementaire",
    "city": "MARSEILLE 14E  ARRONDISSEMENT",
    "address": "8 boulevard Roland Dorgelès",
    "postalCode": "13014",
    "latitude": 43.347053,
    "longitude": 5.379955,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 10,
      "placesVacantes": 10,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHRYSTELLE CLERE",
    "referentName": "SOLEIL VIRGINIE",
    "secteurERSEH": "ROSA_PARKS_2",
    "cpcName": "",
    "email": "ce.0132192M@ac-aix-marseille.fr",
    "phone": "491601564",
    "referentPhone": "06 10 90 30 81",
    "referentEmail": "ce.erseh13-rosapark2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 10,
        "placesVacantes": 10,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      },
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130636w",
    "rne": "0130636W",
    "name": "SAINT JOSEPH SERVIERES",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "Place des Compagnons Bâtisseurs",
    "postalCode": "13015",
    "latitude": 43.343901,
    "longitude": 5.374423,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 10,
      "placesVacantes": 10,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SONIA MAURER",
    "referentName": "SOLEIL VIRGINIE",
    "secteurERSEH": "ROSA_PARKS_2",
    "cpcName": "",
    "email": "ce.0130636W@ac-aix-marseille.fr",
    "phone": "491605335",
    "referentPhone": "06 10 90 30 81",
    "referentEmail": "ce.erseh13-rosapark2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 10,
        "placesVacantes": 10,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130637x",
    "rne": "0130637X",
    "name": "SAINT JULIEN 1",
    "type": "elementaire",
    "city": "MARSEILLE 12E  ARRONDISSEMENT",
    "address": "11  BOULEVARD BONNIOT",
    "postalCode": "13012",
    "latitude": 43.315366,
    "longitude": 5.449448,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MAUD LIGNOT",
    "referentName": "LA ROCCA MYRTILLE",
    "secteurERSEH": "CAILLOLS_1",
    "cpcName": "",
    "email": "ce.0130637X@ac-aix-marseille.fr",
    "phone": "491933390",
    "referentPhone": "06 14 60 06 79",
    "referentEmail": "ce.erseh13-caillols1@ac-aix-marseille.fr"
  },
  {
    "id": "0130795u",
    "rne": "0130795U",
    "name": "SAINT JULIEN 2",
    "type": "elementaire",
    "city": "MARSEILLE 12E  ARRONDISSEMENT",
    "address": "128 rue du Groupe scolaire",
    "postalCode": "13012",
    "latitude": 43.312566,
    "longitude": 5.44668,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. BRUNO GAINLET",
    "referentName": "BLEUZE MARIE",
    "secteurERSEH": "RUISSATEL",
    "cpcName": "",
    "email": "ce.0130795U@ac-aix-marseille.fr",
    "phone": "491932381",
    "referentPhone": "06 14 60 45 95",
    "referentEmail": "ce.erseh13-ruissatel@ac-aix-marseille.fr"
  },
  {
    "id": "0130638y",
    "rne": "0130638Y",
    "name": "SAINT JUST CENTRE 1",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "14 rue Saint Georges",
    "postalCode": "13013",
    "latitude": 43.319511,
    "longitude": 5.406398,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME FREDERIQUE MASSIANI",
    "referentName": "BEN HADJ OTHMAN ADEL",
    "secteurERSEH": "CHARTREUX_1",
    "cpcName": "",
    "email": "ce.0130638Y@ac-aix-marseille.fr",
    "phone": "491664311",
    "referentPhone": "06 25 11 53 02",
    "referentEmail": "ce.erseh13-chartreux1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130796v",
    "rne": "0130796V",
    "name": "SAINT JUST CENTRE 2",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "16 rue Saint Georges",
    "postalCode": "13013",
    "latitude": 43.319424,
    "longitude": 5.405728,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CELINE TIDU",
    "referentName": "BEN HADJ OTHMAN ADEL",
    "secteurERSEH": "CHARTREUX_1",
    "cpcName": "",
    "email": "ce.0130796V@ac-aix-marseille.fr",
    "phone": "491663620",
    "referentPhone": "06 25 11 53 02",
    "referentEmail": "ce.erseh13-chartreux1@ac-aix-marseille.fr"
  },
  {
    "id": "0130640a",
    "rne": "0130640A",
    "name": "SAINT JUST COROT",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "Traverse Signoret",
    "postalCode": "13013",
    "latitude": 43.324303,
    "longitude": 5.405606,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. RENAUD BERNARD",
    "referentName": "CRESCIONE LAURENCE",
    "secteurERSEH": "CHARTREUX_2",
    "cpcName": "",
    "email": "ce.0130640A@ac-aix-marseille.fr",
    "phone": "491663973",
    "referentPhone": "06 25 11 22 25",
    "referentEmail": "ce.erseh13-chartreux2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131851s",
    "rne": "0131851S",
    "name": "SAINT LOUIS",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "12 place des Abattoirs",
    "postalCode": "13015",
    "latitude": 43.338977,
    "longitude": 5.357585,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME JULIE BRACHET-COTA",
    "referentName": "PETIT FRANCOISE",
    "secteurERSEH": "PRIVE_2",
    "cpcName": "",
    "email": "ecole.stlouismariani@wanadoo.fr",
    "phone": "491600001",
    "referentPhone": "06 28 58 88 72",
    "referentEmail": "ce.erseh13-prive2@ac-aix-marseille.fr"
  },
  {
    "id": "0130643d",
    "rne": "0130643D",
    "name": "SAINT LOUIS CAMPAGNE LEVEQUE",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "",
    "postalCode": "13015",
    "latitude": 43.342398,
    "longitude": 5.357932,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ISABELLE PARRA",
    "referentName": "STELLA DOMINIQUE",
    "secteurERSEH": "RIMBAUD",
    "cpcName": "",
    "email": "ce.0130643D@ac-aix-marseille.fr",
    "phone": "491606710",
    "referentPhone": "06 21 54 20 36",
    "referentEmail": "ce.erseh13-rimbaud@ac-aix-marseille.fr"
  },
  {
    "id": "0130641b",
    "rne": "0130641B",
    "name": "SAINT LOUIS CONSOLAT",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "47 rue des Musardises",
    "postalCode": "13015",
    "latitude": 43.347721,
    "longitude": 5.353414,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. EMMANUEL SUZANNA",
    "referentName": "STELLA DOMINIQUE",
    "secteurERSEH": "RIMBAUD",
    "cpcName": "",
    "email": "ce.0130641B@ac-aix-marseille.fr",
    "phone": "491600014",
    "referentPhone": "06 21 54 20 36",
    "referentEmail": "ce.erseh13-rimbaud@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130642c",
    "rne": "0130642C",
    "name": "SAINT LOUIS GARE",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "16 rue Le Châtelier",
    "postalCode": "13015",
    "latitude": 43.34764,
    "longitude": 5.359908,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. NICOLAS LESEIGNEUR",
    "referentName": "STELLA DOMINIQUE",
    "secteurERSEH": "RIMBAUD",
    "cpcName": "",
    "email": "ce.0130642C@ac-aix-marseille.fr",
    "phone": "413948032",
    "referentPhone": "06 21 54 20 36",
    "referentEmail": "ce.erseh13-rimbaud@ac-aix-marseille.fr"
  },
  {
    "id": "0131540d",
    "rne": "0131540D",
    "name": "SAINT LOUIS LE ROVE",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "50 chemin du Rove",
    "postalCode": "13015",
    "latitude": 43.349805,
    "longitude": 5.355271,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSLA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CAROLINE AIT ABDELLOUHAB",
    "referentName": "STELLA DOMINIQUE",
    "secteurERSEH": "RIMBAUD",
    "cpcName": "",
    "email": "ce.0131540D@ac-aix-marseille.fr",
    "phone": "491609633",
    "referentPhone": "06 21 54 20 36",
    "referentEmail": "ce.erseh13-rimbaud@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSLA",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130801a",
    "rne": "0130801A",
    "name": "SAINT LOUP CASTEL JOLI",
    "type": "elementaire",
    "city": "MARSEILLE 10E  ARRONDISSEMENT",
    "address": "6 avenue Castel Joli",
    "postalCode": "13010",
    "latitude": 43.280022,
    "longitude": 5.43015,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME DANIELLE LESSI",
    "referentName": "PIQUOT DELPHINE",
    "secteurERSEH": "LOUISE_MICHEL",
    "cpcName": "",
    "email": "ce.0130801A@ac-aix-marseille.fr",
    "phone": "491448058",
    "referentPhone": "06 14 60 73 17",
    "referentEmail": "ce.erseh13-louisemichel@ac-aix-marseille.fr"
  },
  {
    "id": "0132175u",
    "rne": "0132175U",
    "name": "SAINT LOUP CENTRE",
    "type": "elementaire",
    "city": "MARSEILLE 10E  ARRONDISSEMENT",
    "address": "103 boulevard DE SAINT LOUP",
    "postalCode": "13010",
    "latitude": 43.284094,
    "longitude": 5.433461,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. REGIS BUONSIGNORI",
    "referentName": "BEDJIDIAN LYDIA",
    "secteurERSEH": "FORBIN",
    "cpcName": "",
    "email": "ce.0132175U@ac-aix-marseille.fr",
    "phone": "491447307",
    "referentPhone": "06 14 60 43 08",
    "referentEmail": "ce.erseh13-forbin@ac-aix-marseille.fr"
  },
  {
    "id": "0130644e",
    "rne": "0130644E",
    "name": "SAINT LOUP GABRIEL FAURE",
    "type": "elementaire",
    "city": "MARSEILLE 10E  ARRONDISSEMENT",
    "address": "17 rue Gabriel Fauré",
    "postalCode": "13010",
    "latitude": 43.281569,
    "longitude": 5.433404,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MARION BAGUES",
    "referentName": "BEDJIDIAN LYDIA",
    "secteurERSEH": "FORBIN",
    "cpcName": "",
    "email": "ce.0130644E@ac-aix-marseille.fr",
    "phone": "491351227",
    "referentPhone": "06 14 60 43 08",
    "referentEmail": "ce.erseh13-forbin@ac-aix-marseille.fr"
  },
  {
    "id": "0130645f",
    "rne": "0130645F",
    "name": "SAINT MARCEL",
    "type": "elementaire",
    "city": "MARSEILLE 11E  ARRONDISSEMENT",
    "address": "8 rue du Queylar",
    "postalCode": "13011",
    "latitude": 43.286883,
    "longitude": 5.464809,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MELISSA CORBANI",
    "referentName": "BEDJIDIAN LYDIA",
    "secteurERSEH": "FORBIN",
    "cpcName": "",
    "email": "ce.0130645F@ac-aix-marseille.fr",
    "phone": "491447053",
    "referentPhone": "06 14 60 43 08",
    "referentEmail": "ce.erseh13-forbin@ac-aix-marseille.fr"
  },
  {
    "id": "0131799k",
    "rne": "0131799K",
    "name": "SAINT MATHIEU",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "22 place des Héros",
    "postalCode": "13013",
    "latitude": 43.352222,
    "longitude": 5.439168,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Evelyne COLLOC",
    "referentName": "BREUX GOBIN LAURENCE",
    "secteurERSEH": "MALRAUX_1",
    "cpcName": "",
    "email": "ce.0131799K@ac-aix-marseille.fr",
    "phone": "491070718",
    "referentPhone": "06 25 11 49 38",
    "referentEmail": "ce.erseh13-malraux1@ac-aix-marseille.fr"
  },
  {
    "id": "0131810x",
    "rne": "0131810X",
    "name": "SAINT MAURONT",
    "type": "elementaire",
    "city": "MARSEILLE  3E  ARRONDISSEMENT",
    "address": "5 rue des Industrieux",
    "postalCode": "13003",
    "latitude": 43.317582,
    "longitude": 5.375626,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Chantal MARCHAL",
    "referentName": "PENNETIER MANON",
    "secteurERSEH": "PRIVE_1",
    "cpcName": "",
    "email": "ce.0131810X@ac-aix-marseille.fr",
    "phone": "491625907",
    "referentPhone": "06 28 58 88 63",
    "referentEmail": "ce.erseh13-prive1@ac-aix-marseille.fr"
  },
  {
    "id": "0131801m",
    "rne": "0131801M",
    "name": "SAINT MICHEL",
    "type": "elementaire",
    "city": "MARSEILLE  5E  ARRONDISSEMENT",
    "address": "185 boulevard Chave",
    "postalCode": "13005",
    "latitude": 43.29544,
    "longitude": 5.39472,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Stéphanie MOUTON",
    "referentName": "PETIT FRANCOISE",
    "secteurERSEH": "PRIVE_2",
    "cpcName": "",
    "email": "ce.0131801M@ac-aix-marseille.fr",
    "phone": "491429223",
    "referentPhone": "06 28 58 88 72",
    "referentEmail": "ce.erseh13-prive2@ac-aix-marseille.fr"
  },
  {
    "id": "0130647h",
    "rne": "0130647H",
    "name": "SAINT MITRE",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "117 chemin de Château Gombert",
    "postalCode": "13013",
    "latitude": 43.3413,
    "longitude": 5.419257,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME STEPHANIE MIOLAN",
    "referentName": "TURCAT CLEMENCE",
    "secteurERSEH": "MALRAUX_4",
    "cpcName": "",
    "email": "ce.0130647H@ac-aix-marseille.fr",
    "phone": "491661520",
    "referentPhone": "06 21 54 55 44",
    "referentEmail": "ce.erseh13-malraux4@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130648j",
    "rne": "0130648J",
    "name": "SAINT PIERRE",
    "type": "elementaire",
    "city": "MARSEILLE  5E  ARRONDISSEMENT",
    "address": "22 boulevard Louis Frangin",
    "postalCode": "13005",
    "latitude": 43.293819,
    "longitude": 5.405943,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME OLIVIA DESBIEF",
    "referentName": "PARDO ALAIN",
    "secteurERSEH": "LONGCHAMP_2",
    "cpcName": "",
    "email": "ce.0130648J@ac-aix-marseille.fr",
    "phone": "491476503",
    "referentPhone": "06 25 11 56 03",
    "referentEmail": "ce.erseh13-longchamp2@ac-aix-marseille.fr"
  },
  {
    "id": "0132352l",
    "rne": "0132352L",
    "name": "SAINT TRONC CASTEL ROC",
    "type": "elementaire",
    "city": "MARSEILLE 10E  ARRONDISSEMENT",
    "address": "Rue André Audoli",
    "postalCode": "13010",
    "latitude": 43.271254,
    "longitude": 5.430762,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 10,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SYLVIE DUQUESNOY",
    "referentName": "ATTEIA CAROLINE",
    "secteurERSEH": "GYPTIS_2",
    "cpcName": "",
    "email": "ce.0132352L@ac-aix-marseille.fr",
    "phone": "491756550",
    "referentPhone": "06 21 54 77 71",
    "referentEmail": "ce.erseh13-gyptis2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 10,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131545j",
    "rne": "0131545J",
    "name": "SAINT TRONC LA ROSE",
    "type": "elementaire",
    "city": "MARSEILLE 10E  ARRONDISSEMENT",
    "address": "225 boulevard Paul Claudel",
    "postalCode": "13010",
    "latitude": 43.269098,
    "longitude": 5.420337,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHANTAL CABRERA",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ce.0131545J@ac-aix-marseille.fr",
    "phone": "491755280",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131546k",
    "rne": "0131546K",
    "name": "SAINT TRONC LA ROSE",
    "type": "elementaire",
    "city": "MARSEILLE 10E  ARRONDISSEMENT",
    "address": "225 boulevard Paul Claudel",
    "postalCode": "13010",
    "latitude": 43.269098,
    "longitude": 5.420337,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHANTAL BICHY",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ce.0131546K@ac-aix-marseille.fr",
    "phone": "491751047",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131985m",
    "rne": "0131985M",
    "name": "SAINTE ANNE",
    "type": "elementaire",
    "city": "MARSEILLE 08E  ARRONDISSEMENT",
    "address": "18 rue Thieux",
    "postalCode": "13008",
    "latitude": 43.258314,
    "longitude": 5.393478,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSLA",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME KATIA KATIA BATBEDAT",
    "referentName": "ADNOT LAURENCE",
    "secteurERSEH": "ROY_D_ESPAGNE_1",
    "cpcName": "",
    "email": "ecole.ste.anne.callelongue@wanadoo.fr",
    "phone": "491710806",
    "referentPhone": "06 25 11 23 05",
    "referentEmail": "ce.erseh13-roydespagne1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSLA",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130651m",
    "rne": "0130651M",
    "name": "SAINTE ANNE",
    "type": "elementaire",
    "city": "MARSEILLE 08E  ARRONDISSEMENT",
    "address": "484 avenue de Mazargues",
    "postalCode": "13008",
    "latitude": 43.255645,
    "longitude": 5.3931,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSLA",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME FRANCOISE MAMELLI BERNARD",
    "referentName": "ADNOT LAURENCE",
    "secteurERSEH": "ROY_D_ESPAGNE_1",
    "cpcName": "",
    "email": "ce.0130651M@ac-aix-marseille.fr",
    "phone": "491761737",
    "referentPhone": "06 25 11 23 05",
    "referentEmail": "ce.erseh13-roydespagne1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSLA",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132041y",
    "rne": "0132041Y",
    "name": "SAINTE BERNADETTE",
    "type": "elementaire",
    "city": "MARSEILLE 08E  ARRONDISSEMENT",
    "address": "33 avenue Clôt Bey",
    "postalCode": "13008",
    "latitude": 43.26124,
    "longitude": 5.387448,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Michèle VANKEERBERGHEN",
    "referentName": "ADNOT LAURENCE",
    "secteurERSEH": "ROY_D_ESPAGNE_1",
    "cpcName": "",
    "email": "ce.0132041Y@ac-aix-marseille.fr",
    "phone": "491772385",
    "referentPhone": "06 25 11 23 05",
    "referentEmail": "ce.erseh13-roydespagne1@ac-aix-marseille.fr"
  },
  {
    "id": "0130652n",
    "rne": "0130652N",
    "name": "SAINTE CECILE",
    "type": "elementaire",
    "city": "MARSEILLE  5E  ARRONDISSEMENT",
    "address": "146 rue Sainte Cécile",
    "postalCode": "13005",
    "latitude": 43.288759,
    "longitude": 5.399071,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SANDRA PRINCIPATO",
    "referentName": "PARDO ALAIN",
    "secteurERSEH": "LONGCHAMP_2",
    "cpcName": "",
    "email": "ce.0130652N@ac-aix-marseille.fr",
    "phone": "491782067",
    "referentPhone": "06 25 11 56 03",
    "referentEmail": "ce.erseh13-longchamp2@ac-aix-marseille.fr"
  },
  {
    "id": "0132045c",
    "rne": "0132045C",
    "name": "SAINTE MARGUERITE",
    "type": "elementaire",
    "city": "MARSEILLE  9E  ARRONDISSEMENT",
    "address": "20 boulevard Baude",
    "postalCode": "13009",
    "latitude": 43.265667,
    "longitude": 5.408149,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Valérie DAM SEC PAU",
    "referentName": "ATTEIA CAROLINE",
    "secteurERSEH": "GYPTIS_2",
    "cpcName": "",
    "email": "ce.0132045C@ac-aix-marseille.fr",
    "phone": "491750479",
    "referentPhone": "06 21 54 77 71",
    "referentEmail": "ce.erseh13-gyptis2@ac-aix-marseille.fr"
  },
  {
    "id": "0130653p",
    "rne": "0130653P",
    "name": "SAINTE MARGUERITE",
    "type": "elementaire",
    "city": "MARSEILLE  9E  ARRONDISSEMENT",
    "address": "135 boulevard de Sainte-Margueri",
    "postalCode": "13009",
    "latitude": 43.267801,
    "longitude": 5.408244,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MAGALI GOURY",
    "referentName": "ATTEIA CAROLINE",
    "secteurERSEH": "GYPTIS_2",
    "cpcName": "",
    "email": "ce.0130653P@ac-aix-marseille.fr",
    "phone": "491755184",
    "referentPhone": "06 21 54 77 71",
    "referentEmail": "ce.erseh13-gyptis2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131802n",
    "rne": "0131802N",
    "name": "SAINTE MARIE",
    "type": "elementaire",
    "city": "MARSEILLE  4E  ARRONDISSEMENT",
    "address": "159 boulevard de la Blancarde",
    "postalCode": "13004",
    "latitude": 43.303132,
    "longitude": 5.402033,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Emmanuelle RANGUIS",
    "referentName": "PETIT FRANCOISE",
    "secteurERSEH": "PRIVE_2",
    "cpcName": "",
    "email": "ce.0131802N@ac-aix-marseille.fr",
    "phone": "491185020",
    "referentPhone": "06 28 58 88 72",
    "referentEmail": "ce.erseh13-prive2@ac-aix-marseille.fr"
  },
  {
    "id": "0132046d",
    "rne": "0132046D",
    "name": "SAINTE MARIE",
    "type": "elementaire",
    "city": "MARSEILLE 10E  ARRONDISSEMENT",
    "address": "11 rue Gabriel Fauré",
    "postalCode": "13010",
    "latitude": 43.281973,
    "longitude": 5.432774,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LAURENCE BOYER",
    "referentName": "BEDJIDIAN LYDIA",
    "secteurERSEH": "FORBIN",
    "cpcName": "",
    "email": "directrice@ecolestemariestloup.fr",
    "phone": "491897403",
    "referentPhone": "06 14 60 43 08",
    "referentEmail": "ce.erseh13-forbin@ac-aix-marseille.fr"
  },
  {
    "id": "0132111z",
    "rne": "0132111Z",
    "name": "SAINTE MARIE MADELEINE",
    "type": "elementaire",
    "city": "MARSEILLE  4E  ARRONDISSEMENT",
    "address": "24 place Edmond Audran",
    "postalCode": "13004",
    "latitude": 43.309982,
    "longitude": 5.402193,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSLA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME STEPHANIE URTASUN",
    "referentName": "PETIT FRANCOISE",
    "secteurERSEH": "PRIVE_2",
    "cpcName": "",
    "email": "m.madeleine13@wanadoo.fr",
    "phone": "491493292",
    "referentPhone": "06 28 58 88 72",
    "referentEmail": "ce.erseh13-prive2@ac-aix-marseille.fr"
  },
  {
    "id": "0130654r",
    "rne": "0130654R",
    "name": "SAINTE MARTHE",
    "type": "elementaire",
    "city": "MARSEILLE 14E  ARRONDISSEMENT",
    "address": "Boulevard Ricoux",
    "postalCode": "13014",
    "latitude": 43.33823,
    "longitude": 5.388943,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. JEAN LUC SIMON",
    "referentName": "GUIZIOU STEPHANIE",
    "secteurERSEH": "WALLON",
    "cpcName": "",
    "email": "ce.0130654R@ac-aix-marseille.fr",
    "phone": "491982063",
    "referentPhone": "06 25 11 50 07",
    "referentEmail": "ce.erseh13-wallon@ac-aix-marseille.fr"
  },
  {
    "id": "0134168k",
    "rne": "0134168K",
    "name": "SAINTE MARTHE AUDISIO",
    "type": "elementaire",
    "city": "MARSEILLE 14E  ARRONDISSEMENT",
    "address": "Rue gabriel audisio",
    "postalCode": "13014",
    "latitude": 43.342534,
    "longitude": 5.399676,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MARIE-AUDE BONJOTIN",
    "referentName": "CARRERA JONATHAN",
    "secteurERSEH": "MALRAUX_2",
    "cpcName": "",
    "email": "ce.0134168K@ac-aix-marseille.fr",
    "phone": "491561546",
    "referentPhone": "06 21 54 70 18",
    "referentEmail": "ce.erseh13-malraux2@ac-aix-marseille.fr"
  },
  {
    "id": "0130813n",
    "rne": "0130813N",
    "name": "SAINTE SOPHIE",
    "type": "elementaire",
    "city": "MARSEILLE  4E  ARRONDISSEMENT",
    "address": "4 rue Sainte Sophie",
    "postalCode": "13004",
    "latitude": 43.306239,
    "longitude": 5.403061,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CELINE SALLABERRY",
    "referentName": "PARDO ALAIN",
    "secteurERSEH": "LONGCHAMP_2",
    "cpcName": "",
    "email": "ce.0130813N@ac-aix-marseille.fr",
    "phone": "491347303",
    "referentPhone": "06 25 11 56 03",
    "referentEmail": "ce.erseh13-longchamp2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131803p",
    "rne": "0131803P",
    "name": "SAINTE THERESE D'AVILA",
    "type": "elementaire",
    "city": "MARSEILLE  4E  ARRONDISSEMENT",
    "address": "47 boulevard Dahdah",
    "postalCode": "13004",
    "latitude": 43.310374,
    "longitude": 5.394859,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Julie PERGANDI",
    "referentName": "PENNETIER MANON",
    "secteurERSEH": "PRIVE_1",
    "cpcName": "",
    "email": "ce.0131803P@ac-aix-marseille.fr",
    "phone": "491623579",
    "referentPhone": "06 28 58 88 63",
    "referentEmail": "ce.erseh13-prive1@ac-aix-marseille.fr"
  },
  {
    "id": "0132047e",
    "rne": "0132047E",
    "name": "SAINTE TRINITE",
    "type": "elementaire",
    "city": "MARSEILLE  9E  ARRONDISSEMENT",
    "address": "55 avenue de Lattre de Tassigny",
    "postalCode": "13009",
    "latitude": 43.247615,
    "longitude": 5.4068,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Sophie GUEZ",
    "referentName": "ADNOT LAURENCE",
    "secteurERSEH": "ROY_D_ESPAGNE_1",
    "cpcName": "",
    "email": "contact@sainte-trinite.fr",
    "phone": "491411198",
    "referentPhone": "06 25 11 23 05",
    "referentEmail": "ce.erseh13-roydespagne1@ac-aix-marseille.fr"
  },
  {
    "id": "0130806f",
    "rne": "0130806F",
    "name": "SAINT-SAVOURNIN- BARTHELEMY",
    "type": "elementaire",
    "city": "MARSEILLE  1ER ARRONDISSEMENT",
    "address": "12 rue Barthélémy",
    "postalCode": "13001",
    "latitude": 43.297797,
    "longitude": 5.386249,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CAROLE MATIAS",
    "referentName": "FOISSET CHRISTINE",
    "secteurERSEH": "LONGCHAMP",
    "cpcName": "",
    "email": "ce.0130806F@ac-aix-marseille.fr",
    "phone": "491531060",
    "referentPhone": "06 21 54 57 10",
    "referentEmail": "ce.erseh13-longchamp@ac-aix-marseille.fr"
  },
  {
    "id": "0130655s",
    "rne": "0130655S",
    "name": "SAUVAGERE (LA)",
    "type": "elementaire",
    "city": "MARSEILLE 10E  ARRONDISSEMENT",
    "address": "253 boulevard Romain Rolland",
    "postalCode": "13010",
    "latitude": 43.271652,
    "longitude": 5.415641,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CATHERINE CLINET",
    "referentName": "PIQUOT DELPHINE",
    "secteurERSEH": "LOUISE_MICHEL",
    "cpcName": "",
    "email": "ce.0130655S@ac-aix-marseille.fr",
    "phone": "491752336",
    "referentPhone": "06 14 60 73 17",
    "referentEmail": "ce.erseh13-louisemichel@ac-aix-marseille.fr"
  },
  {
    "id": "0132483d",
    "rne": "0132483D",
    "name": "SAVINE",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "99 boulevard de la Savine",
    "postalCode": "13015",
    "latitude": 43.367845,
    "longitude": 5.368428,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME WARDA BEKRATTOU",
    "referentName": "MEURANT OLIVIER",
    "secteurERSEH": "VALLON_DES_PINS",
    "cpcName": "",
    "email": "ce.0132483D@ac-aix-marseille.fr",
    "phone": "491655027",
    "referentPhone": "06 21 54 79 68",
    "referentEmail": "ce.erseh13-vallondespins@ac-aix-marseille.fr"
  },
  {
    "id": "0134531e",
    "rne": "0134531E",
    "name": "SIMONE DE BEAUVOIR",
    "type": "elementaire",
    "city": "MARSEILLE  3E  ARRONDISSEMENT",
    "address": "1 rue MASSENA",
    "postalCode": "13003",
    "latitude": 43.309076,
    "longitude": 5.384447,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. FREDERIC BERTET",
    "referentName": "FOISSET CHRISTINE",
    "secteurERSEH": "LONGCHAMP",
    "cpcName": "",
    "email": "ce.0134531E@ac-aix-marseille.fr",
    "phone": "413948694",
    "referentPhone": "06 21 54 57 10",
    "referentEmail": "ce.erseh13-longchamp@ac-aix-marseille.fr"
  },
  {
    "id": "0131229r",
    "rne": "0131229R",
    "name": "SINONCELLI",
    "type": "elementaire",
    "city": "MARSEILLE 14E  ARRONDISSEMENT",
    "address": "51 rue Boisselot",
    "postalCode": "13014",
    "latitude": 43.318855,
    "longitude": 5.388797,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. CHRISTIAN GOUIN",
    "referentName": "GUIZIOU STEPHANIE",
    "secteurERSEH": "WALLON",
    "cpcName": "",
    "email": "ce.0131229R@ac-aix-marseille.fr",
    "phone": "491508832",
    "referentPhone": "06 25 11 50 07",
    "referentEmail": "ce.erseh13-wallon@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132610s",
    "rne": "0132610S",
    "name": "SOLIDARITE",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "48 chemin de la Bigotte",
    "postalCode": "13015",
    "latitude": 43.388272,
    "longitude": 5.371859,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME DOROTHEE BERNARD",
    "referentName": "MEURANT OLIVIER",
    "secteurERSEH": "VALLON_DES_PINS",
    "cpcName": "",
    "email": "ce.0132610S@ac-aix-marseille.fr",
    "phone": "491514467",
    "referentPhone": "06 21 54 79 68",
    "referentEmail": "ce.erseh13-vallondespins@ac-aix-marseille.fr"
  },
  {
    "id": "0132574c",
    "rne": "0132574C",
    "name": "SOUDE",
    "type": "elementaire",
    "city": "MARSEILLE  9E  ARRONDISSEMENT",
    "address": "30 avenue de la Martheline",
    "postalCode": "13009",
    "latitude": 43.244996,
    "longitude": 5.400229,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MARJORIE CRILLON",
    "referentName": "SAGET DOMINIQUE",
    "secteurERSEH": "ROY_D_ESPAGNE_2",
    "cpcName": "",
    "email": "ce.0132574C@ac-aix-marseille.fr",
    "phone": "491400323",
    "referentPhone": "06 21 54 61 16",
    "referentEmail": "ce.erseh13-roydespagne2@ac-aix-marseille.fr"
  },
  {
    "id": "0130656t",
    "rne": "0130656T",
    "name": "SQUARE MICHELET",
    "type": "elementaire",
    "city": "MARSEILLE  9E  ARRONDISSEMENT",
    "address": "Boulevard Gaston Ramon",
    "postalCode": "13009",
    "latitude": 43.267199,
    "longitude": 5.398683,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MAXENCE-EMILIE KAROUTCHI",
    "referentName": "ICART CECILE",
    "secteurERSEH": "GYPTIS_1",
    "cpcName": "",
    "email": "ce.0130656T@ac-aix-marseille.fr",
    "phone": "491715860",
    "referentPhone": "06 25 11 81 66",
    "referentEmail": "ce.erseh13-gyptis1@ac-aix-marseille.fr"
  },
  {
    "id": "0131870m",
    "rne": "0131870M",
    "name": "STE THER. DE L ENFANT JESUS",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "Boulevard de Casablanca Saint-An",
    "postalCode": "13015",
    "latitude": 43.372973,
    "longitude": 5.357524,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Sylvie VERILHAC",
    "referentName": "LEVY GHISLAINE",
    "secteurERSEH": "PRIVE_7",
    "cpcName": "",
    "email": "ce.0131870M@ac-aix-marseille.fr",
    "phone": "491512571",
    "referentPhone": "06 12 97 29 60",
    "referentEmail": "ce.erseh13-prive7@ac-aix-marseille.fr"
  },
  {
    "id": "0130658v",
    "rne": "0130658V",
    "name": "TIMONE (LA)",
    "type": "elementaire",
    "city": "MARSEILLE 10E  ARRONDISSEMENT",
    "address": "23 rue Mathurin",
    "postalCode": "13010",
    "latitude": 43.285789,
    "longitude": 5.405112,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHRISTINE PFISTER",
    "referentName": "PARDO ALAIN",
    "secteurERSEH": "LONGCHAMP_2",
    "cpcName": "",
    "email": "ce.0130658V@ac-aix-marseille.fr",
    "phone": "491783419",
    "referentPhone": "06 25 11 56 03",
    "referentEmail": "ce.erseh13-longchamp2@ac-aix-marseille.fr"
  },
  {
    "id": "0131808v",
    "rne": "0131808V",
    "name": "TOUR-SAINTE",
    "type": "elementaire",
    "city": "MARSEILLE 14E  ARRONDISSEMENT",
    "address": "12 avenue DE TOUR SAINTE STE MAR",
    "postalCode": "13014",
    "latitude": 43.344713,
    "longitude": 5.388243,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Christiane LAMOUROUX",
    "referentName": "PENNETIER MANON",
    "secteurERSEH": "PRIVE_1",
    "cpcName": "",
    "email": "ce.0131808V@ac-aix-marseille.fr",
    "phone": "491215300",
    "referentPhone": "06 28 58 88 63",
    "referentEmail": "ce.erseh13-prive1@ac-aix-marseille.fr"
  },
  {
    "id": "0130831h",
    "rne": "0130831H",
    "name": "TREILLE (LA)",
    "type": "elementaire",
    "city": "MARSEILLE 11E  ARRONDISSEMENT",
    "address": "169 route de la Treille",
    "postalCode": "13011",
    "latitude": 43.313248,
    "longitude": 5.512128,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MAIWENN ALLIO",
    "referentName": "BLEUZE MARIE",
    "secteurERSEH": "RUISSATEL",
    "cpcName": "",
    "email": "ce.0130831H@ac-aix-marseille.fr",
    "phone": "491431051",
    "referentPhone": "06 14 60 45 95",
    "referentEmail": "ce.erseh13-ruissatel@ac-aix-marseille.fr"
  },
  {
    "id": "0130660x",
    "rne": "0130660X",
    "name": "TROIS LUCS (LES)",
    "type": "elementaire",
    "city": "MARSEILLE 12E  ARRONDISSEMENT",
    "address": "375 avenue des Poilus",
    "postalCode": "13012",
    "latitude": 43.314726,
    "longitude": 5.463067,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHRISTINE SANCHEZ",
    "referentName": "BLEUZE MARIE",
    "secteurERSEH": "RUISSATEL",
    "cpcName": "",
    "email": "ce.0130660X@ac-aix-marseille.fr",
    "phone": "491932983",
    "referentPhone": "06 14 60 45 95",
    "referentEmail": "ce.erseh13-ruissatel@ac-aix-marseille.fr"
  },
  {
    "id": "0130661y",
    "rne": "0130661Y",
    "name": "TROIS PONTS (LES)",
    "type": "elementaire",
    "city": "MARSEILLE 10E  ARRONDISSEMENT",
    "address": "Chemin Chante Perdrix",
    "postalCode": "13010",
    "latitude": 43.272773,
    "longitude": 5.436036,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME PATRICIA ZUCCHINI",
    "referentName": "PIQUOT DELPHINE",
    "secteurERSEH": "LOUISE_MICHEL",
    "cpcName": "",
    "email": "ce.0130661Y@ac-aix-marseille.fr",
    "phone": "491448954",
    "referentPhone": "06 14 60 73 17",
    "referentEmail": "ce.erseh13-louisemichel@ac-aix-marseille.fr"
  },
  {
    "id": "0130821x",
    "rne": "0130821X",
    "name": "VALBARELLE (LA)",
    "type": "elementaire",
    "city": "MARSEILLE 11E  ARRONDISSEMENT",
    "address": "Rue Gimon",
    "postalCode": "13011",
    "latitude": 43.286923,
    "longitude": 5.456879,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME PRESCILIA HANNOAH",
    "referentName": "BEDJIDIAN LYDIA",
    "secteurERSEH": "FORBIN",
    "cpcName": "",
    "email": "ce.0130821X@ac-aix-marseille.fr",
    "phone": "491448323",
    "referentPhone": "06 14 60 43 08",
    "referentEmail": "ce.erseh13-forbin@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130663a",
    "rne": "0130663A",
    "name": "VALENTINE",
    "type": "elementaire",
    "city": "MARSEILLE 11E  ARRONDISSEMENT",
    "address": "Avenue de la Tiranne",
    "postalCode": "13011",
    "latitude": 43.293661,
    "longitude": 5.485964,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. ARNAUD VASSALLUCCI",
    "referentName": "BLEUZE MARIE",
    "secteurERSEH": "RUISSATEL",
    "cpcName": "",
    "email": "ce.0130663A@ac-aix-marseille.fr",
    "phone": "491431011",
    "referentPhone": "06 14 60 45 95",
    "referentEmail": "ce.erseh13-ruissatel@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFA",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130666d",
    "rne": "0130666D",
    "name": "VALLON DES TUVES",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "Traverse Courtes",
    "postalCode": "13015",
    "latitude": 43.37209,
    "longitude": 5.368696,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MARION REVALOR",
    "referentName": "MEURANT OLIVIER",
    "secteurERSEH": "VALLON_DES_PINS",
    "cpcName": "",
    "email": "ce.0130666D@ac-aix-marseille.fr",
    "phone": "491655120",
    "referentPhone": "06 21 54 79 68",
    "referentEmail": "ce.erseh13-vallondespins@ac-aix-marseille.fr"
  },
  {
    "id": "0130611u",
    "rne": "0130611U",
    "name": "VALMANTE",
    "type": "elementaire",
    "city": "MARSEILLE  9E  ARRONDISSEMENT",
    "address": "83 chemin Jean Roubin",
    "postalCode": "13009",
    "latitude": 43.248306,
    "longitude": 5.421578,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CARLA FRIZON--TROUILLET",
    "referentName": "ICART CECILE",
    "secteurERSEH": "GYPTIS_1",
    "cpcName": "",
    "email": "ce.0130611U@ac-aix-marseille.fr",
    "phone": "491411468",
    "referentPhone": "06 25 11 81 66",
    "referentEmail": "ce.erseh13-gyptis1@ac-aix-marseille.fr"
  },
  {
    "id": "0130832j",
    "rne": "0130832J",
    "name": "VALMONT REDON",
    "type": "elementaire",
    "city": "MARSEILLE  9E  ARRONDISSEMENT",
    "address": "431 avenue de Lattre de Tassigny",
    "postalCode": "13009",
    "latitude": 43.244125,
    "longitude": 5.426752,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHRISTELLE GRIFFOUL",
    "referentName": "ICART CECILE",
    "secteurERSEH": "GYPTIS_1",
    "cpcName": "",
    "email": "ce.0130832J@ac-aix-marseille.fr",
    "phone": "491411481",
    "referentPhone": "06 25 11 81 66",
    "referentEmail": "ce.erseh13-gyptis1@ac-aix-marseille.fr"
  },
  {
    "id": "0130669g",
    "rne": "0130669G",
    "name": "VERDURON HAUT",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "Avenue Marius Brémond",
    "postalCode": "13015",
    "latitude": 43.375089,
    "longitude": 5.343249,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SANDRA FOUQUE",
    "referentName": "CARLIER CECILE",
    "secteurERSEH": "BARNIER",
    "cpcName": "",
    "email": "ce.0130669G@ac-aix-marseille.fr",
    "phone": "491513400",
    "referentPhone": "06 14 60 77 59",
    "referentEmail": "ce.erseh13-barnier@ac-aix-marseille.fr"
  },
  {
    "id": "0130827d",
    "rne": "0130827D",
    "name": "VINCENT LEBLANC",
    "type": "elementaire",
    "city": "MARSEILLE  2E  ARRONDISSEMENT",
    "address": "32 rue Vincent Leblanc",
    "postalCode": "13002",
    "latitude": 43.305517,
    "longitude": 5.368311,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHANTAL PURIFICATO",
    "referentName": "GALAS FLORENCE",
    "secteurERSEH": "DSDEN_1",
    "cpcName": "",
    "email": "ce.0130827D@ac-aix-marseille.fr",
    "phone": "491912607",
    "referentPhone": "06 14 60 65 74",
    "referentEmail": "ce.erseh13-dsden1@ac-aix-marseille.fr"
  },
  {
    "id": "0131271l",
    "rne": "0131271L",
    "name": "VISITATION (LA)",
    "type": "elementaire",
    "city": "MARSEILLE 14E  ARRONDISSEMENT",
    "address": "48 avenue Ibrahim Ali",
    "postalCode": "13014",
    "latitude": 43.337213,
    "longitude": 5.368012,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME JULIE MEGE",
    "referentName": "BRUN SANDRINE",
    "secteurERSEH": "ROSA_PARKS_1",
    "cpcName": "",
    "email": "ce.0131271L@ac-aix-marseille.fr",
    "phone": "491982363",
    "referentPhone": "06 10 90 10 36",
    "referentEmail": "ce.erseh13-rosapark1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130670h",
    "rne": "0130670H",
    "name": "VISTE BOUSQUET",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "38 route Nationale de la Viste",
    "postalCode": "13015",
    "latitude": 43.356945,
    "longitude": 5.35947,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. RIDHA HAMMAMI",
    "referentName": "SOLEIL VIRGINIE",
    "secteurERSEH": "ROSA_PARKS_2",
    "cpcName": "",
    "email": "ce.0130670H@ac-aix-marseille.fr",
    "phone": "491600921",
    "referentPhone": "06 10 90 30 81",
    "referentEmail": "ce.erseh13-rosapark2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131959j",
    "rne": "0131959J",
    "name": "VITAGLIANO",
    "type": "elementaire",
    "city": "MARSEILLE  4E  ARRONDISSEMENT",
    "address": "5 rue Antoine Pons",
    "postalCode": "13004",
    "latitude": 43.297155,
    "longitude": 5.401944,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME AMANDINE SAMPOL",
    "referentName": "PETIT FRANCOISE",
    "secteurERSEH": "PRIVE_2",
    "cpcName": "",
    "email": "accueil.vitagliano@apprentis-auteuil.org",
    "phone": "495080140",
    "referentPhone": "06 28 58 88 72",
    "referentEmail": "ce.erseh13-prive2@ac-aix-marseille.fr"
  },
  {
    "id": "0131805s",
    "rne": "0131805S",
    "name": "YAVNE",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "44 boulevard Barry",
    "postalCode": "13013",
    "latitude": 43.317924,
    "longitude": 5.409824,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. Paul FITOUSSI",
    "referentName": "CRESCIONE LAURENCE",
    "secteurERSEH": "CHARTREUX_2",
    "cpcName": "",
    "email": "ce.0131805S@ac-aix-marseille.fr",
    "phone": "491661477",
    "referentPhone": "06 25 11 22 25",
    "referentEmail": "ce.erseh13-chartreux2@ac-aix-marseille.fr"
  },
  {
    "id": "0131814b",
    "rne": "0131814B",
    "name": "NOTRE DAME DE LA VISTE",
    "type": "elementaire",
    "city": "MARSEILLE 15E  ARRONDISSEMENT",
    "address": "111 chemin Henri Beyle BP 12",
    "postalCode": "13202",
    "latitude": 43.351766,
    "longitude": 5.3576,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Christine POGGI",
    "referentName": "LEVY GHISLAINE",
    "secteurERSEH": "PRIVE_7",
    "cpcName": "",
    "email": "ce.0131814B@ac-aix-marseille.fr",
    "phone": "491609057",
    "referentPhone": "06 12 97 29 60",
    "referentEmail": "ce.erseh13-prive7@ac-aix-marseille.fr"
  },
  {
    "id": "0132081s",
    "rne": "0132081S",
    "name": "SEVIGNE",
    "type": "elementaire",
    "city": "MARSEILLE 13E  ARRONDISSEMENT",
    "address": "1 avenue DE SAINT JEROME",
    "postalCode": "13202",
    "latitude": 43.340303,
    "longitude": 5.429033,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Marie-Agnès PALLERANO",
    "referentName": "CARRERA JONATHAN",
    "secteurERSEH": "MALRAUX_2",
    "cpcName": "",
    "email": "ce.0132081S@ac-aix-marseille.fr",
    "phone": "491662275",
    "referentPhone": "06 21 54 70 18",
    "referentEmail": "ce.erseh13-malraux2@ac-aix-marseille.fr"
  },
  {
    "id": "0131798j",
    "rne": "0131798J",
    "name": "SAINT JOSEPH MADELEINE",
    "type": "elementaire",
    "city": "MARSEILLE  4E  ARRONDISSEMENT",
    "address": "172 bis boulevard de la Libérati",
    "postalCode": "13228",
    "latitude": 43.306398,
    "longitude": 5.400105,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME  HEMOUR",
    "referentName": "PETIT FRANCOISE",
    "secteurERSEH": "PRIVE_2",
    "cpcName": "",
    "email": "ce.0131798J@ac-aix-marseille.fr",
    "phone": "496122138",
    "referentPhone": "06 28 58 88 72",
    "referentEmail": "ce.erseh13-prive2@ac-aix-marseille.fr"
  },
  {
    "id": "0132071f",
    "rne": "0132071F",
    "name": "NOTRE-DAME DE FRANCE",
    "type": "elementaire",
    "city": "MARSEILLE  6E  ARRONDISSEMENT",
    "address": "5 rue Lacédémone",
    "postalCode": "13294",
    "latitude": 43.287545,
    "longitude": 5.381329,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Alice ROMANET",
    "referentName": "FINO HELENE",
    "secteurERSEH": "PUGET_1",
    "cpcName": "",
    "email": "ecole@ndfrance.org",
    "phone": "491633578",
    "referentPhone": "06 21 54 03 57",
    "referentEmail": "ce.erseh13-puget1@ac-aix-marseille.fr"
  },
  {
    "id": "0131804r",
    "rne": "0131804R",
    "name": "PERRIN SAINTE TRINITE",
    "type": "elementaire",
    "city": "MARSEILLE  1ER ARRONDISSEMENT",
    "address": "19 rue Estelle BP 39",
    "postalCode": "13020",
    "latitude": 43.298906,
    "longitude": 5.382843,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Laure FOUSSADIER",
    "referentName": "PETIT FRANCOISE",
    "secteurERSEH": "PRIVE_2",
    "cpcName": "",
    "email": "ce.0131804R@ac-aix-marseille.fr",
    "phone": "491543178",
    "referentPhone": "06 28 58 88 72",
    "referentEmail": "ce.erseh13-prive2@ac-aix-marseille.fr"
  },
  {
    "id": "0130974n",
    "rne": "0130974N",
    "name": "ALAIN LOPEZ",
    "type": "elementaire",
    "city": "MARTIGUES",
    "address": "Avenue Raymond Simi",
    "postalCode": "13117",
    "latitude": 43.385043,
    "longitude": 5.02752,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ALICE BOUCHEIX",
    "referentName": "CARNAZZA ANNE-MARIE",
    "secteurERSEH": "MARTIGUES",
    "cpcName": "",
    "email": "ce.0130974N@ac-aix-marseille.fr",
    "phone": "442814972",
    "referentPhone": "06 14 60 56 21",
    "referentEmail": "ce.erseh13-martigues@ac-aix-marseille.fr"
  },
  {
    "id": "0130969h",
    "rne": "0130969H",
    "name": "AUPECLE",
    "type": "elementaire",
    "city": "MARTIGUES",
    "address": "15 avenue Pasteur",
    "postalCode": "13500",
    "latitude": 43.399943,
    "longitude": 5.057059,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VALERIE MASSON RAGUSA",
    "referentName": "CARNAZZA ANNE-MARIE",
    "secteurERSEH": "MARTIGUES",
    "cpcName": "",
    "email": "ce.0130969H@ac-aix-marseille.fr",
    "phone": "442070544",
    "referentPhone": "06 14 60 56 21",
    "referentEmail": "ce.erseh13-martigues@ac-aix-marseille.fr"
  },
  {
    "id": "0130985a",
    "rne": "0130985A",
    "name": "CARRO",
    "type": "elementaire",
    "city": "MARTIGUES",
    "address": "Rue des Ecoliers Carro",
    "postalCode": "13500",
    "latitude": 43.332222,
    "longitude": 5.04004,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SUZANNE HUSS POGGI",
    "referentName": "MOUISSON VIAL CELIA",
    "secteurERSEH": "SAUSSET",
    "cpcName": "",
    "email": "ce.0130985A@ac-aix-marseille.fr",
    "phone": "442807309",
    "referentPhone": "06 10 05 00 97",
    "referentEmail": "ce.erseh13-sausset@ac-aix-marseille.fr"
  },
  {
    "id": "0130986b",
    "rne": "0130986B",
    "name": "COURONNE (LA)",
    "type": "elementaire",
    "city": "MARTIGUES",
    "address": "Chemin du Phare",
    "postalCode": "13500",
    "latitude": 43.331534,
    "longitude": 5.053691,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SANDRA MURAT",
    "referentName": "MOUISSON VIAL CELIA",
    "secteurERSEH": "SAUSSET",
    "cpcName": "",
    "email": "ce.0130986B@ac-aix-marseille.fr",
    "phone": "442807612",
    "referentPhone": "06 10 05 00 97",
    "referentEmail": "ce.erseh13-sausset@ac-aix-marseille.fr"
  },
  {
    "id": "0130975p",
    "rne": "0130975P",
    "name": "HENRI DAMOFLI (BILINGUE OCCITA",
    "type": "elementaire",
    "city": "MARTIGUES",
    "address": "22 rue des Ecoles",
    "postalCode": "13500",
    "latitude": 43.414259,
    "longitude": 5.005946,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME KAREN DOSSETTO",
    "referentName": "CARNAZZA ANNE-MARIE",
    "secteurERSEH": "MARTIGUES",
    "cpcName": "",
    "email": "ce.0130975P@ac-aix-marseille.fr",
    "phone": "442062203",
    "referentPhone": "06 14 60 56 21",
    "referentEmail": "ce.erseh13-martigues@ac-aix-marseille.fr"
  },
  {
    "id": "0130970j",
    "rne": "0130970J",
    "name": "HENRI TRANCHIER",
    "type": "elementaire",
    "city": "MARTIGUES",
    "address": "Avenue Guy Môquet",
    "postalCode": "13500",
    "latitude": 43.411662,
    "longitude": 5.02162,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME NICOLE BASTARD ALBERO",
    "referentName": "CARNAZZA ANNE-MARIE",
    "secteurERSEH": "MARTIGUES",
    "cpcName": "",
    "email": "ce.0130970J@ac-aix-marseille.fr",
    "phone": "442805616",
    "referentPhone": "06 14 60 56 21",
    "referentEmail": "ce.erseh13-martigues@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      },
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130972l",
    "rne": "0130972L",
    "name": "JEAN JAURES 1",
    "type": "elementaire",
    "city": "MARTIGUES",
    "address": "5 boulevard Joliot Curie",
    "postalCode": "13500",
    "latitude": 43.40952,
    "longitude": 5.054,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME FLORENCE MENEGALLI",
    "referentName": "CARNAZZA ANNE-MARIE",
    "secteurERSEH": "MARTIGUES",
    "cpcName": "",
    "email": "ce.0130972L@ac-aix-marseille.fr",
    "phone": "442804563",
    "referentPhone": "06 14 60 56 21",
    "referentEmail": "ce.erseh13-martigues@ac-aix-marseille.fr"
  },
  {
    "id": "0132358t",
    "rne": "0132358T",
    "name": "LAURE MOULIN 1",
    "type": "elementaire",
    "city": "MARTIGUES",
    "address": "Allée Marcel Proust",
    "postalCode": "13500",
    "latitude": 43.417739,
    "longitude": 5.054534,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME BEATRICE MASET",
    "referentName": "CARNAZZA ANNE-MARIE",
    "secteurERSEH": "MARTIGUES",
    "cpcName": "",
    "email": "ce.0132358T@ac-aix-marseille.fr",
    "phone": "442804034",
    "referentPhone": "06 14 60 56 21",
    "referentEmail": "ce.erseh13-martigues@ac-aix-marseille.fr"
  },
  {
    "id": "0132359u",
    "rne": "0132359U",
    "name": "LAURE MOULIN 2",
    "type": "elementaire",
    "city": "MARTIGUES",
    "address": "Allée Marcel Proust",
    "postalCode": "13500",
    "latitude": 43.417283,
    "longitude": 5.055991,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CORALIE RIVET",
    "referentName": "CARNAZZA ANNE-MARIE",
    "secteurERSEH": "MARTIGUES",
    "cpcName": "",
    "email": "ce.0132359U@ac-aix-marseille.fr",
    "phone": "442804058",
    "referentPhone": "06 14 60 56 21",
    "referentEmail": "ce.erseh13-martigues@ac-aix-marseille.fr"
  },
  {
    "id": "0133042l",
    "rne": "0133042L",
    "name": "LOUISE MICHEL",
    "type": "elementaire",
    "city": "MARTIGUES",
    "address": "Impasse Louise Michel",
    "postalCode": "13500",
    "latitude": 43.423079,
    "longitude": 5.045451,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "SEGPA",
      "assignedStudents": 0,
      "capacity": 69,
      "placesVacantes": 69,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LAURENCE PAUL",
    "referentName": "CARNAZZA ANNE-MARIE",
    "secteurERSEH": "MARTIGUES",
    "cpcName": "",
    "email": "ce.0133042L@ac-aix-marseille.fr",
    "phone": "442421100",
    "referentPhone": "06 14 60 56 21",
    "referentEmail": "ce.erseh13-martigues@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "SEGPA",
        "assignedStudents": 0,
        "capacity": 69,
        "placesVacantes": 69,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132438e",
    "rne": "0132438E",
    "name": "LUCIEN TOULMOND",
    "type": "elementaire",
    "city": "MARTIGUES",
    "address": "Rue Fernand Léger",
    "postalCode": "13500",
    "latitude": 43.407044,
    "longitude": 5.04262,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ANA GALLAIS",
    "referentName": "CARNAZZA ANNE-MARIE",
    "secteurERSEH": "MARTIGUES",
    "cpcName": "",
    "email": "ce.0132438E@ac-aix-marseille.fr",
    "phone": "442805133",
    "referentPhone": "06 14 60 56 21",
    "referentEmail": "ce.erseh13-martigues@ac-aix-marseille.fr"
  },
  {
    "id": "0132257h",
    "rne": "0132257H",
    "name": "PAUL DI LORTO",
    "type": "elementaire",
    "city": "MARTIGUES",
    "address": "Chemin de la Vierge",
    "postalCode": "13500",
    "latitude": 43.413221,
    "longitude": 5.049417,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VALERIE BAQUE",
    "referentName": "CARNAZZA ANNE-MARIE",
    "secteurERSEH": "MARTIGUES",
    "cpcName": "",
    "email": "ce.0132257H@ac-aix-marseille.fr",
    "phone": "442805447",
    "referentPhone": "06 14 60 56 21",
    "referentEmail": "ce.erseh13-martigues@ac-aix-marseille.fr"
  },
  {
    "id": "0132559l",
    "rne": "0132559L",
    "name": "ROBERT DAUGEY",
    "type": "elementaire",
    "city": "MARTIGUES",
    "address": "Avenue du Groupe Manouchian",
    "postalCode": "13500",
    "latitude": 43.414354,
    "longitude": 5.02826,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. ANTOINE RODRIGUEZ",
    "referentName": "CARNAZZA ANNE-MARIE",
    "secteurERSEH": "MARTIGUES",
    "cpcName": "",
    "email": "ce.0132559L@ac-aix-marseille.fr",
    "phone": "442805162",
    "referentPhone": "06 14 60 56 21",
    "referentEmail": "ce.erseh13-martigues@ac-aix-marseille.fr"
  },
  {
    "id": "0132764j",
    "rne": "0132764J",
    "name": "ROBERT DESNOS",
    "type": "elementaire",
    "city": "MARTIGUES",
    "address": "Rue Robert Desnos",
    "postalCode": "13500",
    "latitude": 43.419449,
    "longitude": 5.04753,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ISABELLE BELLINO",
    "referentName": "CARNAZZA ANNE-MARIE",
    "secteurERSEH": "MARTIGUES",
    "cpcName": "",
    "email": "ce.0132764J@ac-aix-marseille.fr",
    "phone": "442808257",
    "referentPhone": "06 14 60 56 21",
    "referentEmail": "ce.erseh13-martigues@ac-aix-marseille.fr"
  },
  {
    "id": "0130987c",
    "rne": "0130987C",
    "name": "SAINT JULIEN",
    "type": "elementaire",
    "city": "MARTIGUES",
    "address": "Route de Sausset",
    "postalCode": "13500",
    "latitude": 43.363349,
    "longitude": 5.094,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MARIE LAURE SUBI",
    "referentName": "MOUISSON VIAL CELIA",
    "secteurERSEH": "SAUSSET",
    "cpcName": "",
    "email": "ce.0130987C@ac-aix-marseille.fr",
    "phone": "442814943",
    "referentPhone": "06 10 05 00 97",
    "referentEmail": "ce.erseh13-sausset@ac-aix-marseille.fr"
  },
  {
    "id": "0130976r",
    "rne": "0130976R",
    "name": "SAINT PIERRE",
    "type": "elementaire",
    "city": "MARTIGUES",
    "address": "Chemin des Ecoles",
    "postalCode": "13500",
    "latitude": 43.369595,
    "longitude": 5.054142,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. PHILIPPE BOUISSON",
    "referentName": "CARNAZZA ANNE-MARIE",
    "secteurERSEH": "MARTIGUES",
    "cpcName": "",
    "email": "ce.0130976R@ac-aix-marseille.fr",
    "phone": "442814942",
    "referentPhone": "06 14 60 56 21",
    "referentEmail": "ce.erseh13-martigues@ac-aix-marseille.fr"
  },
  {
    "id": "0130971k",
    "rne": "0130971K",
    "name": "TOURREL",
    "type": "elementaire",
    "city": "MARTIGUES",
    "address": "Boulevard Jean Jacques Rousseau",
    "postalCode": "13500",
    "latitude": 43.400057,
    "longitude": 5.047988,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. BERTRAND VIPREY",
    "referentName": "CARNAZZA ANNE-MARIE",
    "secteurERSEH": "MARTIGUES",
    "cpcName": "",
    "email": "ce.0130971K@ac-aix-marseille.fr",
    "phone": "442070476",
    "referentPhone": "06 14 60 56 21",
    "referentEmail": "ce.erseh13-martigues@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130992h",
    "rne": "0130992H",
    "name": "MARIE MAURON",
    "type": "elementaire",
    "city": "MAS-BLANC-DES-ALPILLES",
    "address": "Mas Mattias",
    "postalCode": "13103",
    "latitude": 43.789321,
    "longitude": 4.75507,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSLA",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CECILE RISTORCELLI",
    "referentName": "COHUAU QUENTIN",
    "secteurERSEH": "ARLES_1",
    "cpcName": "",
    "email": "ce.0130992H@ac-aix-marseille.fr",
    "phone": "490490157",
    "referentPhone": "06 14 60 59 94",
    "referentEmail": "ce.erseh13-arles1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSLA",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130993j",
    "rne": "0130993J",
    "name": "CHARLES PIQUET",
    "type": "elementaire",
    "city": "MAUSSANE-LES-ALPILLES",
    "address": "1 avenue des Ecoles",
    "postalCode": "13520",
    "latitude": 43.722168,
    "longitude": 4.80319,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. JEAN LUC MARGUET",
    "referentName": "DEMAEREL ISABELLE",
    "secteurERSEH": "SAINT_MARTIN_DE_CRAU",
    "cpcName": "",
    "email": "ce.0130993J@ac-aix-marseille.fr",
    "phone": "490543006",
    "referentPhone": "06 14 60 01 45",
    "referentEmail": "ce.erseh13-crau@ac-aix-marseille.fr"
  },
  {
    "id": "0130995l",
    "rne": "0130995L",
    "name": "JULES FERRY",
    "type": "elementaire",
    "city": "MEYRARGUES",
    "address": "2 rue Jules Ferry",
    "postalCode": "13650",
    "latitude": 43.635793,
    "longitude": 5.527077,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. BRUNO BONNET",
    "referentName": "BIANCO MARIE-CHRISTINE",
    "secteurERSEH": "PUY_SAINTE_REPARADE",
    "cpcName": "",
    "email": "ce.0130995L@ac-aix-marseille.fr",
    "phone": "442575156",
    "referentPhone": "06 14 60 71 43",
    "referentEmail": "ce.erseh13-puystereparade@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0130999r",
    "rne": "0130999R",
    "name": "ALAIN TERTZAGUIAN",
    "type": "elementaire",
    "city": "MEYREUIL",
    "address": "",
    "postalCode": "13590",
    "latitude": 43.486667,
    "longitude": 5.493961,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ALEXIA BOLZER GUARESE",
    "referentName": "MARIGLIANO SYLVIE",
    "secteurERSEH": "AIX_SUD_3",
    "cpcName": "",
    "email": "ce.0130999R@ac-aix-marseille.fr",
    "phone": "442581575",
    "referentPhone": "06 21 54 16 75",
    "referentEmail": "ce.erseh13-aixsud3@ac-aix-marseille.fr"
  },
  {
    "id": "0134404s",
    "rne": "0134404S",
    "name": "ROBERT LAGIER",
    "type": "elementaire",
    "city": "MEYREUIL",
    "address": "4 cours Sainte Victoire",
    "postalCode": "13590",
    "latitude": 43.472731,
    "longitude": 5.482081,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHRISTINE DEBARD",
    "referentName": "MARIGLIANO SYLVIE",
    "secteurERSEH": "AIX_SUD_3",
    "cpcName": "",
    "email": "ce.0134404S@ac-aix-marseille.fr",
    "phone": "465261099",
    "referentPhone": "06 21 54 16 75",
    "referentEmail": "ce.erseh13-aixsud3@ac-aix-marseille.fr"
  },
  {
    "id": "0130997n",
    "rne": "0130997N",
    "name": "VIRGILE ARENE",
    "type": "elementaire",
    "city": "MEYREUIL",
    "address": "",
    "postalCode": "13590",
    "latitude": 43.475357,
    "longitude": 5.496362,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME PASCALE FILIPPINI",
    "referentName": "MARIGLIANO SYLVIE",
    "secteurERSEH": "AIX_SUD_3",
    "cpcName": "",
    "email": "ce.0130997N@ac-aix-marseille.fr",
    "phone": "442583625",
    "referentPhone": "06 21 54 16 75",
    "referentEmail": "ce.erseh13-aixsud3@ac-aix-marseille.fr"
  },
  {
    "id": "0131005x",
    "rne": "0131005X",
    "name": "MIMET VILLAGE",
    "type": "elementaire",
    "city": "MIMET",
    "address": "Quartier de la Tour",
    "postalCode": "13105",
    "latitude": 43.416671,
    "longitude": 5.504748,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LAURENCE CRAUCHET CUNY",
    "referentName": "BOUQUET SANDRINE",
    "secteurERSEH": "GARDANNE",
    "cpcName": "",
    "email": "ce.0131005X@ac-aix-marseille.fr",
    "phone": "442589587",
    "referentPhone": "06 21 54 84 62",
    "referentEmail": "ce.erseh13-gardanne@ac-aix-marseille.fr"
  },
  {
    "id": "0131003v",
    "rne": "0131003V",
    "name": "MOULIERES (LES)",
    "type": "elementaire",
    "city": "MIMET",
    "address": "Rue des Marjolaines",
    "postalCode": "13105",
    "latitude": 43.42683,
    "longitude": 5.47875,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CARINE BIGOT",
    "referentName": "BOUQUET SANDRINE",
    "secteurERSEH": "GARDANNE",
    "cpcName": "",
    "email": "ce.0131003V@ac-aix-marseille.fr",
    "phone": "442513769",
    "referentPhone": "06 21 54 84 62",
    "referentEmail": "ce.erseh13-gardanne@ac-aix-marseille.fr"
  },
  {
    "id": "0132546x",
    "rne": "0132546X",
    "name": "CHANTEGRIVE",
    "type": "elementaire",
    "city": "MIRAMAS",
    "address": "Avenue de la Camargue",
    "postalCode": "13140",
    "latitude": 43.589963,
    "longitude": 4.994556,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. JEROME RICARD",
    "referentName": "SANTINI",
    "secteurERSEH": "ROGNAC 2",
    "cpcName": "",
    "email": "ce.0132546X@ac-aix-marseille.fr",
    "phone": "490581245",
    "referentPhone": "06 18 32 41 00",
    "referentEmail": "ce.erseh13-rognac2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132696k",
    "rne": "0132696K",
    "name": "GERARD PHILIPE",
    "type": "elementaire",
    "city": "MIRAMAS",
    "address": "",
    "postalCode": "13140",
    "latitude": 43.577356,
    "longitude": 4.996701,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME DELPHINE DEQUIDT",
    "referentName": "KOUFI SAMIA",
    "secteurERSEH": "MIRAMAS",
    "cpcName": "",
    "email": "ce.0132696K@ac-aix-marseille.fr",
    "phone": "490582557",
    "referentPhone": "06 21 54 01 52",
    "referentEmail": "ce.erseh13-miramas@ac-aix-marseille.fr"
  },
  {
    "id": "0132486g",
    "rne": "0132486G",
    "name": "JEAN GIONO",
    "type": "elementaire",
    "city": "MIRAMAS",
    "address": "Place des Baladins",
    "postalCode": "13140",
    "latitude": 43.593975,
    "longitude": 5.008278,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MARIANNE BARTOLI-FOURNERON",
    "referentName": "KOUFI SAMIA",
    "secteurERSEH": "MIRAMAS",
    "cpcName": "",
    "email": "ce.0132486G@ac-aix-marseille.fr",
    "phone": "490580671",
    "referentPhone": "06 21 54 01 52",
    "referentEmail": "ce.erseh13-miramas@ac-aix-marseille.fr"
  },
  {
    "id": "0131010c",
    "rne": "0131010C",
    "name": "JEAN MACE",
    "type": "elementaire",
    "city": "MIRAMAS",
    "address": "Rue Simian Jauffret",
    "postalCode": "13140",
    "latitude": 43.583212,
    "longitude": 5.00461,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VALERIE NOLOT",
    "referentName": "SANTINI",
    "secteurERSEH": "ROGNAC 2",
    "cpcName": "",
    "email": "ce.0131010C@ac-aix-marseille.fr",
    "phone": "490580552",
    "referentPhone": "06 18 32 41 00",
    "referentEmail": "ce.erseh13-rognac2@ac-aix-marseille.fr"
  },
  {
    "id": "0131008a",
    "rne": "0131008A",
    "name": "JEAN MOULIN",
    "type": "elementaire",
    "city": "MIRAMAS",
    "address": "Avenue Jean Moulin",
    "postalCode": "13140",
    "latitude": 43.578163,
    "longitude": 5.005653,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME PERRINE FIEU",
    "referentName": "KOUFI SAMIA",
    "secteurERSEH": "MIRAMAS",
    "cpcName": "",
    "email": "ce.0131008A@ac-aix-marseille.fr",
    "phone": "490580929",
    "referentPhone": "06 21 54 01 52",
    "referentEmail": "ce.erseh13-miramas@ac-aix-marseille.fr"
  },
  {
    "id": "0132093e",
    "rne": "0132093E",
    "name": "JEANNE D'ARC",
    "type": "elementaire",
    "city": "MIRAMAS",
    "address": "Boulevard Théodore Aubanel",
    "postalCode": "13140",
    "latitude": 43.587832,
    "longitude": 5.001339,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MARTINE GRIGNARD",
    "referentName": "LEGRAND VERONIQUE",
    "secteurERSEH": "PRIVE_3",
    "cpcName": "",
    "email": "jeannedarc.miramas@orange.fr",
    "phone": "971531595",
    "referentPhone": "06 28 58 88 80",
    "referentEmail": "ce.erseh13-prive3@ac-aix-marseille.fr"
  },
  {
    "id": "0131006y",
    "rne": "0131006Y",
    "name": "JULES FERRY",
    "type": "elementaire",
    "city": "MIRAMAS",
    "address": "Rue Henri Lang",
    "postalCode": "13140",
    "latitude": 43.587172,
    "longitude": 4.998,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SABINE DEFRANCE RIGALLE",
    "referentName": "KOUFI SAMIA",
    "secteurERSEH": "MIRAMAS",
    "cpcName": "",
    "email": "ce.0131006Y@ac-aix-marseille.fr",
    "phone": "490582000",
    "referentPhone": "06 21 54 01 52",
    "referentEmail": "ce.erseh13-miramas@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132901h",
    "rne": "0132901H",
    "name": "LA CARRAIRE - GEORGE SAND",
    "type": "elementaire",
    "city": "MIRAMAS",
    "address": "ZAC la Carraire",
    "postalCode": "13140",
    "latitude": 43.575671,
    "longitude": 5.005328,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CYNTHIA CHARLES",
    "referentName": "KOUFI SAMIA",
    "secteurERSEH": "MIRAMAS",
    "cpcName": "",
    "email": "ce.0132901H@ac-aix-marseille.fr",
    "phone": "490501356",
    "referentPhone": "06 21 54 01 52",
    "referentEmail": "ce.erseh13-miramas@ac-aix-marseille.fr"
  },
  {
    "id": "0133043m",
    "rne": "0133043M",
    "name": "LA MAILLE 3",
    "type": "elementaire",
    "city": "MIRAMAS",
    "address": "Avenue du Levant",
    "postalCode": "13140",
    "latitude": 43.598711,
    "longitude": 5.010681,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. LAURENT GOUINEAU",
    "referentName": "KOUFI SAMIA",
    "secteurERSEH": "MIRAMAS",
    "cpcName": "",
    "email": "ce.0133043M@ac-aix-marseille.fr",
    "phone": "490580662",
    "referentPhone": "06 21 54 01 52",
    "referentEmail": "ce.erseh13-miramas@ac-aix-marseille.fr"
  },
  {
    "id": "0132260l",
    "rne": "0132260L",
    "name": "MARCEL GRESSET",
    "type": "elementaire",
    "city": "MIRAMAS",
    "address": "Avenue des Anciens Combattants",
    "postalCode": "13140",
    "latitude": 43.589827,
    "longitude": 5.002638,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. THIERRY VITANI",
    "referentName": "KOUFI SAMIA",
    "secteurERSEH": "MIRAMAS",
    "cpcName": "",
    "email": "ce.0132260L@ac-aix-marseille.fr",
    "phone": "490580626",
    "referentPhone": "06 21 54 01 52",
    "referentEmail": "ce.erseh13-miramas@ac-aix-marseille.fr"
  },
  {
    "id": "0131012e",
    "rne": "0131012E",
    "name": "MIRAMAS VILLAGE",
    "type": "elementaire",
    "city": "MIRAMAS",
    "address": "Rue des Ecoles Qua Village",
    "postalCode": "13140",
    "latitude": 43.562456,
    "longitude": 5.024444,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LAURENCE FOURES",
    "referentName": "KOUFI SAMIA",
    "secteurERSEH": "MIRAMAS",
    "cpcName": "",
    "email": "ce.0131012E@ac-aix-marseille.fr",
    "phone": "490580979",
    "referentPhone": "06 21 54 01 52",
    "referentEmail": "ce.erseh13-miramas@ac-aix-marseille.fr"
  },
  {
    "id": "0132765k",
    "rne": "0132765K",
    "name": "OLYMPE DE GOUGES",
    "type": "elementaire",
    "city": "MIRAMAS",
    "address": "Avenue du Ponant",
    "postalCode": "13140",
    "latitude": 43.591638,
    "longitude": 5.009233,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SOPHIE LLOBET",
    "referentName": "KOUFI SAMIA",
    "secteurERSEH": "MIRAMAS",
    "cpcName": "",
    "email": "ce.0132765K@ac-aix-marseille.fr",
    "phone": "490582406",
    "referentPhone": "06 21 54 01 52",
    "referentEmail": "ce.erseh13-miramas@ac-aix-marseille.fr"
  },
  {
    "id": "0132713d",
    "rne": "0132713D",
    "name": "PAUL CEZANNE",
    "type": "elementaire",
    "city": "MIRAMAS",
    "address": "Place des Jonquilles",
    "postalCode": "13140",
    "latitude": 43.597397,
    "longitude": 5.010038,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 10,
      "placesVacantes": 10,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME EDITH SUIRE",
    "referentName": "KOUFI SAMIA",
    "secteurERSEH": "MIRAMAS",
    "cpcName": "",
    "email": "ce.0132713D@ac-aix-marseille.fr",
    "phone": "490580556",
    "referentPhone": "06 21 54 01 52",
    "referentEmail": "ce.erseh13-miramas@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 10,
        "placesVacantes": 10,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131015h",
    "rne": "0131015H",
    "name": "MOLLEGES",
    "type": "elementaire",
    "city": "MOLLEGES",
    "address": "Route de Noves",
    "postalCode": "13940",
    "latitude": 43.808119,
    "longitude": 4.94854,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME DELPHINE AUVRE",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ce.0131015H@ac-aix-marseille.fr",
    "phone": "490950081",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131017k",
    "rne": "0131017K",
    "name": "LOUIS PASTEUR",
    "type": "elementaire",
    "city": "MOURIES",
    "address": "59 rue Louis Pasteur",
    "postalCode": "13890",
    "latitude": 43.688876,
    "longitude": 4.874419,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ELISE ESNAULT",
    "referentName": "DEMAEREL ISABELLE",
    "secteurERSEH": "SAINT_MARTIN_DE_CRAU",
    "cpcName": "",
    "email": "ce.0131017K@ac-aix-marseille.fr",
    "phone": "490475239",
    "referentPhone": "06 14 60 01 45",
    "referentEmail": "ce.erseh13-crau@ac-aix-marseille.fr"
  },
  {
    "id": "0131019m",
    "rne": "0131019M",
    "name": "JULES FERRY",
    "type": "elementaire",
    "city": "NOVES",
    "address": "4 place Jules Ferry",
    "postalCode": "13550",
    "latitude": 43.876521,
    "longitude": 4.903289,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME JULIE CAPARROS",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ce.0131019M@ac-aix-marseille.fr",
    "phone": "490244304",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ],
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131020n",
    "rne": "0131020N",
    "name": "LOUISE MICHEL",
    "type": "elementaire",
    "city": "NOVES",
    "address": "Avenue François Marcel roudier",
    "postalCode": "13550",
    "latitude": 43.833372,
    "longitude": 4.902816,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "SEGPA",
      "assignedStudents": 0,
      "capacity": 69,
      "placesVacantes": 69,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LAURE AMBROGINI",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ce.0131020N@ac-aix-marseille.fr",
    "phone": "490954154",
    "ashDevices": [
      {
        "type": "SEGPA",
        "assignedStudents": 0,
        "capacity": 69,
        "placesVacantes": 69,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ],
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132085w",
    "rne": "0132085W",
    "name": "SAINT JOSEPH",
    "type": "elementaire",
    "city": "NOVES",
    "address": "1 place LAGNEL",
    "postalCode": "13550",
    "latitude": 43.877599,
    "longitude": 4.90081,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Bénédicte MOUTARDE",
    "referentName": "DE BRUYNE ISABELLE",
    "secteurERSEH": "ASH_OUEST_PRIVE_1",
    "cpcName": "",
    "email": "ce.0132085W@ac-aix-marseille.fr",
    "phone": "490943897",
    "referentPhone": "06 28 58 88 79",
    "referentEmail": "ce.erseh13-ashouest-prive1@ac-aix-marseille.fr"
  },
  {
    "id": "0131024t",
    "rne": "0131024T",
    "name": "ORGON",
    "type": "elementaire",
    "city": "ORGON",
    "address": "Route de Bazardes",
    "postalCode": "13660",
    "latitude": 43.793693,
    "longitude": 5.040678,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SYLVIE MATHIEU",
    "referentName": "VALANSOT CHRISTELLE",
    "secteurERSEH": "SALON_2",
    "cpcName": "",
    "email": "ce.0131024T@ac-aix-marseille.fr",
    "phone": "490730063",
    "referentPhone": "06 14 60 63 95",
    "referentEmail": "ce.erseh13-salon2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131026v",
    "rne": "0131026V",
    "name": "HUBERT NYSSEN",
    "type": "elementaire",
    "city": "PARADOU",
    "address": "",
    "postalCode": "13520",
    "latitude": 43.719827,
    "longitude": 4.782909,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHRISTELLE CHARMOILLAUX",
    "referentName": "DEMAEREL ISABELLE",
    "secteurERSEH": "SAINT_MARTIN_DE_CRAU",
    "cpcName": "",
    "email": "ce.0131026V@ac-aix-marseille.fr",
    "phone": "490544203",
    "referentPhone": "06 14 60 01 45",
    "referentEmail": "ce.erseh13-crau@ac-aix-marseille.fr"
  },
  {
    "id": "0131027w",
    "rne": "0131027W",
    "name": "DE LA GARE",
    "type": "elementaire",
    "city": "PELISSANNE",
    "address": "Avenue Frédéric Mistral",
    "postalCode": "13330",
    "latitude": 43.634036,
    "longitude": 5.153494,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. FREDERIC BICHERON",
    "referentName": "LANKAMER MURIEL",
    "secteurERSEH": "SALON_3",
    "cpcName": "",
    "email": "ce.0131027W@ac-aix-marseille.fr",
    "phone": "442112025",
    "referentPhone": "06 14 60 29 97",
    "referentEmail": "ce.erseh13-salon3@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132717h",
    "rne": "0132717H",
    "name": "ENJOUVENES",
    "type": "elementaire",
    "city": "PELISSANNE",
    "address": "Avenue du Général de Gaulle",
    "postalCode": "13330",
    "latitude": 43.631254,
    "longitude": 5.155944,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME NATHALIE FERRAND",
    "referentName": "LANKAMER MURIEL",
    "secteurERSEH": "SALON_3",
    "cpcName": "",
    "email": "ce.0132717H@ac-aix-marseille.fr",
    "phone": "490550360",
    "referentPhone": "06 14 60 29 97",
    "referentEmail": "ce.erseh13-salon3@ac-aix-marseille.fr"
  },
  {
    "id": "0132110y",
    "rne": "0132110Y",
    "name": "JEANNE D'ARC",
    "type": "elementaire",
    "city": "PELISSANNE",
    "address": "Route Lancon",
    "postalCode": "13330",
    "latitude": 43.625905,
    "longitude": 5.151238,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MÂ‚LANIE DELVART",
    "referentName": "DE BRUYNE ISABELLE",
    "secteurERSEH": "ASH_OUEST_PRIVE_1",
    "cpcName": "",
    "email": "jeanne.darc13330@orange.fr",
    "phone": "490551579",
    "referentPhone": "06 28 58 88 79",
    "referentEmail": "ce.erseh13-ashouest-prive1@ac-aix-marseille.fr"
  },
  {
    "id": "0133430h",
    "rne": "0133430H",
    "name": "PLAN DE CLAVEL",
    "type": "elementaire",
    "city": "PELISSANNE",
    "address": "Rue Georges Gros",
    "postalCode": "13330",
    "latitude": 43.636715,
    "longitude": 5.144316,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME PEGGY COQUET",
    "referentName": "LANKAMER MURIEL",
    "secteurERSEH": "SALON_3",
    "cpcName": "",
    "email": "ce.0133430H@ac-aix-marseille.fr",
    "phone": "490551790",
    "referentPhone": "06 14 60 29 97",
    "referentEmail": "ce.erseh13-salon3@ac-aix-marseille.fr"
  },
  {
    "id": "0131041l",
    "rne": "0131041L",
    "name": "JEAN JAURES",
    "type": "elementaire",
    "city": "PEYNIER",
    "address": "Avenue Jean Jaurès",
    "postalCode": "13790",
    "latitude": 43.448775,
    "longitude": 5.641549,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LAETITIA EFFANTIN",
    "referentName": "REYNIER ELODIE",
    "secteurERSEH": "AIX_SUD_1",
    "cpcName": "",
    "email": "ce.0131041L@ac-aix-marseille.fr",
    "phone": "442530656",
    "referentPhone": "06 14 60 39 01",
    "referentEmail": "ce.erseh13-aixsud1@ac-aix-marseille.fr"
  },
  {
    "id": "0131044p",
    "rne": "0131044P",
    "name": "AUBERGE NEUVE",
    "type": "elementaire",
    "city": "PEYPIN",
    "address": "",
    "postalCode": "13124",
    "latitude": 43.393298,
    "longitude": 5.551939,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CATHERINE BATTINI",
    "referentName": "MEYRINNE-LAFORET JOSIANE",
    "secteurERSEH": "AURIOL",
    "cpcName": "",
    "email": "ce.0131044P@ac-aix-marseille.fr",
    "phone": "442046560",
    "referentPhone": "06 14 60 14 34",
    "referentEmail": "ce.erseh13-auriol@ac-aix-marseille.fr"
  },
  {
    "id": "0131043n",
    "rne": "0131043N",
    "name": "MARCEL PAGNOL",
    "type": "elementaire",
    "city": "PEYPIN",
    "address": "1 avenue DU PONT",
    "postalCode": "13124",
    "latitude": 43.385267,
    "longitude": 5.576654,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHRISTINE ROUBAUD",
    "referentName": "MEYRINNE-LAFORET JOSIANE",
    "secteurERSEH": "AURIOL",
    "cpcName": "",
    "email": "ce.0131043N@ac-aix-marseille.fr",
    "phone": "442620745",
    "referentPhone": "06 14 60 14 34",
    "referentEmail": "ce.erseh13-auriol@ac-aix-marseille.fr"
  },
  {
    "id": "0131047t",
    "rne": "0131047T",
    "name": "TOUSSAINT BARTHOMEUF",
    "type": "elementaire",
    "city": "PEYROLLES-EN-PROVENCE",
    "address": "2 rue des Ecoles",
    "postalCode": "13860",
    "latitude": 43.64702,
    "longitude": 5.581538,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. CLAUDE BASSANI",
    "referentName": "BIANCO MARIE-CHRISTINE",
    "secteurERSEH": "PUY_SAINTE_REPARADE",
    "cpcName": "",
    "email": "ce.0131047T@ac-aix-marseille.fr",
    "phone": "442671158",
    "referentPhone": "06 14 60 71 43",
    "referentEmail": "ce.erseh13-puystereparade@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131054a",
    "rne": "0131054A",
    "name": "PLAN D'ORGON",
    "type": "elementaire",
    "city": "PLAN-D'ORGON",
    "address": "Route des Ecoles",
    "postalCode": "13750",
    "latitude": 43.81235,
    "longitude": 5.00319,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ALEXANDRA FADIF",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ce.0131054A@ac-aix-marseille.fr",
    "phone": "490731058",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131049v",
    "rne": "0131049V",
    "name": "ANDRE MALRAUX 1",
    "type": "elementaire",
    "city": "PLAN-DE-CUQUES",
    "address": "Avenue Jules Rollandin",
    "postalCode": "13380",
    "latitude": 43.348035,
    "longitude": 5.461832,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SYLVIE TESTA",
    "referentName": "FINO PATRICIA",
    "secteurERSEH": "PLAN_DE_CUQUES",
    "cpcName": "",
    "email": "ce.0131049V@ac-aix-marseille.fr",
    "phone": "491050703",
    "referentPhone": "06 21 54 11 31",
    "referentEmail": "ce.erseh13-pdecuques@ac-aix-marseille.fr"
  },
  {
    "id": "0131051x",
    "rne": "0131051X",
    "name": "ANDRE MALRAUX 2",
    "type": "elementaire",
    "city": "PLAN-DE-CUQUES",
    "address": "Avenue Jules Rollandin",
    "postalCode": "13380",
    "latitude": 43.347799,
    "longitude": 5.462202,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MAGALI TROSSEVIN",
    "referentName": "FINO PATRICIA",
    "secteurERSEH": "PLAN_DE_CUQUES",
    "cpcName": "",
    "email": "ce.0131051X@ac-aix-marseille.fr",
    "phone": "491050690",
    "referentPhone": "06 21 54 11 31",
    "referentEmail": "ce.erseh13-pdecuques@ac-aix-marseille.fr"
  },
  {
    "id": "0131050w",
    "rne": "0131050W",
    "name": "ROBERT DEBRE",
    "type": "elementaire",
    "city": "PLAN-DE-CUQUES",
    "address": "Rue Robert Debré",
    "postalCode": "13380",
    "latitude": 43.360093,
    "longitude": 5.468655,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. JEAN CHRISTOPHE SAVINO",
    "referentName": "FINO PATRICIA",
    "secteurERSEH": "PLAN_DE_CUQUES",
    "cpcName": "",
    "email": "ce.0131050W@ac-aix-marseille.fr",
    "phone": "491687658",
    "referentPhone": "06 21 54 11 31",
    "referentEmail": "ce.erseh13-pdecuques@ac-aix-marseille.fr"
  },
  {
    "id": "0131634f",
    "rne": "0131634F",
    "name": "ANATOLE FRANCE",
    "type": "elementaire",
    "city": "PORT-DE-BOUC",
    "address": "Avenue Maurice Thorez",
    "postalCode": "13110",
    "latitude": 43.404907,
    "longitude": 4.979431,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CORINNE VINCENZI",
    "referentName": "DUSSERRE CLEMENCE",
    "secteurERSEH": "PORT_DE_BOUC",
    "cpcName": "",
    "email": "ce.0131634F@ac-aix-marseille.fr",
    "phone": "442062394",
    "referentPhone": "06 14 60 10 30",
    "referentEmail": "ce.erseh13-portdebouc@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131058e",
    "rne": "0131058E",
    "name": "JEAN JAURES",
    "type": "elementaire",
    "city": "PORT-DE-BOUC",
    "address": "Rue Michel Ruiz",
    "postalCode": "13110",
    "latitude": 43.404681,
    "longitude": 4.980093,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CARINE MOUGHANIM",
    "referentName": "DUSSERRE CLEMENCE",
    "secteurERSEH": "PORT_DE_BOUC",
    "cpcName": "",
    "email": "ce.0131058E@ac-aix-marseille.fr",
    "phone": "442062154",
    "referentPhone": "06 14 60 10 30",
    "referentEmail": "ce.erseh13-portdebouc@ac-aix-marseille.fr"
  },
  {
    "id": "0131056c",
    "rne": "0131056C",
    "name": "LES ARCADES LOUIS AZEMARD",
    "type": "elementaire",
    "city": "PORT-DE-BOUC",
    "address": "",
    "postalCode": "13110",
    "latitude": 43.426134,
    "longitude": 4.976819,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME NASSIMA DJENNEH",
    "referentName": "DUSSERRE CLEMENCE",
    "secteurERSEH": "PORT_DE_BOUC",
    "cpcName": "",
    "email": "ce.0131056C@ac-aix-marseille.fr",
    "phone": "442064160",
    "referentPhone": "06 14 60 10 30",
    "referentEmail": "ce.erseh13-portdebouc@ac-aix-marseille.fr"
  },
  {
    "id": "0132441h",
    "rne": "0132441H",
    "name": "MARCEL PAGNOL",
    "type": "elementaire",
    "city": "PORT-DE-BOUC",
    "address": "",
    "postalCode": "13110",
    "latitude": 43.416185,
    "longitude": 4.983769,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. THIERRY CAMPILLO",
    "referentName": "DUSSERRE CLEMENCE",
    "secteurERSEH": "PORT_DE_BOUC",
    "cpcName": "",
    "email": "ce.0132441H@ac-aix-marseille.fr",
    "phone": "442063414",
    "referentPhone": "06 14 60 10 30",
    "referentEmail": "ce.erseh13-portdebouc@ac-aix-marseille.fr"
  },
  {
    "id": "0131057d",
    "rne": "0131057D",
    "name": "ROMAIN ROLLAND",
    "type": "elementaire",
    "city": "PORT-DE-BOUC",
    "address": "Quartier les Comtes",
    "postalCode": "13110",
    "latitude": 43.410328,
    "longitude": 4.992014,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME NATHALIE BONNAVENT",
    "referentName": "DUSSERRE CLEMENCE",
    "secteurERSEH": "PORT_DE_BOUC",
    "cpcName": "",
    "email": "ce.0131057D@ac-aix-marseille.fr",
    "phone": "442457078",
    "referentPhone": "06 14 60 10 30",
    "referentEmail": "ce.erseh13-portdebouc@ac-aix-marseille.fr"
  },
  {
    "id": "0132291v",
    "rne": "0132291V",
    "name": "VICTOR HUGO",
    "type": "elementaire",
    "city": "PORT-DE-BOUC",
    "address": "Rue Charles Renaud",
    "postalCode": "13110",
    "latitude": 43.403943,
    "longitude": 4.978376,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. GREGORY RICHEDA",
    "referentName": "DUSSERRE CLEMENCE",
    "secteurERSEH": "PORT_DE_BOUC",
    "cpcName": "",
    "email": "ce.0132291V@ac-aix-marseille.fr",
    "phone": "442066297",
    "referentPhone": "06 14 60 10 30",
    "referentEmail": "ce.erseh13-portdebouc@ac-aix-marseille.fr"
  },
  {
    "id": "0131068r",
    "rne": "0131068R",
    "name": "JULES VERNE",
    "type": "elementaire",
    "city": "PORT-SAINT-LOUIS-DU-RHONE",
    "address": "1 allée du Rhône",
    "postalCode": "13230",
    "latitude": 43.386861,
    "longitude": 4.80281,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SANDRA SIMONELLI",
    "referentName": "HUGUERRE LADISLAS",
    "secteurERSEH": "PORT_SAINT_LOUIS_DU_RHONE",
    "cpcName": "",
    "email": "ce.0131068R@ac-aix-marseille.fr",
    "phone": "442860214",
    "referentPhone": "06 03 12 89 20",
    "referentEmail": "ce.erseh13-portsaintlouis@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131069s",
    "rne": "0131069S",
    "name": "PAUL ELUARD",
    "type": "elementaire",
    "city": "PORT-SAINT-LOUIS-DU-RHONE",
    "address": "Quartier Vauban Nord",
    "postalCode": "13230",
    "latitude": 43.398152,
    "longitude": 4.797903,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CORINNE ARDON",
    "referentName": "HUGUERRE LADISLAS",
    "secteurERSEH": "PORT_SAINT_LOUIS_DU_RHONE",
    "cpcName": "",
    "email": "ce.0131069S@ac-aix-marseille.fr",
    "phone": "442860179",
    "referentPhone": "06 03 12 89 20",
    "referentEmail": "ce.erseh13-portsaintlouis@ac-aix-marseille.fr"
  },
  {
    "id": "0132442j",
    "rne": "0132442J",
    "name": "ROMAIN ROLLAND",
    "type": "elementaire",
    "city": "PORT-SAINT-LOUIS-DU-RHONE",
    "address": "Rue Louis Flisi Mallebarge",
    "postalCode": "13230",
    "latitude": 43.392497,
    "longitude": 4.801838,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ALEXANDRA MINAUDO",
    "referentName": "HUGUERRE LADISLAS",
    "secteurERSEH": "PORT_SAINT_LOUIS_DU_RHONE",
    "cpcName": "",
    "email": "ce.0132442J@ac-aix-marseille.fr",
    "phone": "442863596",
    "referentPhone": "06 03 12 89 20",
    "referentEmail": "ce.erseh13-portsaintlouis@ac-aix-marseille.fr"
  },
  {
    "id": "0131070t",
    "rne": "0131070T",
    "name": "PUYLOUBIER",
    "type": "elementaire",
    "city": "PUYLOUBIER",
    "address": "Avenue de Pourrières",
    "postalCode": "13114",
    "latitude": 43.525169,
    "longitude": 5.67647,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME FLORIANE MALIGNER",
    "referentName": "REYNIER ELODIE",
    "secteurERSEH": "AIX_SUD_1",
    "cpcName": "",
    "email": "ce.0131070T@ac-aix-marseille.fr",
    "phone": "442663804",
    "referentPhone": "06 14 60 39 01",
    "referentEmail": "ce.erseh13-aixsud1@ac-aix-marseille.fr"
  },
  {
    "id": "0133254s",
    "rne": "0133254S",
    "name": "GERALD KRAEMER",
    "type": "elementaire",
    "city": "ROGNAC",
    "address": "Avenue des cyprès",
    "postalCode": "13340",
    "latitude": 43.511044,
    "longitude": 5.219488,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHRISTEL BACAVE",
    "referentName": "KIRCHER CORINNE",
    "secteurERSEH": "ROGNAC",
    "cpcName": "",
    "email": "ce.0133254S@ac-aix-marseille.fr",
    "phone": "442786349",
    "referentPhone": "06 10 90 52 60",
    "referentEmail": "ce.erseh13-rognac@ac-aix-marseille.fr"
  },
  {
    "id": "0132986a",
    "rne": "0132986A",
    "name": "JEAN GIONO",
    "type": "elementaire",
    "city": "ROGNAC",
    "address": "Avenue de la Plantade",
    "postalCode": "13340",
    "latitude": 43.483166,
    "longitude": 5.235427,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SYLVIA GUILLAND",
    "referentName": "KIRCHER CORINNE",
    "secteurERSEH": "ROGNAC",
    "cpcName": "",
    "email": "ce.0132986A@ac-aix-marseille.fr",
    "phone": "442786177",
    "referentPhone": "06 10 90 52 60",
    "referentEmail": "ce.erseh13-rognac@ac-aix-marseille.fr"
  },
  {
    "id": "0131075y",
    "rne": "0131075Y",
    "name": "MARCEL PAGNOL",
    "type": "elementaire",
    "city": "ROGNAC",
    "address": "11 boulevard JAURES",
    "postalCode": "13340",
    "latitude": 43.488757,
    "longitude": 5.223841,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME PASCALE RAVEL",
    "referentName": "KIRCHER CORINNE",
    "secteurERSEH": "ROGNAC",
    "cpcName": "",
    "email": "ce.0131075Y@ac-aix-marseille.fr",
    "phone": "442786207",
    "referentPhone": "06 10 90 52 60",
    "referentEmail": "ce.erseh13-rognac@ac-aix-marseille.fr"
  },
  {
    "id": "0132802a",
    "rne": "0132802A",
    "name": "ROMAIN ROLLAND",
    "type": "elementaire",
    "city": "ROGNAC",
    "address": "",
    "postalCode": "13340",
    "latitude": 43.495921,
    "longitude": 5.232278,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ALEXANDRINE BEAUBOIS",
    "referentName": "KIRCHER CORINNE",
    "secteurERSEH": "ROGNAC",
    "cpcName": "",
    "email": "ce.0132802A@ac-aix-marseille.fr",
    "phone": "442786297",
    "referentPhone": "06 10 90 52 60",
    "referentEmail": "ce.erseh13-rognac@ac-aix-marseille.fr"
  },
  {
    "id": "0131078b",
    "rne": "0131078B",
    "name": "ROBERT VERRIER",
    "type": "elementaire",
    "city": "ROGNES",
    "address": "Chemin de la Fanée",
    "postalCode": "13840",
    "latitude": 43.661323,
    "longitude": 5.350651,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME EVA STEPKA",
    "referentName": "BIANCO MARIE-CHRISTINE",
    "secteurERSEH": "PUY_SAINTE_REPARADE",
    "cpcName": "",
    "email": "ce.0131078B@ac-aix-marseille.fr",
    "phone": "442501494",
    "referentPhone": "06 14 60 71 43",
    "referentEmail": "ce.erseh13-puystereparade@ac-aix-marseille.fr"
  },
  {
    "id": "0132086x",
    "rne": "0132086X",
    "name": "ALPILLES-DURANCE",
    "type": "elementaire",
    "city": "ROGNONAS",
    "address": "2 boulevard de verdun",
    "postalCode": "13870",
    "latitude": 43.899788,
    "longitude": 4.802791,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME HÂ‚LENE CARLETTI-FAUCHE",
    "referentName": "DE BRUYNE ISABELLE",
    "secteurERSEH": "ASH_OUEST_PRIVE_1",
    "cpcName": "",
    "email": "direction.ecole@alpilles-durance.org",
    "phone": "490948806",
    "referentPhone": "06 28 58 88 79",
    "referentEmail": "ce.erseh13-ashouest-prive1@ac-aix-marseille.fr"
  },
  {
    "id": "0131080d",
    "rne": "0131080D",
    "name": "ROGNONAS",
    "type": "elementaire",
    "city": "ROGNONAS",
    "address": "7 chemin Saint Jean",
    "postalCode": "13870",
    "latitude": 43.900662,
    "longitude": 4.80439,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME AGNES DURAND",
    "referentName": "PIRON FRANCOISE",
    "secteurERSEH": "SAINT_REMY_DE_PROVENCE",
    "cpcName": "",
    "email": "ce.0131080D@ac-aix-marseille.fr",
    "phone": "490948128",
    "referentPhone": "06 21 54 11 24",
    "referentEmail": "ce.erseh13-stremy@ac-aix-marseille.fr"
  },
  {
    "id": "0131086k",
    "rne": "0131086K",
    "name": "PAUL ELUARD",
    "type": "elementaire",
    "city": "ROQUEFORT-LA-BEDOULE",
    "address": "Allée Gondrexon",
    "postalCode": "13830",
    "latitude": 43.247668,
    "longitude": 5.584461,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME EMMEANUELLE FAURE MARON",
    "referentName": "GERMOND VALERIE",
    "secteurERSEH": "CASSIS",
    "cpcName": "",
    "email": "ce.0131086K@ac-aix-marseille.fr",
    "phone": "442732100",
    "referentPhone": "06 14 60 68 78",
    "referentEmail": "ce.erseh13-cassis@ac-aix-marseille.fr"
  },
  {
    "id": "0131092s",
    "rne": "0131092S",
    "name": "JOSEPH MARTINAT",
    "type": "elementaire",
    "city": "ROQUEVAIRE",
    "address": "Rue Rolland",
    "postalCode": "13360",
    "latitude": 43.348884,
    "longitude": 5.60122,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME JEANNE CAVALLARO",
    "referentName": "BIANCHINI EDITH",
    "secteurERSEH": "AUBAGNE_3",
    "cpcName": "",
    "email": "ce.0131092S@ac-aix-marseille.fr",
    "phone": "442042218",
    "referentPhone": "06 46 35 40 06",
    "referentEmail": "ce.erseh13-aubagne3@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131096w",
    "rne": "0131096W",
    "name": "LASCOURS",
    "type": "elementaire",
    "city": "ROQUEVAIRE",
    "address": "Hameau de Lascours",
    "postalCode": "13360",
    "latitude": 43.34525,
    "longitude": 5.5817,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CECILE DELZANT",
    "referentName": "BIANCHINI EDITH",
    "secteurERSEH": "AUBAGNE_3",
    "cpcName": "",
    "email": "ce.0131096W@ac-aix-marseille.fr",
    "phone": "442040059",
    "referentPhone": "06 46 35 40 06",
    "referentEmail": "ce.erseh13-aubagne3@ac-aix-marseille.fr"
  },
  {
    "id": "0131095v",
    "rne": "0131095V",
    "name": "PONT DE L'ETOILE",
    "type": "elementaire",
    "city": "ROQUEVAIRE",
    "address": "18 route du Val de Riou",
    "postalCode": "13360",
    "latitude": 43.328247,
    "longitude": 5.598334,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME AGNES PIETRI",
    "referentName": "BIANCHINI EDITH",
    "secteurERSEH": "AUBAGNE_3",
    "cpcName": "",
    "email": "ce.0131095V@ac-aix-marseille.fr",
    "phone": "442042344",
    "referentPhone": "06 46 35 40 06",
    "referentEmail": "ce.erseh13-aubagne3@ac-aix-marseille.fr"
  },
  {
    "id": "0131098y",
    "rne": "0131098Y",
    "name": "ROUSSET",
    "type": "elementaire",
    "city": "ROUSSET",
    "address": "Rue Louis Alard",
    "postalCode": "13790",
    "latitude": 43.482248,
    "longitude": 5.625166,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. PHILIPPE COMBES",
    "referentName": "REYNIER ELODIE",
    "secteurERSEH": "AIX_SUD_1",
    "cpcName": "",
    "email": "ce.0131098Y@ac-aix-marseille.fr",
    "phone": "442290219",
    "referentPhone": "06 14 60 39 01",
    "referentEmail": "ce.erseh13-aixsud1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131133l",
    "rne": "0131133L",
    "name": "ROGER DELAGNES",
    "type": "elementaire",
    "city": "SAINTES-MARIES-DE-LA-MER",
    "address": "Rue Roger Delagnes",
    "postalCode": "13460",
    "latitude": 43.453435,
    "longitude": 4.43207,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. LAURENT SARLAT",
    "referentName": "ROBERT MELANIE",
    "secteurERSEH": "ARLES_2",
    "cpcName": "",
    "email": "ce.0131133L@ac-aix-marseille.fr",
    "phone": "490978947",
    "referentPhone": "06 14 60 31 27",
    "referentEmail": "ce.erseh13-arles2@ac-aix-marseille.fr"
  },
  {
    "id": "0134272y",
    "rne": "0134272Y",
    "name": "ARNAUD BELTRAME",
    "type": "elementaire",
    "city": "SALON-DE-PROVENCE",
    "address": "Boulevard Danton",
    "postalCode": "13300",
    "latitude": 43.63927,
    "longitude": 5.087109,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LOUBNA TLILI",
    "referentName": "PLANTIER MYRIAM",
    "secteurERSEH": "SALON_1",
    "cpcName": "",
    "email": "ce.0134272Y@ac-aix-marseille.fr",
    "phone": "490568272",
    "referentPhone": "06 14 60 18 89",
    "referentEmail": "ce.erseh13-salon1@ac-aix-marseille.fr"
  },
  {
    "id": "0132443k",
    "rne": "0132443K",
    "name": "BASTIDE HAUTE",
    "type": "elementaire",
    "city": "SALON-DE-PROVENCE",
    "address": "Boulevard des Nations Unies",
    "postalCode": "13300",
    "latitude": 43.65201,
    "longitude": 5.102472,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MAGALI FAURE",
    "referentName": "VALANSOT CHRISTELLE",
    "secteurERSEH": "SALON_2",
    "cpcName": "",
    "email": "ce.0132443K@ac-aix-marseille.fr",
    "phone": "490535276",
    "referentPhone": "06 14 60 63 95",
    "referentEmail": "ce.erseh13-salon2@ac-aix-marseille.fr"
  },
  {
    "id": "0131138s",
    "rne": "0131138S",
    "name": "BRESSONS (LES)",
    "type": "elementaire",
    "city": "SALON-DE-PROVENCE",
    "address": "106 rue PRINCE DES BAUX",
    "postalCode": "13300",
    "latitude": 43.644637,
    "longitude": 5.090076,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME FABIENNE DULAU",
    "referentName": "VALANSOT CHRISTELLE",
    "secteurERSEH": "SALON_2",
    "cpcName": "",
    "email": "ce.0131138S@ac-aix-marseille.fr",
    "phone": "490561337",
    "referentPhone": "06 14 60 63 95",
    "referentEmail": "ce.erseh13-salon2@ac-aix-marseille.fr"
  },
  {
    "id": "0131565f",
    "rne": "0131565F",
    "name": "CANOURGUES",
    "type": "elementaire",
    "city": "SALON-DE-PROVENCE",
    "address": "Rue Font Ségugne",
    "postalCode": "13300",
    "latitude": 43.649722,
    "longitude": 5.100381,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ISABELLE CORVELLEC",
    "referentName": "VALANSOT CHRISTELLE",
    "secteurERSEH": "SALON_2",
    "cpcName": "",
    "email": "ce.0131565F@ac-aix-marseille.fr",
    "phone": "490535257",
    "referentPhone": "06 14 60 63 95",
    "referentEmail": "ce.erseh13-salon2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131145z",
    "rne": "0131145Z",
    "name": "CAPUCINS",
    "type": "elementaire",
    "city": "SALON-DE-PROVENCE",
    "address": "165 boulevard des Capucins",
    "postalCode": "13300",
    "latitude": 43.639214,
    "longitude": 5.10006,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. GEORGES GROS",
    "referentName": "PLANTIER MYRIAM",
    "secteurERSEH": "SALON_1",
    "cpcName": "",
    "email": "ce.0131145Z@ac-aix-marseille.fr",
    "phone": "490533386",
    "referentPhone": "06 14 60 18 89",
    "referentEmail": "ce.erseh13-salon1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131140u",
    "rne": "0131140U",
    "name": "CRAU-BEL AIR (LA)",
    "type": "elementaire",
    "city": "SALON-DE-PROVENCE",
    "address": "Chemin de la Chapelle",
    "postalCode": "13300",
    "latitude": 43.642921,
    "longitude": 5.059063,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VIRGINIE FOUARD",
    "referentName": "SANTINI",
    "secteurERSEH": "ROGNAC 2",
    "cpcName": "",
    "email": "ce.0131140U@ac-aix-marseille.fr",
    "phone": "490451174",
    "referentPhone": "06 18 32 41 00",
    "referentEmail": "ce.erseh13-rognac2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131139t",
    "rne": "0131139T",
    "name": "DAVID PIERRE BONELLI",
    "type": "elementaire",
    "city": "SALON-DE-PROVENCE",
    "address": "410 boulevard David",
    "postalCode": "13300",
    "latitude": 43.644223,
    "longitude": 5.095399,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LYDIE LAMI",
    "referentName": "VALANSOT CHRISTELLE",
    "secteurERSEH": "SALON_2",
    "cpcName": "",
    "email": "ce.0131139T@ac-aix-marseille.fr",
    "phone": "490560781",
    "referentPhone": "06 14 60 63 95",
    "referentEmail": "ce.erseh13-salon2@ac-aix-marseille.fr"
  },
  {
    "id": "0131142w",
    "rne": "0131142W",
    "name": "JULES MICHELET",
    "type": "elementaire",
    "city": "SALON-DE-PROVENCE",
    "address": "Chemin de Lauzards",
    "postalCode": "13300",
    "latitude": 43.641457,
    "longitude": 5.084963,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CAROLE WEBER JENET",
    "referentName": "VALANSOT CHRISTELLE",
    "secteurERSEH": "SALON_2",
    "cpcName": "",
    "email": "ce.0131142W@ac-aix-marseille.fr",
    "phone": "490532732",
    "referentPhone": "06 14 60 63 95",
    "referentEmail": "ce.erseh13-salon2@ac-aix-marseille.fr"
  },
  {
    "id": "0132109x",
    "rne": "0132109X",
    "name": "LA PRESENTATION",
    "type": "elementaire",
    "city": "SALON-DE-PROVENCE",
    "address": "Square Jean XXIII",
    "postalCode": "13300",
    "latitude": 43.642694,
    "longitude": 5.089942,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. Yann MINSON",
    "referentName": "LEGRAND VERONIQUE",
    "secteurERSEH": "PRIVE_3",
    "cpcName": "",
    "email": "ce.0132109X@ac-aix-marseille.fr",
    "phone": "490560816",
    "referentPhone": "06 28 58 88 80",
    "referentEmail": "ce.erseh13-prive3@ac-aix-marseille.fr"
  },
  {
    "id": "0131143x",
    "rne": "0131143X",
    "name": "LURIAN 1",
    "type": "elementaire",
    "city": "SALON-DE-PROVENCE",
    "address": "438 chemin de Lurian",
    "postalCode": "13300",
    "latitude": 43.626677,
    "longitude": 5.105889,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SABINE TARDIF",
    "referentName": "PLANTIER MYRIAM",
    "secteurERSEH": "SALON_1",
    "cpcName": "",
    "email": "ce.0131143X@ac-aix-marseille.fr",
    "phone": "490531334",
    "referentPhone": "06 14 60 18 89",
    "referentEmail": "ce.erseh13-salon1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131148c",
    "rne": "0131148C",
    "name": "LURIAN 2",
    "type": "elementaire",
    "city": "SALON-DE-PROVENCE",
    "address": "438 chemin de Lurian",
    "postalCode": "13300",
    "latitude": 43.626524,
    "longitude": 5.104939,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSLA",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME DELPHINE BADIH",
    "referentName": "LANKAMER MURIEL",
    "secteurERSEH": "SALON_3",
    "cpcName": "",
    "email": "ce.0131148C@ac-aix-marseille.fr",
    "phone": "490531290",
    "referentPhone": "06 14 60 29 97",
    "referentEmail": "ce.erseh13-salon3@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSLA",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131141v",
    "rne": "0131141V",
    "name": "MARCEAU GINOUX",
    "type": "elementaire",
    "city": "SALON-DE-PROVENCE",
    "address": "85 rue Ravoire",
    "postalCode": "13300",
    "latitude": 43.638567,
    "longitude": 5.09163,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHARLOTTE MARNAS",
    "referentName": "PLANTIER MYRIAM",
    "secteurERSEH": "SALON_1",
    "cpcName": "",
    "email": "ce.0131141V@ac-aix-marseille.fr",
    "phone": "490560530",
    "referentPhone": "06 14 60 18 89",
    "referentEmail": "ce.erseh13-salon1@ac-aix-marseille.fr"
  },
  {
    "id": "0134388z",
    "rne": "0134388Z",
    "name": "MONTESSORI INTERNATIONALE SALO",
    "type": "elementaire",
    "city": "SALON-DE-PROVENCE",
    "address": "Boulevard Prince des Baux",
    "postalCode": "13300",
    "latitude": 43.644029,
    "longitude": 5.089274,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. Emeline DUPONT",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ce.0134388Z@ac-aix-marseille.fr",
    "phone": "617839133",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132152u",
    "rne": "0132152U",
    "name": "SAINT NORBERT",
    "type": "elementaire",
    "city": "SALON-DE-PROVENCE",
    "address": "Boulevard des Nations Unies",
    "postalCode": "13300",
    "latitude": 43.649632,
    "longitude": 5.10401,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ANA-CRISTINA GONCALVES CERDEIRA",
    "referentName": "VALANSOT CHRISTELLE",
    "secteurERSEH": "SALON_2",
    "cpcName": "",
    "email": "ce.0132152U@ac-aix-marseille.fr",
    "phone": "490534878",
    "referentPhone": "06 14 60 63 95",
    "referentEmail": "ce.erseh13-salon2@ac-aix-marseille.fr"
  },
  {
    "id": "0132108w",
    "rne": "0132108W",
    "name": "VIALA-LACOSTE",
    "type": "elementaire",
    "city": "SALON-DE-PROVENCE",
    "address": "76 avenue Gaston Cabrier",
    "postalCode": "13300",
    "latitude": 43.640944,
    "longitude": 5.101525,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Delphine DEGUILLEN",
    "referentName": "LEGRAND VERONIQUE",
    "secteurERSEH": "PRIVE_3",
    "cpcName": "",
    "email": "ce.0132108W@ac-aix-marseille.fr",
    "phone": "490566234",
    "referentPhone": "06 28 58 88 80",
    "referentEmail": "ce.erseh13-prive3@ac-aix-marseille.fr"
  },
  {
    "id": "0133099y",
    "rne": "0133099Y",
    "name": "VICTOR HUGO",
    "type": "elementaire",
    "city": "SAUSSET-LES-PINS",
    "address": "Rue Hector Berlioz",
    "postalCode": "13960",
    "latitude": 43.334132,
    "longitude": 5.109159,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MARIELLE MASSEI",
    "referentName": "MOUISSON VIAL CELIA",
    "secteurERSEH": "SAUSSET",
    "cpcName": "",
    "email": "ce.0133099Y@ac-aix-marseille.fr",
    "phone": "442445806",
    "referentPhone": "06 10 05 00 97",
    "referentEmail": "ce.erseh13-sausset@ac-aix-marseille.fr"
  },
  {
    "id": "0131160r",
    "rne": "0131160R",
    "name": "JEAN MOULIN 1",
    "type": "elementaire",
    "city": "SENAS",
    "address": "10 avenue Jean Moulin",
    "postalCode": "13560",
    "latitude": 43.744154,
    "longitude": 5.07859,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SABRINA CAILLE",
    "referentName": "VALANSOT CHRISTELLE",
    "secteurERSEH": "SALON_2",
    "cpcName": "",
    "email": "ce.0131160R@ac-aix-marseille.fr",
    "phone": "490577938",
    "referentPhone": "06 14 60 63 95",
    "referentEmail": "ce.erseh13-salon2@ac-aix-marseille.fr"
  },
  {
    "id": "0131161s",
    "rne": "0131161S",
    "name": "JEAN MOULIN 2",
    "type": "elementaire",
    "city": "SENAS",
    "address": "200 avenue DES JARDINS",
    "postalCode": "13560",
    "latitude": 43.743596,
    "longitude": 5.08256,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MARINE DESBORDES",
    "referentName": "VALANSOT CHRISTELLE",
    "secteurERSEH": "SALON_2",
    "cpcName": "",
    "email": "ce.0131161S@ac-aix-marseille.fr",
    "phone": "490577940",
    "referentPhone": "06 14 60 63 95",
    "referentEmail": "ce.erseh13-salon2@ac-aix-marseille.fr"
  },
  {
    "id": "0134394f",
    "rne": "0134394F",
    "name": "SIMONE VEIL",
    "type": "elementaire",
    "city": "SENAS",
    "address": "Avenue de la Régale",
    "postalCode": "13560",
    "latitude": 43.747741,
    "longitude": 5.075735,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME AURELIE ZUMSTEG",
    "referentName": "VALANSOT CHRISTELLE",
    "secteurERSEH": "SALON_2",
    "cpcName": "",
    "email": "ce.0134394F@ac-aix-marseille.fr",
    "phone": "490590846",
    "referentPhone": "06 14 60 63 95",
    "referentEmail": "ce.erseh13-salon2@ac-aix-marseille.fr"
  },
  {
    "id": "0132000d",
    "rne": "0132000D",
    "name": "FRANCOIS CESARI",
    "type": "elementaire",
    "city": "SEPTEMES-LES-VALLONS",
    "address": "Traverse de l'Ecole",
    "postalCode": "13240",
    "latitude": 43.408226,
    "longitude": 5.368414,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CORALIE SERVAJEAN",
    "referentName": "BEAUME CLAUDINE",
    "secteurERSEH": "CADENAUX",
    "cpcName": "",
    "email": "ce.0132000D@ac-aix-marseille.fr",
    "phone": "491961910",
    "referentPhone": "06 25 11 01 00",
    "referentEmail": "ce.erseh13-cadenaux@ac-aix-marseille.fr"
  },
  {
    "id": "0132399m",
    "rne": "0132399M",
    "name": "JEAN CRESPI",
    "type": "elementaire",
    "city": "SEPTEMES-LES-VALLONS",
    "address": "",
    "postalCode": "13240",
    "latitude": 43.402366,
    "longitude": 5.353298,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SYLVIE VARONE",
    "referentName": "MEURANT OLIVIER",
    "secteurERSEH": "VALLON_DES_PINS",
    "cpcName": "",
    "email": "ce.0132399M@ac-aix-marseille.fr",
    "phone": "491962535",
    "referentPhone": "06 21 54 79 68",
    "referentEmail": "ce.erseh13-vallondespins@ac-aix-marseille.fr"
  },
  {
    "id": "0131163u",
    "rne": "0131163U",
    "name": "JULES FERRY",
    "type": "elementaire",
    "city": "SEPTEMES-LES-VALLONS",
    "address": "Quartier Notre Dame",
    "postalCode": "13240",
    "latitude": 43.386688,
    "longitude": 5.359778,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME NADIA LAHYANI",
    "referentName": "MEURANT OLIVIER",
    "secteurERSEH": "VALLON_DES_PINS",
    "cpcName": "",
    "email": "ce.0131163U@ac-aix-marseille.fr",
    "phone": "491465697",
    "referentPhone": "06 21 54 79 68",
    "referentEmail": "ce.erseh13-vallondespins@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132164g",
    "rne": "0132164G",
    "name": "LANGEVIN WALLON",
    "type": "elementaire",
    "city": "SEPTEMES-LES-VALLONS",
    "address": "Chemin de la Bédoule",
    "postalCode": "13240",
    "latitude": 43.386348,
    "longitude": 5.352677,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHLOE PROFILI",
    "referentName": "MEURANT OLIVIER",
    "secteurERSEH": "VALLON_DES_PINS",
    "cpcName": "",
    "email": "ce.0132164G@ac-aix-marseille.fr",
    "phone": "491517006",
    "referentPhone": "06 21 54 79 68",
    "referentEmail": "ce.erseh13-vallondespins@ac-aix-marseille.fr"
  },
  {
    "id": "0131162t",
    "rne": "0131162T",
    "name": "TRANCHIER-GUIDICELLI",
    "type": "elementaire",
    "city": "SEPTEMES-LES-VALLONS",
    "address": "12 route d'Apt",
    "postalCode": "13240",
    "latitude": 43.40109,
    "longitude": 5.365443,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME BERTILLE GOCHARD",
    "referentName": "BEAUME CLAUDINE",
    "secteurERSEH": "CADENAUX",
    "cpcName": "",
    "email": "ce.0131162T@ac-aix-marseille.fr",
    "phone": "491650956",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ],
    "referentPhone": "06 25 11 01 00",
    "referentEmail": "ce.erseh13-cadenaux@ac-aix-marseille.fr"
  },
  {
    "id": "0131166x",
    "rne": "0131166X",
    "name": "MARIUS ROUSSEL",
    "type": "elementaire",
    "city": "SIMIANE-COLLONGUE",
    "address": "Rue Lambert",
    "postalCode": "13109",
    "latitude": 43.430491,
    "longitude": 5.436301,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. NICOLAS BOULLENGER",
    "referentName": "GOESSAERT NATHALIE",
    "secteurERSEH": "AIX_SUD_2",
    "cpcName": "",
    "email": "ce.0131166X@ac-aix-marseille.fr",
    "phone": "442224677",
    "referentPhone": "06 14 60 69 55",
    "referentEmail": "ce.erseh13-aixsud2@ac-aix-marseille.fr"
  },
  {
    "id": "0131102c",
    "rne": "0131102C",
    "name": "JEAN MOULIN",
    "type": "elementaire",
    "city": "SAINT-ANDIOL",
    "address": "Place Jean Moulin",
    "postalCode": "13670",
    "latitude": 43.836046,
    "longitude": 4.946149,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. CEDRIC PERRIERE",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ce.0131102C@ac-aix-marseille.fr",
    "phone": "490950473",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0133255t",
    "rne": "0133255T",
    "name": "DE LA TOULOUBRE",
    "type": "elementaire",
    "city": "SAINT-CANNAT",
    "address": "Rue Robespierre",
    "postalCode": "13760",
    "latitude": 43.624236,
    "longitude": 5.296373,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LAURENCE NIGHTINGALE",
    "referentName": "BIANCO MARIE-CHRISTINE",
    "secteurERSEH": "PUY_SAINTE_REPARADE",
    "cpcName": "",
    "email": "ce.0133255T@ac-aix-marseille.fr",
    "phone": "442506214",
    "referentPhone": "06 14 60 71 43",
    "referentEmail": "ce.erseh13-puystereparade@ac-aix-marseille.fr"
  },
  {
    "id": "0131109k",
    "rne": "0131109K",
    "name": "GABRIEL PERI",
    "type": "elementaire",
    "city": "SAINT-CHAMAS",
    "address": "Rue Hoche",
    "postalCode": "13250",
    "latitude": 43.551844,
    "longitude": 5.033861,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. XAVIER GINAS",
    "referentName": "SANTINI",
    "secteurERSEH": "ROGNAC 2",
    "cpcName": "",
    "email": "ce.0131109K@ac-aix-marseille.fr",
    "phone": "490445243",
    "referentPhone": "06 18 32 41 00",
    "referentEmail": "ce.erseh13-rognac2@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131108j",
    "rne": "0131108J",
    "name": "IRENE JOLIOT CURIE",
    "type": "elementaire",
    "city": "SAINT-CHAMAS",
    "address": "Boulevard Joliot Curie",
    "postalCode": "13250",
    "latitude": 43.548724,
    "longitude": 5.035772,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME KARINE PONDI MBELECK",
    "referentName": "SANTINI",
    "secteurERSEH": "ROGNAC 2",
    "cpcName": "",
    "email": "ce.0131108J@ac-aix-marseille.fr",
    "phone": "490445403",
    "referentPhone": "06 18 32 41 00",
    "referentEmail": "ce.erseh13-rognac2@ac-aix-marseille.fr"
  },
  {
    "id": "0131113p",
    "rne": "0131113P",
    "name": "SAINT ETIENNE DU GRES",
    "type": "elementaire",
    "city": "SAINT-ETIENNE-DU-GRES",
    "address": "Rue de la République",
    "postalCode": "13103",
    "latitude": 43.781358,
    "longitude": 4.72515,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME FLORENCE SIGOT",
    "referentName": "COHUAU QUENTIN",
    "secteurERSEH": "ARLES_1",
    "cpcName": "",
    "email": "ce.0131113P@ac-aix-marseille.fr",
    "phone": "490491963",
    "referentPhone": "06 14 60 59 94",
    "referentEmail": "ce.erseh13-arles1@ac-aix-marseille.fr"
  },
  {
    "id": "0131115s",
    "rne": "0131115S",
    "name": "SAINT MARC JAUMEGARDE",
    "type": "elementaire",
    "city": "SAINT-MARC-JAUMEGARDE",
    "address": "",
    "postalCode": "13100",
    "latitude": 43.546961,
    "longitude": 5.52315,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. EMMANUEL FARGES",
    "referentName": "MONNIER FRANCOIS",
    "secteurERSEH": "AIX_2",
    "cpcName": "",
    "email": "ce.0131115S@ac-aix-marseille.fr",
    "phone": "442249995",
    "referentPhone": "06 21 54 53 00",
    "referentEmail": "ce.erseh13-aix2@ac-aix-marseille.fr"
  },
  {
    "id": "0131118v",
    "rne": "0131118V",
    "name": "CAPHAN",
    "type": "elementaire",
    "city": "SAINT-MARTIN-DE-CRAU",
    "address": "Rue des Ecoles",
    "postalCode": "13310",
    "latitude": 43.655573,
    "longitude": 4.79922,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME M DOMINIQUE MAUREL",
    "referentName": "DEMAEREL ISABELLE",
    "secteurERSEH": "SAINT_MARTIN_DE_CRAU",
    "cpcName": "",
    "email": "ce.0131118V@ac-aix-marseille.fr",
    "phone": "490471370",
    "referentPhone": "06 14 60 01 45",
    "referentEmail": "ce.erseh13-crau@ac-aix-marseille.fr"
  },
  {
    "id": "0132516p",
    "rne": "0132516P",
    "name": "LION D'OR SUD",
    "type": "elementaire",
    "city": "SAINT-MARTIN-DE-CRAU",
    "address": "Rue du Chêne Vert",
    "postalCode": "13310",
    "latitude": 43.638362,
    "longitude": 4.81804,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MELANIE TEZZA",
    "referentName": "DEMAEREL ISABELLE",
    "secteurERSEH": "SAINT_MARTIN_DE_CRAU",
    "cpcName": "",
    "email": "ce.0132516P@ac-aix-marseille.fr",
    "phone": "490471160",
    "referentPhone": "06 14 60 01 45",
    "referentEmail": "ce.erseh13-crau@ac-aix-marseille.fr"
  },
  {
    "id": "0131116t",
    "rne": "0131116T",
    "name": "LOGISSON",
    "type": "elementaire",
    "city": "SAINT-MARTIN-DE-CRAU",
    "address": "Avenue César Bernaudon le Logiss",
    "postalCode": "13310",
    "latitude": 43.63903,
    "longitude": 4.812777,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. JEROME LLAHI",
    "referentName": "DEMAEREL ISABELLE",
    "secteurERSEH": "SAINT_MARTIN_DE_CRAU",
    "cpcName": "",
    "email": "ce.0131116T@ac-aix-marseille.fr",
    "phone": "490471255",
    "referentPhone": "06 14 60 01 45",
    "referentEmail": "ce.erseh13-crau@ac-aix-marseille.fr"
  },
  {
    "id": "0132593y",
    "rne": "0132593Y",
    "name": "MARCEL PAGNOL",
    "type": "elementaire",
    "city": "SAINT-MARTIN-DE-CRAU",
    "address": "Rue Gaston de Saporta",
    "postalCode": "13310",
    "latitude": 43.634574,
    "longitude": 4.800426,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. ERIC COSENZA",
    "referentName": "DEMAEREL ISABELLE",
    "secteurERSEH": "SAINT_MARTIN_DE_CRAU",
    "cpcName": "",
    "email": "ce.0132593Y@ac-aix-marseille.fr",
    "phone": "490471236",
    "referentPhone": "06 14 60 01 45",
    "referentEmail": "ce.erseh13-crau@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132031m",
    "rne": "0132031M",
    "name": "SACRE-COEUR",
    "type": "elementaire",
    "city": "SAINT-MARTIN-DE-CRAU",
    "address": "15 rue du Logisson",
    "postalCode": "13310",
    "latitude": 43.636498,
    "longitude": 4.809532,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Pascale DINI",
    "referentName": "DE BRUYNE ISABELLE",
    "secteurERSEH": "ASH_OUEST_PRIVE_1",
    "cpcName": "",
    "email": "ce.0132031M@ac-aix-marseille.fr",
    "phone": "490472392",
    "referentPhone": "06 28 58 88 79",
    "referentEmail": "ce.erseh13-ashouest-prive1@ac-aix-marseille.fr"
  },
  {
    "id": "0131119w",
    "rne": "0131119W",
    "name": "EDOUARD VAILLANT",
    "type": "elementaire",
    "city": "SAINT-MITRE-LES-REMPARTS",
    "address": "Rue Belle Font",
    "postalCode": "13920",
    "latitude": 43.451479,
    "longitude": 5.01532,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VANESSA TANTINI",
    "referentName": "HUGUERRE LADISLAS",
    "secteurERSEH": "PORT_SAINT_LOUIS_DU_RHONE",
    "cpcName": "",
    "email": "ce.0131119W@ac-aix-marseille.fr",
    "phone": "442809875",
    "referentPhone": "06 03 12 89 20",
    "referentEmail": "ce.erseh13-portsaintlouis@ac-aix-marseille.fr"
  },
  {
    "id": "0131120x",
    "rne": "0131120X",
    "name": "JEAN ROSTAND",
    "type": "elementaire",
    "city": "SAINT-MITRE-LES-REMPARTS",
    "address": "Quartier des Aires Est",
    "postalCode": "13920",
    "latitude": 43.457738,
    "longitude": 5.01963,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 10,
      "placesVacantes": 10,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. MANUEL SANTOS",
    "referentName": "HUGUERRE LADISLAS",
    "secteurERSEH": "PORT_SAINT_LOUIS_DU_RHONE",
    "cpcName": "",
    "email": "ce.0131120X@ac-aix-marseille.fr",
    "phone": "442440201",
    "referentPhone": "06 03 12 89 20",
    "referentEmail": "ce.erseh13-portsaintlouis@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 10,
        "placesVacantes": 10,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131121y",
    "rne": "0131121Y",
    "name": "PAUL CAILLAT",
    "type": "elementaire",
    "city": "SAINT-PAUL-LES-DURANCE",
    "address": "Rue des Ecoles",
    "postalCode": "13115",
    "latitude": 43.686426,
    "longitude": 5.70763,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SANDRINE POUGET",
    "referentName": "BIANCO MARIE-CHRISTINE",
    "secteurERSEH": "PUY_SAINTE_REPARADE",
    "cpcName": "",
    "email": "ce.0131121Y@ac-aix-marseille.fr",
    "phone": "442574042",
    "referentPhone": "06 14 60 71 43",
    "referentEmail": "ce.erseh13-puystereparade@ac-aix-marseille.fr"
  },
  {
    "id": "0131002u",
    "rne": "0131002U",
    "name": "MEZOARGUES",
    "type": "elementaire",
    "city": "SAINT-PIERRE-DE-MEZOARGUES",
    "address": "",
    "postalCode": "13150",
    "latitude": 43.859253,
    "longitude": 4.651289,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ELODIE DUPONT",
    "referentName": "COHUAU QUENTIN",
    "secteurERSEH": "ARLES_1",
    "cpcName": "",
    "email": "ce.0131002U@ac-aix-marseille.fr",
    "phone": "490439445",
    "referentPhone": "06 14 60 59 94",
    "referentEmail": "ce.erseh13-arles1@ac-aix-marseille.fr"
  },
  {
    "id": "0131124b",
    "rne": "0131124B",
    "name": "DE L'ARGELIER",
    "type": "elementaire",
    "city": "SAINT-REMY-DE-PROVENCE",
    "address": "Route d'Avignon",
    "postalCode": "13210",
    "latitude": 43.7964,
    "longitude": 4.834236,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. CHRISTIAN HASCOET",
    "referentName": "PIRON FRANCOISE",
    "secteurERSEH": "SAINT_REMY_DE_PROVENCE",
    "cpcName": "",
    "email": "ce.0131124B@ac-aix-marseille.fr",
    "phone": "490924973",
    "referentPhone": "06 21 54 11 24",
    "referentEmail": "ce.erseh13-stremy@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131123a",
    "rne": "0131123A",
    "name": "REPUBLIQUE",
    "type": "elementaire",
    "city": "SAINT-REMY-DE-PROVENCE",
    "address": "Place de la République",
    "postalCode": "13210",
    "latitude": 43.788842,
    "longitude": 4.82945,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CAROLE FERLET",
    "referentName": "PIRON FRANCOISE",
    "secteurERSEH": "SAINT_REMY_DE_PROVENCE",
    "cpcName": "",
    "email": "ce.0131123A@ac-aix-marseille.fr",
    "phone": "490926310",
    "referentPhone": "06 21 54 11 24",
    "referentEmail": "ce.erseh13-stremy@ac-aix-marseille.fr"
  },
  {
    "id": "0132087y",
    "rne": "0132087Y",
    "name": "SAINT MARTIN",
    "type": "elementaire",
    "city": "SAINT-REMY-DE-PROVENCE",
    "address": "2 avenue Louis Mistral",
    "postalCode": "13210",
    "latitude": 43.79083,
    "longitude": 4.82954,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Pascale DINI",
    "referentName": "DE BRUYNE ISABELLE",
    "secteurERSEH": "ASH_OUEST_PRIVE_1",
    "cpcName": "",
    "email": "ce.0132087Y@ac-aix-marseille.fr",
    "phone": "490920802",
    "referentPhone": "06 28 58 88 79",
    "referentEmail": "ce.erseh13-ashouest-prive1@ac-aix-marseille.fr"
  },
  {
    "id": "0131126d",
    "rne": "0131126D",
    "name": "CENTRE-L'ESTELLO",
    "type": "elementaire",
    "city": "SAINT-SAVOURNIN",
    "address": "Chemin dép 8",
    "postalCode": "13119",
    "latitude": 43.410322,
    "longitude": 5.527786,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VIRGINIE BLANC",
    "referentName": "MEYRINNE-LAFORET JOSIANE",
    "secteurERSEH": "AURIOL",
    "cpcName": "",
    "email": "ce.0131126D@ac-aix-marseille.fr",
    "phone": "442046433",
    "referentPhone": "06 14 60 14 34",
    "referentEmail": "ce.erseh13-auriol@ac-aix-marseille.fr"
  },
  {
    "id": "0131129g",
    "rne": "0131129G",
    "name": "HONORE CARBONEL",
    "type": "elementaire",
    "city": "SAINT-VICTORET",
    "address": "270 rue Félix Tury",
    "postalCode": "13730",
    "latitude": 43.415974,
    "longitude": 5.244739,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CORINNE BARNEOUD ARNOULET",
    "referentName": "RABIER Mathieu",
    "secteurERSEH": "VITROLLES_2",
    "cpcName": "",
    "email": "ce.0131129G@ac-aix-marseille.fr",
    "phone": "442892384",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ],
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0133333c",
    "rne": "0133333C",
    "name": "JEAN COCTEAU",
    "type": "elementaire",
    "city": "SAINT-VICTORET",
    "address": "Avenue Guillaume Apollinaire",
    "postalCode": "13730",
    "latitude": 43.412382,
    "longitude": 5.238334,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME KATELL POTIER",
    "referentName": "RABIER Mathieu",
    "secteurERSEH": "VITROLLES_2",
    "cpcName": "",
    "email": "ce.0133333C@ac-aix-marseille.fr",
    "phone": "675296488",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0134154v",
    "rne": "0134154V",
    "name": "DE FRIGOLET",
    "type": "elementaire",
    "city": "TARASCON",
    "address": "Route de Frigolet",
    "postalCode": "13150",
    "latitude": 43.878419,
    "longitude": 4.709969,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. MARIE PITRAT",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ecolefrigolet@gmail.com",
    "phone": "683756402",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131569k",
    "rne": "0131569K",
    "name": "JEAN MACE",
    "type": "elementaire",
    "city": "TARASCON",
    "address": "1 rue FABRE D'EGLANTINE",
    "postalCode": "13150",
    "latitude": 43.805956,
    "longitude": 4.665911,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME GERALDINE FLAYOL",
    "referentName": "COHUAU QUENTIN",
    "secteurERSEH": "ARLES_1",
    "cpcName": "",
    "email": "ce.0131569K@ac-aix-marseille.fr",
    "phone": "490910531",
    "referentPhone": "06 14 60 59 94",
    "referentEmail": "ce.erseh13-arles1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0131168z",
    "rne": "0131168Z",
    "name": "JULES FERRY",
    "type": "elementaire",
    "city": "TARASCON",
    "address": "3 avenue Porrentruy",
    "postalCode": "13150",
    "latitude": 43.808273,
    "longitude": 4.660103,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME LUCIE RIPOLL",
    "referentName": "COHUAU QUENTIN",
    "secteurERSEH": "ARLES_1",
    "cpcName": "",
    "email": "ce.0131168Z@ac-aix-marseille.fr",
    "phone": "490911058",
    "referentPhone": "06 14 60 59 94",
    "referentEmail": "ce.erseh13-arles1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132596b",
    "rne": "0132596B",
    "name": "MARCEL BATLLE",
    "type": "elementaire",
    "city": "TARASCON",
    "address": "4 chemin des Capucins",
    "postalCode": "13150",
    "latitude": 43.807875,
    "longitude": 4.664042,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VALERIE LAUPIES DEBARNOT",
    "referentName": "COHUAU QUENTIN",
    "secteurERSEH": "ARLES_1",
    "cpcName": "",
    "email": "ce.0132596B@ac-aix-marseille.fr",
    "phone": "490911336",
    "referentPhone": "06 14 60 59 94",
    "referentEmail": "ce.erseh13-arles1@ac-aix-marseille.fr"
  },
  {
    "id": "0131566g",
    "rne": "0131566G",
    "name": "MARCEL PAGNOL",
    "type": "elementaire",
    "city": "TARASCON",
    "address": "20 rue Séverine",
    "postalCode": "13150",
    "latitude": 43.814434,
    "longitude": 4.66288,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MELISSA BENDALI",
    "referentName": "COHUAU QUENTIN",
    "secteurERSEH": "ARLES_1",
    "cpcName": "",
    "email": "ce.0131566G@ac-aix-marseille.fr",
    "phone": "490911122",
    "referentPhone": "06 14 60 59 94",
    "referentEmail": "ce.erseh13-arles1@ac-aix-marseille.fr"
  },
  {
    "id": "0132091c",
    "rne": "0132091C",
    "name": "PETIT CASTELET",
    "type": "elementaire",
    "city": "TARASCON",
    "address": "467 chemin du Petit Castelet",
    "postalCode": "13150",
    "latitude": 43.78079,
    "longitude": 4.658792,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Martine HAGUENIN",
    "referentName": "DE BRUYNE ISABELLE",
    "secteurERSEH": "ASH_OUEST_PRIVE_1",
    "cpcName": "",
    "email": "ce.0132091C@ac-aix-marseille.fr",
    "phone": "490910151",
    "referentPhone": "06 28 58 88 79",
    "referentEmail": "ce.erseh13-ashouest-prive1@ac-aix-marseille.fr"
  },
  {
    "id": "0132092d",
    "rne": "0132092D",
    "name": "SAINTE MARTHE",
    "type": "elementaire",
    "city": "TARASCON",
    "address": "Avenue Alphonse Daudet",
    "postalCode": "13150",
    "latitude": 43.808419,
    "longitude": 4.660113,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME  EMERY",
    "referentName": "DE BRUYNE ISABELLE",
    "secteurERSEH": "ASH_OUEST_PRIVE_1",
    "cpcName": "",
    "email": "ce.0132092D@ac-aix-marseille.fr",
    "phone": "490910348",
    "referentPhone": "06 28 58 88 79",
    "referentEmail": "ce.erseh13-ashouest-prive1@ac-aix-marseille.fr"
  },
  {
    "id": "0131174f",
    "rne": "0131174F",
    "name": "EDMOND BRUN",
    "type": "elementaire",
    "city": "TRETS",
    "address": "Rue Docteur Villemus",
    "postalCode": "13530",
    "latitude": 43.447082,
    "longitude": 5.687061,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME DOMINIQUE BOUIX",
    "referentName": "REYNIER ELODIE",
    "secteurERSEH": "AIX_SUD_1",
    "cpcName": "",
    "email": "ce.0131174F@ac-aix-marseille.fr",
    "phone": "442375511",
    "referentPhone": "06 14 60 39 01",
    "referentEmail": "ce.erseh13-aixsud1@ac-aix-marseille.fr"
  },
  {
    "id": "0131175g",
    "rne": "0131175G",
    "name": "JEAN MOULIN",
    "type": "elementaire",
    "city": "TRETS",
    "address": "Rue Fernand Chauvin",
    "postalCode": "13530",
    "latitude": 43.444861,
    "longitude": 5.687268,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME JEANNE ARTERO",
    "referentName": "REYNIER ELODIE",
    "secteurERSEH": "AIX_SUD_1",
    "cpcName": "",
    "email": "ce.0131175G@ac-aix-marseille.fr",
    "phone": "442375517",
    "referentPhone": "06 14 60 39 01",
    "referentEmail": "ce.erseh13-aixsud1@ac-aix-marseille.fr"
  },
  {
    "id": "0133021n",
    "rne": "0133021N",
    "name": "SAINT JEAN",
    "type": "elementaire",
    "city": "TRETS",
    "address": "Quartier Saint Jean",
    "postalCode": "13530",
    "latitude": 43.43868,
    "longitude": 5.684994,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. VINCENT GROFF",
    "referentName": "REYNIER ELODIE",
    "secteurERSEH": "AIX_SUD_1",
    "cpcName": "",
    "email": "ce.0133021N@ac-aix-marseille.fr",
    "phone": "442205194",
    "referentPhone": "06 14 60 39 01",
    "referentEmail": "ce.erseh13-aixsud1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0133296m",
    "rne": "0133296M",
    "name": "VICTOR HUGO",
    "type": "elementaire",
    "city": "TRETS",
    "address": "Rue Victor Hugo",
    "postalCode": "13530",
    "latitude": 43.447864,
    "longitude": 5.68789,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. STEPHANE VANZIELEGHEM",
    "referentName": "REYNIER ELODIE",
    "secteurERSEH": "AIX_SUD_1",
    "cpcName": "",
    "email": "ce.0133296M@ac-aix-marseille.fr",
    "phone": "442375504",
    "referentPhone": "06 14 60 39 01",
    "referentEmail": "ce.erseh13-aixsud1@ac-aix-marseille.fr"
  },
  {
    "id": "0131177j",
    "rne": "0131177J",
    "name": "MORALISTE",
    "type": "elementaire",
    "city": "VAUVENARGUES",
    "address": "6 boulevard du Moraliste",
    "postalCode": "13126",
    "latitude": 43.555212,
    "longitude": 5.59938,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. OLIVIER DUTEY",
    "referentName": "MONNIER FRANCOIS",
    "secteurERSEH": "AIX_2",
    "cpcName": "",
    "email": "ce.0131177J@ac-aix-marseille.fr",
    "phone": "442660817",
    "referentPhone": "06 21 54 53 00",
    "referentEmail": "ce.erseh13-aix2@ac-aix-marseille.fr"
  },
  {
    "id": "0131178k",
    "rne": "0131178K",
    "name": "JEAN GIONO",
    "type": "elementaire",
    "city": "VELAUX",
    "address": "185 avenue de la République",
    "postalCode": "13880",
    "latitude": 43.523534,
    "longitude": 5.255846,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SOPHIE DU GARDIN",
    "referentName": "BROC DAMIEN",
    "secteurERSEH": "LA_FARE_LES_OLIVIERS",
    "cpcName": "",
    "email": "ce.0131178K@ac-aix-marseille.fr",
    "phone": "442879207",
    "referentPhone": "06 71 70 98 89",
    "referentEmail": "ce.ersh13-lafare@ac-aix-marseille.fr"
  },
  {
    "id": "0132805d",
    "rne": "0132805D",
    "name": "JEAN JAURES",
    "type": "elementaire",
    "city": "VELAUX",
    "address": "ZAC Levun-Bastide Bertin",
    "postalCode": "13880",
    "latitude": 43.535154,
    "longitude": 5.247227,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VALERIE FAURE",
    "referentName": "BROC DAMIEN",
    "secteurERSEH": "LA_FARE_LES_OLIVIERS",
    "cpcName": "",
    "email": "ce.0132805D@ac-aix-marseille.fr",
    "phone": "442879840",
    "referentPhone": "06 71 70 98 89",
    "referentEmail": "ce.ersh13-lafare@ac-aix-marseille.fr"
  },
  {
    "id": "0132988c",
    "rne": "0132988C",
    "name": "CABASSOLS (DES)",
    "type": "elementaire",
    "city": "VENELLES",
    "address": "Avenue des Galavards",
    "postalCode": "13770",
    "latitude": 43.594653,
    "longitude": 5.479181,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. MARC DOL",
    "referentName": "BIANCO MARIE-CHRISTINE",
    "secteurERSEH": "PUY_SAINTE_REPARADE",
    "cpcName": "",
    "email": "ce.0132988C@ac-aix-marseille.fr",
    "phone": "442541000",
    "referentPhone": "06 14 60 71 43",
    "referentEmail": "ce.erseh13-puystereparade@ac-aix-marseille.fr"
  },
  {
    "id": "0131181n",
    "rne": "0131181N",
    "name": "MARCEL PAGNOL",
    "type": "elementaire",
    "city": "VENELLES",
    "address": "Rue des Ecoles Qua Les Logis",
    "postalCode": "13770",
    "latitude": 43.598153,
    "longitude": 5.483431,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. PASCAL HERBET",
    "referentName": "BIANCO MARIE-CHRISTINE",
    "secteurERSEH": "PUY_SAINTE_REPARADE",
    "cpcName": "",
    "email": "ce.0131181N@ac-aix-marseille.fr",
    "phone": "442546649",
    "referentPhone": "06 14 60 71 43",
    "referentEmail": "ce.erseh13-puystereparade@ac-aix-marseille.fr"
  },
  {
    "id": "0131180m",
    "rne": "0131180M",
    "name": "MAURICE PLANTIER",
    "type": "elementaire",
    "city": "VENELLES",
    "address": "Rue Frédéric Mistral",
    "postalCode": "13770",
    "latitude": 43.599952,
    "longitude": 5.480379,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME NADINE LACOURTABLAISE",
    "referentName": "BIANCO MARIE-CHRISTINE",
    "secteurERSEH": "PUY_SAINTE_REPARADE",
    "cpcName": "",
    "email": "ce.0131180M@ac-aix-marseille.fr",
    "phone": "442200602",
    "referentPhone": "06 14 60 71 43",
    "referentEmail": "ce.erseh13-puystereparade@ac-aix-marseille.fr"
  },
  {
    "id": "0134283k",
    "rne": "0134283K",
    "name": "GIFT SCHOOL",
    "type": "elementaire",
    "city": "VENTABREN",
    "address": "110 chemin de peyres",
    "postalCode": "13122",
    "latitude": 43.544826,
    "longitude": 5.326299,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME Laetitia ROGAR",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "karineravel@yahoo.fr",
    "phone": "695541301",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0134403r",
    "rne": "0134403R",
    "name": "JEAN D'ORMESSON",
    "type": "elementaire",
    "city": "VENTABREN",
    "address": "ZAC de l'Héritière",
    "postalCode": "13122",
    "latitude": 43.548645,
    "longitude": 5.2975,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME AUDREY PONSAILLE",
    "referentName": "BROC DAMIEN",
    "secteurERSEH": "LA_FARE_LES_OLIVIERS",
    "cpcName": "",
    "email": "ce.0134403R@ac-aix-marseille.fr",
    "phone": "442281500",
    "referentPhone": "06 71 70 98 89",
    "referentEmail": "ce.ersh13-lafare@ac-aix-marseille.fr"
  },
  {
    "id": "0131182p",
    "rne": "0131182P",
    "name": "LA CREMADE",
    "type": "elementaire",
    "city": "VENTABREN",
    "address": "Quartier la Crémade",
    "postalCode": "13122",
    "latitude": 43.539314,
    "longitude": 5.30189,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. DOMINIQUE GIRAUD-CLAUDE",
    "referentName": "BROC DAMIEN",
    "secteurERSEH": "LA_FARE_LES_OLIVIERS",
    "cpcName": "",
    "email": "ce.0131182P@ac-aix-marseille.fr",
    "phone": "442287043",
    "referentPhone": "06 71 70 98 89",
    "referentEmail": "ce.ersh13-lafare@ac-aix-marseille.fr"
  },
  {
    "id": "0133090n",
    "rne": "0133090N",
    "name": "LA CABRO D'OR",
    "type": "elementaire",
    "city": "VERNEGUES",
    "address": "",
    "postalCode": "13116",
    "latitude": 43.688207,
    "longitude": 5.199586,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME VERONIQUE JOUTEAU",
    "referentName": "LANKAMER MURIEL",
    "secteurERSEH": "SALON_3",
    "cpcName": "",
    "email": "ce.0133090N@ac-aix-marseille.fr",
    "phone": "490593366",
    "referentPhone": "06 14 60 29 97",
    "referentEmail": "ce.erseh13-salon3@ac-aix-marseille.fr"
  },
  {
    "id": "0131185t",
    "rne": "0131185T",
    "name": "REGAIN",
    "type": "elementaire",
    "city": "VERQUIERES",
    "address": "",
    "postalCode": "13670",
    "latitude": 43.839417,
    "longitude": 4.91942,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. PIERRE OZIMEK",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "ce.0131185T@ac-aix-marseille.fr",
    "phone": "490950427",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131188w",
    "rne": "0131188W",
    "name": "ANNE SYLVESTRE",
    "type": "elementaire",
    "city": "VITROLLES",
    "address": "14 avenue de la petite mer",
    "postalCode": "13127",
    "latitude": 43.457794,
    "longitude": 5.229647,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CLAUDINE TERSO",
    "referentName": "POUPON-GUILLIN VALERIE",
    "secteurERSEH": "VITROLLES_1",
    "cpcName": "",
    "email": "ce.0131188W@ac-aix-marseille.fr",
    "phone": "442893277",
    "referentPhone": "06 25 11 79 32",
    "referentEmail": "ce.erseh13-vitrolles1@ac-aix-marseille.fr"
  },
  {
    "id": "0133216a",
    "rne": "0133216A",
    "name": "CONQUE (LA)",
    "type": "elementaire",
    "city": "VITROLLES",
    "address": "Quartier du Griffon",
    "postalCode": "13127",
    "latitude": 43.428689,
    "longitude": 5.281656,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME DELPHINE GALINDO",
    "referentName": "MOUISSON VIAL CELIA",
    "secteurERSEH": "SAUSSET",
    "cpcName": "",
    "email": "ce.0133216A@ac-aix-marseille.fr",
    "phone": "442890645",
    "referentPhone": "06 10 05 00 97",
    "referentEmail": "ce.erseh13-sausset@ac-aix-marseille.fr"
  },
  {
    "id": "0133023r",
    "rne": "0133023R",
    "name": "F.CLARET MATEOS",
    "type": "elementaire",
    "city": "VITROLLES",
    "address": "Quartier de Croze",
    "postalCode": "13127",
    "latitude": 43.422919,
    "longitude": 5.291785,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME CHRISTELLE BAPTISTE",
    "referentName": "MOUISSON VIAL CELIA",
    "secteurERSEH": "SAUSSET",
    "cpcName": "",
    "email": "ce.0133023R@ac-aix-marseille.fr",
    "phone": "442752804",
    "referentPhone": "06 10 05 00 97",
    "referentEmail": "ce.erseh13-sausset@ac-aix-marseille.fr"
  },
  {
    "id": "0132445m",
    "rne": "0132445M",
    "name": "JEAN DE LA FONTAINE",
    "type": "elementaire",
    "city": "VITROLLES",
    "address": "Quartier Les Plantiers",
    "postalCode": "13127",
    "latitude": 43.445122,
    "longitude": 5.252841,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ISABELLE DELICATA",
    "referentName": "POUPON-GUILLIN VALERIE",
    "secteurERSEH": "VITROLLES_1",
    "cpcName": "",
    "email": "ce.0132445M@ac-aix-marseille.fr",
    "phone": "442891619",
    "referentPhone": "06 25 11 79 32",
    "referentEmail": "ce.erseh13-vitrolles1@ac-aix-marseille.fr"
  },
  {
    "id": "0132331n",
    "rne": "0132331N",
    "name": "JEAN-JACQUES ROUSSEAU",
    "type": "elementaire",
    "city": "VITROLLES",
    "address": "Boulevard Paul Guigou",
    "postalCode": "13127",
    "latitude": 43.441672,
    "longitude": 5.250846,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME ISABELLE COULAUD-SAINZ",
    "referentName": "POUPON-GUILLIN VALERIE",
    "secteurERSEH": "VITROLLES_1",
    "cpcName": "",
    "email": "ce.0132331N@ac-aix-marseille.fr",
    "phone": "442892510",
    "referentPhone": "06 25 11 79 32",
    "referentEmail": "ce.erseh13-vitrolles1@ac-aix-marseille.fr"
  },
  {
    "id": "0133327w",
    "rne": "0133327W",
    "name": "LUCIE AUBRAC",
    "type": "elementaire",
    "city": "VITROLLES",
    "address": "23 avenue Etienne Constant",
    "postalCode": "13127",
    "latitude": 43.439844,
    "longitude": 5.258231,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 10,
      "placesVacantes": 10,
      "effectifAvantCommission": 0,
      "baseChecked": true,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. ERIC GARDES",
    "referentName": "POUPON-GUILLIN VALERIE",
    "secteurERSEH": "VITROLLES_1",
    "cpcName": "",
    "email": "ce.0133327W@ac-aix-marseille.fr",
    "phone": "442894133",
    "referentPhone": "06 25 11 79 32",
    "referentEmail": "ce.erseh13-vitrolles1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 10,
        "placesVacantes": 10,
        "effectifAvantCommission": 0,
        "baseChecked": true,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132599e",
    "rne": "0132599E",
    "name": "MARTINE MORIN",
    "type": "elementaire",
    "city": "VITROLLES",
    "address": "",
    "postalCode": "13127",
    "latitude": 43.454744,
    "longitude": 5.241028,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. FRANCK NICOLAS",
    "referentName": "POUPON-GUILLIN VALERIE",
    "secteurERSEH": "VITROLLES_1",
    "cpcName": "",
    "email": "ce.0132599E@ac-aix-marseille.fr",
    "phone": "442895576",
    "referentPhone": "06 25 11 79 32",
    "referentEmail": "ce.erseh13-vitrolles1@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0133097w",
    "rne": "0133097W",
    "name": "PABLO PICASSO",
    "type": "elementaire",
    "city": "VITROLLES",
    "address": "4 rue de la Bargelade",
    "postalCode": "13127",
    "latitude": 43.421933,
    "longitude": 5.27749,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME SABINE NERSESSIAN",
    "referentName": "MOUISSON VIAL CELIA",
    "secteurERSEH": "SAUSSET",
    "cpcName": "",
    "email": "ce.0133097W@ac-aix-marseille.fr",
    "phone": "442790764",
    "referentPhone": "06 10 05 00 97",
    "referentEmail": "ce.erseh13-sausset@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0132804c",
    "rne": "0132804C",
    "name": "PINCHINADES (LES)",
    "type": "elementaire",
    "city": "VITROLLES",
    "address": "",
    "postalCode": "13127",
    "latitude": 43.426736,
    "longitude": 5.283543,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSLA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME NEJIA GIRAUD-BEN HAMOUDA",
    "referentName": "MOUISSON VIAL CELIA",
    "secteurERSEH": "SAUSSET",
    "cpcName": "",
    "email": "ce.0132804C@ac-aix-marseille.fr",
    "phone": "442896110",
    "referentPhone": "06 10 05 00 97",
    "referentEmail": "ce.erseh13-sausset@ac-aix-marseille.fr",
    "ashDevices": [
      {
        "type": "TSLA",
        "assignedStudents": 0,
        "capacity": 12,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ]
  },
  {
    "id": "0133054z",
    "rne": "0133054Z",
    "name": "PLAN DE LA COUR",
    "type": "elementaire",
    "city": "VITROLLES",
    "address": "Rue René Cassin",
    "postalCode": "13127",
    "latitude": 43.447044,
    "longitude": 5.2455,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME DELPHINE BRUN",
    "referentName": "POUPON-GUILLIN VALERIE",
    "secteurERSEH": "VITROLLES_1",
    "cpcName": "",
    "email": "ce.0133054Z@ac-aix-marseille.fr",
    "phone": "442891875",
    "referentPhone": "06 25 11 79 32",
    "referentEmail": "ce.erseh13-vitrolles1@ac-aix-marseille.fr"
  },
  {
    "id": "0132782d",
    "rne": "0132782D",
    "name": "PRAIRIAL",
    "type": "elementaire",
    "city": "VITROLLES",
    "address": "Avenue Font Ségugne",
    "postalCode": "13127",
    "latitude": 43.449386,
    "longitude": 5.250568,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MAGALI LIPRANDI",
    "referentName": "POUPON-GUILLIN VALERIE",
    "secteurERSEH": "VITROLLES_1",
    "cpcName": "",
    "email": "ce.0132782D@ac-aix-marseille.fr",
    "phone": "442894092",
    "referentPhone": "06 25 11 79 32",
    "referentEmail": "ce.erseh13-vitrolles1@ac-aix-marseille.fr"
  },
  {
    "id": "0133358e",
    "rne": "0133358E",
    "name": "RAIMU",
    "type": "elementaire",
    "city": "VITROLLES",
    "address": "Rue Béranger Zac la Tuilière",
    "postalCode": "13127",
    "latitude": 43.422259,
    "longitude": 5.273564,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME MAGALI GAYTE",
    "referentName": "MOUISSON VIAL CELIA",
    "secteurERSEH": "SAUSSET",
    "cpcName": "",
    "email": "ce.0133358E@ac-aix-marseille.fr",
    "phone": "442792546",
    "referentPhone": "06 10 05 00 97",
    "referentEmail": "ce.erseh13-sausset@ac-aix-marseille.fr"
  },
  {
    "id": "0131937k",
    "rne": "0131937K",
    "name": "ROBERT BADINTER",
    "type": "elementaire",
    "city": "VITROLLES",
    "address": "5 allée des Glycines",
    "postalCode": "13127",
    "latitude": 43.440881,
    "longitude": 5.254525,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "M. THOMAS ROBERT",
    "referentName": "POUPON-GUILLIN VALERIE",
    "secteurERSEH": "VITROLLES_1",
    "cpcName": "",
    "email": "ce.0131937K@ac-aix-marseille.fr",
    "phone": "442892388",
    "referentPhone": "06 25 11 79 32",
    "referentEmail": "ce.erseh13-vitrolles1@ac-aix-marseille.fr"
  },
  {
    "id": "0131186u",
    "rne": "0131186U",
    "name": "VICTOR MARTIN",
    "type": "elementaire",
    "city": "VITROLLES",
    "address": "16 rue Jean Jaurès",
    "postalCode": "13127",
    "latitude": 43.458371,
    "longitude": 5.248184,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "NONE",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "MME KRYSTEL CASANOVA",
    "referentName": "POUPON-GUILLIN VALERIE",
    "secteurERSEH": "VITROLLES_1",
    "cpcName": "",
    "email": "ce.0131186U@ac-aix-marseille.fr",
    "phone": "442895203",
    "referentPhone": "06 25 11 79 32",
    "referentEmail": "ce.erseh13-vitrolles1@ac-aix-marseille.fr"
  },
  {
    "id": "0130001f",
    "rne": "0130001F",
    "name": "Lycee Polyvalent Emile Zola",
    "type": "lycee",
    "city": "Aix-en-Provence",
    "address": "",
    "postalCode": "13181",
    "latitude": 43.541369,
    "longitude": 5.406124,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130006l",
    "rne": "0130006L",
    "name": "Lp Lycee des Metiers Gambetta",
    "type": "lycee",
    "city": "Aix-en-Provence",
    "address": "",
    "postalCode": "13080",
    "latitude": 43.541369,
    "longitude": 5.406124,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130013u",
    "rne": "0130013U",
    "name": "Lycee Professionnel Gustave Eiffel",
    "type": "lycee",
    "city": "Aubagne",
    "address": "",
    "postalCode": "13400",
    "latitude": 43.301892,
    "longitude": 5.563888,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130022d",
    "rne": "0130022D",
    "name": "College Quart Alice Guy Ex Virebelle",
    "type": "college",
    "city": "La Ciotat",
    "address": "",
    "postalCode": "13600",
    "latitude": 43.189161,
    "longitude": 5.626161,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130025g",
    "rne": "0130025G",
    "name": "Section Enseignt Professionnel Marie Madeleine Fourcade",
    "type": "lycee",
    "city": "Gardanne",
    "address": "",
    "postalCode": "13541",
    "latitude": 43.457301,
    "longitude": 5.48627,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130028k",
    "rne": "0130028K",
    "name": "College Denis Moustier",
    "type": "college",
    "city": "Greasque",
    "address": "",
    "postalCode": "13850",
    "latitude": 43.428681,
    "longitude": 5.542123,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TED",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130049h",
    "rne": "0130049H",
    "name": "Lycee Polyvalent Lpo Regional Cesar Baldaccini (Ex Rempart)",
    "type": "lycee",
    "city": "Marseille  7e  Arrondissement",
    "address": "",
    "postalCode": "13007",
    "latitude": 43.280537,
    "longitude": 5.360935,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSLA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130054n",
    "rne": "0130054N",
    "name": "Lycee Professionnel Poinso-Chapuis",
    "type": "lycee",
    "city": "Marseille 8e  Arrondissement",
    "address": "",
    "postalCode": "13272",
    "latitude": 43.247182,
    "longitude": 5.374045,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130055p",
    "rne": "0130055P",
    "name": "Lycee Professionnel le Chatelier",
    "type": "lycee",
    "city": "Marseille  3e  Arrondissement",
    "address": "",
    "postalCode": "13003",
    "latitude": 43.311721,
    "longitude": 5.381334,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130056r",
    "rne": "0130056R",
    "name": "Lp Lycee des Metiers la Floride",
    "type": "lycee",
    "city": "Marseille 14e  Arrondissement",
    "address": "",
    "postalCode": "13014",
    "latitude": 43.337467,
    "longitude": 5.390951,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130063y",
    "rne": "0130063Y",
    "name": "Lp Lycee des Metiers Leau",
    "type": "lycee",
    "city": "Marseille 8e  Arrondissement",
    "address": "",
    "postalCode": "13008",
    "latitude": 43.247182,
    "longitude": 5.374045,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130065a",
    "rne": "0130065A",
    "name": "Lp Lycee des Metiers la Viste",
    "type": "lycee",
    "city": "Marseille 15e  Arrondissement",
    "address": "",
    "postalCode": "13015",
    "latitude": 43.351766,
    "longitude": 5.3576,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130068d",
    "rne": "0130068D",
    "name": "Lycee Professionnel Camille Jullian",
    "type": "lycee",
    "city": "Marseille 11e  Arrondissement",
    "address": "",
    "postalCode": "13396",
    "latitude": 43.296535,
    "longitude": 5.475446,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130071g",
    "rne": "0130071G",
    "name": "Lp Lycee des Metiers Colbert",
    "type": "lycee",
    "city": "Marseille  7e  Arrondissement",
    "address": "",
    "postalCode": "13007",
    "latitude": 43.280537,
    "longitude": 5.360935,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130084w",
    "rne": "0130084W",
    "name": "College Grande Bastide",
    "type": "college",
    "city": "Marseille  9e  Arrondissement",
    "address": "",
    "postalCode": "13009",
    "latitude": 43.249253,
    "longitude": 5.423479,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TED",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130093f",
    "rne": "0130093F",
    "name": "College Ariane Ascaride Ex Fraissinet",
    "type": "college",
    "city": "Marseille  5e  Arrondissement",
    "address": "",
    "postalCode": "13005",
    "latitude": 43.292551,
    "longitude": 5.400497,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130136c",
    "rne": "0130136C",
    "name": "College Vieux Port",
    "type": "college",
    "city": "Marseille  2e  Arrondissement",
    "address": "",
    "postalCode": "13002",
    "latitude": 43.315273,
    "longitude": 5.367338,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130139f",
    "rne": "0130139F",
    "name": "College Coin Joli Sevigne",
    "type": "college",
    "city": "Marseille  9e  Arrondissement",
    "address": "",
    "postalCode": "13009",
    "latitude": 43.249253,
    "longitude": 5.423479,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130146n",
    "rne": "0130146N",
    "name": "Lp Lycee des Metiers les Alpilles",
    "type": "lycee",
    "city": "Miramas",
    "address": "",
    "postalCode": "13140",
    "latitude": 43.582796,
    "longitude": 5.009776,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130150t",
    "rne": "0130150T",
    "name": "Lp Lycee des Metiers Jean Moulin",
    "type": "lycee",
    "city": "Port-de-Bouc",
    "address": "",
    "postalCode": "13110",
    "latitude": 43.414073,
    "longitude": 4.989098,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130151u",
    "rne": "0130151U",
    "name": "Lycee Professionnel Charles Mongrand",
    "type": "lycee",
    "city": "Port-de-Bouc",
    "address": "",
    "postalCode": "13110",
    "latitude": 43.414073,
    "longitude": 4.989098,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130157a",
    "rne": "0130157A",
    "name": "Lycee Professionnel les Ferrages",
    "type": "lycee",
    "city": "Saint-Chamas",
    "address": "",
    "postalCode": "13250",
    "latitude": 43.542627,
    "longitude": 5.057051,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130163g",
    "rne": "0130163G",
    "name": "College Joseph d Arbaud",
    "type": "college",
    "city": "Salon-de-Provence",
    "address": "",
    "postalCode": "13300",
    "latitude": 43.6377,
    "longitude": 5.062036,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ],
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130171r",
    "rne": "0130171R",
    "name": "Lp Lycee des Metiers Charles Privat",
    "type": "lycee",
    "city": "Arles",
    "address": "",
    "postalCode": "13631",
    "latitude": 43.596721,
    "longitude": 4.645086,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131260z",
    "rne": "0131260Z",
    "name": "College Edmond Rostand",
    "type": "college",
    "city": "Marseille 13e  Arrondissement",
    "address": "",
    "postalCode": "13388",
    "latitude": 43.340303,
    "longitude": 5.429033,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131261a",
    "rne": "0131261A",
    "name": "College Auguste Renoir",
    "type": "college",
    "city": "Marseille 13e  Arrondissement",
    "address": "",
    "postalCode": "13388",
    "latitude": 43.340303,
    "longitude": 5.429033,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131262b",
    "rne": "0131262B",
    "name": "College Jacques Prevert",
    "type": "college",
    "city": "Marseille 13e  Arrondissement",
    "address": "",
    "postalCode": "13013",
    "latitude": 43.340303,
    "longitude": 5.429033,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131264d",
    "rne": "0131264D",
    "name": "College Josephine Baker",
    "type": "college",
    "city": "Marseille  3e  Arrondissement",
    "address": "",
    "postalCode": "13003",
    "latitude": 43.311721,
    "longitude": 5.381334,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131266f",
    "rne": "0131266F",
    "name": "College Nathalie Sarraute",
    "type": "college",
    "city": "Aubagne",
    "address": "",
    "postalCode": "13400",
    "latitude": 43.301892,
    "longitude": 5.563888,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131548m",
    "rne": "0131548M",
    "name": "College Sylvain Menu",
    "type": "college",
    "city": "Marseille  9e  Arrondissement",
    "address": "",
    "postalCode": "13009",
    "latitude": 43.249253,
    "longitude": 5.423479,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "SEGPA",
      "assignedStudents": 0,
      "capacity": 38,
      "placesVacantes": 38,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "ashDevices": [
      {
        "type": "SEGPA",
        "assignedStudents": 0,
        "capacity": 38,
        "placesVacantes": 38,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ],
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131602w",
    "rne": "0131602W",
    "name": "College Roy d Espagne",
    "type": "college",
    "city": "Marseille  9e  Arrondissement",
    "address": "",
    "postalCode": "13275",
    "latitude": 43.249253,
    "longitude": 5.423479,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131603x",
    "rne": "0131603X",
    "name": "College Adolphe Monticelli",
    "type": "college",
    "city": "Marseille 8e  Arrondissement",
    "address": "",
    "postalCode": "13008",
    "latitude": 43.247182,
    "longitude": 5.374045,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131604y",
    "rne": "0131604Y",
    "name": "College Henri Wallon",
    "type": "college",
    "city": "Marseille 14e  Arrondissement",
    "address": "",
    "postalCode": "13014",
    "latitude": 43.337467,
    "longitude": 5.390951,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131605z",
    "rne": "0131605Z",
    "name": "College Henri Barnier",
    "type": "college",
    "city": "Marseille 16e  Arrondissement",
    "address": "",
    "postalCode": "13016",
    "latitude": 43.365355,
    "longitude": 5.321885,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSLA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131606a",
    "rne": "0131606A",
    "name": "Lp Lycee des Metiers la Jane Vialle Ex Calade",
    "type": "lycee",
    "city": "Marseille 15e  Arrondissement",
    "address": "",
    "postalCode": "13015",
    "latitude": 43.351766,
    "longitude": 5.3576,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131607b",
    "rne": "0131607B",
    "name": "College Georges Brassens",
    "type": "college",
    "city": "Marignane",
    "address": "",
    "postalCode": "13700",
    "latitude": 43.415837,
    "longitude": 5.220936,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131608c",
    "rne": "0131608C",
    "name": "College Emilie de Mirabeau",
    "type": "college",
    "city": "Marignane",
    "address": "",
    "postalCode": "13700",
    "latitude": 43.415837,
    "longitude": 5.220936,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131611f",
    "rne": "0131611F",
    "name": "College Rene Cassin",
    "type": "college",
    "city": "Tarascon",
    "address": "",
    "postalCode": "13158",
    "latitude": 43.792749,
    "longitude": 4.693289,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131622t",
    "rne": "0131622T",
    "name": "College Joseph Lakanal",
    "type": "college",
    "city": "Aubagne",
    "address": "",
    "postalCode": "13400",
    "latitude": 43.301892,
    "longitude": 5.563888,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSLA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131701d",
    "rne": "0131701D",
    "name": "College Gabriel Peri",
    "type": "college",
    "city": "Gardanne",
    "address": "",
    "postalCode": "13541",
    "latitude": 43.457301,
    "longitude": 5.48627,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ],
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131704g",
    "rne": "0131704G",
    "name": "College Arthur Rimbaud",
    "type": "college",
    "city": "Marseille 15e  Arrondissement",
    "address": "",
    "postalCode": "13015",
    "latitude": 43.351766,
    "longitude": 5.3576,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131706j",
    "rne": "0131706J",
    "name": "College Commandant Cousteau",
    "type": "college",
    "city": "Rognac",
    "address": "",
    "postalCode": "13340",
    "latitude": 43.496377,
    "longitude": 5.221441,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131707k",
    "rne": "0131707K",
    "name": "College Gerard Philipe",
    "type": "college",
    "city": "Martigues",
    "address": "",
    "postalCode": "13500",
    "latitude": 43.37718,
    "longitude": 5.050313,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131711p",
    "rne": "0131711P",
    "name": "College Rocher du Dragon",
    "type": "college",
    "city": "Aix-en-Provence",
    "address": "",
    "postalCode": "13100",
    "latitude": 43.541369,
    "longitude": 5.406124,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131756n",
    "rne": "0131756N",
    "name": "College Darius Milhaud",
    "type": "college",
    "city": "Marseille 12e  Arrondissement",
    "address": "",
    "postalCode": "13012",
    "latitude": 43.307373,
    "longitude": 5.442311,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "SEGPA",
      "assignedStudents": 0,
      "capacity": 81,
      "placesVacantes": 81,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "ashDevices": [
      {
        "type": "SEGPA",
        "assignedStudents": 0,
        "capacity": 81,
        "placesVacantes": 81,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ],
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131757p",
    "rne": "0131757P",
    "name": "College l'Estaque",
    "type": "college",
    "city": "Marseille 16e  Arrondissement",
    "address": "",
    "postalCode": "13016",
    "latitude": 43.365355,
    "longitude": 5.321885,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131789z",
    "rne": "0131789Z",
    "name": "College Henri Wallon",
    "type": "college",
    "city": "Martigues",
    "address": "",
    "postalCode": "13500",
    "latitude": 43.37718,
    "longitude": 5.050313,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131881z",
    "rne": "0131881Z",
    "name": "College Simone Veil",
    "type": "college",
    "city": "Chateaurenard",
    "address": "",
    "postalCode": "13833",
    "latitude": 43.881196,
    "longitude": 4.833645,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131885d",
    "rne": "0131885D",
    "name": "College Katherine Johnson Ex Val des Pins",
    "type": "college",
    "city": "Marseille 15e  Arrondissement",
    "address": "",
    "postalCode": "13344",
    "latitude": 43.351766,
    "longitude": 5.3576,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TED",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131887f",
    "rne": "0131887F",
    "name": "College Elsa Triolet",
    "type": "college",
    "city": "Marseille 15e  Arrondissement",
    "address": "",
    "postalCode": "13015",
    "latitude": 43.351766,
    "longitude": 5.3576,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131922u",
    "rne": "0131922U",
    "name": "College les Bartavelles",
    "type": "college",
    "city": "Marseille 10e  Arrondissement",
    "address": "",
    "postalCode": "13395",
    "latitude": 43.278721,
    "longitude": 5.418179,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131923v",
    "rne": "0131923V",
    "name": "College Marseilleveyre",
    "type": "college",
    "city": "Marseille 8e  Arrondissement",
    "address": "",
    "postalCode": "13285",
    "latitude": 43.247182,
    "longitude": 5.374045,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131935h",
    "rne": "0131935H",
    "name": "College Edgar Quinet",
    "type": "college",
    "city": "Marseille  3e  Arrondissement",
    "address": "",
    "postalCode": "13003",
    "latitude": 43.311721,
    "longitude": 5.381334,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131943s",
    "rne": "0131943S",
    "name": "College Pierre Puget",
    "type": "college",
    "city": "Marseille  6e  Arrondissement",
    "address": "",
    "postalCode": "13292",
    "latitude": 43.287545,
    "longitude": 5.381329,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131968u",
    "rne": "0131968U",
    "name": "College Quartier des Caillols",
    "type": "college",
    "city": "Marseille 12e  Arrondissement",
    "address": "",
    "postalCode": "13012",
    "latitude": 43.307373,
    "longitude": 5.442311,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "SEGPA",
      "assignedStudents": 0,
      "capacity": 49,
      "placesVacantes": 49,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "ashDevices": [
      {
        "type": "SEGPA",
        "assignedStudents": 0,
        "capacity": 49,
        "placesVacantes": 49,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ],
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132007l",
    "rne": "0132007L",
    "name": "College Jacques Prevert",
    "type": "college",
    "city": "Saint-Victoret",
    "address": "",
    "postalCode": "13730",
    "latitude": 43.413729,
    "longitude": 5.25061,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132009n",
    "rne": "0132009N",
    "name": "College Gisele Halimi Ex Chat.Double",
    "type": "college",
    "city": "Aix-en-Provence",
    "address": "",
    "postalCode": "13090",
    "latitude": 43.541369,
    "longitude": 5.406124,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132204a",
    "rne": "0132204A",
    "name": "College Pont de Vivaux",
    "type": "college",
    "city": "Marseille 10e  Arrondissement",
    "address": "",
    "postalCode": "13010",
    "latitude": 43.278721,
    "longitude": 5.418179,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSLA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132205b",
    "rne": "0132205B",
    "name": "College Gaston Defferre",
    "type": "college",
    "city": "Marseille  7e  Arrondissement",
    "address": "",
    "postalCode": "13263",
    "latitude": 43.280537,
    "longitude": 5.360935,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFM",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132207d",
    "rne": "0132207D",
    "name": "College Massenet",
    "type": "college",
    "city": "Marseille 14e  Arrondissement",
    "address": "",
    "postalCode": "13014",
    "latitude": 43.337467,
    "longitude": 5.390951,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132310r",
    "rne": "0132310R",
    "name": "College Gyptis",
    "type": "college",
    "city": "Marseille  9e  Arrondissement",
    "address": "",
    "postalCode": "13009",
    "latitude": 43.249253,
    "longitude": 5.423479,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132311s",
    "rne": "0132311S",
    "name": "College Louis Pasteur",
    "type": "college",
    "city": "Marseille  9e  Arrondissement",
    "address": "",
    "postalCode": "13009",
    "latitude": 43.249253,
    "longitude": 5.423479,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132312t",
    "rne": "0132312T",
    "name": "College Andre Malraux",
    "type": "college",
    "city": "Marseille 13e  Arrondissement",
    "address": "",
    "postalCode": "13013",
    "latitude": 43.340303,
    "longitude": 5.429033,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSLA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132313u",
    "rne": "0132313U",
    "name": "College Stephane Mallarme",
    "type": "college",
    "city": "Marseille 13e  Arrondissement",
    "address": "",
    "postalCode": "13013",
    "latitude": 43.340303,
    "longitude": 5.429033,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132314v",
    "rne": "0132314V",
    "name": "College Jean Giono",
    "type": "college",
    "city": "Marseille 13e  Arrondissement",
    "address": "",
    "postalCode": "13388",
    "latitude": 43.340303,
    "longitude": 5.429033,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132315w",
    "rne": "0132315W",
    "name": "College Francoise Duparc Ex Chartreux (Avenue des)",
    "type": "college",
    "city": "Marseille  4e  Arrondissement",
    "address": "",
    "postalCode": "13004",
    "latitude": 43.306398,
    "longitude": 5.400105,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132318z",
    "rne": "0132318Z",
    "name": "College Elie Coutarel",
    "type": "college",
    "city": "Istres",
    "address": "",
    "postalCode": "13800",
    "latitude": 43.532355,
    "longitude": 4.957523,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132319a",
    "rne": "0132319A",
    "name": "Section Enseignt Professionnel S.E.P. Maurice Genevoix",
    "type": "lycee",
    "city": "Marignane",
    "address": "",
    "postalCode": "13700",
    "latitude": 43.415837,
    "longitude": 5.220936,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132323e",
    "rne": "0132323E",
    "name": "College Maximilien Robespierre",
    "type": "college",
    "city": "Port-Saint-Louis-du-Rhone",
    "address": "",
    "postalCode": "13230",
    "latitude": 43.399899,
    "longitude": 4.802233,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132325g",
    "rne": "0132325G",
    "name": "College Campra",
    "type": "college",
    "city": "Aix-en-Provence",
    "address": "",
    "postalCode": "13617",
    "latitude": 43.541369,
    "longitude": 5.406124,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSLA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132326h",
    "rne": "0132326H",
    "name": "College Albert Camus",
    "type": "college",
    "city": "Miramas",
    "address": "",
    "postalCode": "13140",
    "latitude": 43.582796,
    "longitude": 5.009776,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132343b",
    "rne": "0132343B",
    "name": "Etab.Regional Enseignt Adapte Louis Aragon",
    "type": "lycee",
    "city": "Les Pennes-Mirabeau",
    "address": "",
    "postalCode": "13170",
    "latitude": 43.39829,
    "longitude": 5.326859,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132404t",
    "rne": "0132404T",
    "name": "College Clair Soleil",
    "type": "college",
    "city": "Marseille 14e  Arrondissement",
    "address": "",
    "postalCode": "13014",
    "latitude": 43.337467,
    "longitude": 5.390951,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132407w",
    "rne": "0132407W",
    "name": "College Jean Moulin",
    "type": "college",
    "city": "Marseille 15e  Arrondissement",
    "address": "",
    "postalCode": "13015",
    "latitude": 43.351766,
    "longitude": 5.3576,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132408x",
    "rne": "0132408X",
    "name": "College Jules Ferry",
    "type": "college",
    "city": "Marseille 15e  Arrondissement",
    "address": "",
    "postalCode": "13326",
    "latitude": 43.351766,
    "longitude": 5.3576,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ],
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132412b",
    "rne": "0132412B",
    "name": "College Lou Garlaban",
    "type": "college",
    "city": "Aubagne",
    "address": "",
    "postalCode": "13400",
    "latitude": 43.301892,
    "longitude": 5.563888,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132491m",
    "rne": "0132491M",
    "name": "College Alexandre Dumas",
    "type": "college",
    "city": "Marseille 14e  Arrondissement",
    "address": "",
    "postalCode": "13014",
    "latitude": 43.337467,
    "longitude": 5.390951,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132494r",
    "rne": "0132494R",
    "name": "College les Amandeirets",
    "type": "college",
    "city": "Chateauneuf-les-Martigues",
    "address": "",
    "postalCode": "13220",
    "latitude": 43.386364,
    "longitude": 5.150205,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132561n",
    "rne": "0132561N",
    "name": "College Anatole France",
    "type": "college",
    "city": "Marseille  6e  Arrondissement",
    "address": "",
    "postalCode": "13006",
    "latitude": 43.287545,
    "longitude": 5.381329,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "placesVacantes": 12,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "ashDevices": [
      {
        "type": "TFC",
        "assignedStudents": 0,
        "capacity": 12,
        "placesVacantes": 12,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ],
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132573b",
    "rne": "0132573B",
    "name": "College Glanum",
    "type": "college",
    "city": "Saint-Remy-de-Provence",
    "address": "",
    "postalCode": "13533",
    "latitude": 43.796255,
    "longitude": 4.836697,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "SEGPA",
      "assignedStudents": 0,
      "capacity": 63,
      "placesVacantes": 63,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "ashDevices": [
      {
        "type": "SEGPA",
        "assignedStudents": 0,
        "capacity": 63,
        "placesVacantes": 63,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ],
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132634t",
    "rne": "0132634T",
    "name": "College Andre Malraux",
    "type": "college",
    "city": "Fos-sur-Mer",
    "address": "",
    "postalCode": "13270",
    "latitude": 43.451226,
    "longitude": 4.933732,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132730x",
    "rne": "0132730X",
    "name": "College Pytheas",
    "type": "college",
    "city": "Marseille 14e  Arrondissement",
    "address": "",
    "postalCode": "13014",
    "latitude": 43.337467,
    "longitude": 5.390951,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132785g",
    "rne": "0132785G",
    "name": "College Rosa Parks",
    "type": "college",
    "city": "Marseille 15e  Arrondissement",
    "address": "",
    "postalCode": "13015",
    "latitude": 43.351766,
    "longitude": 5.3576,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132786h",
    "rne": "0132786H",
    "name": "College les Matagots",
    "type": "college",
    "city": "La Ciotat",
    "address": "",
    "postalCode": "13600",
    "latitude": 43.189161,
    "longitude": 5.626161,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132833j",
    "rne": "0132833J",
    "name": "College Georges Brassens",
    "type": "college",
    "city": "Bouc-Bel-Air",
    "address": "",
    "postalCode": "13320",
    "latitude": 43.443491,
    "longitude": 5.411536,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132834k",
    "rne": "0132834K",
    "name": "College Charles Rieu",
    "type": "college",
    "city": "Saint-Martin-de-Crau",
    "address": "",
    "postalCode": "13310",
    "latitude": 43.63715,
    "longitude": 4.84769,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132973l",
    "rne": "0132973L",
    "name": "College Nina Simone",
    "type": "college",
    "city": "Aix-en-Provence",
    "address": "",
    "postalCode": "13100",
    "latitude": 43.541369,
    "longitude": 5.406124,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0133016h",
    "rne": "0133016H",
    "name": "College Louis Leprince Ringuet",
    "type": "college",
    "city": "La Fare-les-Oliviers",
    "address": "",
    "postalCode": "13580",
    "latitude": 43.546119,
    "longitude": 5.201485,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TED",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0133114p",
    "rne": "0133114P",
    "name": "College Roger Carcassonne",
    "type": "college",
    "city": "Pelissanne",
    "address": "",
    "postalCode": "13330",
    "latitude": 43.628277,
    "longitude": 5.159936,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSLA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0133196d",
    "rne": "0133196D",
    "name": "College Simone de Beauvoir",
    "type": "college",
    "city": "Vitrolles",
    "address": "",
    "postalCode": "13127",
    "latitude": 43.443844,
    "longitude": 5.258646,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSLA",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0133287c",
    "rne": "0133287C",
    "name": "College Florence Arthaud Ex Garrigues (les)",
    "type": "college",
    "city": "Rognes",
    "address": "",
    "postalCode": "13840",
    "latitude": 43.666093,
    "longitude": 5.350889,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0133381e",
    "rne": "0133381E",
    "name": "College le Petit Prince",
    "type": "college",
    "city": "Gignac-la-Nerthe",
    "address": "",
    "postalCode": "13180",
    "latitude": 43.390716,
    "longitude": 5.233848,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0133406g",
    "rne": "0133406G",
    "name": "Lycee Polyvalent de la Mediterranee",
    "type": "lycee",
    "city": "La Ciotat",
    "address": "",
    "postalCode": "13600",
    "latitude": 43.189161,
    "longitude": 5.626161,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0133451f",
    "rne": "0133451F",
    "name": "College Jean Zay",
    "type": "college",
    "city": "Rousset",
    "address": "",
    "postalCode": "13790",
    "latitude": 43.481809,
    "longitude": 5.620074,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0133492a",
    "rne": "0133492A",
    "name": "College Jean Bernard",
    "type": "college",
    "city": "Salon-de-Provence",
    "address": "",
    "postalCode": "13300",
    "latitude": 43.6377,
    "longitude": 5.062036,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0133510v",
    "rne": "0133510V",
    "name": "College Ubelka",
    "type": "college",
    "city": "Auriol",
    "address": "",
    "postalCode": "13390",
    "latitude": 43.360892,
    "longitude": 5.64717,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0133621r",
    "rne": "0133621R",
    "name": "College Francoise Dolto",
    "type": "college",
    "city": "Saint-Andiol",
    "address": "",
    "postalCode": "13670",
    "latitude": 43.833104,
    "longitude": 4.947284,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0133765x",
    "rne": "0133765X",
    "name": "College Marc Ferrandi",
    "type": "college",
    "city": "Septemes-les-Vallons",
    "address": "",
    "postalCode": "13240",
    "latitude": 43.391444,
    "longitude": 5.363293,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0133775h",
    "rne": "0133775H",
    "name": "College Marie Laurencin",
    "type": "college",
    "city": "Marseille 14e  Arrondissement",
    "address": "",
    "postalCode": "13014",
    "latitude": 43.337467,
    "longitude": 5.390951,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0133788x",
    "rne": "0133788X",
    "name": "College Jean Claude Izzo",
    "type": "college",
    "city": "Marseille  2e  Arrondissement",
    "address": "",
    "postalCode": "13002",
    "latitude": 43.315273,
    "longitude": 5.367338,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0133790z",
    "rne": "0133790Z",
    "name": "College Lucie Aubrac",
    "type": "college",
    "city": "Eyguieres",
    "address": "",
    "postalCode": "13430",
    "latitude": 43.69339,
    "longitude": 5.03175,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TSA",
      "assignedStudents": 0,
      "capacity": 10,
      "placesVacantes": 10,
      "effectifAvantCommission": 0,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "ashDevices": [
      {
        "type": "TSA",
        "assignedStudents": 0,
        "capacity": 10,
        "placesVacantes": 10,
        "effectifAvantCommission": 0,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ],
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0133881y",
    "rne": "0133881Y",
    "name": "College Germaine Tillion",
    "type": "college",
    "city": "Marseille 12e  Arrondissement",
    "address": "",
    "postalCode": "13012",
    "latitude": 43.307373,
    "longitude": 5.442311,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0134003f",
    "rne": "0134003F",
    "name": "Lycee Polyvalent Regional Nelson Mandela",
    "type": "lycee",
    "city": "Marseille 12e  Arrondissement",
    "address": "",
    "postalCode": "13012",
    "latitude": 43.307373,
    "longitude": 5.442311,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFM",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0134022b",
    "rne": "0134022B",
    "name": "College Louise Michel",
    "type": "college",
    "city": "Marseille 10e  Arrondissement",
    "address": "",
    "postalCode": "13362",
    "latitude": 43.278721,
    "longitude": 5.418179,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "SEGPA",
      "assignedStudents": 0,
      "capacity": 69,
      "placesVacantes": 69,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "ashDevices": [
      {
        "type": "SEGPA",
        "assignedStudents": 0,
        "capacity": 69,
        "placesVacantes": 69,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ],
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130010r",
    "rne": "0130010R",
    "name": "Lycée Polyvalent Montmajour",
    "type": "lycee",
    "city": "Arles",
    "address": "",
    "postalCode": "13646",
    "latitude": 43.676914,
    "longitude": 4.627461,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131609d",
    "rne": "0131609D",
    "name": "Collège Frédéric Mistral",
    "type": "college",
    "city": "Arles",
    "address": "",
    "postalCode": "13637",
    "latitude": 43.676914,
    "longitude": 4.627461,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131610e",
    "rne": "0131610E",
    "name": "Collège Vincent Van Gogh",
    "type": "college",
    "city": "Arles",
    "address": "",
    "postalCode": "13637",
    "latitude": 43.676914,
    "longitude": 4.627461,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132572a",
    "rne": "0132572A",
    "name": "Collège Ampère",
    "type": "college",
    "city": "Arles",
    "address": "",
    "postalCode": "13200",
    "latitude": 43.676914,
    "longitude": 4.627461,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "TFC",
      "assignedStudents": 0,
      "capacity": 12,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "directorName": "",
    "referentName": "",
    "secteurERSEH": "",
    "cpcName": "",
    "email": "",
    "phone": "",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0131712r",
    "rne": "0131712R",
    "name": "CLG ARC DE MEYRAN",
    "type": "college",
    "city": "AIX-EN-PROVENCE",
    "address": "",
    "postalCode": "",
    "latitude": 0,
    "longitude": 0,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "SEGPA",
      "assignedStudents": 0,
      "capacity": 91,
      "placesVacantes": 91,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "ashDevices": [
      {
        "type": "SEGPA",
        "assignedStudents": 0,
        "capacity": 91,
        "placesVacantes": 91,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ],
    "directorName": "Stéphanie BAILLIU",
    "referentName": "",
    "cpcName": "",
    "email": "directeur.segpa.arcdemeyran@ac-aix-marseille.fr",
    "phone": "04 42 27 73 89",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132401p",
    "rne": "0132401P",
    "name": "CLG CHATEAU FORBIN",
    "type": "college",
    "city": "MARSEILLE 11E",
    "address": "",
    "postalCode": "",
    "latitude": 0,
    "longitude": 0,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "SEGPA",
      "assignedStudents": 0,
      "capacity": 52,
      "placesVacantes": 52,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "ashDevices": [
      {
        "type": "SEGPA",
        "assignedStudents": 0,
        "capacity": 52,
        "placesVacantes": 52,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ],
    "directorName": "Julie BORDA",
    "referentName": "",
    "cpcName": "",
    "email": "ce.0132401P@ac-aix-marseille.fr",
    "phone": "04 91 44 74 18",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0132217p",
    "rne": "0132217P",
    "name": "CLG MONT SAUVY",
    "type": "college",
    "city": "ORGON",
    "address": "",
    "postalCode": "",
    "latitude": 0,
    "longitude": 0,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "SEGPA",
      "assignedStudents": 0,
      "capacity": 64,
      "placesVacantes": 64,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "ashDevices": [
      {
        "type": "SEGPA",
        "assignedStudents": 0,
        "capacity": 64,
        "placesVacantes": 64,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ],
    "directorName": "Wladimir RODRIGUEZ",
    "referentName": "",
    "cpcName": "",
    "email": "ce.0132217p@ac-aix-marseille.fr",
    "phone": "04 90 73 39 70",
    "referentPhone": "",
    "referentEmail": ""
  },
  {
    "id": "0130007m",
    "rne": "0130007M",
    "name": "CLG JAS DE BOUFFAN",
    "type": "college",
    "city": "AIX-EN-PROVENCE",
    "address": "",
    "postalCode": "",
    "latitude": 0,
    "longitude": 0,
    "studentsCount": {
      "total": 0,
      "byLevel": {}
    },
    "ashDevice": {
      "type": "SEGPA",
      "assignedStudents": 0,
      "capacity": 106,
      "baseChecked": false,
      "valChecked": false,
      "comments": ""
    },
    "ashDevices": [
      {
        "type": "SEGPA",
        "assignedStudents": 0,
        "capacity": 106,
        "baseChecked": false,
        "valChecked": false,
        "comments": ""
      }
    ],
    "directorName": "Dorian ZAWADZKI",
    "referentName": "",
    "cpcName": "",
    "email": "directeur.segpa.jasdebouffan@ac-aix-marseille.fr",
    "phone": "04 42 52 28 00",
    "referentPhone": "",
    "referentEmail": ""
  }
];
