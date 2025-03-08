import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidenceComponent } from './residence/residence.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { FormAjoutComponent } from './form-ajout/form-ajout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsResidenceComponent } from './details-residence/details-residence.component';
import { AgenceComponent } from './agence/agence.component';
import { AgenceDetailsComponent } from './agence-details/agence-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidenceComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent,
    FormAjoutComponent,
    DetailsResidenceComponent,
    AgenceComponent,
    AgenceDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
