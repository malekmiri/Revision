import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from 'src/core/models/residence';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-update-residence',
  templateUrl: './update-residence.component.html',
  styleUrls: ['./update-residence.component.css']
})
export class UpdateResidenceComponent implements OnInit {
  formR!:FormGroup
  idupdate!:number
  listres:Residence=new Residence
  constructor(private act:ActivatedRoute, private ressService:ServiceService, private router:Router) { }


    ngOnInit(): void {
      this.idupdate= this.act.snapshot.params['id']
      this.formR=new FormGroup({
        id:new FormControl('',[Validators.required,Validators.minLength(3)]),
        name:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z]/)]),
        address:new FormControl('',[Validators.required,Validators.maxLength(10)]),
        status:new FormControl('',[Validators.required,Validators.pattern(/^disponible$/)]),
    
      })
      this.ressService.getResidence(this.idupdate).subscribe((data)=>{
        this.listres=data
        console.log(this.listres)
        this.formR.patchValue(this.listres as any)
    
      })
  }
  get status(){
    return this.formR.get('status')
  }
  update(){
    this.ressService.updateResidence(this.formR.value,this.idupdate).subscribe(()=>{
    this.router.navigate(['/residence'])
    })
  }
}

