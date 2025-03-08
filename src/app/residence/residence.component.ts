import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Agence } from 'src/core/models/agence';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent implements OnInit {

  listServiceResidence: Agence[]=[]

  constructor(private resService:ServiceService) { }

  ngOnInit(): void {
    this.resService.getallResidence().subscribe((data)=>{
      this.listServiceResidence=data
      console.log(this.listServiceResidence)
     })
  }

  listResidences:Agence[]=[
    {id:1,"matF": 2,"nom":"Borj Cedria",status:true},
    {id:2,"matF": 5,"nom":"Borj Cedria",status:false},
    {id:3,"matF": 78,"nom":"Borj Cedria",status:true},
    {id:4,"matF": 66,"nom":"Borj Cedria",status:false},
    ];

    deleteResidence(id:any){
      this.resService.deleteResidence(id).subscribe(()=>{
      console.log("agence deleted")
      this.ngOnInit() //trefrechi page zeda
      })
      
      }

}
