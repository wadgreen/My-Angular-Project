import { Component, OnInit } from '@angular/core';
import { PhrasesService } from '../../phrases.service';

@Component({
  selector: 'app-phrase',
  templateUrl: './phrase.component.html',
  styleUrls: ['./phrase.component.scss']
})
export class PhraseComponent implements OnInit {

  title: string;
  phrases: any;
  constructor(public ph: PhrasesService) { }

  ngOnInit() {
    this.title = "PHRASES";
    this.phrases = this.ph.getphrase();
  }

}
