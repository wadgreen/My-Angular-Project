import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {

  Langue1 = [];
  Langue2 = [];
  constructor() { }

  ngOnInit() {
  }


  addWord(newWord: string) {
    if (newWord) {
      this.Langue1.push(newWord);
    }
  }
  addWord2(newWord2:string){
    if(newWord2){
      this.Langue2.push(newWord2)
    }
  }
}
