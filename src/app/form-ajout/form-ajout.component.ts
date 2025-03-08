import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-ajout',
  templateUrl: './form-ajout.component.html',
  styleUrls: ['./form-ajout.component.css']
})
export class FormAjoutComponent implements OnInit {
  
  formR!:FormGroup
  constructor(private resService:ServiceService,private router:Router) { }
  ngOnInit(): void {
  this.formR = new FormGroup({
    id: new FormControl(''),
    nom: new FormControl(''),
    matF: new FormControl(''),
    status: new FormControl(false, Validators.requiredTrue)
  });
  }
  get status(){
    return this.formR.get('status')
  }
  add()
{
  this.resService.addResidence(this.formR.value).subscribe(()=>{
    console.log('added!')
    this.router.navigate(['/listAgence'])
})
}
}
