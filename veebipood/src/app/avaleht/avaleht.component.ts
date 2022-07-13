import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  templateUrl: './avaleht.component.html',
  styleUrls: ['./avaleht.component.css']
})
export class AvalehtComponent implements OnInit {
  kogus = 0;
  s6num = "Muuda kogust!";
  kasSisestatud = false;
  
  constructor() { }

  ngOnInit(): void {
    // console.log ("lehe käimaminemise funktsioon");
  }

  tagasiNulli() {
    this.kogus = 0;
    this.s6num = "Kogus pandud tagasi nulli!"
  }

  v2hendaKogust() {
    if (this.kogus > 0) {
      this.kogus = this.kogus - 1;
      this.s6num = "Kogus vähendatud!";
    } else {
      this.s6num = "Kogus ei saa olla miinuses!"
    }
  }

  suurendaKogust() {
    this.kogus = this.kogus + 1;
    this.s6num = "Kogus suurendatud!"
  }
  
  sisesta() {
    this.kasSisestatud = true;
  }

}


