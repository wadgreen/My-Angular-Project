import { Injectable } from '@angular/core';

const phrase = [
  {
    "id": "1",
    "phrasef": "Apprendre des langues est intèressant",
    "phrasee": "Learning languages is fun",
    "phrasea": "تعلم اللغات شئ ممتع",
  },
  {
    "id": "2",
    "phrasef": "un cours de littérature",
    "phrasee": "Cours of litterature",
    "phrasea": "فصل  ادبي",
  },
  {
    "id": "3",
    "phrasef": "Pour étudier",
    "phrasee": "In order to study",
    "phrasea": "للدراسه",
  },
  {
    "id": "2",
    "phrasef": "un cours de littérature",
    "phrasee": "Cours of litterature",
    "phrasea": "فصل  ادبي",
  },
  {
    "id": "2",
    "phrasef": "un cours de littérature",
    "phrasee": "Cours of litterature",
    "phrasea": "فصل  ادبي",
  },
  {
    "id": "2",
    "phrasef": "un cours de littérature",
    "phrasee": "Cours of litterature",
    "phrasea": "فصل  ادبي",
  },
  {
    "id": "2",
    "phrasef": "un cours de littérature",
    "phrasee": "Cours of litterature",
    "phrasea": "فصل  ادبي",
  },
  {
    "id": "2",
    "phrasef": "un cours de littérature",
    "phrasee": "Cours of litterature",
    "phrasea": "فصل  ادبي",
  },
  {
    "id": "3",
    "phrasef": "Pour étudier",
    "phrasee": "In order to study",
    "phrasea": "للدراسه",
  },
  {
    "id": "3",
    "phrasef": "Pour étudier",
    "phrasee": "In order to study",
    "phrasea": "للدراسه",
  },
  {
    "id": "3",
    "phrasef": "Pour étudier",
    "phrasee": "In order to study",
    "phrasea": "للدراسه",
  },
  {
    "id": "3",
    "phrasef": "Pour étudier",
    "phrasee": "In order to study",
    "phrasea": "للدراسه",
  },
  {
    "id": "4",
    "phrasef": "C'est la class",
    "phrasee": "This is the class",
    "phrasea": "هذا هو الفصل",
  }
];

@Injectable({
  providedIn: 'root'
})
export class PhrasesService {

  constructor() { }

  getphrase(){
    return phrase;
  }
}
