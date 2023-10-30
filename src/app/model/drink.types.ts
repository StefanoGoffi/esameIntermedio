export interface DrinkType {
    nome: string;
    foto: string;
    ingredienti: [string];
    misure: [string];
    descrizioneIt: string | null;
    descrizioneEn: string | null;
    descrizioneDe: string | null;
    descrizioneFr: string | null;
    categoria: string;
    bicchiere: string;
}
