import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-koduleht',
  templateUrl: './koduleht.component.html',
  styleUrls: ['./koduleht.component.css']
})
export class KodulehtComponent implements OnInit {
  // koolon t'histab t[[pi, v]rdusm'rk t'histab v''rtust
  tooted: any = []; // siia lisan muutujad, mis l'hevad HTMLi
  // KUI OLI LISA-TOODE, siis v]tsin tooted selleks, et sinna [hte juurde panna
  // ja tagasi localStorage-sse need saata

  // SIIN v]tan tooted ja n'itan neid HTML-s

  constructor() { }

  ngOnInit(): void {
    let tootedLS = localStorage.getItem('tooted');
    if (tootedLS !== null) {
      this.tooted = JSON.parse(tootedLS);
    }
  }
  //            "Coca cola"
  //            "Fanta"
  lisaOstukorvi(toode: any) {
    // 1. ostukorv = [];
    // 2. ostukorv = [];
    let ostukorv = [];  // ei kuva HTML-s
    // 1. ostukorvLS = null;
    // 2. ostukorvLS = '["Coca cola"]'
    let ostukorvLS = localStorage.getItem("ostukorv");
    if (ostukorvLS !== null) { // 1. VÄÄR -> ei tee blokki 2. T"DE
      ostukorv = JSON.parse(ostukorvLS);
      // 2. ostukorv = ["Coca cola"]
    }
    // 1. [].push("Coca Cola") ----> ["Coca Cola"];
    // 2. ["Coca Cola"].push("Fanta") ----> ["Coca Cola", "Fanta"];
    ostukorv.push(toode);
    // VÕTI "ostukorv"
    // VÄÄRTUS '["Coca Cola"]'
    // VÕTI "ostukorv"
    // VÄÄRTUS '["Coca Cola", "Fanta"]'
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
  }

}
