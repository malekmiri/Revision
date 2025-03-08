import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { Agence } from 'src/core/models/agence';

@Component({
  selector: 'app-details-residence',
  templateUrl: './details-residence.component.html',
  styleUrls: ['./details-residence.component.css']
})
export class DetailsResidenceComponent implements OnInit {
 id!:number
 listRes:Agence=new Agence

  constructor(private act:ActivatedRoute,private resServ:ServiceService) { }

  ngOnInit(): void {
    this.id=this.act.snapshot.params['id']  
    this.resServ.getResidence(this.id).subscribe((data)=>{
      this.listRes=data

    }
    )
  }

}
