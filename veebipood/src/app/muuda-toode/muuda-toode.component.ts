import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-muuda-toode',
  templateUrl: './muuda-toode.component.html',
  styleUrls: ['./muuda-toode.component.css']
})
export class MuudaToodeComponent implements OnInit {
  // KÕIK SIIN allolevad muutujad on HTMLs kasutamiseks

  toode: any;
  // private -tähistab, et me EI KASUTA HTMLs seda muutujat
  private tooted: any[] = [];
  muutmiseVorm: any;

  constructor(private route: ActivatedRoute, 
    private router: Router) { } //Router - võimaldab URLi vahetada

  ngOnInit(): void {
    // path
    const nimi = this.route.snapshot.paramMap.get("nimi");
    const tootedLS = localStorage.getItem("tooted");
    if (tootedLS !== null) {
      this.tooted = JSON.parse(tootedLS);
    }
    this.toode = this.tooted.find(element => element.nimi === nimi);

    this.muutmiseVorm = new FormGroup({
      nimi: new FormControl(this.toode.nimi),
      hind: new FormControl(this.toode.hind),
      aktiivsus: new FormControl(this.toode.aktiivsus),
    });

  }

  onSubmit() {
    //lisamine: this.tooted.push()
    //["Ant", "Bison", "Camel"].push("Duck")]
    //---> ["Ant", "Bison", "Camel", "Duck"]

    //kustutamine: this.tooted.splice(xxxxx, 1);
    //  0         1       2
    //["Ant", "Bison", "Camel"].splice(2, 1);
    //---> ["Ant", "Bison"]

    //muutmine: this.tooted[xxxxx] = uus_väärtus;
    //  0         1       2
    //["Ant", "Bison", "Camel"][1] = "Bee"
    //---> ["Ant", "Bee", "Camel"]
    const index = this.tooted.indexOf(this.toode);
    this.tooted[index] = this.muutmiseVorm.value;
    localStorage.setItem("tooted", JSON.stringify(this.tooted));
    this.router.navigateByUrl("/halda"); // SAMA MIS routerLink="/halda", aga läbi .TS faili
    }

}
