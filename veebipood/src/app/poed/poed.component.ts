import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poed',
  templateUrl: './poed.component.html',
  styleUrls: ['./poed.component.css']
})
export class PoedComponent implements OnInit {
  // salvestused:
  // 1. faili
  // 2. brauserisse
  // 3. andmebaasi
  keskused = [
    {nimetus:'Kristiine',aeg:'10-23', aadress: "Tulika tänav 12"},
    {nimetus:'Mustamäe',aeg:'9-22', aadress: "Tammsaare tee 76"},
    {nimetus:'Ülemiste',aeg:'9-22', aadress: "Lennujaama tee 45"},
    {nimetus:'Balti jaam',aeg:'10-23', aadress: "Niine 8"}
  ];
  aadress = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  // uut muutujat on v]imalik tekitada KOLMES kohas:
  // 1. faili [leval, hiljem viitan talle kui this
  // 2. sulgude sees, hiljem lihtsalt viitan talle 
  // 3. let eesliidesega, hiljem lihtsalt viitan talle

  lisaPood(form: any) {
    this.keskused.push({nimetus: form.value.pood, aeg: form.value.aeg, aadress: form.value.aadress});
  }

  kustutaPood(keskus: any) {
    // let t'hendab uue muutuja tekitamist
    let j2rjekorraNumber = this.keskused.indexOf(keskus);
    this.keskused.splice(j2rjekorraNumber, 1); // splice -> kustutamine. j'rjekorranumber ja mitu t[kki tahan kustutada
  }
  // aadressKristiine () {
  //   this.aadress = "Tulika tänav 12";
  // }

  // aadressMustamae () {
  //   this.aadress = "Tammsaare tee 76";
  // }

  // aadressYlemiste () {
  //   this.aadress = "Lennujaama tee 45";
  // }

  // parameetri v''rtus tuleb sulgude vahelt ja saadetakse v''rtuseks muutujale [leval
  
  muudaAadress(keskuseAadress: any) {
    this.aadress = keskuseAadress;
  }
}
