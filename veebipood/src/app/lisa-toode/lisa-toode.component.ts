import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lisa-toode',
  templateUrl: './lisa-toode.component.html',
  styleUrls: ['./lisa-toode.component.css']
})
export class LisaToodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lisa(form: any) {
    let tooted = [];
    let tootedLS = localStorage.getItem("tooted");
    if (tootedLS !== null) {
      tooted = JSON.parse(tootedLS);
    }
    // {nimi: }
    tooted.push(form.value);
    localStorage.setItem("tooted", JSON.stringify(tooted));
  }

  // 1. teeme uue muutuja millele anname v''rtuseks t[hi massiv          let           =  []
  // 2. v]tame brauseri lokaalm'lust k]ik tooted                                      localStorage.getItem
  // 3. KUI ON seal midagi olemas, asendame muutuja v''rtuse
  // 4. KUNA localStorage-s peab ole,a k]ik jutum'rkide v''rtuses,
  //    peame jutum'rgid v]etud v''rtustel maha v]tma
  // 5. lisame toote juurde sinna muutujasse
  // 6. paneme jutum'rgid tagasi
  // 7. paneme localStorage-sse tagasi



}
