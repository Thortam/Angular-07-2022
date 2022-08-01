import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { KodulehtComponent } from './koduleht/koduleht.component';
import { LisaToodeComponent } from './lisa-toode/lisa-toode.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';
import { PoedComponent } from './poed/poed.component';
import { YksikToodeComponent } from './yksik-toode/yksik-toode.component';

const routes: Routes = [
  { path:"", component: KodulehtComponent},
  { path:"avaleht", component: AvalehtComponent},
  { path:"ostukorv", component: OstukorvComponent},
  { path:"poed", component: PoedComponent},
  { path:"lisa", component: LisaToodeComponent},
  { path:"toode/:nimi", component: YksikToodeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
