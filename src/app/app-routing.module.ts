import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceComponent } from './residence/residence.component';
import { FormAjoutComponent } from './form-ajout/form-ajout.component';
import { DetailsResidenceComponent } from './details-residence/details-residence.component';
import { AgenceComponent } from './agence/agence.component';
import { AgenceDetailsComponent } from './agence-details/agence-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path:'listAgence',component:ResidenceComponent},
  {path:'addAgence',component:FormAjoutComponent},
  {path:'agence',component:AgenceComponent,children:
    [{path:'agenceDetails',component:AgenceDetailsComponent}]},
  {path:"residence/detailsresidence/:id",component:DetailsResidenceComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
