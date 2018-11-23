import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TutionService {

  // ROOT_URL = 'https://languagetool.org/api/v2/languages';

  constructor(private http: HttpClient) { }
  getTution(){
    return this.http.get('https://wordsapiv1.p.mashape.com/words/soliloquy')
  }
}
