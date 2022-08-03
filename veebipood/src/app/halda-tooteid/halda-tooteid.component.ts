import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-halda-tooteid',
  templateUrl: './halda-tooteid.component.html',
  styleUrls: ['./halda-tooteid.component.css']
})
export class HaldaTooteidComponent implements OnInit {

  tooted: any[] = [];

  constructor() { } // klasside ühendamiseks

  ngOnInit(): void {
    let tootedLS = localStorage.getItem("tooted");
    if (tootedLS !== null) {
      this.tooted= JSON.parse(tootedLS); 
    }
  }

  kustuta(toode: any) {
    //console.log(toode);
    const index = this.tooted.indexOf(toode);
    //console.log(index);
    //console.log(this.tooted);
    this.tooted.splice(index,1);
    //console.log(this.tooted);
    localStorage.setItem("tooted", JSON.stringify(this.tooted));
    
  }

  muuda(toode: any) {
     
  }

}
