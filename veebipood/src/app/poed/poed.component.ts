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
  keskused = ['Kristiine','Mustamäe','Ülemiste','Balti jaam'];
  aadress = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  // uut muutujat on v]imalik tekitada KOLMES kohas:
  // 1. faili [leval, hiljem viitan talle kui this
  // 2. sulgude sees, hiljem lihtsalt viitan talle 
  // 3. let eesliidesega, hiljem lihtsalt viitan talle

  lisaPood(form: any) {
    this.keskused.push(form.value.pood);
  }

  kustutaPood(keskus: string) {
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
  
  muudaAadress(keskuseAadress: string) {
    this.aadress = keskuseAadress;
  }
}
