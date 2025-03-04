import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Residence } from 'src/core/models/residence';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent implements OnInit {

  listServiceResidence: Residence[]=[]

  constructor(private resService:ServiceService) { }

  ngOnInit(): void {
    this.resService.getallResidence().subscribe((data)=>{
      this.listServiceResidence=data
      console.log(this.listServiceResidence)
     })
  }

  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",status: "Disponible"},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra", status:"Disponible" },
    {id:3,"name": "El Arij","address":"Rades",status:"Vendu"},
    {id:4,"name": "El Anber","address":"inconnu",status: "En Construction"}
    ];

    deleteResidence(id:any){
      this.resService.deleteResidence(id).subscribe(()=>{
      console.log("residence deleted")
      this.ngOnInit() //trefrechi page zeda
      })
      
      }

}
