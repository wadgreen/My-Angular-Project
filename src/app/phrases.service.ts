import { Injectable } from '@angular/core';

const phrase = [
  {
    "phrasef": "Apprendre des langues est intèressant",
    "phrasee": "Learning languages is fun",
    "phrasea": "تعلم اللغات شئ ممتع",
  },
  {
    "phrasef": "un cours de littérature",
    "phrasee": "Cours of litterature",
    "phrasea": "فصل  ادبي",
  },
  {
    "phrasef": "Pour étudier",
    "phrasee": "In order to study",
    "phrasea": "للدراسه",
  },
  {
    "phrasef": "un cours de littérature",
    "phrasee": "Cours of litterature",
    "phrasea": "فصل  ادبي",
  },
  {
    "phrasef": "un cours de littérature",
    "phrasee": "Cours of litterature",
    "phrasea": "فصل  ادبي",
  },
  {
    "phrasef": "un cours de littérature",
    "phrasee": "Cours of litterature",
    "phrasea": "فصل  ادبي",
  },
  {
    "phrasef": "un cours de littérature",
    "phrasee": "Cours of litterature",
    "phrasea": "فصل  ادبي",
  },
  {
    "phrasef": "un cours de littérature",
    "phrasee": "Cours of litterature",
    "phrasea": "فصل  ادبي",
  },
  {
    "phrasef": "Pour étudier",
    "phrasee": "In order to study",
    "phrasea": "للدراسه",
  },
  {
    "phrasef": "Pour étudier",
    "phrasee": "In order to study",
    "phrasea": "للدراسه",
  },
  {
    "phrasef": "Pour étudier",
    "phrasee": "In order to study",
    "phrasea": "للدراسه",
  },
  {
    "phrasef": "Pour étudier",
    "phrasee": "In order to study",
    "phrasea": "للدراسه",
  },
  {
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
