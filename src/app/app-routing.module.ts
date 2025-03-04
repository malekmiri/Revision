import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceComponent } from './residence/residence.component';
import { FormAjoutComponent } from './form-ajout/form-ajout.component';
import { DetailsResidenceComponent } from './details-residence/details-residence.component';
import { UpdateResidenceComponent } from './update-residence/update-residence.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path:'residence',component:ResidenceComponent},
  {path:'addResidence',component:FormAjoutComponent},
  {path:"residence/detailsresidence/:id",component:DetailsResidenceComponent},
  {path:"residence/update/:id",component:UpdateResidenceComponent}



//{path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
