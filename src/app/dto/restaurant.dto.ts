export interface Restaurant {

  id: number;
  nom: string;
  adresse: string;
  evaluations: Evaluation[];
  moyenne: number;
}

export interface Evaluation {
  id: number;
  evaluateur: string;
  commentaire: string;
  note: number;
}
